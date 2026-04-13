import { useState } from 'react';
import { civilizations } from './data/civs';
import { counterMatchups } from './data/counterMatchups';
import CivGrid from './components/CivGrid';
import CivDetail from './components/CivDetail';
import BuildOrderView from './components/BuildOrderView';
import CounterMatchupView from './components/CounterMatchupView';
import HotkeysPage from './components/HotkeysPage';
import MapGuidePage from './components/MapGuidePage';
import GameAdvisorPage from './components/GameAdvisorPage';
import WelcomePage from './components/WelcomePage';
import './App.css';

type Page = 'welcome' | 'civilizations' | 'advisor' | 'maps' | 'hotkeys';
type CivTab = 'build-orders' | 'counter-matchups';

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'civilizations', label: 'Civilizations', icon: '🏰' },
  { id: 'advisor',       label: 'Game Advisor',  icon: '🎯' },
  { id: 'maps',          label: 'Map Guide',     icon: '🗺️' },
  { id: 'hotkeys',       label: 'Hotkeys',       icon: '⌨️' },
];

export default function App() {
  const [activePage,    setActivePage]    = useState<Page>('welcome');
  const [selectedCivId, setSelectedCivId] = useState<string | null>(null);
  const [activeTab,     setActiveTab]     = useState<CivTab>('build-orders');

  const selectedCiv  = civilizations.find((c) => c.id === selectedCivId) ?? null;
  const civMatchup   = counterMatchups.find((m) => m.civId === selectedCivId);
  const accentColor      = selectedCiv?.accentColor ?? '#c9a84c';

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-inner">
          <button className="header-title-group" onClick={() => setActivePage('welcome')}>
            <span className="header-emblem">⚔️</span>
            <div>
              <h1 className="header-title">AoE4 Guide</h1>
              <p className="header-subtitle">Build Orders &amp; Counter Matchups</p>
            </div>
          </button>

          {/* Top nav */}
          <nav className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-btn ${activePage !== 'welcome' && activePage === item.id ? 'nav-btn-active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                <span className="nav-btn-icon">{item.icon}</span>
                <span className="nav-btn-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Page: Welcome ── */}
      {activePage === 'welcome' && (
        <main className="full-page">
          <WelcomePage onNavigate={setActivePage} />
        </main>
      )}

      {/* ── Page: Civilizations ── */}
      {activePage === 'civilizations' && (
        <div className="app-body">
          <aside className="sidebar">
            <h2 className="sidebar-title">Choose Civilization</h2>
            <CivGrid
              civs={civilizations}
              selectedCivId={selectedCivId}
              onSelect={(id) => { setSelectedCivId(id); setActiveTab('build-orders'); }}
            />
          </aside>

          <main className="main-content">
            {!selectedCiv ? (
              <div className="welcome-screen">
                <div className="welcome-icon">⚔️</div>
                <h2 className="welcome-title">Select a Civilization</h2>
                <p className="welcome-desc">
                  Choose a civilization from the left panel to explore its build orders,
                  counter matchups, and strategic tips.
                </p>
                <div className="welcome-features">
                  <div className="feature-card">
                    <span className="feature-icon">📜</span>
                    <span>Step-by-step Build Orders</span>
                  </div>
                  <div className="feature-card">
                    <span className="feature-icon">🛡️</span>
                    <span>Counter Matchup Guides</span>
                  </div>
                  <div className="feature-card">
                    <span className="feature-icon">💡</span>
                    <span>Pro Tips &amp; Strategies</span>
                  </div>
                </div>
                <p className="welcome-nav-hint">
                  Or explore the <button className="inline-nav-btn" onClick={() => setActivePage('advisor')}>🎯 Game Advisor</button>,{' '}
                  <button className="inline-nav-btn" onClick={() => setActivePage('maps')}>🗺️ Map Guide</button>, and{' '}
                  <button className="inline-nav-btn" onClick={() => setActivePage('hotkeys')}>⌨️ Hotkeys</button> sections above.
                </p>
              </div>
            ) : (
              <>
                <CivDetail civ={selectedCiv} />

                <div className="tabs">
                  <button
                    className={`tab-btn ${activeTab === 'build-orders' ? 'tab-btn-active' : ''}`}
                    onClick={() => setActiveTab('build-orders')}
                    style={activeTab === 'build-orders' ? { borderBottomColor: accentColor, color: accentColor } : {}}
                  >
                    📜 Build Orders
                    <span className="tab-count" style={{ background: accentColor + '33', color: accentColor }}>Live</span>
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'counter-matchups' ? 'tab-btn-active' : ''}`}
                    onClick={() => setActiveTab('counter-matchups')}
                    style={activeTab === 'counter-matchups' ? { borderBottomColor: accentColor, color: accentColor } : {}}
                  >
                    🛡️ Counter Matchups
                    {civMatchup && (
                      <span className="tab-count" style={{ background: accentColor + '33', color: accentColor }}>
                        {civMatchup.matchups.length}
                      </span>
                    )}
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 'build-orders' ? (
                    <BuildOrderView civId={selectedCivId!} accentColor={accentColor} />
                  ) : (
                    <CounterMatchupView matchup={civMatchup} accentColor={accentColor} />
                  )}
                </div>
              </>
            )}
          </main>
        </div>
      )}

      {/* ── Page: Game Advisor ── */}
      {activePage === 'advisor' && (
        <main className="full-page">
          <GameAdvisorPage />
        </main>
      )}

      {/* ── Page: Maps ── */}
      {activePage === 'maps' && (
        <main className="full-page">
          <MapGuidePage />
        </main>
      )}

      {/* ── Page: Hotkeys ── */}
      {activePage === 'hotkeys' && (
        <main className="full-page">
          <HotkeysPage />
        </main>
      )}
    </div>
  );
}
