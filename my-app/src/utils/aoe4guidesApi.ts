const BASE_URL = 'https://aoe4guides.com/api';

// Map our internal civ IDs to the 3-letter codes used by the aoe4guides API
export const CIV_CODES: Record<string, string> = {
  'english':             'ENG',
  'french':              'FRE',
  'hre':                 'HRE',
  'mongols':             'MON',
  'chinese':             'CHI',
  'abbasid':             'ABB',
  'delhi':               'DEL',
  'rus':                 'RUS',
  'ottoman':             'OTT',
  'malians':             'MAL',
  'byzantines':          'BYZ',
  'japanese':            'JAP',
  'ayyubids':            'AYY',
  'order-of-the-dragon': 'DRA',
  'zhu-xi':              'ZXL',
  'jeanne-darc':         'JDA',
  'house-of-lancaster':  'HOL',
  'knights-templar':     'KTE',
  'golden-horde':        'GOH',
  'macedonian-dynasty':  'MAC',
  'sengoku-daimyo':      'SEN',
  'tughlaq-dynasty':     'TUG',
};

export interface ApiStep {
  time: string;
  description: string;
  food: string;
  wood: string;
  gold: string;
  stone: string;
  builders: string;
  villagers?: string;
}

export interface ApiStepSection {
  type: 'age' | 'ageUp';
  age: number;
  gameplan?: string;
  steps: ApiStep[];
}

export interface ApiBuild {
  id: string;
  title: string;
  description: string;
  video?: string;
  author: string;
  authorUid: string;
  season?: string;
  timeCreated?: string;
  steps: ApiStepSection[];
}

const AGE_LABELS: Record<number, string> = {
  1: 'Dark Age',
  2: 'Feudal Age',
  3: 'Castle Age',
  4: 'Imperial Age',
};

export function ageLabel(section: ApiStepSection): string {
  if (section.type === 'ageUp') return `Advancing to ${AGE_LABELS[section.age] ?? `Age ${section.age}`}`;
  return AGE_LABELS[section.age] ?? `Age ${section.age}`;
}

// Resource icons shown inline in descriptions
const RESOURCE_ICONS: Record<string, string> = {
  resource_food:          '🌾',
  resource_gold:          '💰',
  resource_wood:          '🪵',
  resource_stone:         '⛏',
  deer:                   '🦌',
  sheep:                  '🐑',
  berrybush:              '🫐',
  gaiatreeprototypetree:  '🌲',
};

// Icons to skip entirely (decorative / already shown in section header)
const SKIP_ICONS = new Set(['rally', 'age_1', 'age_2', 'age_3', 'age_4']);

// Unit name overrides (strip trailing numeric tier suffix, then title-case)
const UNIT_OVERRIDES: Record<string, string> = {
  'man-at-arms':  'MAA',
  'town-center':  'TC',
};

function srcToLabel(src: string): string {
  // Extract just the filename without extension and path
  const filename = src.split('/').pop()?.replace(/\.\w+$/, '') ?? '';

  // Skip decorative icons and civ flags
  if (SKIP_ICONS.has(filename)) return '';
  if (src.includes('/civilization_flag/')) return '';

  // Resource → emoji
  if (filename in RESOURCE_ICONS) return RESOURCE_ICONS[filename];

  // Strip trailing tier number: spearman-1 → spearman, knight-2 → knight
  const base = filename.replace(/-\d+$/, '');

  // Known abbreviations
  if (base in UNIT_OVERRIDES) return `[${UNIT_OVERRIDES[base]}]`;

  // Convert kebab-case → Title Case
  const label = base
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return `[${label}]`;
}

/** Strip HTML from API description strings, converting img src paths to readable labels */
export function stripHtml(html: string): string {
  return html
    // title attribute takes priority (e.g. title="Rally")
    .replace(/<img[^>]*title="([^"]*)"[^>]*\/?>/gi, (_, title) =>
      title ? `[${title}]` : ''
    )
    // Extract label from src path for remaining img tags
    .replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, (_, src) => {
      const label = srcToLabel(src);
      return label ? ` ${label} ` : ' ';
    })
    // Strip any remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Collapse multiple spaces
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export async function fetchBuildsForCiv(civId: string): Promise<ApiBuild[]> {
  const code = CIV_CODES[civId];
  if (!code) return [];
  const res = await fetch(`${BASE_URL}/builds?civ=${code}&orderBy=score`);
  if (!res.ok) throw new Error(`Failed to fetch builds (${res.status})`);
  return res.json() as Promise<ApiBuild[]>;
}

// Keywords per playstyle used to match live build titles/descriptions
const PLAYSTYLE_KEYWORDS: Record<string, string[]> = {
  Rush:          ['rush', '2tc', '2 tc', 'aggress', 'early attack', 'feudal attack', 'early pressure', 'fast feudal', 'scout rush', 'man-at-arms'],
  Boom:          ['boom', 'eco', 'economic', '3tc', '3 tc', 'fast imp', 'imperial', 'late game', 'greedy', 'turtle'],
  'Fast Castle': ['fast castle', 'fc ', ' fc', 'castle rush', 'castle age', 'landmark rush'],
  Defensive:     ['defensive', 'turtle', 'wall', 'fortif', 'tower rush'],
  Hybrid:        ['hybrid', 'flexible', 'standard', 'opener'],
};

/**
 * Score live API builds by how well their title/description matches a playstyle.
 * Returns the builds sorted: best match first.
 */
export function rankBuildsByPlaystyle(builds: ApiBuild[], playstyle: string): ApiBuild[] {
  const keywords = PLAYSTYLE_KEYWORDS[playstyle] ?? [];

  const scored = builds.map((b) => {
    const text = (b.title + ' ' + (b.description ?? '')).toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw)) score += 10;
    }
    return { build: b, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.build);
}
