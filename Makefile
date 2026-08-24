.DEFAULT_GOAL := help

NPM ?= npm
PORT ?= 3000

.PHONY: help install dev start build serve clear

help: ## Show available commands
	@printf "Usage: make <target>\n\n"
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install documentation site dependencies
	$(NPM) install

dev: ## Start Docusaurus live development server
	$(NPM) run dev

start: dev ## Alias for dev

build: ## Build production static site
	$(NPM) run build

serve: ## Preview production build locally
	$(NPM) run serve

clear: ## Clear Docusaurus build cache
	$(NPM) run clear
