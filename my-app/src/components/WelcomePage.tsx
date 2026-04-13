type Page = 'civilizations' | 'advisor' | 'maps' | 'hotkeys';

interface Props {
  onNavigate: (page: Page) => void;
}

const features: {
  page: Page;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  stats: string;
}[] = [
  {
    page: 'civilizations',
    icon: '🏰',
    title: 'Civilizations',
    subtitle: 'All 22 Civs + DLCs',
    description:
      'Browse every civilization including all DLC expansions. Explore unique units, strengths, weaknesses, and live community build orders sourced directly from aoe4guides.com.',
    color: '#c9a84c',
    stats: '22 civilizations',
  },
  {
    page: 'advisor',
    icon: '🎯',
    title: 'Game Advisor',
    subtitle: 'Pick Civ · Enemy · Map',
    description:
      'Select your civilization, your opponent, and the map — get a scored build order recommendation with step-by-step guidance, counter tips, and map-specific strategy.',
    color: '#6ab04c',
    stats: 'Live build matching',
  },
  {
    page: 'maps',
    icon: '🗺️',
    title: 'Map Guide',
    subtitle: '10 Ranked Maps',
    description:
      'Know your battlefield before the match starts. Understand aggression levels, sheep spawn locations, key features, and which civilizations thrive on each map.',
    color: '#74b9ff',
    stats: '10 maps covered',
  },
  {
    page: 'hotkeys',
    icon: '⌨️',
    title: 'Hotkeys',
    subtitle: 'Essential Shortcuts',
    description:
      'Sharpen your muscle memory with the most important AoE4 hotkeys, organized by category — Economy, Military, Production, and Camera.',
    color: '#a29bfe',
    stats: '40+ hotkeys',
  },
];

const stats = [
  { value: '22', label: 'Civilizations' },
  { value: 'Live', label: 'Community Builds' },
  { value: '10', label: 'Ranked Maps' },
  { value: '4', label: 'DLC Expansions' },
];

export default function WelcomePage({ onNavigate }: Props) {
  return (
    <div className="welcome-page">
      {/* ── Hero ── */}
      <div className="wp-hero">
        <div className="wp-hero-emblem">⚔️</div>
        <h1 className="wp-hero-title">AoE4 Guide</h1>
        <p className="wp-hero-subtitle">
          The complete Age of Empires IV reference — build orders, counter matchups,
          map strategies, and a smart Game Advisor, all in one place.
        </p>

        <div className="wp-stats">
          {stats.map((s) => (
            <div key={s.label} className="wp-stat">
              <span className="wp-stat-value">{s.value}</span>
              <span className="wp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature cards ── */}
      <div className="wp-features">
        {features.map((f) => (
          <button
            key={f.page}
            className="wp-feature-card"
            onClick={() => onNavigate(f.page)}
            style={{ '--card-color': f.color } as React.CSSProperties}
          >
            <div className="wp-card-icon">{f.icon}</div>
            <div className="wp-card-body">
              <div className="wp-card-header">
                <span className="wp-card-title" style={{ color: f.color }}>{f.title}</span>
                <span className="wp-card-subtitle">{f.subtitle}</span>
              </div>
              <p className="wp-card-desc">{f.description}</p>
              <span className="wp-card-stat" style={{ color: f.color, borderColor: f.color + '44' }}>
                {f.stats}
              </span>
            </div>
            <span className="wp-card-arrow" style={{ color: f.color }}>→</span>
          </button>
        ))}
      </div>

      {/* ── Footer note ── */}
      <p className="wp-footer">
        Build orders powered by{' '}
        <a href="https://aoe4guides.com" target="_blank" rel="noopener noreferrer">
          aoe4guides.com
        </a>{' '}
        · Not affiliated with Microsoft or Relic Entertainment
      </p>
    </div>
  );
}
