import { useState, useEffect } from 'react';
import { fetchBuildsForCiv, stripHtml, ageLabel } from '../utils/aoe4guidesApi';
import type { ApiBuild, ApiStepSection } from '../utils/aoe4guidesApi';

interface Props {
  civId: string;
  accentColor: string;
}

function ResourceBar({ section }: { section: ApiStepSection }) {
  // Collect all unique non-zero resource totals across steps for display
  const totals = section.steps.reduce(
    (acc, s) => ({
      food:  Math.max(acc.food,  parseInt(s.food)  || 0),
      wood:  Math.max(acc.wood,  parseInt(s.wood)  || 0),
      gold:  Math.max(acc.gold,  parseInt(s.gold)  || 0),
      stone: Math.max(acc.stone, parseInt(s.stone) || 0),
    }),
    { food: 0, wood: 0, gold: 0, stone: 0 }
  );
  const any = totals.food || totals.wood || totals.gold || totals.stone;
  if (!any) return null;
  return (
    <div className="resource-bar">
      {totals.food  > 0 && <span className="res res-food">🌾 {totals.food}</span>}
      {totals.wood  > 0 && <span className="res res-wood">🪵 {totals.wood}</span>}
      {totals.gold  > 0 && <span className="res res-gold">💰 {totals.gold}</span>}
      {totals.stone > 0 && <span className="res res-stone">⛏ {totals.stone}</span>}
    </div>
  );
}

export default function BuildOrderView({ civId, accentColor }: Props) {
  const [builds, setBuilds]     = useState<ApiBuild[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setBuilds([]);
    setSelectedId(null);

    fetchBuildsForCiv(civId)
      .then((data) => {
        if (cancelled) return;
        setBuilds(data);
        setSelectedId(data[0]?.id ?? null);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [civId]);

  if (loading) {
    return (
      <div className="bo-loading">
        <div className="bo-spinner" />
        <p>Loading community builds…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="empty-state">
        <p>Could not load builds: {error}</p>
        <p className="empty-hint">Check your connection or try again later.</p>
      </div>
    );
  }

  if (builds.length === 0) {
    return (
      <div className="empty-state">
        <p>No community builds found for this civilization yet.</p>
        <p className="empty-hint">Check back soon — the community is always adding more!</p>
      </div>
    );
  }

  const selected = builds.find((b) => b.id === selectedId) ?? builds[0];

  return (
    <div className="build-order-layout">
      {/* Build selector */}
      <div className="bo-filter-bar-wrapper">
        <div className="bo-source-badge">
          📡 Live community builds from{' '}
          <a href="https://aoe4guides.com" target="_blank" rel="noopener noreferrer">
            aoe4guides.com
          </a>
          , sorted by score
        </div>

        <div className="bo-selector">
          {builds.map((bo) => (
            <button
              key={bo.id}
              className={`bo-tab ${selectedId === bo.id ? 'bo-tab-active' : ''}`}
              onClick={() => setSelectedId(bo.id)}
              style={selectedId === bo.id ? { borderColor: accentColor, color: accentColor } : {}}
            >
              <span className="bo-tab-name">{bo.title}</span>
              <div className="bo-tab-meta">
                <span className="badge" style={{ color: '#8a7d62', borderColor: '#3f322055' }}>
                  by {bo.author}
                </span>
                {bo.season && (
                  <span className="badge" style={{ color: accentColor, borderColor: accentColor + '44' }}>
                    S{bo.season}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Build detail */}
      {selected && (
        <div className="bo-content">
          <div className="bo-header">
            <h3 className="bo-title" style={{ color: accentColor }}>{selected.title}</h3>
            <div className="bo-meta-row">
              <span className="bo-author">by {selected.author}</span>
              {selected.season && (
                <span className="badge" style={{ color: accentColor, borderColor: accentColor + '44' }}>
                  Season {selected.season}
                </span>
              )}
              {selected.video && (
                <a
                  className="bo-video-link"
                  href={selected.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: accentColor }}
                >
                  ▶ Watch Video
                </a>
              )}
            </div>
            {selected.description && (
              <p className="bo-description">{selected.description}</p>
            )}
          </div>

          {/* Age sections */}
          <div className="bo-steps">
            {selected.steps.map((section, si) => (
              <div key={si} className="bo-age-section">
                <div className="bo-age-header">
                  <span className="bo-age-label" style={{ color: accentColor }}>
                    {section.type === 'ageUp' ? '🏰' : '⏱'} {ageLabel(section)}
                  </span>
                  <ResourceBar section={section} />
                </div>

                <ol className="steps-list">
                  {section.steps.map((step, i) => {
                    const desc = stripHtml(step.description);
                    if (!desc) return null;
                    const resources = [
                      step.food  && parseInt(step.food)  ? `🌾${step.food}`  : '',
                      step.wood  && parseInt(step.wood)  ? `🪵${step.wood}`  : '',
                      step.gold  && parseInt(step.gold)  ? `💰${step.gold}`  : '',
                      step.stone && parseInt(step.stone) ? `⛏${step.stone}` : '',
                    ].filter(Boolean);

                    return (
                      <li key={i} className="step-item">
                        <div className="step-left">
                          {step.time && (
                            <span className="step-time">{step.time}</span>
                          )}
                          {resources.length > 0 && (
                            <span className="step-resources">{resources.join(' ')}</span>
                          )}
                        </div>
                        <span className="step-instruction">{desc}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
