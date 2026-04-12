import type { Civilization } from '../data/types';
import { civilizations } from '../data/civs';
import { counterMatchups } from '../data/counterMatchups';

interface Props {
  civ: Civilization;
}

const DLC_COLORS: Record<string, string> = {
  'The Sultans Ascend':      '#a29bfe',
  'Knights of Cross and Rose': '#e17055',
  'Dynasties of the East':   '#00b894',
};

export default function CivDetail({ civ }: Props) {
  const baseCiv = civ.baseCiv ? civilizations.find((c) => c.id === civ.baseCiv) : null;
  const matchup = counterMatchups.find((m) => m.civId === civ.id);
  const keyUnits = matchup?.keyUnits ?? [];

  return (
    <div className="civ-detail" style={{ borderColor: civ.accentColor + '55' }}>
      <div className="civ-detail-header" style={{ borderBottomColor: civ.accentColor + '33' }}>
        <span className="civ-detail-flag">{civ.flag}</span>
        <div className="civ-detail-title-col">
          {/* Name + badges row */}
          <div className="civ-detail-name-row">
            <h2 className="civ-detail-name" style={{ color: civ.accentColor }}>{civ.name}</h2>
            <div className="civ-detail-badges">
              {civ.dlc && (
                <span
                  className="badge civ-dlc-badge"
                  style={{ color: DLC_COLORS[civ.dlc] ?? '#74b9ff', borderColor: (DLC_COLORS[civ.dlc] ?? '#74b9ff') + '55' }}
                >
                  {civ.dlc}
                </span>
              )}
              {civ.isVariant && baseCiv && (
                <span className="badge civ-variant-tag" style={{ color: baseCiv.accentColor, borderColor: baseCiv.accentColor + '55' }}>
                  Variant of {baseCiv.flag} {baseCiv.name}
                </span>
              )}
            </div>
          </div>
          <span className="civ-detail-playstyle">{civ.playstyle}</span>
        </div>
      </div>

      <p className="civ-detail-desc">{civ.description}</p>

      {/* Key Units */}
      {keyUnits.length > 0 && (
        <div className="civ-key-units">
          <h4 className="section-label">⚔️ Key Units</h4>
          <div className="unit-tags">
            {keyUnits.map((unit, i) => (
              <span key={i} className="unit-tag" style={{ borderColor: civ.accentColor + '66', color: civ.accentColor }}>
                {unit}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Strengths & Weaknesses */}
      <div className="civ-detail-traits">
        <div className="trait-group">
          <h4 className="trait-title strengths-title">✅ Strengths</h4>
          <ul className="trait-list">
            {civ.strengths.map((s, i) => (
              <li key={i} className="trait-item">
                <span className="trait-dot strength-dot" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="trait-group">
          <h4 className="trait-title weaknesses-title">❌ Weaknesses</h4>
          <ul className="trait-list">
            {civ.weaknesses.map((w, i) => (
              <li key={i} className="trait-item">
                <span className="trait-dot weakness-dot" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
