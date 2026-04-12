# ⚔️ AoE4 Guide — Build Orders & Counter Matchups

A comprehensive Age of Empires IV reference guide built as a **Power Apps Code App** with React, TypeScript, and Vite. Covers all 22 civilizations (including DLCs), build orders, counter matchups, hotkeys, map strategies, and an AI-style Game Advisor.

---

## Features

- **22 Civilizations** — All base game civs + The Sultans Ascend, Knights of Cross & Rose, and Dynasties of the East DLCs, with variant badges and DLC grouping
- **Build Orders** — Filterable by civilization and playstyle (Aggressive / Economic / Hybrid)
- **Counter Matchups** — Head-to-head matchup data with favored/unfavored ratings and counter tips
- **Game Advisor** — Pick your civ, enemy civ, and map → get a scored recommendation with the best build order, counter tips, and map-specific strategy
- **Hotkeys Reference** — All essential AoE4 hotkeys across Economy, Military, Camera, and Production categories
- **Map Guide** — 10 maps with aggression level, sheep spawn info, key features, how-to-play, and best civilizations

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Deployment | Power Apps Code App |
| Styling | Pure CSS with CSS custom properties |
| Fonts | Google Fonts — Cinzel (headings) + Inter (body) |
| Routing | Page-level state (no router dependency) |
| Data | Static TypeScript data files |

---

## Getting Started

This app is built as a **Power Apps Code App**. To run it locally and deploy it, follow the official Microsoft guide:

📖 [Create a Power Apps Code App from scratch](https://learn.microsoft.com/en-us/power-apps/developer/code-apps/how-to/create-an-app-from-scratch)

### Local development

```bash
# Clone the repository
git clone https://github.com/Bjoern13-tech/aoe4-guide.git
cd aoe4-guide/my-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open the local URL shown in your terminal (e.g. `http://localhost:5173`).

```bash
# Production build
npm run build
```

---

## Project Structure

```
my-app/
├── src/
│   ├── components/       # Page and UI components
│   │   ├── CivGrid.tsx           # DLC-grouped civilization sidebar
│   │   ├── CivDetail.tsx         # Civilization detail panel
│   │   ├── BuildOrderView.tsx    # Build orders with playstyle filter
│   │   ├── CounterMatchupView.tsx
│   │   ├── GameAdvisorPage.tsx   # 3-step advisor UI
│   │   ├── HotkeysPage.tsx
│   │   └── MapGuidePage.tsx
│   ├── data/             # All game data as TypeScript files
│   │   ├── types.ts              # Shared interfaces
│   │   ├── civs.ts               # 22 civilizations
│   │   ├── buildOrders.ts        # Build order steps per civ
│   │   ├── counterMatchups.ts    # Matchup data
│   │   ├── hotkeys.ts            # Hotkey definitions
│   │   └── maps.ts               # Map data
│   ├── utils/
│   │   └── advisorLogic.ts       # Game Advisor scoring algorithm
│   ├── App.tsx           # Root component + page routing
│   ├── App.css           # Component styles
│   └── index.css         # Design system + global styles
└── index.html            # OG meta tags + favicon
```

---

## Civilizations Covered

**Base Game (10):** English, French, Holy Roman Empire, Mongols, Chinese, Abbasid Dynasty, Delhi Sultanate, Rus, Ottomans, Malians

**The Sultans Ascend:** Byzantines, Japanese, Ayyubids, Order of the Dragon, Zhu Xi's Legacy, Jeanne d'Arc

**Knights of Cross & Rose:** House of Lancaster, Knights Templar

**Dynasties of the East:** Golden Horde, Macedonian Dynasty, Sengoku Daimyo, Tughlaq Dynasty

---

## Game Advisor Algorithm

The advisor scores every build order for the selected civilization using:

- **Base score** — 50 points
- **Matchup favorability** — ±20 based on counter matchup data vs. the enemy civ
- **Map compatibility** — ±15 based on map aggression level vs. build playstyle
- **Civ identity alignment** — +10 if the build matches the civ's natural playstyle
- **Difficulty penalty** — −3 (intermediate) or −8 (advanced)

Returns the top-scored build plus up to 2 alternatives, with tailored counter tips and map advice.

---

## License

MIT — free to use, modify, and share.

---

*Built as a personal learning project and portfolio demo. Not affiliated with Microsoft or Relic Entertainment.*
