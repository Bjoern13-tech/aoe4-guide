import { useState, useMemo } from 'react';
import { civilizations } from '../data/civs';
import { buildOrders } from '../data/buildOrders';
import { counterMatchups } from '../data/counterMatchups';
import { maps } from '../data/maps';
import { computeAdvisorResult } from '../utils/advisorLogic';
import type { AdvisorResult, ScoredBuildOrder } from '../data/types';

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

function ScoreBar({ score, accentColor }: { score: number; accentColor: string }) {
  return (
    <div className="advisor-score-bar">
      <div
        className="advisor-score-fill"
        style={{ width: `${score}%`, background: accentColor }}
      />
      <span className="advisor-score-label">{score}/100</span>
    </div>
  );
}

function BuildCard({ sb, accentColor, featured }: { sb: ScoredBuildOrder; accentColor: string; featured?: boolean }) {
  const bo = sb.buildOrder;
  return (
    <div className={`advisor-build-card ${featured ? 'advisor-build-featured' : ''}`}
      style={featured ? { borderColor: accentColor + '88' } : {}}>
      <div className="advisor-build-top">
        <div>
          <p className="advisor-build-name" style={featured ? { color: accentColor } : {}}>{bo.name}</p>
          <div className="bo-tab-meta" style={{ marginTop: '0.3rem' }}>
            <span className="badge" style={{ color: difficultyColors[bo.difficulty], borderColor: difficultyColors[bo.difficulty] + '55' }}>
              {bo.difficulty}
            </span>
            <span className="badge" style={{ color: playstyleColors[bo.playstyle], borderColor: playstyleColors[bo.playstyle] + '55' }}>
              {bo.playstyle}
            </span>
          </div>
        </div>
        {featured && <span className="advisor-recommended-badge" style={{ background: accentColor + '22', color: accentColor }}>⭐ Recommended</span>}
      </div>
      <ScoreBar score={sb.score} accentColor={featured ? accentColor : '#4a3c24'} />
      {sb.reasons.length > 0 && (
        <ul className="advisor-reasons">
          {sb.reasons.map((r, i) => (
            <li key={i} className="advisor-reason-item">
              <span style={{ color: sb.score >= 60 ? '#6ab04c' : sb.score <= 40 ? '#e17055' : '#fdcb6e' }}>▸</span> {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function GameAdvisorPage() {
  const [myCivId,    setMyCivId]    = useState<string | null>(null);
  const [enemyCivId, setEnemyCivId] = useState<string | null>(null);
  const [mapId,      setMapId]      = useState<string | null>(null);

  const result = useMemo<(AdvisorResult & { _enemyCivName?: string }) | null>(() => {
    if (!myCivId || !enemyCivId || !mapId) return null;
    return computeAdvisorResult(myCivId, enemyCivId, mapId, buildOrders, counterMatchups, maps) as (AdvisorResult & { _enemyCivName?: string });
  }, [myCivId, enemyCivId, mapId]);

  const myCiv    = civilizations.find((c) => c.id === myCivId);
  const enemyCiv = civilizations.find((c) => c.id === enemyCivId);
  const selMap   = maps.find((m) => m.id === mapId);
  const accentColor = myCiv?.accentColor ?? '#c9a84c';

  const ready = myCivId && enemyCivId && mapId && myCivId !== enemyCivId;

  return (
    <div className="advisor-page">
      <div className="page-header">
        <h2 className="page-title">Game Advisor</h2>
        <p className="page-subtitle">
          Choose your civilization, your opponent, and the map — get a tailored build order and strategy.
        </p>
      </div>

      <div className="advisor-selectors">
        {/* Step 1: My civ */}
        <div className="advisor-selector-step">
          <div className="advisor-step-label">
            <span className="advisor-step-num">1</span>
            <span>Your Civilization</span>
            {myCiv && <span className="advisor-step-chosen" style={{ color: accentColor }}>{myCiv.flag} {myCiv.name}</span>}
          </div>
          <div className="advisor-civ-picker">
            {civilizations.map((c) => (
              <button
                key={c.id}
                className={`advisor-civ-btn ${myCivId === c.id ? 'advisor-civ-selected' : ''}`}
                onClick={() => setMyCivId(c.id)}
                style={myCivId === c.id ? { borderColor: c.accentColor, color: c.accentColor, background: c.color + '44' } : {}}
                title={c.name}
              >
                <span className="advisor-civ-flag">{c.flag}</span>
                <span className="advisor-civ-name">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Enemy civ */}
        <div className="advisor-selector-step">
          <div className="advisor-step-label">
            <span className="advisor-step-num" style={{ background: '#e1705522', color: '#e17055', borderColor: '#e1705544' }}>2</span>
            <span>Enemy Civilization</span>
            {enemyCiv && <span className="advisor-step-chosen" style={{ color: enemyCiv.accentColor }}>{enemyCiv.flag} {enemyCiv.name}</span>}
          </div>
          <div className="advisor-civ-picker">
            {civilizations
              .filter((c) => c.id !== myCivId)
              .map((c) => (
                <button
                  key={c.id}
                  className={`advisor-civ-btn ${enemyCivId === c.id ? 'advisor-civ-selected' : ''}`}
                  onClick={() => setEnemyCivId(c.id)}
                  style={enemyCivId === c.id ? { borderColor: c.accentColor, color: c.accentColor, background: c.color + '44' } : {}}
                  title={c.name}
                >
                  <span className="advisor-civ-flag">{c.flag}</span>
                  <span className="advisor-civ-name">{c.name}</span>
                </button>
              ))}
          </div>
        </div>

        {/* Step 3: Map */}
        <div className="advisor-selector-step">
          <div className="advisor-step-label">
            <span className="advisor-step-num" style={{ background: '#74b9ff22', color: '#74b9ff', borderColor: '#74b9ff44' }}>3</span>
            <span>Map</span>
            {selMap && <span className="advisor-step-chosen" style={{ color: '#74b9ff' }}>🗺️ {selMap.name}</span>}
          </div>
          <div className="advisor-map-picker">
            {maps.map((m) => (
              <button
                key={m.id}
                className={`advisor-map-btn ${mapId === m.id ? 'advisor-map-selected' : ''}`}
                onClick={() => setMapId(m.id)}
                style={mapId === m.id ? { borderColor: '#74b9ff', color: '#74b9ff' } : {}}
              >
                {m.name}
                <span className="advisor-map-type">{m.type}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {!ready && (
        <div className="advisor-empty">
          <div className="advisor-empty-icon">🎯</div>
          <p>Select your civilization, enemy civilization, and map above to get your personalized strategy.</p>
        </div>
      )}

      {ready && !result && (
        <div className="advisor-empty">
          <div className="advisor-empty-icon">📭</div>
          <p>No build orders available for <strong>{myCiv?.name}</strong> yet. More coming soon!</p>
        </div>
      )}

      {ready && result && (
        <div className="advisor-results">
          {/* Overall strategy */}
          <div className="advisor-strategy" style={{ borderColor: accentColor + '44' }}>
            <h4 className="section-label" style={{ color: accentColor }}>📋 Overall Strategy</h4>
            <p className="advisor-strategy-text">{result.overallStrategy}</p>
          </div>

          <div className="advisor-results-grid">
            {/* Left: build orders */}
            <div className="advisor-builds-col">
              <h4 className="section-label">⚔️ Recommended Build Orders</h4>

              {result.recommendedBuild && (
                <BuildCard sb={result.recommendedBuild} accentColor={accentColor} featured />
              )}

              {result.alternativeBuilds.length > 0 && (
                <>
                  <p className="advisor-alt-label">Alternative Options</p>
                  {result.alternativeBuilds.map((sb) => (
                    <BuildCard key={sb.buildOrder.id} sb={sb} accentColor={accentColor} />
                  ))}
                </>
              )}
            </div>

            {/* Right: tips */}
            <div className="advisor-tips-col">
              {result.counterTips.length > 0 && (
                <div className="advisor-tips-section">
                  <h4 className="section-label">🛡️ Counter Tips vs {enemyCiv?.name}</h4>
                  <ul className="tips-list">
                    {result.counterTips.slice(0, 5).map((tip, i) => (
                      <li key={i} className="tip-item">
                        <span className="tip-bullet" style={{ color: accentColor }}>▶</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.mapTips.length > 0 && (
                <div className="advisor-tips-section">
                  <h4 className="section-label">🗺️ {selMap?.name} Map Tips</h4>
                  <ul className="tips-list">
                    {result.mapTips.slice(0, 5).map((tip, i) => (
                      <li key={i} className="tip-item">
                        <span className="tip-bullet" style={{ color: '#74b9ff' }}>▶</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
