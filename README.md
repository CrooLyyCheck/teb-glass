## WWW – uniwersalny starter (React + Strapi)

Uniwersalny projekt strony internetowej oparty o:

- **frontend**: React + Vite (SPA z routingiem)
- **headless CMS**: Strapi v5 (panel admina w przeglądarce, REST API)
- **baza**: Postgres (przez Docker)

Możesz z niego zbudować dowolny landing / stronę www, edytując wszystko w GUI CMS.

---

## 1. Uruchomienie lokalne (bez Dockera)

### 1.1. CMS (Strapi v5)

```bash
cd cms
npm install
cp .env.example .env   # uzupełnij wymagane klucze (APP_KEYS itd.)
npm run develop        # http://localhost:1337/admin
```

Przy pierwszym uruchomieniu:

- wejdź na `http://localhost:1337/admin`
- załóż konto administratora

W kodzie Strapi jest dodany uniwersalny model:

- **Content type `Page`** (`page`):
  - `title`, `slug`, `seoTitle`, `seoDescription`
  - `sections` – dynamic zone z komponentami:
    - `sections.hero`
    - `sections.content-block`
    - `sections.gallery`
    - `sections.timeline`
    - `sections.faq`

W panelu:

- utwórz kilka wpisów typu **Page**, np.:
  - `home`
  - `o-mnie-2`
  - `studio-fotograficzne`

### 1.2. Frontend (React + Vite)

W drugim terminalu:

```bash
cd .
npm install
echo VITE_CMS_URL=http://localhost:1337 > .env.local
npm run dev           # http://localhost:5173
```

Frontend pobiera teraz treści z CMS:

- dla `/` ładuje `Page` o `slug = home`
- dla `/o-mnie-2` ładuje `Page` o `slug = o-mnie-2`
- dla `/studio-fotograficzne` ładuje `Page` o `slug = studio-fotograficzne`

Istniejące komponenty (`Hero`, `Gallery`, `Timeline` itd.) można stopniowo dostosowywać,
aby czytały dane ze `sections` z CMS – aktualny kod pozwala na łagodne przejście
ze statycznego JSON-a na treści dynamiczne.

---

## 2. Tryb developerski w Dockerze (hot-reload)

```bash
cp cms/.env.example cms/.env   # uzupełnij klucze Strapi
docker compose -f docker-compose.dev.yml up --build
```

Adresy:

- frontend: **http://localhost:5173**
- CMS (Strapi): **http://localhost:1337/admin**
- Postgres: **localhost:5432**

Zmiany w `src/` oraz `cms/` są widoczne natychmiast (hot-reload).

---

## 3. Produkcja w Dockerze

Plik `docker-compose.yml` zakłada użycie gotowych obrazów z GHCR.
W nowym repo (np. `CrooLyyCheck/www`) możesz:

- ustawić budowanie obrazów:
  - `ghcr.io/croolycheck/www:latest` – frontend (z `Dockerfile`)
  - `ghcr.io/croolycheck/www/strapi:latest` – CMS (z `cms/Dockerfile`)
- a następnie uruchamiać:

```bash
docker compose up -d
docker compose pull && docker compose up -d   # aktualizacja
docker compose down
```

Aplikacja będzie dostępna pod: **http://localhost** (frontend), a CMS pod **http://localhost:1337/admin**.

---

## 4. Struktura projektu

```text
src/
├── ui/          tokens.css + global.css
├── hooks/       useFadeIn + useReduceTransparency
├── components/  NavBar, Footer, Hero, Gallery, Bio,
│                Timeline, Accordion, TipsList, ContactSection
└── pages/       Home, OmniePage, StudioPage
cms/
└── src/
    ├── api/page/content-types/page/schema.json        # content type Page
    └── components/sections/*.json                     # komponenty sekcji (hero, gallery, faq, timeline…)
docker-compose*.yml   # dev + prod
Dockerfile*           # build frontend + CMS
```

---

## 5. Utworzenie nowego repo GitHub `CrooLyyCheck/www`

Zakładając, że to repo jest obecnie klonem `teb-glass`:

1. Na GitHubie utwórz puste repo **`CrooLyyCheck/www`**.
2. Lokalnie przygotuj nowy katalog na bazie tego projektu:

   ```bash
   cd c:\Users\crly
   git clone https://github.com/CrooLyyCheck/teb-glass.git www
   cd www
   git remote remove origin
   git remote add origin git@github.com:CrooLyyCheck/www.git
   git push -u origin main
   ```

3. Od tego momentu `www` jest Twoim uniwersalnym starterem:
   - edytujesz treści w panelu Strapi,
   - frontend pobiera strony po `slug` z CMS,
   - całość działa lokalnie lub przez Dockera / dowolny hosting kontenerów.

