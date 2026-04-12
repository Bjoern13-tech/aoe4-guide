import { useState } from 'react';
import type { CounterMatchup, Favorability } from '../data/types';
import { civilizations } from '../data/civs';

interface Props {
  matchup: CounterMatchup | undefined;
  accentColor: string;
}

const favorabilityConfig: Record<Favorability, { label: string; color: string; bg: string; icon: string }> = {
  Favorable: { label: 'Favorable', color: '#6ab04c', bg: '#6ab04c18', icon: '▲' },
  Even: { label: 'Even', color: '#fdcb6e', bg: '#fdcb6e18', icon: '●' },
  Unfavorable: { label: 'Unfavorable', color: '#e17055', bg: '#e1705518', icon: '▼' },
};

export default function CounterMatchupView({ matchup, accentColor }: Props) {
  const [selectedOpponent, setSelectedOpponent] = useState<string | null>(
    matchup?.matchups?.[0]?.opponentCivId ?? null
  );

  if (!matchup) {
    return (
      <div className="empty-state">
        <p>No matchup data available for this civilization yet.</p>
        <p className="empty-hint">More matchups coming soon!</p>
      </div>
    );
  }

  const selectedMatchup = matchup.matchups.find((m) => m.opponentCivId === selectedOpponent) ?? null;

  const getCiv = (id: string) => civilizations.find((c) => c.id === id);

  return (
    <div className="counter-layout">
      {/* General info */}
      <div className="counter-general">
        <div className="counter-section">
          <h4 className="section-label">Key Units</h4>
          <div className="unit-tags">
            {matchup.keyUnits.map((unit, i) => (
              <span key={i} className="unit-tag" style={{ borderColor: accentColor + '66', color: accentColor }}>
                ⚔️ {unit}
              </span>
            ))}
          </div>
        </div>
        <div className="counter-section">
          <h4 className="section-label">General Strategy</h4>
          <ul className="tips-list">
            {matchup.generalTips.map((tip, i) => (
              <li key={i} className="tip-item">
                <span className="tip-bullet" style={{ color: accentColor }}>▶</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Matchup selector + detail */}
      <div className="matchup-panel">
        <h4 className="section-label">vs. Specific Civilizations</h4>
        <div className="matchup-grid">
          {matchup.matchups.map((m) => {
            const opp = getCiv(m.opponentCivId);
            const cfg = favorabilityConfig[m.favorability];
            return (
              <button
                key={m.opponentCivId}
                className={`matchup-card ${selectedOpponent === m.opponentCivId ? 'matchup-card-active' : ''}`}
                onClick={() => setSelectedOpponent(m.opponentCivId)}
                style={
                  selectedOpponent === m.opponentCivId
                    ? { borderColor: cfg.color, background: cfg.bg }
                    : {}
                }
              >
                <div className="matchup-card-top">
                  <span className="matchup-flag">{opp?.flag ?? '🏳️'}</span>
                  <span className="matchup-opp-name">{opp?.name ?? m.opponentCivId}</span>
                </div>
                <span
                  className="matchup-favorability"
                  style={{ color: cfg.color }}
                >
                  {cfg.icon} {cfg.label}
                </span>
              </button>
            );
          })}
        </div>

        {selectedMatchup && (() => {
          const opp = getCiv(selectedMatchup.opponentCivId);
          const cfg = favorabilityConfig[selectedMatchup.favorability];
          return (
            <div className="matchup-detail" style={{ borderColor: cfg.color + '44' }}>
              <div className="matchup-detail-header" style={{ borderBottomColor: cfg.color + '33' }}>
                <span className="matchup-detail-vs">
                  {opp?.flag} vs {opp?.name}
                </span>
                <span className="matchup-detail-fav badge" style={{ color: cfg.color, borderColor: cfg.color + '55' }}>
                  {cfg.icon} {cfg.label}
                </span>
              </div>
              <p className="matchup-summary">{selectedMatchup.summary}</p>
              <h5 className="section-label-sm">Key Tips</h5>
              <ul className="tips-list">
                {selectedMatchup.keyTips.map((tip, i) => (
                  <li key={i} className="tip-item">
                    <span className="tip-bullet" style={{ color: cfg.color }}>▶</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
