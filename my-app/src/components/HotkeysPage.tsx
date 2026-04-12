import { useState } from 'react';
import { hotkeyGroups } from '../data/hotkeys';
import type { HotkeyCategory } from '../data/types';

const categoryColors: Record<HotkeyCategory, string> = {
  Economy:    '#6ab04c',
  Military:   '#e17055',
  Camera:     '#74b9ff',
  Production: '#a29bfe',
};

export default function HotkeysPage() {
  const [active, setActive] = useState<HotkeyCategory | 'All'>('All');

  const visible = active === 'All'
    ? hotkeyGroups
    : hotkeyGroups.filter((g) => g.category === active);

  return (
    <div className="hotkeys-page">
      <div className="page-header">
        <h2 className="page-title">Hotkey Reference</h2>
        <p className="page-subtitle">
          Master these shortcuts and your actions-per-minute will skyrocket. Muscle memory wins games.
        </p>
      </div>

      {/* Category filter */}
      <div className="hotkey-category-bar">
        <button
          className={`hk-cat-btn ${active === 'All' ? 'hk-cat-active' : ''}`}
          style={active === 'All' ? { borderColor: '#c9a84c', color: '#c9a84c' } : {}}
          onClick={() => setActive('All')}
        >
          ⚡ All
        </button>
        {hotkeyGroups.map((g) => (
          <button
            key={g.category}
            className={`hk-cat-btn ${active === g.category ? 'hk-cat-active' : ''}`}
            style={active === g.category ? { borderColor: categoryColors[g.category], color: categoryColors[g.category] } : {}}
            onClick={() => setActive(g.category)}
          >
            {g.icon} {g.category}
          </button>
        ))}
      </div>

      {/* Groups */}
      <div className="hotkeys-grid">
        {visible.map((group) => (
          <div key={group.category} className="hotkey-group">
            <div
              className="hotkey-group-header"
              style={{ borderLeftColor: categoryColors[group.category] }}
            >
              <span className="hotkey-group-icon">{group.icon}</span>
              <span className="hotkey-group-title" style={{ color: categoryColors[group.category] }}>
                {group.category}
              </span>
            </div>

            <table className="hotkey-table">
              <tbody>
                {group.hotkeys.map((hk, i) => (
                  <tr key={i} className="hotkey-row" title={hk.tip ?? ''}>
                    <td className="hotkey-keys-cell">
                      <div className="hotkey-keys">
                        {hk.keys.map((k, ki) => (
                          <span key={ki} className="key-chip">{k}</span>
                        ))}
                      </div>
                    </td>
                    <td className="hotkey-action-cell">
                      <span className="hotkey-action">{hk.action}</span>
                      {hk.tip && <span className="hotkey-tip">{hk.tip}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <p className="hotkeys-note">
        💡 Hotkeys shown are based on AoE4 default QWER scheme on PC. You can fully customise them in <strong>Settings → Hotkeys</strong> in-game.
      </p>
    </div>
  );
}
