# Étape 1 : Build de l'app Next.js
FROM node:22-slim AS builder

# Répertoire de travail
WORKDIR /app

# Installer pnpm globalement
RUN npm install -g pnpm

# Copier les fichiers de dépendances en premier (pour le cache)
COPY package.json pnpm-lock.yaml ./ 

# Installer les dépendances avec pnpm
RUN pnpm install --frozen-lockfile

# Copier le reste du projet
COPY . .

# Build de l'app Next.js
RUN pnpm run build

# Étape 2 : Image finale, plus légère
FROM node:22-slim

WORKDIR /app

# Installer pnpm globalement dans l'image finale
RUN npm install -g pnpm

# Copier uniquement les fichiers nécessaires à l'exécution
COPY --from=builder /app ./ 

# Exposer le port par défaut de Next.js
EXPOSE 3000

# Lancer l'app
CMD ["pnpm", "start"]
