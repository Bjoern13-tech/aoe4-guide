import type { Civilization } from '../data/types';

interface Props {
  civs: Civilization[];
  selectedCivId: string | null;
  onSelect: (civId: string) => void;
}

const DLC_GROUPS: { label: string; shortLabel: string; color: string; filter: (c: Civilization) => boolean }[] = [
  { label: 'Base Game',               shortLabel: 'Base',     color: '#c9a84c', filter: (c) => !c.dlc },
  { label: 'The Sultans Ascend',      shortLabel: 'Sultans',  color: '#a29bfe', filter: (c) => c.dlc === 'The Sultans Ascend' },
  { label: 'Knights of Cross & Rose', shortLabel: 'Knights',  color: '#e17055', filter: (c) => c.dlc === 'Knights of Cross and Rose' },
  { label: 'Dynasties of the East',   shortLabel: 'Dynasties',color: '#00b894', filter: (c) => c.dlc === 'Dynasties of the East' },
];

export default function CivGrid({ civs, selectedCivId, onSelect }: Props) {
  return (
    <div className="civ-grid">
      {DLC_GROUPS.map((group) => {
        const groupCivs = civs.filter(group.filter);
        if (groupCivs.length === 0) return null;
        return (
          <div key={group.label} className="civ-group">
            <div className="civ-group-label" style={{ color: group.color, borderBottomColor: group.color + '33' }}>
              {group.label}
            </div>
            {groupCivs.map((civ) => (
              <button
                key={civ.id}
                className={`civ-card ${selectedCivId === civ.id ? 'selected' : ''}`}
                onClick={() => onSelect(civ.id)}
                style={
                  selectedCivId === civ.id
                    ? {
                        borderColor: civ.accentColor,
                        boxShadow: `0 0 10px ${civ.accentColor}44`,
                        background: `linear-gradient(135deg, ${civ.color}bb 0%, #1a1208 100%)`,
                      }
                    : {}
                }
              >
                <span className="civ-flag">{civ.flag}</span>
                <span className="civ-name">{civ.name}</span>
                {civ.isVariant && (
                  <span className="civ-variant-badge" title="Variant civilization">V</span>
                )}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
