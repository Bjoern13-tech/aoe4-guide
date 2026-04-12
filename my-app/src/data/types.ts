export interface Civilization {
  id: string;
  name: string;
  /** True if this is a variant civ (shares a tech tree base with another civ) */
  isVariant?: boolean;
  /** ID of the base civ this variant is derived from, e.g. 'french' */
  baseCiv?: string;
  /** DLC/expansion this civ belongs to, e.g. 'The Sultans Ascend' */
  dlc?: string;
  description: string;
  playstyle: string;
  strengths: string[];
  weaknesses: string[];
  color: string;
  accentColor: string;
  flag: string; // emoji flag or symbol
  /** 3-5 unique unit names for this civilization */
  keyUnits?: string[];
}

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Playstyle = 'Rush' | 'Boom' | 'Fast Castle' | 'Defensive' | 'Hybrid';
export type StepType = 'eco' | 'military' | 'age-up' | 'landmark' | 'note';

export interface BuildStep {
  pop?: number;
  instruction: string;
  type: StepType;
}

export interface BuildOrder {
  id: string;
  civId: string;
  name: string;
  difficulty: Difficulty;
  playstyle: Playstyle;
  description: string;
  steps: BuildStep[];
  tips: string[];
}

export type Favorability = 'Favorable' | 'Even' | 'Unfavorable';

export interface MatchupDetail {
  opponentCivId: string;
  favorability: Favorability;
  summary: string;
  keyTips: string[];
}

export interface CounterMatchup {
  civId: string;
  generalTips: string[];
  keyUnits: string[];
  matchups: MatchupDetail[];
}

// ── Hotkeys ──────────────────────────────────────────────────────────────────
export type HotkeyCategory = 'Economy' | 'Military' | 'Camera' | 'Production';

export interface Hotkey {
  action: string;
  keys: string[];   // e.g. ['Ctrl', 'A'] — rendered as chips
  tip?: string;
}

export interface HotkeyGroup {
  category: HotkeyCategory;
  icon: string;
  hotkeys: Hotkey[];
}

// ── Maps ─────────────────────────────────────────────────────────────────────
export type MapType = 'Open' | 'Closed' | 'Hybrid' | 'Water';
export type AggressionLevel = 'Low' | 'Medium' | 'High';

export interface AoEMap {
  id: string;
  name: string;
  type: MapType;
  aggressionLevel: AggressionLevel;
  sheepSpawn: string;
  keyFeatures: string[];
  howToPlay: string;
  mapTips: string[];
  goodCivIds: string[];
}

// ── Game Advisor ──────────────────────────────────────────────────────────────
export interface ScoredBuildOrder {
  buildOrder: BuildOrder;
  score: number;
  reasons: string[];
}

export interface AdvisorResult {
  recommendedBuild: ScoredBuildOrder | null;
  alternativeBuilds: ScoredBuildOrder[];
  counterTips: string[];
  mapTips: string[];
  overallStrategy: string;
}
