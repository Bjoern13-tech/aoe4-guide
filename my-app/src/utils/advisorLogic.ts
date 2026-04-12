import type { BuildOrder, CounterMatchup, AoEMap, ScoredBuildOrder, AdvisorResult, Playstyle, MapType } from '../data/types';
import { civilizations } from '../data/civs';

// Playstyle → aggression bucket
const aggressivePlays: Playstyle[] = ['Rush'];
const economicPlays: Playstyle[]   = ['Boom', 'Fast Castle'];

// How well a playstyle matches a map type (score delta, -15 to +15)
function mapPlaystyleBonus(playstyle: Playstyle, mapType: MapType): { delta: number; reason: string } {
  if (mapType === 'Open') {
    if (aggressivePlays.includes(playstyle))
      return { delta: 15, reason: 'Open map favours Rush playstyle (+15)' };
    if (economicPlays.includes(playstyle))
      return { delta: -10, reason: 'Open map punishes slow Boom openings (-10)' };
    return { delta: 0, reason: '' };
  }
  if (mapType === 'Closed') {
    if (economicPlays.includes(playstyle))
      return { delta: 15, reason: 'Closed map rewards safe Boom / Fast Castle (+15)' };
    if (aggressivePlays.includes(playstyle))
      return { delta: -10, reason: 'Closed map blocks Rush effectiveness (-10)' };
    return { delta: 0, reason: '' };
  }
  if (mapType === 'Water') {
    if (playstyle === 'Hybrid' || playstyle === 'Defensive')
      return { delta: 10, reason: 'Water map rewards flexible / defensive builds (+10)' };
    if (aggressivePlays.includes(playstyle))
      return { delta: -15, reason: 'Water map heavily penalises all-in Rush (-15)' };
    return { delta: 0, reason: '' };
  }
  // Hybrid map — slight bonus to Hybrid/Defensive, neutral otherwise
  if (playstyle === 'Hybrid' || playstyle === 'Defensive')
    return { delta: 8, reason: 'Hybrid map rewards flexible playstyle (+8)' };
  return { delta: 0, reason: '' };
}

export function computeAdvisorResult(
  myCivId: string,
  enemyCivId: string,
  mapId: string,
  buildOrders: BuildOrder[],
  counterMatchups: CounterMatchup[],
  maps: AoEMap[],
): AdvisorResult | null {
  const myBuilds = buildOrders.filter((b) => b.civId === myCivId);
  if (myBuilds.length === 0) return null;

  const map        = maps.find((m) => m.id === mapId) ?? null;
  const myMatchup  = counterMatchups.find((m) => m.civId === myCivId);
  const specific   = myMatchup?.matchups.find((m) => m.opponentCivId === enemyCivId) ?? null;
  const myCiv      = civilizations.find((c) => c.id === myCivId);
  const enemyCiv   = civilizations.find((c) => c.id === enemyCivId);

  // ── Score each build order ───────────────────────────────────────────────
  const scored: ScoredBuildOrder[] = myBuilds.map((bo) => {
    let score = 50;
    const reasons: string[] = [];

    // 1) Matchup favourability (+20 / 0 / -20)
    if (specific) {
      if (specific.favorability === 'Favorable') {
        score += 20; reasons.push('Matchup is Favorable vs this enemy (+20)');
      } else if (specific.favorability === 'Unfavorable') {
        score -= 20; reasons.push('Matchup is Unfavorable — play safer (-20)');
        // Unfavorable matchup: boost economic builds as compensation
        if (economicPlays.includes(bo.playstyle)) { score += 10; reasons.push('Boom compensates for unfavorable matchup (+10)'); }
      } else {
        reasons.push('Matchup is Even — execution matters most (±0)');
      }
    }

    // 2) Map type vs playstyle compatibility (+15 / 0 / -15)
    if (map) {
      const { delta, reason } = mapPlaystyleBonus(bo.playstyle, map.type);
      if (delta !== 0) { score += delta; reasons.push(reason); }
    }

    // 3) Civ identity alignment — does the build match the civ's natural style? (+10)
    if (myCiv) {
      const civStyle = myCiv.playstyle.toLowerCase();
      const boStyle  = bo.playstyle.toLowerCase();
      if (civStyle.includes(boStyle) || boStyle.split(' ').some((w) => civStyle.includes(w))) {
        score += 10; reasons.push(`Aligns with ${myCiv.name}'s natural playstyle (+10)`);
      }
    }

    // 4) Difficulty soft modifier — prefer accessible builds in ambiguous cases
    if (bo.difficulty === 'Beginner')      { /* no penalty */  }
    else if (bo.difficulty === 'Intermediate') { score -= 3; }
    else if (bo.difficulty === 'Advanced')     { score -= 8; reasons.push('Advanced build — higher skill ceiling (-8)'); }

    return { buildOrder: bo, score: Math.max(0, Math.min(100, score)), reasons };
  });

  scored.sort((a, b) => b.score - a.score);

  // ── Counter tips ─────────────────────────────────────────────────────────
  const counterTips: string[] = specific?.keyTips ?? myMatchup?.generalTips ?? [];

  // ── Map tips ─────────────────────────────────────────────────────────────
  const mapTips: string[] = map ? [...map.keyFeatures.slice(0, 2), ...map.mapTips] : [];

  // ── Overall strategy ─────────────────────────────────────────────────────
  const rec         = scored[0];
  const favText     = specific
    ? `The matchup is ${specific.favorability.toLowerCase()} — ${specific.summary}`
    : `No specific matchup data found; rely on ${myCiv?.name ?? 'your civ'}'s general strengths.`;
  const mapText     = map ? `On ${map.name} (${map.type} map), ${map.howToPlay.split('.')[0]}.` : '';
  const buildText   = rec ? `Your best opening is the "${rec.buildOrder.name}" (${rec.buildOrder.playstyle}).` : '';
  const overallStrategy = [buildText, favText, mapText].filter(Boolean).join(' ');

  return {
    recommendedBuild:   scored[0] ?? null,
    alternativeBuilds:  scored.slice(1, 3),
    counterTips,
    mapTips,
    overallStrategy,
    // expose enemy civ name for rendering — attach via a hack-free extra field
    ...(enemyCiv ? { _enemyCivName: enemyCiv.name } : {}),
  } as AdvisorResult & { _enemyCivName?: string };
}
