#!/bin/bash

###############################################################################
# EOLIYA Ingénierie - Script d'installation locale
# Auteur: Nejib Aloui
# Description: Configure l'environnement de développement local complet
###############################################################################

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Fonction pour vérifier les prérequis
check_prerequisites() {
    log_info "Vérification des prérequis..."

    # Vérifier Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js n'est pas installé. Veuillez installer Node.js 20+"
        exit 1
    fi

    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        log_error "Node.js version 20 ou supérieure requise. Version actuelle: $(node -v)"
        exit 1
    fi
    log_success "Node.js $(node -v) détecté"

    # Vérifier npm
    if ! command -v npm &> /dev/null; then
        log_error "npm n'est pas installé"
        exit 1
    fi
    log_success "npm $(npm -v) détecté"

    # Vérifier Docker (optionnel)
    if command -v docker &> /dev/null; then
        log_success "Docker $(docker -v | cut -d' ' -f3 | tr -d ',') détecté"
        DOCKER_AVAILABLE=true
    else
        log_warning "Docker n'est pas installé (optionnel pour le développement local)"
        DOCKER_AVAILABLE=false
    fi
}

# Fonction pour créer les fichiers .env
setup_env_files() {
    log_info "Configuration des fichiers d'environnement..."

    # Frontend .env
    if [ ! -f "frontend/.env.local" ]; then
        log_info "Création du fichier frontend/.env.local..."
        cat > frontend/.env.local << 'EOF'
# Strapi Backend URL
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (optionnel en dev)
NEXT_PUBLIC_GA_ID=

# OpenAI API Key (pour le chatbot IA)
OPENAI_API_KEY=

# Google Calendar API (pour la prise de RDV)
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
GOOGLE_CALENDAR_REDIRECT_URI=http://localhost:3000/api/calendar/callback
EOF
        log_success "Fichier frontend/.env.local créé"
    else
        log_warning "Le fichier frontend/.env.local existe déjà"
    fi

    # Backend .env
    if [ ! -f "backend/.env" ]; then
        log_info "Création du fichier backend/.env..."

        # Générer des secrets aléatoires
        APP_KEYS=$(openssl rand -base64 32)
        API_TOKEN_SALT=$(openssl rand -base64 32)
        ADMIN_JWT_SECRET=$(openssl rand -base64 32)
        TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)
        JWT_SECRET=$(openssl rand -base64 32)

        cat > backend/.env << EOF
# Server
HOST=0.0.0.0
PORT=1337
APP_KEYS=${APP_KEYS}
API_TOKEN_SALT=${API_TOKEN_SALT}
ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
JWT_SECRET=${JWT_SECRET}

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false

# URLs
STRAPI_ADMIN_URL=http://localhost:1337/admin
STRAPI_PUBLIC_URL=http://localhost:1337

# Node environment
NODE_ENV=development
EOF
        log_success "Fichier backend/.env créé avec des secrets générés"
    else
        log_warning "Le fichier backend/.env existe déjà"
    fi

    # Root .env pour Docker Compose
    if [ ! -f ".env" ]; then
        log_info "Création du fichier .env racine..."
        cat > .env << 'EOF'
# Docker Compose Environment Variables

# PostgreSQL
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_PORT=5432

# Node Environment
NODE_ENV=development

# Strapi URLs
STRAPI_PUBLIC_URL=http://localhost:1337

# Next.js URLs
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# PgAdmin (optionnel)
PGADMIN_EMAIL=admin@eoliya.com
PGADMIN_PASSWORD=admin
EOF
        log_success "Fichier .env racine créé"
    else
        log_warning "Le fichier .env existe déjà"
    fi
}

# Fonction pour installer les dépendances
install_dependencies() {
    log_info "Installation des dépendances..."

    # Frontend
    if [ -f "frontend/package.json" ]; then
        log_info "Installation des dépendances frontend..."
        cd frontend
        npm install
        cd ..
        log_success "Dépendances frontend installées"
    else
        log_warning "frontend/package.json non trouvé"
    fi

    # Backend
    if [ -f "backend/package.json" ]; then
        log_info "Installation des dépendances backend..."
        cd backend
        npm install
        cd ..
        log_success "Dépendances backend installées"
    else
        log_warning "backend/package.json non trouvé"
    fi
}

# Fonction pour démarrer avec Docker
start_with_docker() {
    log_info "Démarrage de l'environnement avec Docker..."

    # Construire les images
    log_info "Construction des images Docker..."
    docker-compose build

    # Démarrer les services
    log_info "Démarrage des services..."
    docker-compose up -d

    # Attendre que les services soient prêts
    log_info "Attente du démarrage des services (30 secondes)..."
    sleep 30

    log_success "Environnement Docker démarré!"
    log_info "Frontend: http://localhost:3000"
    log_info "Backend: http://localhost:1337"
    log_info "PgAdmin: http://localhost:5050 (avec --profile tools)"
}

# Fonction pour démarrer sans Docker
start_without_docker() {
    log_warning "Mode sans Docker - vous devez avoir PostgreSQL installé localement"

    read -p "Avez-vous PostgreSQL installé et configuré ? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_error "Veuillez installer PostgreSQL ou utiliser Docker"
        exit 1
    fi

    log_info "Pour démarrer manuellement:"
    echo ""
    echo "Terminal 1 - Backend:"
    echo "  cd backend && npm run develop"
    echo ""
    echo "Terminal 2 - Frontend:"
    echo "  cd frontend && npm run dev"
    echo ""
}

# Fonction principale
main() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "  EOLIYA Ingénierie - Configuration de l'environnement"
    echo "═══════════════════════════════════════════════════════════"
    echo ""

    # Étape 1: Vérifier les prérequis
    check_prerequisites

    # Étape 2: Créer les fichiers .env
    setup_env_files

    # Étape 3: Installer les dépendances
    install_dependencies

    # Étape 4: Choisir le mode de démarrage
    echo ""
    if [ "$DOCKER_AVAILABLE" = true ]; then
        read -p "Voulez-vous démarrer l'environnement avec Docker ? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            start_with_docker
        else
            start_without_docker
        fi
    else
        start_without_docker
    fi

    echo ""
    log_success "Configuration terminée!"
    echo ""
    echo "Pour démarrer avec Docker:"
    echo "  docker-compose up -d"
    echo ""
    echo "Pour démarrer sans Docker:"
    echo "  cd backend && npm run develop    # Terminal 1"
    echo "  cd frontend && npm run dev       # Terminal 2"
    echo ""
    echo "URLs:"
    echo "  Frontend: http://localhost:3000"
    echo "  Backend: http://localhost:1337"
    echo "  Backend Admin: http://localhost:1337/admin"
    echo ""
}

# Exécuter le script
main
