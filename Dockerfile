# Étape 1 : Build de l'app Next.js
FROM node:18-alpine AS builder

# Répertoire de travail
WORKDIR /app

# Copier le fichier de dépendances en premier (optimiser le cache)
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Build de l'app Next.js
RUN npm run build

# Étape 2 : Image finale, plus légère
FROM nginx:alpine

# Copier les fichiers générés par Next.js dans le dossier où Nginx peut les servir
COPY --from=builder /app/.next /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
