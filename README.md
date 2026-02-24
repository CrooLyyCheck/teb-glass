# teb-glass-app

Reimplementacja **teb.croolyy.com** w React z Apple Glass UI.

## Uruchomienie

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # produkcja → ./dist
npm run preview   # podgląd buildu
```

## Deploy (Vercel / Netlify)
Build command: `npm run build` | Output dir: `dist`
Dodaj regułę rewrite SPA: `/* → /index.html`

## Struktura
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
