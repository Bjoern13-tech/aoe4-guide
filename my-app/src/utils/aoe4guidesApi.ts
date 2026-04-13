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

/** Strip HTML tags from API description strings, preserving title/alt text from img tags */
export function stripHtml(html: string): string {
  return html
    .replace(/<img[^>]*title="([^"]*)"[^>]*\/?>/gi, ' [$1] ')
    .replace(/<img[^>]*alt="([^"]*)"[^>]*\/?>/gi, ' [$1] ')
    .replace(/<img[^>]*\/?>/gi, '')
    .replace(/<[^>]+>/g, '')
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
