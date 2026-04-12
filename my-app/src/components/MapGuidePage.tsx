import { useState } from 'react';
import { maps } from '../data/maps';
import { civilizations } from '../data/civs';
import type { MapType, AggressionLevel } from '../data/types';

const typeColors: Record<MapType, string> = {
  Open:   '#e17055',
  Closed: '#6ab04c',
  Hybrid: '#fdcb6e',
  Water:  '#74b9ff',
};

const aggressionColors: Record<AggressionLevel, string> = {
  High:   '#e17055',
  Medium: '#fdcb6e',
  Low:    '#6ab04c',
};

const typeIcons: Record<MapType, string> = {
  Open:   '🏜️',
  Closed: '🌲',
  Hybrid: '⛰️',
  Water:  '🌊',
};

export default function MapGuidePage() {
  const [selectedId, setSelectedId] = useState<string>(maps[0].id);
  const [typeFilter, setTypeFilter] = useState<MapType | 'All'>('All');

  const filtered = typeFilter === 'All' ? maps : maps.filter((m) => m.type === typeFilter);

  // If the selected map is filtered out, auto-select the first visible one
  const effectiveSelected = filtered.find((m) => m.id === selectedId) ?? filtered[0];

  return (
    <div className="map-page">
      <div className="page-header">
        <h2 className="page-title">Map Guide</h2>
        <p className="page-subtitle">
          Understand where sheep spawn, key terrain features, and how to adapt your strategy to each map.
        </p>
      </div>

      {/* Type filter */}
      <div className="map-type-filter">
        {(['All', 'Open', 'Closed', 'Hybrid', 'Water'] as const).map((t) => (
          <button
            key={t}
            className={`hk-cat-btn ${typeFilter === t ? 'hk-cat-active' : ''}`}
            style={typeFilter === t && t !== 'All'
              ? { borderColor: typeColors[t as MapType], color: typeColors[t as MapType] }
              : typeFilter === 'All' && t === 'All'
                ? { borderColor: '#c9a84c', color: '#c9a84c' }
                : {}
            }
            onClick={() => {
              setTypeFilter(t);
              const first = t === 'All' ? maps[0] : maps.find((m) => m.type === t);
              if (first) setSelectedId(first.id);
            }}
          >
            {t === 'All' ? '🗺️' : typeIcons[t as MapType]} {t}
          </button>
        ))}
      </div>

      <div className="map-layout">
        {/* Map list */}
        <div className="map-list">
          {filtered.map((m) => (
            <button
              key={m.id}
              className={`map-list-item ${effectiveSelected?.id === m.id ? 'map-list-item-active' : ''}`}
              onClick={() => setSelectedId(m.id)}
              style={effectiveSelected?.id === m.id
                ? { borderColor: typeColors[m.type], color: typeColors[m.type] }
                : {}
              }
            >
              <span className="map-list-icon">{typeIcons[m.type]}</span>
              <div className="map-list-info">
                <span className="map-list-name">{m.name}</span>
                <span className="map-list-type" style={{ color: typeColors[m.type] }}>{m.type}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Map detail */}
        {effectiveSelected && (
          <div className="map-detail">
            <div className="map-detail-header">
              <div className="map-detail-title-row">
                <h3 className="map-detail-name">{effectiveSelected.name}</h3>
                <div className="map-detail-badges">
                  <span className="badge map-type-badge" style={{ color: typeColors[effectiveSelected.type], borderColor: typeColors[effectiveSelected.type] + '55' }}>
                    {typeIcons[effectiveSelected.type]} {effectiveSelected.type}
                  </span>
                  <span className="badge" style={{ color: aggressionColors[effectiveSelected.aggressionLevel], borderColor: aggressionColors[effectiveSelected.aggressionLevel] + '55' }}>
                    🔥 {effectiveSelected.aggressionLevel} Aggression
                  </span>
                </div>
              </div>
            </div>

            {/* Sheep spawn */}
            <div className="map-section map-sheep-section">
              <h4 className="section-label">🐑 Sheep & Early Food</h4>
              <p className="map-sheep-text">{effectiveSelected.sheepSpawn}</p>
            </div>

            {/* Key features */}
            <div className="map-section">
              <h4 className="section-label">🗺️ Key Features</h4>
              <ul className="map-features-list">
                {effectiveSelected.keyFeatures.map((f, i) => (
                  <li key={i} className="map-feature-item">
                    <span className="map-feature-dot" style={{ background: typeColors[effectiveSelected.type] }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to play */}
            <div className="map-section">
              <h4 className="section-label">🎯 How to Play</h4>
              <p className="map-how-to-play">{effectiveSelected.howToPlay}</p>
            </div>

            {/* Tips */}
            <div className="map-section">
              <h4 className="section-label">💡 Map Tips</h4>
              <ul className="tips-list">
                {effectiveSelected.mapTips.map((tip, i) => (
                  <li key={i} className="tip-item">
                    <span className="tip-bullet" style={{ color: typeColors[effectiveSelected.type] }}>▶</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Good civs */}
            <div className="map-section">
              <h4 className="section-label">⭐ Strong Civilizations on This Map</h4>
              <div className="map-good-civs">
                {effectiveSelected.goodCivIds.map((civId) => {
                  const civ = civilizations.find((c) => c.id === civId);
                  if (!civ) return null;
                  return (
                    <span
                      key={civId}
                      className="unit-tag"
                      style={{ borderColor: civ.accentColor + '66', color: civ.accentColor }}
                    >
                      {civ.flag} {civ.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
