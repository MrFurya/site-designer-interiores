# Script para deploy no GitHub Pages

# Gerar build
npm run build

# Configurar git se necessário
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@email.com"

# Inicializar repositório se não existir
if (!(Test-Path ".git")) {
    git init
    git add .
    git commit -m "Initial commit"
}

# Instalar gh-pages se não estiver instalado
npm install --save-dev gh-pages

# Deploy para GitHub Pages
npx gh-pages -d build

Write-Host "Deploy concluído! Seu site estará disponível em breve em: https://seuusuario.github.io/nome-do-repositorio"