# Étape 1 : Construction de l'application Next.js
FROM node:18-alpine AS builder

# Répertoire de travail
WORKDIR /app

# Installer pnpm globalement
RUN npm install -g pnpm

# Copier les fichiers de dépendances en premier (optimiser le cache)
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier tout le code source dans l'image
COPY . .

# Construire l'application Next.js pour la production
RUN pnpm run build

# Étape 2 : Serveur Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers générés par Next.js dans le dossier où Nginx peut les servir
COPY --from=builder /app/.next /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
