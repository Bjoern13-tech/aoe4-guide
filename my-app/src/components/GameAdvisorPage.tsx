import { useState, useMemo, useEffect } from 'react';
import { civilizations } from '../data/civs';
import { buildOrders } from '../data/buildOrders';
import { counterMatchups } from '../data/counterMatchups';
import { maps } from '../data/maps';
import { computeAdvisorResult } from '../utils/advisorLogic';
import { fetchBuildsForCiv, rankBuildsByPlaystyle, stripHtml, ageLabel } from '../utils/aoe4guidesApi';
import type { AdvisorResult } from '../data/types';
import type { ApiBuild, ApiStepSection } from '../utils/aoe4guidesApi';

// ── Small sub-components ─────────────────────────────────────────────────────

function ScoreBar({ score, accentColor }: { score: number; accentColor: string }) {
  return (
    <div className="advisor-score-bar">
      <div className="advisor-score-fill" style={{ width: `${score}%`, background: accentColor }} />
      <span className="advisor-score-label">{score}/100</span>
    </div>
  );
}

function ResourceRow({ section }: { section: ApiStepSection }) {
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
      {totals.food  > 0 && <span className="res">🌾 {totals.food}</span>}
      {totals.wood  > 0 && <span className="res">🪵 {totals.wood}</span>}
      {totals.gold  > 0 && <span className="res">💰 {totals.gold}</span>}
      {totals.stone > 0 && <span className="res">⛏ {totals.stone}</span>}
    </div>
  );
}

