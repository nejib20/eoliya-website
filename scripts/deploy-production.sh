#!/bin/bash

###############################################################################
# EOLIYA Ingénierie - Script de déploiement production
# Auteur: Nejib Aloui
# Description: Guide et vérifie le déploiement en production
###############################################################################

set -e

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
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

log_step() {
    echo -e "${CYAN}[ÉTAPE]${NC} $1"
}

# Fonction pour vérifier les prérequis
check_prerequisites() {
    log_step "Vérification des prérequis..."

    # Vérifier Git
    if ! command -v git &> /dev/null; then
        log_error "Git n'est pas installé"
        exit 1
    fi

    # Vérifier que nous sommes dans un repo git
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log_error "Ce n'est pas un dépôt Git"
        exit 1
    fi

    # Vérifier la branche
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" != "main" ]; then
        log_warning "Vous n'êtes pas sur la branche 'main' (branche actuelle: $CURRENT_BRANCH)"
        read -p "Voulez-vous continuer ? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    # Vérifier qu'il n'y a pas de changements non commités
    if ! git diff-index --quiet HEAD --; then
        log_error "Il y a des changements non commités"
        git status --short
        exit 1
    fi

    # Vérifier Vercel CLI
    if ! command -v vercel &> /dev/null; then
        log_warning "Vercel CLI n'est pas installé"
        read -p "Voulez-vous l'installer ? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npm install -g vercel
        else
            log_error "Vercel CLI requis pour le déploiement"
            exit 1
        fi
    fi

    # Vérifier Railway CLI
    if ! command -v railway &> /dev/null; then
        log_warning "Railway CLI n'est pas installé"
        read -p "Voulez-vous l'installer ? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npm install -g @railway/cli
        else
            log_error "Railway CLI requis pour le déploiement"
            exit 1
        fi
    fi

    log_success "Prérequis vérifiés"
}

# Fonction pour exécuter les tests
run_tests() {
    log_step "Exécution des tests..."

    # Tests frontend
    if [ -f "frontend/package.json" ]; then
        log_info "Tests frontend..."
        cd frontend
        npm run lint || log_warning "Lint frontend échoué"
        npm run type-check || log_warning "Type check frontend échoué"
        npm run test || log_warning "Tests frontend échoués"
        cd ..
    fi

    # Tests backend
    if [ -f "backend/package.json" ]; then
        log_info "Tests backend..."
        cd backend
        npm run lint || log_warning "Lint backend échoué"
        npm run test || log_warning "Tests backend échoués"
        cd ..
    fi

    log_success "Tests terminés"
}

# Fonction pour construire les projets
build_projects() {
    log_step "Construction des projets..."

    # Build frontend
    if [ -f "frontend/package.json" ]; then
        log_info "Construction du frontend..."
        cd frontend
        npm run build
        cd ..
        log_success "Frontend construit"
    fi

    # Build backend
    if [ -f "backend/package.json" ]; then
        log_info "Construction du backend..."
        cd backend
        npm run build
        cd ..
        log_success "Backend construit"
    fi
}

# Fonction pour déployer le backend
deploy_backend() {
    log_step "Déploiement du backend sur Railway..."

    read -p "Avez-vous configuré Railway ? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_warning "Veuillez configurer Railway d'abord"
        echo ""
        echo "1. Créez un compte sur railway.app"
        echo "2. Créez un nouveau projet"
        echo "3. Ajoutez PostgreSQL comme service"
        echo "4. Configurez les variables d'environnement"
        echo "5. Exécutez: railway login"
        echo ""
        return
    fi

    cd backend

    # Vérifier la connexion Railway
    if ! railway whoami &> /dev/null; then
        log_error "Non connecté à Railway. Exécutez: railway login"
        cd ..
        return
    fi

    # Déployer
    log_info "Déploiement en cours..."
    railway up

    log_success "Backend déployé sur Railway"
    cd ..
}

# Fonction pour déployer le frontend
deploy_frontend() {
    log_step "Déploiement du frontend sur Vercel..."

    read -p "Avez-vous configuré Vercel ? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_warning "Veuillez configurer Vercel d'abord"
        echo ""
        echo "1. Créez un compte sur vercel.com"
        echo "2. Installez Vercel CLI: npm i -g vercel"
        echo "3. Connectez-vous: vercel login"
        echo "4. Liez le projet: vercel link"
        echo ""
        return
    fi

    cd frontend

    # Vérifier la connexion Vercel
    if ! vercel whoami &> /dev/null; then
        log_error "Non connecté à Vercel. Exécutez: vercel login"
        cd ..
        return
    fi

    # Déployer
    log_info "Déploiement en cours..."
    vercel --prod

    log_success "Frontend déployé sur Vercel"
    cd ..
}

