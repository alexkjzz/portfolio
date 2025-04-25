# Étape 1 : Construction de l'application Next.js
FROM node:18-alpine AS builder

# Définition du répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'installation des dépendances
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install --frozen-lockfile

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Serveur Nginx pour la distribution statique
FROM nginx:alpine

# Copier les fichiers Next.js générés dans le dossier web de Nginx
COPY --from=builder /app/.next /usr/share/nginx/html

# Copier la configuration personnalisée de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
