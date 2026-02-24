FROM node:20-alpine

WORKDIR /app

# Kopiuj zależności i instaluj
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Kopiuj kod źródłowy
COPY . .

# Zbuduj panel admina Strapi
RUN npm run build

ENV NODE_ENV=production
ENV DATABASE_CLIENT=postgres

EXPOSE 1337

CMD ["npm", "run", "start"]
