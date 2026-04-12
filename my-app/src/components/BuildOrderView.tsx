import { useState } from 'react';
import type { BuildOrder, StepType } from '../data/types';

interface Props {
  buildOrders: BuildOrder[];
  accentColor: string;
}

type PlaystyleFilter = 'All' | 'Aggressive' | 'Economic';

const stepIcons: Record<StepType, string> = {
  eco: '🌾',
  military: '⚔️',
  'age-up': '🏰',
  landmark: '🏛️',
  note: '📌',
};

const stepColors: Record<StepType, string> = {
  eco: '#6ab04c',
  military: '#e17055',
  'age-up': '#fdcb6e',
  landmark: '#a29bfe',
  note: '#74b9ff',
};

const difficultyColors: Record<string, string> = {
  Beginner:     '#6ab04c',
  Intermediate: '#fdcb6e',
  Advanced:     '#e17055',
};

const playstyleColors: Record<string, string> = {
  Rush:         '#e17055',
  Boom:         '#6ab04c',
  'Fast Castle':'#a29bfe',
  Defensive:    '#74b9ff',
  Hybrid:       '#fdcb6e',
};

const filterDefs: { id: PlaystyleFilter; label: string; icon: string; styles: string[] }[] = [
  { id: 'All',        label: 'All',        icon: '📋', styles: ['Rush', 'Boom', 'Fast Castle', 'Defensive', 'Hybrid'] },
  { id: 'Aggressive', label: 'Aggressive', icon: '⚔️', styles: ['Rush'] },
  { id: 'Economic',   label: 'Economic',   icon: '💰', styles: ['Boom', 'Fast Castle'] },
];

export default function BuildOrderView({ buildOrders, accentColor }: Props) {
  const [filter, setFilter] = useState<PlaystyleFilter>('All');
  const [selectedId, setSelectedId] = useState<string | null>(
    buildOrders.length > 0 ? buildOrders[0].id : null
  );

  if (buildOrders.length === 0) {
    return (
      <div className="empty-state">
        <p>No build orders available for this civilization yet.</p>
        <p className="empty-hint">Check back soon — more are coming!</p>
      </div>
    );
  }

  const activeDef   = filterDefs.find((f) => f.id === filter)!;
  const filtered    = buildOrders.filter((b) => activeDef.styles.includes(b.playstyle));
  const displayList = filtered.length > 0 ? filtered : buildOrders; // fallback

  // If selected build is not in current filter, auto-select first visible
  const effectiveId = displayList.find((b) => b.id === selectedId)
    ? selectedId
    : displayList[0]?.id ?? null;

  const selected = buildOrders.find((b) => b.id === effectiveId) ?? null;

  return (
    <div className="build-order-layout">
      {/* Playstyle filter bar */}
      <div className="bo-filter-bar-wrapper">
        <div className="bo-filter-bar">
          {filterDefs.map((f) => (
            <button
              key={f.id}
              className={`bo-filter-btn ${filter === f.id ? 'bo-filter-active' : ''}`}
              onClick={() => setFilter(f.id)}
              style={filter === f.id ? { borderColor: accentColor, color: accentColor, background: accentColor + '18' } : {}}
            >
              {f.icon} {f.label}
              {f.id !== 'All' && (
                <span className="bo-filter-count">
                  {buildOrders.filter((b) => f.styles.includes(b.playstyle)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Build order selector */}
        <div className="bo-selector">
          {displayList.map((bo) => (
            <button
              key={bo.id}
              className={`bo-tab ${effectiveId === bo.id ? 'bo-tab-active' : ''}`}
              onClick={() => setSelectedId(bo.id)}
              style={effectiveId === bo.id ? { borderColor: accentColor, color: accentColor } : {}}
            >
              <span className="bo-tab-name">{bo.name}</span>
              <div className="bo-tab-meta">
                <span className="badge" style={{ color: difficultyColors[bo.difficulty], borderColor: difficultyColors[bo.difficulty] + '55' }}>
                  {bo.difficulty}
                </span>
                <span className="badge" style={{ color: playstyleColors[bo.playstyle], borderColor: playstyleColors[bo.playstyle] + '55' }}>
                  {bo.playstyle}
                </span>
              </div>
            </button>
          ))}
          {displayList.length === 0 && (
            <p className="bo-empty-filter">No {filter.toLowerCase()} builds yet for this civ.</p>
          )}
        </div>
      </div>

      {/* Build order content */}
      {selected && (
        <div className="bo-content">
          <div className="bo-header">
            <h3 className="bo-title" style={{ color: accentColor }}>{selected.name}</h3>
            <p className="bo-description">{selected.description}</p>
          </div>

          <div className="bo-steps">
            <h4 className="section-label">Build Steps</h4>
            <ol className="steps-list">
              {selected.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <div className="step-left">
                    <span className="step-icon" title={step.type} style={{ color: stepColors[step.type] }}>
                      {stepIcons[step.type]}
                    </span>
                    {step.pop !== undefined && (
                      <span className="step-pop" style={{ borderColor: accentColor + '55', color: accentColor }}>
                        {step.pop} pop
                      </span>
                    )}
                  </div>
                  <span className="step-instruction">{step.instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bo-tips">
            <h4 className="section-label">Pro Tips</h4>
            <ul className="tips-list">
              {selected.tips.map((tip, i) => (
                <li key={i} className="tip-item">
                  <span className="tip-bullet" style={{ color: accentColor }}>▶</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