# Fonction pour configurer le domaine
configure_domain() {
    log_step "Configuration du domaine eoliya.com..."

    echo ""
    echo "Configuration DNS requise chez Enom:"
    echo ""
    echo "Pour le frontend (Vercel):"
    echo "  Type: CNAME"
    echo "  Nom: @"
    echo "  Valeur: cname.vercel-dns.com"
    echo ""
    echo "  Type: CNAME"
    echo "  Nom: www"
    echo "  Valeur: cname.vercel-dns.com"
    echo ""
    echo "Pour le backend (Railway):"
    echo "  Type: CNAME"
    echo "  Nom: api"
    echo "  Valeur: [votre-projet].up.railway.app"
    echo ""
    echo "Puis dans Vercel:"
    echo "  1. Allez dans Project Settings > Domains"
    echo "  2. Ajoutez eoliya.com et www.eoliya.com"
    echo ""
    echo "Et dans Railway:"
    echo "  1. Allez dans Settings > Networking"
    echo "  2. Ajoutez le domaine personnalisé api.eoliya.com"
    echo ""
}

# Fonction pour vérifier le déploiement
verify_deployment() {
    log_step "Vérification du déploiement..."

    read -p "URL du frontend: " FRONTEND_URL
    read -p "URL du backend: " BACKEND_URL

    # Vérifier le frontend
    log_info "Vérification du frontend: $FRONTEND_URL"
    if curl -f -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL" | grep -q "200"; then
        log_success "Frontend accessible"
    else
        log_error "Frontend non accessible"
    fi

    # Vérifier le backend
    log_info "Vérification du backend: $BACKEND_URL/api/_health"
    if curl -f -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/api/_health" | grep -q "200"; then
        log_success "Backend accessible"
    else
        log_warning "Backend non accessible (endpoint health check peut ne pas exister)"
    fi
}

# Fonction pour afficher un récapitulatif
show_summary() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "  Récapitulatif du déploiement"
    echo "═══════════════════════════════════════════════════════════"
    echo ""
    echo "Variables d'environnement requises:"
    echo ""
    echo "VERCEL:"
    echo "  - NEXT_PUBLIC_STRAPI_URL"
    echo "  - NEXT_PUBLIC_SITE_URL"
    echo "  - NEXT_PUBLIC_GA_ID"
    echo "  - OPENAI_API_KEY"
    echo "  - GOOGLE_CALENDAR_CLIENT_ID"
    echo "  - GOOGLE_CALENDAR_CLIENT_SECRET"
    echo "  - GOOGLE_CALENDAR_REDIRECT_URI"
    echo ""
    echo "RAILWAY:"
    echo "  - APP_KEYS"
    echo "  - API_TOKEN_SALT"
    echo "  - ADMIN_JWT_SECRET"
    echo "  - TRANSFER_TOKEN_SALT"
    echo "  - JWT_SECRET"
    echo "  - DATABASE_* (automatique avec PostgreSQL service)"
    echo ""
    echo "Monitoring:"
    echo "  - Vercel Analytics: Activé dans le dashboard"
    echo "  - Railway Logs: railway logs"
    echo "  - Uptime monitoring: UptimeRobot ou similaire"
    echo ""
}

# Fonction principale
main() {
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "  EOLIYA Ingénierie - Déploiement Production"
    echo "═══════════════════════════════════════════════════════════"
    echo ""

    # Vérifier les prérequis
    check_prerequisites

    # Menu interactif
    while true; do
        echo ""
        echo "Que voulez-vous faire ?"
        echo "1) Exécuter les tests"
        echo "2) Construire les projets"
        echo "3) Déployer le backend (Railway)"
        echo "4) Déployer le frontend (Vercel)"
        echo "5) Configurer le domaine"
        echo "6) Vérifier le déploiement"
        echo "7) Afficher le récapitulatif"
        echo "8) Tout faire (tests + build + deploy)"
        echo "9) Quitter"
        echo ""
        read -p "Votre choix: " choice

        case $choice in
            1)
                run_tests
                ;;
            2)
                build_projects
                ;;
            3)
                deploy_backend
                ;;
            4)
                deploy_frontend
                ;;
            5)
                configure_domain
                ;;
            6)
                verify_deployment
                ;;
            7)
                show_summary
                ;;
            8)
                run_tests
                build_projects
                deploy_backend
                deploy_frontend
                verify_deployment
                show_summary
                ;;
            9)
                log_info "Au revoir!"
                exit 0
                ;;
            *)
                log_error "Choix invalide"
                ;;
        esac
    done
}

# Exécuter le script
main
