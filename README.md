# teb-glass-app

Reimplementacja **teb.croolyy.com** w React z Apple Glass UI.

## Uruchomienie lokalne

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # produkcja → ./dist
npm run preview   # podgląd buildu
```

## Docker

### Produkcja — obraz z GHCR

Obraz jest automatycznie budowany i publikowany na [ghcr.io/croolycheck/teb-glass](https://github.com/CrooLyyCheck/teb-glass/pkgs/container/teb-glass) przy każdym pushu do `main`.

```bash
# Pobierz i uruchom (port 80)
docker compose up -d

# Aktualizacja do najnowszego obrazu
docker compose pull && docker compose up -d

# Zatrzymanie
docker compose down
```

Aplikacja dostępna pod: **http://localhost**

### Tryb developerski (hot-reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

Aplikacja dostępna pod: **http://localhost:5173**  
Zmiany w `src/` są widoczne natychmiast bez przebudowywania obrazu.

### Pliki Docker

| Plik | Opis |
|---|---|
| `Dockerfile` | Multi-stage build: Node 20 → Nginx 1.25 |
| `Dockerfile.dev` | Dev server Vite z hot-reload |
| `docker-compose.yml` | Produkcja — używa obrazu z GHCR |
| `docker-compose.dev.yml` | Development — buduje lokalnie |
| `nginx.conf` | Konfiguracja Nginx (SPA routing) |
| `.dockerignore` | Pliki wykluczone z obrazu |

## Deploy (Vercel / Netlify)
Build command: `npm run build` | Output dir: `dist`  
Dodaj regułę rewrite SPA: `/* → /index.html`

## Struktura projektu
```
src/
├── ui/          tokens.css + global.css
├── hooks/       useFadeIn + useReduceTransparency
├── components/  NavBar, Footer, Hero, Gallery, Bio,
│                Timeline, Accordion, TipsList, ContactSection
└── pages/       Home, OmniePage, StudioPage
spec/            content-model.json (jedyne źródło treści)
artifacts/       sitemap.json, structure.json × 3
```

## Tryb bez przezroczystości
Ikona ◼/◻ w navbarze. Persystuje w localStorage.  
Respektuje preferencję systemową `prefers-reduced-transparency`.