function LiveBuildDetail({ build, accentColor }: { build: ApiBuild; accentColor: string }) {
  return (
    <div className="advisor-live-build">
      <div className="bo-header">
        <h3 className="bo-title" style={{ color: accentColor }}>{build.title}</h3>
        <div className="bo-meta-row">
          <span className="bo-author">by {build.author}</span>
          {build.season && (
            <span className="badge" style={{ color: accentColor, borderColor: accentColor + '44' }}>
              Season {build.season}
            </span>
          )}
          {build.video && (
            <a className="bo-video-link" href={build.video} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
              ▶ Watch Video
            </a>
          )}
        </div>
        {build.description && <p className="bo-description">{build.description}</p>}
      </div>

      <div className="bo-steps">
        {build.steps.map((section, si) => (
          <div key={si} className="bo-age-section">
            <div className="bo-age-header">
              <span className="bo-age-label" style={{ color: accentColor }}>
                {section.type === 'ageUp' ? '🏰' : '⏱'} {ageLabel(section)}
              </span>
              <ResourceRow section={section} />
            </div>
            <ol className="steps-list">
              {section.steps.map((step, i) => {
                const desc = stripHtml(step.description);
                if (!desc) return null;
                const res = [
                  step.food  && parseInt(step.food)  ? `🌾${step.food}`  : '',
                  step.wood  && parseInt(step.wood)  ? `🪵${step.wood}`  : '',
                  step.gold  && parseInt(step.gold)  ? `💰${step.gold}`  : '',
                  step.stone && parseInt(step.stone) ? `⛏${step.stone}` : '',
                ].filter(Boolean);
                return (
                  <li key={i} className="step-item">
                    <div className="step-left">
                      {step.time && <span className="step-time">{step.time}</span>}
                      {res.length > 0 && <span className="step-resources">{res.join(' ')}</span>}
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
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function GameAdvisorPage() {
  const [myCivId,    setMyCivId]    = useState<string | null>(null);
  const [enemyCivId, setEnemyCivId] = useState<string | null>(null);
  const [mapId,      setMapId]      = useState<string | null>(null);

  // Live builds from API
  const [liveBuilds,   setLiveBuilds]   = useState<ApiBuild[]>([]);
  const [liveLoading,  setLiveLoading]  = useState(false);
  const [selectedLiveId, setSelectedLiveId] = useState<string | null>(null);

  // Fetch live builds whenever the selected civ changes
  useEffect(() => {
    if (!myCivId) { setLiveBuilds([]); return; }
    let cancelled = false;
    setLiveLoading(true);
    setLiveBuilds([]);
    setSelectedLiveId(null);
    fetchBuildsForCiv(myCivId)
      .then((data) => { if (!cancelled) { setLiveBuilds(data); } })
      .catch(() => { /* silent — advisor still works without live builds */ })
      .finally(() => { if (!cancelled) setLiveLoading(false); });
    return () => { cancelled = true; };
  }, [myCivId]);

  // Static scoring result (matchup analysis, map tips, counter tips)
  const result = useMemo<(AdvisorResult & { _enemyCivName?: string }) | null>(() => {
    if (!myCivId || !enemyCivId || !mapId) return null;
    return computeAdvisorResult(myCivId, enemyCivId, mapId, buildOrders, counterMatchups, maps) as (AdvisorResult & { _enemyCivName?: string });
  }, [myCivId, enemyCivId, mapId]);

  // Rank live builds by the recommended playstyle and pick the best match
  const rankedBuilds = useMemo<ApiBuild[]>(() => {
    if (!liveBuilds.length) return [];
    const playstyle = result?.recommendedBuild?.buildOrder.playstyle ?? null;
    if (!playstyle) return liveBuilds;
    return rankBuildsByPlaystyle(liveBuilds, playstyle);
  }, [liveBuilds, result]);

  // Auto-select the best matched build whenever ranking changes
  useEffect(() => {
    if (rankedBuilds.length > 0) setSelectedLiveId(rankedBuilds[0].id);
  }, [rankedBuilds]);

  const selectedLiveBuild = rankedBuilds.find((b) => b.id === selectedLiveId) ?? rankedBuilds[0] ?? null;

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
          Choose your civilization, your opponent, and the map — get the right build order and strategy.
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
              <button key={c.id}
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
            {civilizations.filter((c) => c.id !== myCivId).map((c) => (
              <button key={c.id}
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
              <button key={m.id}
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

      {/* Empty state */}
      {!ready && (
        <div className="advisor-empty">
          <div className="advisor-empty-icon">🎯</div>
          <p>Select your civilization, enemy civilization, and map above to get your personalized strategy.</p>
        </div>
      )}

      {/* Results */}
      {ready && result && (
        <div className="advisor-results">

          {/* Overall strategy */}
          <div className="advisor-strategy" style={{ borderColor: accentColor + '44' }}>
            <h4 className="section-label" style={{ color: accentColor }}>📋 Overall Strategy</h4>
            <p className="advisor-strategy-text">{result.overallStrategy}</p>
            {result.recommendedBuild && (
              <div className="advisor-playstyle-row">
                <span className="advisor-why-label">Recommended playstyle:</span>
                <span className="badge" style={{ color: accentColor, borderColor: accentColor + '55' }}>
                  {result.recommendedBuild.buildOrder.playstyle}
                </span>
                <ScoreBar score={result.recommendedBuild.score} accentColor={accentColor} />
              </div>
            )}
            {(result.recommendedBuild?.reasons ?? []).length > 0 && (
              <ul className="advisor-reasons" style={{ marginTop: '0.5rem' }}>
                {result.recommendedBuild!.reasons.map((r, i) => (
                  <li key={i} className="advisor-reason-item">
                    <span style={{ color: (result.recommendedBuild?.score ?? 0) >= 60 ? '#6ab04c' : '#fdcb6e' }}>▸</span> {r}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="advisor-results-grid">
            {/* Left: live build order */}
            <div className="advisor-builds-col">
              <h4 className="section-label">
                📜 Recommended Build Order
                {liveLoading && <span className="advisor-live-spinner" />}
              </h4>

              {!liveLoading && rankedBuilds.length > 0 && (
                <>
                  {/* Build selector — compact tabs */}
                  {rankedBuilds.length > 1 && (
                    <div className="advisor-build-tabs">
                      {rankedBuilds.slice(0, 5).map((b, i) => (
                        <button
                          key={b.id}
                          className={`advisor-build-tab ${selectedLiveId === b.id ? 'advisor-build-tab-active' : ''}`}
                          onClick={() => setSelectedLiveId(b.id)}
                          style={selectedLiveId === b.id ? { borderColor: accentColor, color: accentColor } : {}}
                        >
                          {i === 0 && <span className="advisor-recommended-badge" style={{ background: accentColor + '22', color: accentColor }}>⭐</span>}
                          <span className="advisor-build-tab-name">{b.title}</span>
                          <span className="advisor-build-tab-meta">by {b.author}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Full build detail */}
                  {selectedLiveBuild && (
                    <LiveBuildDetail build={selectedLiveBuild} accentColor={accentColor} />
                  )}
                </>
              )}

              {!liveLoading && rankedBuilds.length === 0 && (
                <div className="empty-state">
                  <p>No community builds found for this civilization.</p>
                </div>
              )}
            </div>

            {/* Right: counter tips + map tips */}
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

      {ready && !result && (
        <div className="advisor-empty">
          <div className="advisor-empty-icon">📭</div>
          <p>No matchup data available for <strong>{myCiv?.name}</strong> yet.</p>
        </div>
      )}
    </div>
  );
}
