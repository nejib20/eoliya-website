# Makefile pour EOLIYA Ingénierie
# Auteur: Nejib Aloui
# Simplifie les commandes de développement et déploiement

.PHONY: help install setup dev start stop clean build test lint deploy-frontend deploy-backend deploy docker-build docker-up docker-down docker-logs backup

# Variables
FRONTEND_DIR = frontend
BACKEND_DIR = backend
DOCKER_COMPOSE = docker-compose

# Couleurs pour les messages
BLUE = \033[0;34m
GREEN = \033[0;32m
YELLOW = \033[1;33m
NC = \033[0m # No Color

help: ## Afficher l'aide
	@echo "$(BLUE)EOLIYA Ingénierie - Commandes disponibles$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""

install: ## Installer toutes les dépendances
	@echo "$(BLUE)Installation des dépendances...$(NC)"
	@if [ -d "$(FRONTEND_DIR)" ]; then \
		cd $(FRONTEND_DIR) && npm install; \
		echo "$(GREEN)✓ Dépendances frontend installées$(NC)"; \
	fi
	@if [ -d "$(BACKEND_DIR)" ]; then \
		cd $(BACKEND_DIR) && npm install; \
		echo "$(GREEN)✓ Dépendances backend installées$(NC)"; \
	fi

setup: ## Configuration initiale de l'environnement
	@echo "$(BLUE)Configuration de l'environnement...$(NC)"
	@chmod +x scripts/*.sh
	@./scripts/setup-local.sh

dev-frontend: ## Démarrer le frontend en mode développement
	@echo "$(BLUE)Démarrage du frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run dev

dev-backend: ## Démarrer le backend en mode développement
	@echo "$(BLUE)Démarrage du backend...$(NC)"
	@cd $(BACKEND_DIR) && npm run develop

dev: ## Démarrer frontend et backend (nécessite 2 terminaux)
	@echo "$(YELLOW)Ouvrez 2 terminaux:$(NC)"
	@echo "Terminal 1: make dev-backend"
	@echo "Terminal 2: make dev-frontend"

start: docker-up ## Alias pour docker-up

stop: docker-down ## Alias pour docker-down

clean: ## Nettoyer les fichiers de build
	@echo "$(BLUE)Nettoyage...$(NC)"
	@if [ -d "$(FRONTEND_DIR)" ]; then \
		cd $(FRONTEND_DIR) && rm -rf .next node_modules; \
	fi
	@if [ -d "$(BACKEND_DIR)" ]; then \
		cd $(BACKEND_DIR) && rm -rf .tmp .cache build node_modules; \
	fi
	@echo "$(GREEN)✓ Nettoyage terminé$(NC)"

build-frontend: ## Construire le frontend
	@echo "$(BLUE)Construction du frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run build

build-backend: ## Construire le backend
	@echo "$(BLUE)Construction du backend...$(NC)"
	@cd $(BACKEND_DIR) && npm run build

build: build-frontend build-backend ## Construire frontend et backend

test-frontend: ## Exécuter les tests frontend
	@echo "$(BLUE)Tests frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run test

test-backend: ## Exécuter les tests backend
	@echo "$(BLUE)Tests backend...$(NC)"
	@cd $(BACKEND_DIR) && npm run test || echo "$(YELLOW)Pas de tests configurés$(NC)"

test: test-frontend test-backend ## Exécuter tous les tests

lint-frontend: ## Linter le frontend
	@echo "$(BLUE)Linting frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run lint

lint-backend: ## Linter le backend
	@echo "$(BLUE)Linting backend...$(NC)"
	@cd $(BACKEND_DIR) && npm run lint || echo "$(YELLOW)Pas de linter configuré$(NC)"

lint: lint-frontend lint-backend ## Linter tout le code

type-check: ## Vérifier les types TypeScript
	@echo "$(BLUE)Vérification des types...$(NC)"
	@cd $(FRONTEND_DIR) && npm run type-check

deploy-frontend: ## Déployer le frontend sur Vercel
	@echo "$(BLUE)Déploiement frontend sur Vercel...$(NC)"
	@cd $(FRONTEND_DIR) && vercel --prod

deploy-backend: ## Déployer le backend sur Railway
	@echo "$(BLUE)Déploiement backend sur Railway...$(NC)"
	@cd $(BACKEND_DIR) && railway up

deploy: ## Déployer frontend et backend
	@./scripts/deploy-production.sh

docker-build: ## Construire les images Docker
	@echo "$(BLUE)Construction des images Docker...$(NC)"
	@$(DOCKER_COMPOSE) build

docker-up: ## Démarrer les services Docker
	@echo "$(BLUE)Démarrage des services Docker...$(NC)"
	@$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)✓ Services démarrés$(NC)"
	@echo ""
	@echo "Frontend: http://localhost:3000"
	@echo "Backend:  http://localhost:1337"
	@echo "Admin:    http://localhost:1337/admin"

docker-down: ## Arrêter les services Docker
	@echo "$(BLUE)Arrêt des services Docker...$(NC)"
	@$(DOCKER_COMPOSE) down

docker-restart: ## Redémarrer les services Docker
	@$(DOCKER_COMPOSE) restart

docker-logs: ## Afficher les logs Docker
	@$(DOCKER_COMPOSE) logs -f

docker-ps: ## Afficher l'état des conteneurs
	@$(DOCKER_COMPOSE) ps

docker-clean: ## Nettoyer Docker (conteneurs, volumes, images)
	@echo "$(YELLOW)Attention: Ceci va supprimer tous les conteneurs, volumes et images$(NC)"
	@read -p "Continuer? (y/n) " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		$(DOCKER_COMPOSE) down -v --rmi all; \
		echo "$(GREEN)✓ Nettoyage terminé$(NC)"; \
	fi

backup-db: ## Sauvegarder la base de données
	@echo "$(BLUE)Backup de la base de données...$(NC)"
	@mkdir -p backups
	@docker exec eoliya-postgres pg_dump -U strapi strapi > backups/backup-$(shell date +%Y%m%d-%H%M%S).sql
	@echo "$(GREEN)✓ Backup créé dans backups/$(NC)"

restore-db: ## Restaurer la base de données (BACKUP_FILE=path/to/backup.sql)
	@if [ -z "$(BACKUP_FILE)" ]; then \
		echo "$(YELLOW)Usage: make restore-db BACKUP_FILE=backups/backup-20240101.sql$(NC)"; \
		exit 1; \
	fi
	@echo "$(BLUE)Restauration de la base de données...$(NC)"
	@cat $(BACKUP_FILE) | docker exec -i eoliya-postgres psql -U strapi strapi
	@echo "$(GREEN)✓ Restauration terminée$(NC)"

status: ## Afficher le statut des services
	@echo "$(BLUE)Statut des services:$(NC)"
	@echo ""
	@echo "$(YELLOW)Docker:$(NC)"
	@$(DOCKER_COMPOSE) ps || echo "Docker non démarré"
	@echo ""
	@echo "$(YELLOW)URLs:$(NC)"
	@echo "Frontend: http://localhost:3000"
	@echo "Backend:  http://localhost:1337"
	@echo "Admin:    http://localhost:1337/admin"
	@echo "PgAdmin:  http://localhost:5050"

logs-frontend: ## Logs du frontend
	@$(DOCKER_COMPOSE) logs -f frontend

logs-backend: ## Logs du backend
	@$(DOCKER_COMPOSE) logs -f backend

logs-db: ## Logs de la base de données
	@$(DOCKER_COMPOSE) logs -f postgres

health: ## Vérifier la santé des services
	@echo "$(BLUE)Vérification de la santé des services...$(NC)"
	@curl -f http://localhost:3000 > /dev/null 2>&1 && echo "$(GREEN)✓ Frontend OK$(NC)" || echo "$(YELLOW)✗ Frontend KO$(NC)"
	@curl -f http://localhost:1337 > /dev/null 2>&1 && echo "$(GREEN)✓ Backend OK$(NC)" || echo "$(YELLOW)✗ Backend KO$(NC)"

git-status: ## Afficher le statut Git
	@git status

git-push: ## Push vers GitHub
	@git push origin main

secrets: ## Générer des secrets pour Strapi
	@echo "$(BLUE)Génération de secrets...$(NC)"
	@echo ""
	@echo "APP_KEYS=$(shell openssl rand -base64 32),$(shell openssl rand -base64 32)"
	@echo "API_TOKEN_SALT=$(shell openssl rand -base64 32)"
	@echo "ADMIN_JWT_SECRET=$(shell openssl rand -base64 32)"
	@echo "TRANSFER_TOKEN_SALT=$(shell openssl rand -base64 32)"
	@echo "JWT_SECRET=$(shell openssl rand -base64 32)"
	@echo "NEXTAUTH_SECRET=$(shell openssl rand -base64 32)"
	@echo ""
	@echo "$(YELLOW)Copiez ces secrets dans vos fichiers .env$(NC)"

.DEFAULT_GOAL := help
