FROM node:20-alpine

WORKDIR /app

# Instalacja narzędzi do kompilacji natywnych modułów (better-sqlite3)
RUN apk add --no-cache python3 make g++

# Kopiuj zależności i instaluj
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Kopiuj kod źródłowy
COPY . .

# Zmienne wymagane przez Strapi v5 podczas budowania panelu admina.
# Są to wartości zastępcze – prawdziwe sekrety są dostarczane
# w runtime przez env_file / environment w docker-compose.
ENV NODE_ENV=production
ENV DATABASE_CLIENT=postgres
ENV APP_KEYS=build_placeholder_1,build_placeholder_2,build_placeholder_3,build_placeholder_4
ENV API_TOKEN_SALT=build_placeholder
ENV ADMIN_JWT_SECRET=build_placeholder
ENV TRANSFER_TOKEN_SALT=build_placeholder
ENV JWT_SECRET=build_placeholder

# Zbuduj panel admina Strapi
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
