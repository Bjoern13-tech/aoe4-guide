import type { CounterMatchup } from './types';

export const counterMatchups: CounterMatchup[] = [
  {
    civId: 'english',
    generalTips: [
      'English are strongest when allowed to set up a defensive perimeter with longbowmen.',
      'Force fights in the open where longbow range advantage matters most.',
      'Target the Council Hall early — it halves longbow production speed.',
      'English farms never deplete, so starving their food is near impossible.',
    ],
    keyUnits: ['Longbowmen', 'Man-at-Arms', 'King (hero unit)'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Knights arrive fast and are hard to stop early. Longbows need time to mass.',
        keyTips: [
          'Spam Spearmen in dark/feudal age to stop the knight rush.',
          'Keep Longbows behind Spearmen — do NOT let knights reach them.',
          'Use Enclosures (Feudal tech) to speed up farm income for faster response.',
          'If you survive the rush, your Council Hall Longbows will overwhelm in mid-game.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongols raid with fast Horsemen — English walls and longbows struggle to keep up with their mobility.',
        keyTips: [
          'Wall your resources quickly — prioritize lumber camps and gold mines.',
          'Longbows with Volley ability can zone Horsemen if micro\'d well.',
          'Use the King\'s defense aura to hold your base while Longbows pick off raiders.',
          'Don\'t chase Mongol cavalry with infantry — it\'s a trap.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Even',
        summary: 'Both civs have strong Feudal Age infantry. HRE MAA rush is the main threat.',
        keyTips: [
          'Longbowmen counter HRE MAA if you maintain distance.',
          'Don\'t clump units — HRE prelates and MAA can sustain through tight fights.',
          'Use Volley ability to burst down MAA groups quickly.',
          'King vs Prelate: both give eco/combat bonuses — protect yours.',
        ],
      },
      {
        opponentCivId: 'delhi',
        favorability: 'Favorable',
        summary: 'Delhi is slow early — English can pressure them before their free tech kicks in.',
        keyTips: [
          'Rush early with MAA + Longbows before Delhi gets War Elephants.',
          'Target their Mosques to deny Scholar-speed research bonuses.',
          'If the game goes long, Delhi\'s free research will outscale you — stay aggressive.',
          'Longbows kite War Elephants effectively — never let elephants reach your ranged units.',
        ],
      },
      {
        opponentCivId: 'chinese',
        favorability: 'Favorable',
        summary: 'Chinese boom takes time — English early pressure can set them back significantly.',
        keyTips: [
          'Target the Imperial Official — killing it delays their gold tax income.',
          'MAA + Longbow timing hits before Nest of Bees are online.',
          'Be wary of Castle Age Chinese — Grenadiers and Nest of Bees shred grouped armies.',
          'Keep units spread to minimize AoE damage from Chinese siege weapons.',
        ],
      },
      {
        opponentCivId: 'abbasid',
        favorability: 'Even',
        summary: 'Abbasid Camel Riders don\'t care about Longbows, but MAA can hold them off.',
        keyTips: [
          'Camel Riders take reduced bonus damage — mix Spearmen to help counter them.',
          'Longbows can outrange Camel Archers if positioned well.',
          'Raid with MAA while their attention is on wings — disrupt the age-up process.',
          'In long games, Abbasid tech advantage grows — don\'t let it reach late game.',
        ],
      },
    ],
  },

  {
    civId: 'french',
    generalTips: [
      'French are a snowball civ — if their knight rush works, the game spirals fast.',
      'The key to playing French is constant cavalry production and map control.',
      'Protect your traders — they are your long-term economic engine.',
      'Always use the Royal Knight Charge on villagers for instant kills.',
    ],
    keyUnits: ['Royal Knight', 'Crossbowman', 'Arbalétrier', 'Royal Culverin'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'French Knights arrive before English can mass Longbowmen. Early aggression wins.',
        keyTips: [
          'Rush with 3-4 Knights at ~12-14 minutes — English can\'t stop this without Spearmen.',
          'Use Charge ability on every entry — one-shots villagers.',
          'If English masses Spearmen, pivot to Arbalétrier + Knight combo.',
          'Don\'t fight near the English King — his defense aura is noticeable.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Both are aggressive cavalry civs — map control and raiding skill determine the winner.',
        keyTips: [
          'Your knights are tankier than Horsemen — fight in the open.',
          'Protect your traders from Mongol raids — station a knight escort.',
          'Charge ability gives a burst advantage — use it at the start of every engagement.',
          'If Mongols go Mangudai, add Crossbowmen to your army composition.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Favorable',
        summary: 'French Knights counter HRE MAA — cavalry beats armored infantry in mobility.',
        keyTips: [
          'Knights kite HRE MAA easily — don\'t let MAA engage on their terms.',
          'Kill Prelates — they inspire HRE eco and heal their army.',
          'School of Cavalry means you always have more knights than they have MAA.',
          'Regnitz Cathedral in late game can be devastating — raid their relics in Castle Age.',
        ],
      },
      {
        opponentCivId: 'abbasid',
        favorability: 'Unfavorable',
        summary: 'Camel Riders hard-counter cavalry — French Knights lose their main advantage.',
        keyTips: [
          'Pivot to Arbalétrier + infantry if you see Camel Riders massing.',
          'Camel Archers are mobile ranged — use Crossbowmen to counter them.',
          'Avoid sending knights into Camel formations — they reduce attack speed AND movement.',
          'Focus on trade economy — your gold advantage can support a varied army.',
        ],
      },
      {
        opponentCivId: 'rus',
        favorability: 'Even',
        summary: 'Rus Horse Archers kite French Knights — positional play matters a lot.',
        keyTips: [
          'Don\'t chase Rus Horse Archers — you will not catch them.',
          'Force fights where you can corner their ranged units.',
          'Protect your traders from Rus bounty raids.',
          'Arbalétrier counters Horse Archers — add them to your composition.',
        ],
      },
      {
        opponentCivId: 'ottoman',
        favorability: 'Favorable',
        summary: 'French early pressure arrives before Ottoman Military School ramps up.',
        keyTips: [
          'Rush before Janissaries are online — Military School units are weak early.',
          'Kill Ottoman villagers to slow their economy, which supports the school.',
          'In late game, avoid Great Bombard range — it shreds cavalry.',
          'Arbalétrier ignores handcannoneer fire better than knights.',
        ],
      },
    ],
  },

  {
    civId: 'hre',
    generalTips: [
      'HRE is strongest when Prelates are always working — idle Prelates waste their civ\'s main strength.',
      'Regnitz Cathedral relics are worth a fight in Castle Age — 3 relics = massive gold/min.',
      'Emergency Repairs on buildings gives a huge defensive advantage — use it immediately when under attack.',
      'HRE MAA in early Feudal are among the best in the game.',
    ],
    keyUnits: ['Man-at-Arms', 'Landsknecht', 'Prelate', 'Bombard'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Knights outmaneuver HRE MAA. The Prelate can be charged down by Royal Knights.',
        keyTips: [
          'Keep Prelates safe inside your base — if they die, your eco collapses.',
          'Spam Spearmen to counter Royal Knights.',
          'Emergency Repairs on barracks/TC when knights raid your base.',
          'Try to Age up faster than them — Castle Age HRE is stronger.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Mongol mobility is frustrating for HRE infantry, but HRE defenses are strong.',
        keyTips: [
          'Wall and build Outposts on key resources — slow the Mongol raids.',
          'Prelate inspiring villagers gives a huge eco advantage vs Mongol pastures.',
          'Don\'t chase Horsemen — let them come to your defensive setup.',
          'Regnitz Cathedral goldmine: secure relics to outscale the nomadic Mongols.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'MAA can push into Longbows if supported — but it\'s a micro-intensive fight.',
        keyTips: [
          'MAA can tank Longbow fire well — push aggressively into their range.',
          'Use Emergency Repairs on your forward buildings to sustain the push.',
          'Add Crossbowmen to support MAA vs Longbows.',
          'Secure relics early — Regnitz Cathedral outscales English farms in gold.',
        ],
      },
      {
        opponentCivId: 'delhi',
        favorability: 'Favorable',
        summary: 'Rush Delhi before their War Elephants come online — they are very slow early.',
        keyTips: [
          'MAA rush hits Delhi at their weakest point.',
          'Target Mosques to slow their Scholar-speed research.',
          'Prelate vs Scholar — both heal and buff, fight for control of the area.',
          'If they get Elephants, use Bombards in Castle Age to delete them from range.',
        ],
      },
      {
        opponentCivId: 'chinese',
        favorability: 'Even',
        summary: 'MAA rush can work before Nest of Bees, but Chinese late game is very strong.',
        keyTips: [
          'Kill the Imperial Official early — it\'s a huge income disruption.',
          'Group units loosely to avoid Nest of Bees AoE devastation.',
          'Prelate inspiring villagers keeps pace with Chinese Imperial Official taxing.',
          'Secure Regnitz relics fast — outscale their gold income.',
        ],
      },
    ],
  },

  {
    civId: 'mongols',
    generalTips: [
      'Mongol momentum wins games — if you\'re not raiding, you\'re losing.',
      'Never fight on the enemy\'s terms — always raid, disengage, and re-engage.',
      'Ovoo positioning is critical — place it near your most important production buildings.',
      'Khan abilities change the tide of battles — use Speed Arrow and Maneuver Arrow constantly.',
    ],
    keyUnits: ['Khan', 'Horsemen', 'Mangudai', 'Traction Trebuchet'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Horsemen outrun Longbowmen and can raze English resources before walls go up.',
        keyTips: [
          'Raid the English woodline first — they need wood for Archery Ranges.',
          'Never chase the King — his aura reduces incoming damage.',
          'If English walls up, use Mangudai to snipe resource buildings from outside.',
          'Mobility keeps you safe from Longbow volleys — always stay moving.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Both are cavalry-aggressive civs. Khan vs Royal Knight is the key duel.',
        keyTips: [
          'French Knights are tankier — don\'t trade even; hit and run instead.',
          'Use Khan Speed Arrow to outrun French if a fight turns bad.',
          'Target French Traders — destroying their economy is devastating.',
          'Mangudai fire while moving — use this to kite Royal Knights.',
        ],
      },
      {
        opponentCivId: 'delhi',
        favorability: 'Favorable',
        summary: 'Delhi is very slow early — Mongols can end the game before their tech pays off.',
        keyTips: [
          'Raid their Mosques to prevent Scholar research acceleration.',
          'Kill off their Scholars — without them, Delhi tech is extremely slow.',
          'Horsemen can kite War Elephants forever — never let elephants reach your units.',
          'Move Ovoo frequently to stay near the action — constant map presence wins.',
        ],
      },
      {
        opponentCivId: 'byzantines',
        favorability: 'Unfavorable',
        summary: 'Byzantine walls and Greek Fire negate Mongol mobility — they excel in defense.',
        keyTips: [
          'Don\'t slam into walled positions — use Traction Trebuchets to break walls first.',
          'Target undefended resource patches away from their walls.',
          'Greek Fire projectors have limited range — lure them out before attacking.',
          'Relocate your base if they push out — use Mongol mobility to deny their advance.',
        ],
      },
      {
        opponentCivId: 'ottoman',
        favorability: 'Favorable',
        summary: 'Ottomans need time for Military School to pay off — Mongols don\'t give time.',
        keyTips: [
          'Raid before Janissaries are researched and produced.',
          'Military School output early is weak — punish this window.',
          'Destroy their Military School buildings with Traction Trebuchets if possible.',
          'Keep pressure to deny Ottoman economic growth.',
        ],
      },
    ],
  },

  {
    civId: 'chinese',
    generalTips: [
      'Chinese peak in Castle and Imperial Age — play safe and boom until then.',
      'Always keep your Imperial Official taxing — idle IO is dead gold.',
      'Nest of Bees fire rockets devastate grouped armies — position them behind your front line.',
      'Dynasty units offer flexible tactical options — switch based on what your opponent is doing.',
    ],
    keyUnits: ['Imperial Official', 'Nest of Bees', 'Grenadier', 'Fire Lancer'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Unfavorable',
        summary: 'English early pressure comes before Chinese economy fully ramps up.',
        keyTips: [
          'Wall your base early — Chinese walls are efficient. Buy time for your eco.',
          'TC fire + Spearmen can hold off early MAA rushes.',
          'Get Nest of Bees out ASAP — they shred grouped longbowmen formations.',
          'Your late game is better — survive early and you win.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol raids hit Chinese while they\'re still ramping their economy.',
        keyTips: [
          'Wall and use Great Wall landmark bonus for stronger fortifications.',
          'Keep Imperial Official safe — losing it is a major income setback.',
          'Nest of Bees area damage counters Mongol horsemen clustering.',
          'Traction Trebuchets can\'t siege your walls if you repair faster than they fire.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'French Knights threat is real, but Chinese Spearmen + Nest of Bees combo is effective.',
        keyTips: [
          'Mass Spearmen in Feudal to counter Knight rush — it\'s cheap and very effective.',
          'Nest of Bees behind Spearmen line = devastating composition.',
          'Kill French Traders to cripple their late-game income.',
          'Don\'t let knights near the Imperial Official — micro it away from the fight.',
        ],
      },
      {
        opponentCivId: 'abbasid',
        favorability: 'Even',
        summary: 'Both civs are booming civs — the player with better macro usually wins.',
        keyTips: [
          'Abbasid Golden Age cuts research time — don\'t fall behind on tech.',
          'Camel Archers counter your cavalry — use Grenadiers and infantry instead.',
          'Your Nest of Bees fire outranges Abbasid siege options — use it aggressively.',
          'Both civs scale well — fight over relics and landmarks for decisive advantages.',
        ],
      },
      {
        opponentCivId: 'rus',
        favorability: 'Favorable',
        summary: 'Chinese walls and boom out-economize Rus hunting income in the long run.',
        keyTips: [
          'Wall your woodline to deny Rus hunt raiding.',
          'Imperial Official out-generates Rus Bounty system in a stable economy.',
          'Streltsy deal extra damage to grouped units — keep yours spread out.',
          'Nest of Bees counter Streltsy\'s Siege Mode grouping perfectly.',
        ],
      },
    ],
  },

  {
    civId: 'abbasid',
    generalTips: [
      'Wing order matters — Military Wing for aggression, Trade Wing for fast castle, Culture Wing for eco.',
      'Camel Riders are your strongest card vs cavalry civs — produce them as your primary response.',
      'Golden Age discount stacks — research all your tech fast once active.',
      'House of Wisdom is your most valuable building — protect it at all costs.',
    ],
    keyUnits: ['Camel Rider', 'Camel Archer', 'Ghulam', 'Mangonel'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Favorable',
        summary: 'Camel Riders completely neutralize French Knights — one of the best hard-counters in the game.',
        keyTips: [
          'Rush Military Wing and produce Camels before French Knights mass.',
          'Camel aura reduces nearby cavalry movement — French Knights become slow.',
          'Add Archers to handle Crossbowmen that French will pivot to.',
          'Golden Age research: get Camel upgrades immediately for maximum effectiveness.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Camel Riders counter Mongol cavalry, but Mangudai can kite Camels.',
        keyTips: [
          'Camel Riders chase down Horsemen effectively — use them aggressively.',
          'Don\'t let Mangudai kite your Camels — add ranged units to protect them.',
          'Protect House of Wisdom from raids — it\'s your most critical building.',
          'Trade Wing lets you fast-castle away from Mongol pressure.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Neither side has a strong advantage — it comes down to build timing and execution.',
        keyTips: [
          'Camel Archers can outrange and outmaneuver English positions.',
          'Avoid clumping — Longbow Volley ability crushes grouped armies.',
          'Military Wing into early pressure can disrupt English Council Hall setup.',
          'If they wall up, use Mangonel to break through and reach their eco.',
        ],
      },
      {
        opponentCivId: 'delhi',
        favorability: 'Even',
        summary: 'Both civs rely on unique mechanics — Camel Riders vs Delhi Scholars and Elephants.',
        keyTips: [
          'Rush before Delhi War Elephants come online.',
          'Camel Riders don\'t fear melee infantry — use them to raid and retreat.',
          'Delhi free tech will eventually outscale you — stay aggressive.',
          'Target Mosques to slow Delhi Scholar research acceleration.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Favorable',
        summary: 'Camel Riders disrupt HRE MAA pushes and the flexible wing system adapts well.',
        keyTips: [
          'Camel aura slows HRE MAA movement — kite them endlessly.',
          'Kill Prelates — without them HRE eco and army healing collapses.',
          'Trade Wing fast castle bypasses HRE\'s best Feudal Age timing.',
          'Culture Wing research bonus outpaces HRE Prelate inspiration in late game.',
        ],
      },
    ],
  },

  {
    civId: 'delhi',
    generalTips: [
      'ALWAYS place Scholars in Mosques — Delhi without Scholars is half a civ.',
      'Prioritize Feudal Age research with Scholars so tech is done by mid-Castle Age.',
      'War Elephants lose to massed archers and Bombards — never send them alone.',
      'Tower of Victory attack speed buff is powerful — fight near it when defending.',
    ],
    keyUnits: ['War Elephant', 'Scholar', 'Tower War Elephant', 'Ghazi Raider'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Unfavorable',
        summary: 'English early pressure comes before Delhi research pays off.',
        keyTips: [
          'Build a Barracks early and produce Spearmen — they\'re cheap and fast.',
          'Scholars heal units in combat — keep them behind your Spearmen line.',
          'Survive to Castle Age — your tech advantage becomes overwhelming.',
          'Tower of Victory attack speed buff helps hold your base vs MAA rushes.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility kills Scholars and Scholars are the lifeblood of Delhi.',
        keyTips: [
          'Wall your Mosques — Mongols will target Scholars and Mosques to cripple your tech.',
          'Ghazi Raiders can raid back — use them to punish Mongol overextension.',
          'War Elephants can\'t catch Horsemen — avoid deploying them alone vs cavalry.',
          'If you can survive the early game, free Castle Age tech creates massive unit advantages.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Both civs scale well — Delhi free tech vs French cavalry economy.',
        keyTips: [
          'Camel-like Scholar healing counters French sustained cavalry pushes.',
          'Mass Spearmen to protect Scholars from Royal Knight charges.',
          'Get free Plate Armor ASAP — makes all infantry significantly tankier.',
          'Castle Age War Elephant timing can overwhelm French Knight armies.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Unfavorable',
        summary: 'HRE MAA rush hits before Delhi tech comes online — a very hard early matchup.',
        keyTips: [
          'Ghazi Raiders are fast and good for counterpressure — send them into HRE base.',
          'Scholars heal MAA too if captured near them — prioritize Scholar safety.',
          'Survive to Elephants — War Elephants demolish HRE armies.',
          'If they get relics in Regnitz Cathedral, you need to destroy it or match with economy.',
        ],
      },
      {
        opponentCivId: 'byzantines',
        favorability: 'Unfavorable',
        summary: 'Byzantine defense negates Delhi\'s offensive strengths — Greek Fire burns Elephants.',
        keyTips: [
          'Greek Fire projectors kill Elephants quickly — destroy them before advancing.',
          'Use free Siege tech to mass Trebuchets for wall destruction.',
          'Scholar healing can counter-attrition Byzantine defensive units.',
          'Ghazi Raider harassment buys time while you tech up to better options.',
        ],
      },
    ],
  },

  {
    civId: 'rus',
    generalTips: [
      'Scout the map immediately — find all deer herds for maximum early Bounty gold.',
      'Streltsy Siege Mode is one of the most powerful shots in the game — use it against grouped armies.',
      'High Trade House gives 3 free traders — always find the longest trade route.',
      'Kremlin towers auto-attack — build it where enemies are likely to attack.',
    ],
    keyUnits: ['Streltsy', 'Horse Archer', 'Warrior Monk', 'Lodya Attack Ship'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Streltsy vs Longbowmen is a ranged standoff — positioning decides the fight.',
        keyTips: [
          'Streltsy Siege Mode shot counters Longbow Volley grouping perfectly.',
          'Horse Archers can flank English Longbows while Streltsy draw their fire.',
          'Hunt all deer to deny English Bounty raiding opportunities.',
          'Build Kremlin on a key defensive point — it discourages English flanks.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Knight charge devastates Streltsy who are weak in melee range.',
        keyTips: [
          'Mass Spearmen to protect Streltsy from Royal Knight charges.',
          'Horse Archers kite French Knights effectively — use them for harassment.',
          'Kremlin walls slow French cavalry raids on your eco.',
          'Warrior Monks heal nearby units — sustain fights near them.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Both are mobile, map-control civs — early hunting and raiding tempo matters most.',
        keyTips: [
          'Race to deer herds — Bounty gold is the lifeblood of both civs early.',
          'Horse Archers can trade with Mongol Horsemen reasonably well.',
          'Protect your traders — Mongols love raiding trade routes.',
          'Kremlin towers help hold your base while you raid back.',
        ],
      },
      {
        opponentCivId: 'chinese',
        favorability: 'Unfavorable',
        summary: 'Chinese walls and late-game siege outscale Rus in drawn-out games.',
        keyTips: [
          'Raid aggressively to prevent Chinese TC expansion.',
          'Target Imperial Officials — they are the engine of Chinese economy.',
          'Streltsy Siege Mode counters Nest of Bees clustering.',
          'Don\'t let the game go to Imperial Age — Chinese gunpowder becomes too strong.',
        ],
      },
      {
        opponentCivId: 'ottoman',
        favorability: 'Favorable',
        summary: 'Rus early hunting economy beats Ottoman Military School passive ramp-up in timing.',
        keyTips: [
          'Apply Horsemen/Horse Archer pressure before Janissaries are upgraded.',
          'Military School units die to Streltsy Siege Mode quickly.',
          'Target Ottoman villagers to slow the economy feeding the Military School.',
          'Kremlin defense holds any Ottoman late-game counter-attack.',
        ],
      },
    ],
  },

  {
    civId: 'ottoman',
    generalTips: [
      'Military School NEVER stops producing — even 1-2 free units per minute adds up massively.',
      'Upgrade your Military School output buildings as fast as possible for better free units.',
      'Grand Vizier tokens provide HUGE situational bonuses — learn what each does and use them at the right moment.',
      'Great Bombard crushes fortifications — use it to crack any walled base open.',
    ],
    keyUnits: ['Janissary', 'Great Bombard', 'Sipahi', 'Military School units'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Knight rush arrives before Ottoman Military School ramps up.',
        keyTips: [
          'Build a Barracks immediately and produce Spearmen to counter early knights.',
          'Military School units die fast to Royal Knights — don\'t rely on them early.',
          'Sipahi cavalry in Feudal/Castle Age can counter-raid French traders.',
          'Survive to Janissaries — they are one of the strongest Castle Age units.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'English Longbows hurt Ottoman free units, but Janissaries close the range quickly.',
        keyTips: [
          'Military School units can absorb Longbow fire while Janissaries advance.',
          'Janissary melee ability closes quickly on Longbow positions.',
          'Great Bombard destroys Council Hall — removing it cripples English production.',
          'Mehmed Imperial Army provides a free massive force — time it for a decisive push.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol raids disrupt Ottoman economy before Military School pays off.',
        keyTips: [
          'Wall your base quickly — Mongols exploit open Ottoman bases.',
          'Military School units are free defenders while you boom.',
          'Sipahi cavalry can counter-raid Mongol pastures.',
          'Survive to Janissaries and Great Bombard — then the power shifts.',
        ],
      },
      {
        opponentCivId: 'rus',
        favorability: 'Unfavorable',
        summary: 'Rus Streltsy Siege Mode is devastating against grouped Ottoman armies.',
        keyTips: [
          'Spread your units to avoid Streltsy Siege Mode AoE.',
          'Sipahi cavalry can flank Streltsy formations.',
          'Military School gives constant free units — use them to probe Rus defenses.',
          'Great Bombard destroys Kremlin towers quickly — remove their defensive advantage.',
        ],
      },
      {
        opponentCivId: 'byzantines',
        favorability: 'Favorable',
        summary: 'Great Bombard is the perfect answer to Byzantine walls and Greek Fire.',
        keyTips: [
          'Bombard Greek Fire projectors first before advancing infantry.',
          'Military School free units can tank fire while Bombards destroy walls.',
          'Janissaries are strong enough to beat most Byzantine Mercenaries in melee.',
          'Mehmed Imperial Army + Great Bombard = unstoppable late-game siege combo.',
        ],
      },
    ],
  },

  {
    civId: 'japanese',
    generalTips: [
      'Samurai counter ALL unique units — build them whenever you see unique units from the opponent.',
      'Buddhist Monks heal units in combat — keep them behind your front line always.',
      'Yoroi armor units are extremely tanky — leverage them in chokepoint fights.',
      'Floating Gate generates income — protect it like your second TC.',
    ],
    keyUnits: ['Samurai', 'Onna-Musha', 'Buddhist Monk', 'Katana Bannerman'],
    matchups: [
      {
        opponentCivId: 'mongols',
        favorability: 'Favorable',
        summary: 'Samurai counter Khan (a unique unit) — and Japanese defenses hold Mongol raids well.',
        keyTips: [
          'Samurai delete Khan quickly — target it as a priority in battles.',
          'Wall and use Yoroi defenders in towers against Horsemen raids.',
          'Buddhist Monk healing keeps your garrisoned defenders alive longer.',
          'Mangudai are standard archers — counter with your own archers or Samurai.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'French Royal Knights are unique units — Samurai counter them effectively.',
        keyTips: [
          'Samurai take reduced damage from and deal bonus damage to Royal Knights.',
          'Support Samurai with Onna-Musha for a balanced melee composition.',
          'Buddhist Monks heal during the fight — sustain your army through Royal Knight charges.',
          'Floating Gate income lets you rebuild faster after costly engagements.',
        ],
      },
      {
        opponentCivId: 'delhi',
        favorability: 'Favorable',
        summary: 'Samurai counter Delhi\'s War Elephants (unique unit) — the matchup is heavily favored.',
        keyTips: [
          'Samurai deal bonus damage to War Elephants — mass them specifically.',
          'Buddhist Monks out-heal Delhi Scholar healing in extended fights.',
          'Target Mosques with siege to slow Delhi tech.',
          'Be careful of Delhi free upgrades making their Scholars and infantry tankier over time.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Unfavorable',
        summary: 'English Longbowmen delete Japanese infantry from extreme range before they can close.',
        keyTips: [
          'Force fights in forests or tight terrain where Longbow range matters less.',
          'Samurai are melee — use cavalry to flank Longbow lines.',
          'Buddhist Monk healing partially counters sustained Longbow fire.',
          'Onna-Musha cavalry can charge into Longbow formations.',
        ],
      },
      {
        opponentCivId: 'byzantines',
        favorability: 'Even',
        summary: 'Both civs are defensive powerhouses — the fight is usually won by who attacks first.',
        keyTips: [
          'Samurai vs Byzantine Mercenaries — Samurai win if Mercenaries are "unique" units.',
          'Your Buddhist Monk healing outpaces Byzantine Greek Fire burn damage.',
          'Japanese siege options can crack Byzantine walls — invest in Mangonels.',
          'Both civs scale into late game — focus on relic and landmark control.',
        ],
      },
    ],
  },

  {
    civId: 'byzantines',
    generalTips: [
      'Greek Fire projectors are YOUR answer to any cavalry or grouped army — place them on walls at chokepoints.',
      'Mercenaries are powerful but expensive — contract them only when you can afford to.',
      'Limitanei defenders in towers are essentially free garrison troops — always use them.',
      'Cistern of the First Hill heals nearby units — park your army nearby between fights.',
    ],
    keyUnits: ['Greek Fire Projector', 'Cataphract', 'Varangian Guard (Mercenary)', 'Limitanei'],
    matchups: [
      {
        opponentCivId: 'ottoman',
        favorability: 'Unfavorable',
        summary: 'Great Bombard destroys Byzantine walls quickly — their main defensive advantage.',
        keyTips: [
          'Build walls deep and in layers — Great Bombard needs time to break through.',
          'Greek Fire projectors target Bombards if in range — protect your projectors.',
          'Contract Mercenaries before the siege begins — fight the Ottoman army outside walls.',
          'Cataphract cavalry can flank Great Bombard positions before they fire.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Favorable',
        summary: 'Byzantine walls and Greek Fire negate Mongol mobility advantages entirely.',
        keyTips: [
          'Wall up every resource — Mongols hate when they can\'t raid freely.',
          'Greek Fire burns Horsemen groups trying to raid through your walls.',
          'Let Mongols overpush into your Greek Fire, then counter-attack with Cataphracts.',
          'Limitanei defenders in towers force Mongols to commit to a fight instead of raiding.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Both civs are defensive — usually a long macro game that goes to Imperial Age.',
        keyTips: [
          'English farms never run out — you need to win decisively before they outscale you.',
          'Greek Fire burns through English infantry and Longbow formations.',
          'Varangian Guard Mercenaries can tank Longbow volleys effectively.',
          'Cataphracts counter MAA — keep them for English infantry pushes.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Greek Fire projectors hard-counter French Knight charges into your base.',
        keyTips: [
          'Position Greek Fire projectors at your main base entrance — Knights will charge in.',
          'Cataphracts are strong cavalry — use them to counter-attack when French overextend.',
          'Mercenary Ghulam/Varangian Guard handles French Arbalétrier well.',
          'Contract Mercenaries before Castle Age — have them ready for the French timing attack.',
        ],
      },
      {
        opponentCivId: 'japanese',
        favorability: 'Even',
        summary: 'Both civs peak defensively — whichever attacks first usually loses.',
        keyTips: [
          'Samurai deal bonus damage to unique units — avoid sending Cataphracts in alone.',
          'Greek Fire burns through Japanese Samurai formations.',
          'Mercenaries are NOT unique units — they don\'t take bonus damage from Samurai.',
          'Sustain pressure and use Limitanei to bog down Japanese advances.',
        ],
      },
    ],
  },

  {
    civId: 'malians',
    generalTips: [
      'Cattle multiply — don\'t slaughter them early. Let herds grow for sustainable food income.',
      'Pit Mines have more gold than standard deposits — always prioritize building them.',
      'Farimba Garrison buff (+2 attack to nearby cavalry) changes cavalry fights decisively — keep cavalry near it.',
      'Donso Skirmisher nets slow cavalry — excellent for catching French Knights or Mongol Horsemen.',
    ],
    keyUnits: ['Farimba Cavalry', 'Donso Skirmisher', 'Musofadi Warrior', 'Griot Bara'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Malian Donso nets can slow French Knights, but French cavalry is still a major threat.',
        keyTips: [
          'Donso net ability slows Royal Knights — deploy them to protect your cavalry.',
          'Farimba-buffed cavalry can match French Knights if positioned near the Garrison.',
          'Build Pit Mines early — out-gold France and sustain larger armies.',
          'Don\'t let French Traders operate freely — your Musofadi Warriors can raid their routes.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Unfavorable',
        summary: 'English Longbows outrange and outpace Malian melee cavalry.',
        keyTips: [
          'Use Musofadi Warriors for hit-and-run raids on English resources.',
          'Force fights in forests/terrain to negate Longbow range advantage.',
          'Farimba cavalry flanks are effective if you can avoid Longbow volleys.',
          'Pit Mine gold advantage lets you sustain larger armies to overwhelm English numbers.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Both are cavalry-oriented civs — Donso nets are a major advantage here.',
        keyTips: [
          'Donso nets on Mongol Horsemen effectively removes their mobility advantage.',
          'Farimba cavalry can fight Mongol cavalry even — but avoid Mangudai kiting.',
          'Cattle give passive food — Mongols can\'t easily disrupt your food income.',
          'Musofadi Warriors can counter-raid Mongol pastures and Ger buildings.',
        ],
      },
      {
        opponentCivId: 'byzantines',
        favorability: 'Unfavorable',
        summary: 'Byzantine walls and Greek Fire counter Malian cavalry charges.',
        keyTips: [
          'Donso nets are useless against buildings — focus on siege tools to crack walls.',
          'Musofadi Warriors can target Greek Fire projectors if you get close enough.',
          'Farimba cavalry will die to Greek Fire if they charge into Byzantine walls.',
          'Griot Bara economic buildings: secure them safely away from Byzantine raids.',
        ],
      },
    ],
  },

  {
    civId: 'ayyubids',
    generalTips: [
      'Wings give you instant age-up ability — pick Trade Wing for the fastest Castle Age in the game.',
      'Camel Archers are mobile and devastating — they require constant micro but reward it.',
      'Tower Rush is a viable all-in — Ayyubids can forward their House of Wisdom components.',
      'Don\'t spread your wings randomly — pick 2-3 complementary wings for maximum synergy.',
    ],
    keyUnits: ['Camel Archer', 'Atabeg (unique tower)', 'Ghulam', 'Mangonel'],
    matchups: [
      {
        opponentCivId: 'french',
        favorability: 'Favorable',
        summary: 'Trade Wing fast castle bypasses French Knight rush — Camel Archers shred cavalry.',
        keyTips: [
          'Trade Wing age-up is nearly instant — you reach Castle Age before Knights mass.',
          'Camel Archers kite Royal Knights effectively — use micro to stay out of charge range.',
          'Ghulam infantry handles French Crossbowmen that counter Camels.',
          'Instant age-up means you get Castle Age units earlier than French can respond.',
        ],
      },
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Camel Archers vs Longbowmen is a micro-heavy ranged standoff.',
        keyTips: [
          'Camel Archers out-move Longbows — flank and maintain distance.',
          'Avoid Longbow Volley clusters — Camel Archers take heavy AoE damage.',
          'Military Wing pressure can hit before English establishes double range.',
          'Fast Castle with Trade Wing often surprises English players.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Both are mobile, aggressive civs — map control and wing timing determine the outcome.',
        keyTips: [
          'Camel Archers match Mangudai in mobility — fight them at range.',
          'Protect your House of Wisdom wings — Mongols love to raid key buildings.',
          'Military Wing units can defend against early Horsemen raids.',
          'Trade Wing economy generates more gold than Mongol pastures in mid-game.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Favorable',
        summary: 'Ayyubid fast castle timing skips the HRE MAA rush window entirely.',
        keyTips: [
          'Trade Wing fast castle means you\'re in Castle Age before HRE MAA can pressure.',
          'Camel Archers kite MAA forever — HRE infantry can\'t catch mobile cavalry.',
          'Kill Prelates with Camel Archers — HRE economy collapses without them.',
          'Mangonel AoE crushes HRE infantry blobs effectively.',
        ],
      },
    ],
  },

  {
    civId: 'order-of-the-dragon',
    generalTips: [
      'Gilded units are stronger versions of standard units — they cost more but win fights.',
      'Dragon Fire burns buildings and units — it\'s devastating in siege situations.',
      'Aachen Chapel + Dragon synergies provide powerful economic and military boosts.',
      'All-in timings are your strength — pick a Castle Age timing and commit hard.',
    ],
    keyUnits: ['Gilded Man-at-Arms', 'Gilded Crossbowman', 'Gilded Knight', 'Dragon Fire (siege)'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Gilded MAA are tough enough to push into Longbow fire with support.',
        keyTips: [
          'Gilded MAA take less damage than standard — push through Longbow volleys.',
          'Gilded Crossbowmen counter Longbowmen at range.',
          'Dragon Fire on Council Hall removes English faster longbow production.',
          'Aachen Chapel Prelate healing keeps Gilded units alive in sustained fights.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Gilded Knights match Royal Knights — charge vs charge is a close fight.',
        keyTips: [
          'Gilded Knights have extra HP — use this advantage in direct confrontations.',
          'Avoid losing your Gilded units — they\'re expensive to replace.',
          'Dragon Fire on French Stables delays Knight production.',
          'Gilded Crossbowmen as backup: French will switch to Arbalétrier if you go all-cavalry.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility counters Dragon\'s expensive, slow-replaced Gilded units.',
        keyTips: [
          'Don\'t send Gilded units into a raid trap — they\'re too expensive to lose.',
          'Build walls and defensive structures to slow Mongol raids.',
          'Dragon Fire on Mongol Ger buildings forces them to replace production.',
          'Gilded MAA can hold your base against Horsemen if positioned correctly.',
        ],
      },
    ],
  },

  {
    civId: 'zhu-xi',
    generalTips: [
      'Shaolin Monks buff nearby units with +armor and healing — keep them in every fight.',
      'Forest Warden cavalry are powerful raiders — use them for early map harassment.',
      'Imperial Academy provides powerful unique technologies — research them as fast as possible.',
      'Your early game is weak — survive with defensive positioning until Shaolin Monks are massed.',
    ],
    keyUnits: ['Shaolin Monk', 'Forest Warden', 'Zhuge Nu', 'Imperial Guard'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Shaolin healing and armor buffs give your infantry survivability vs Longbows.',
        keyTips: [
          'Shaolin Monks near your infantry reduce Longbow damage significantly.',
          'Forest Wardens can raid English resources while they focus on Longbow production.',
          'Zhuge Nu crossbowmen out-sustain English Longbows with Shaolin backup.',
          'Imperial Guard infantry are very tanky — use them as your main battle force.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Knights charge disrupts Shaolin Monk formation — your key support dies.',
        keyTips: [
          'Protect Shaolin Monks with Imperial Guard shields — never let Knights reach them.',
          'Forest Wardens can trade with Royal Knights effectively.',
          'Wall your Monks inside your base and fight from a defensible position.',
          'Imperial Academy tech advantage grows over time — survive early and you scale.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol raids are hard to respond to — Shaolin Monks are too slow for mobile warfare.',
        keyTips: [
          'Wall your critical buildings — Shaolin Monks can\'t heal on the move.',
          'Forest Wardens can counter-raid Mongol Pastures.',
          'Zhuge Nu against Horsemen formations — the rapid-fire crossbows shred light cavalry.',
          'Survive to Imperial Age — Zhu Xi late-game tech is very powerful.',
        ],
      },
      {
        opponentCivId: 'hre',
        favorability: 'Even',
        summary: 'Shaolin healing vs Prelate healing — both civs have strong unit sustain.',
        keyTips: [
          'Your healing from Shaolin Monks matches Prelate inspiration in sustained fights.',
          'Imperial Guard vs HRE MAA: a close fight — add Zhuge Nu for ranged support.',
          'Kill Prelates — HRE collapses without them.',
          'Academy tech: get upgrades that increase armor for sustained fight advantage.',
        ],
      },
    ],
  },

  // ── JEANNE D'ARC ──────────────────────────────────────────────────────────
  {
    civId: 'jeanne-darc',
    generalTips: [
      'Protect Jeanne at all costs — her death stalls your entire strategy.',
      'Use Jeanne to gather resources early; every eco action generates hero XP.',
      'Level 3 companion choice shapes the mid-game — Riders vs Champions alters your army identity.',
      'Economy techs at 35% cheaper mean Wheelbarrow and Double Broadax pay off extremely early.',
    ],
    keyUnits: ["Jeanne d'Arc (hero)", "Jeanne's Champion", "Jeanne's Rider", 'Arbalétrier', 'Royal Knight'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Jeanne\'s mobility and Royal Knights pressure English Longbowmen before they can set up a defensive perimeter.',
        keyTips: [
          'Use Jeanne at Level 2 (Archer path) to pick off Longbowmen from range while Knights distract.',
          'Level 3 Riders are ideal here — they counter Longbowmen charges and outrun English infantry.',
          'Target the Council Hall early — halving longbow production cripples English mid-game.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Mirror French economy but your hero gives you mid-game spike advantage. Both have Royal Knights.',
        keyTips: [
          'Your 35% eco tech discount lets you out-boom standard French slightly — prioritize that.',
          'Use Jeanne\'s Divine Restoration to sustain your army in knight mirror fights.',
          'Reach Level 4 before your opponent hits Castle Age peak — the ultimate ability is a game-changer.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility and Horsemen raids threaten Jeanne if she is isolated, and raiding disrupts your leveling curve.',
        keyTips: [
          'Keep Jeanne near your base early — lone hero in the open is a kill target for Horsemen.',
          'Use Level 2 MAA path to give Jeanne enough durability to survive Mongol skirmishes.',
          'Wall resources early; Mongol raids delay Jeanne\'s XP gain and slow your companion unlock.',
        ],
      },
    ],
  },

  // ── HOUSE OF LANCASTER ────────────────────────────────────────────────────
  {
    civId: 'house-of-lancaster',
    generalTips: [
      'Manors are your economic backbone — build them constantly from the Dark Age onward.',
      'Keeps are investments not just military but also combat damage buffs for Demilancers.',
      'Lancaster Castle levy ability is a free defensive surge — use it the moment you are under pressure.',
      'King\'s College -15% tech cost compounds massively in a long game — favor stable economies.',
    ],
    keyUnits: ['Lord of Lancaster', 'Demilancer', 'Earl\'s Guard', 'Yeoman', 'Hobelar'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Both English variants with overlapping unit rosters. Lancaster outscales in long games; English outpressures early.',
        keyTips: [
          'Your Yeomen have a longer range ability (Synchronized Shot) — use it to out-range base English Longbowmen when possible.',
          'The Lord of Lancaster health aura counters English\'s Volley burst — keep Lords near your front line.',
          'Don\'t let the game go long without walling — English Council Hall Longbow spam is a real threat.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Royal Knights arrive before Lancaster\'s Manor economy is online. Early pressure is dangerous.',
        keyTips: [
          'Build Hobelars immediately in Feudal Age — cheap, fast cavalry to screen against French Knight raids.',
          'Lancaster Castle levy gives free infantry on demand — trigger it the moment Knights approach.',
          'If you survive to Castle Age, Demilancers buffed by 3+ Keeps go toe-to-toe with Royal Knights.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility counters Lancaster\'s defensive passive economy — raids delay Manor income.',
        keyTips: [
          'Wall your Manors early — each one destroyed is a permanent economy loss.',
          'Hobelars can chase and harass Horsemen raiders — keep a few permanently on patrol.',
          'Focus the game on surviving Feudal Age and reaching Castle Age with Keeps; Mongols weaken in late game.',
        ],
      },
    ],
  },

  // ── KNIGHTS TEMPLAR ───────────────────────────────────────────────────────
  {
    civId: 'knights-templar',
    generalTips: [
      'Pilgrims are your economy — treat them like villagers: protect them with Fortresses and patrol units.',
      'Sacred Site control is mandatory; losing your Sacred Site halves your pilgrim income.',
      'Commanderie choices should be planned before the game starts — know which allies you want.',
      'Trebuchets on Fortress emplacements cover your perimeter — use them as a defensive wall of fire.',
    ],
    keyUnits: ['Templar Brother', 'Pilgrim', 'Hospitaller Knight', 'Genitour', 'Teutonic Knight (via Commanderie)'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Fortress walls and Trebuchet emplacements neutralize English defensive positioning. Pilgrims thrive behind a walled perimeter.',
        keyTips: [
          'Trebuchets on Fortress emplacements out-range English Longbowmen — safe siege pressure.',
          'Claim Sacred Sites with Hospitaller Knight escorts; English King cannot contest a fortified site.',
          'Templar Brothers\' heavy cavalry counters English MAA in head-to-head fights.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Both French-base civs with cavalry focus. Pilgrims are vulnerable to French Knight raids.',
        keyTips: [
          'Build a Fortress on the Pilgrim route early — it acts as a checkpoint that Knights must siege before reaching Pilgrims.',
          'Genitour cavalry counters French Crossbowmen support — add them in Castle Age.',
          'Choose French Commanderie in Feudal Age for cheaper cavalry to match their Knight pressure.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol cavalry raiders are the Templar\'s nightmare — Pilgrims die in seconds to Horsemen.',
        keyTips: [
          'Build Fortresses along Pilgrim route immediately — Horsemen cannot engage Fortified structures easily.',
          'Station Templar Brothers at the Fortress nearest the Sacred Site as permanent escorts.',
          'No gunpowder means Mongol massed archers can be hard to clear — Trebuchet emplacements are your answer.',
        ],
      },
    ],
  },

  // ── GOLDEN HORDE ──────────────────────────────────────────────────────────
  {
    civId: 'golden-horde',
    generalTips: [
      'Batch training is your strongest mechanic — never idle a production building; two units per cycle doubles your army speed.',
      'Khan\'s Warcry must be used at the start of every fight — it is free and powerful.',
      'Torguud shield the Khan from damage — always keep them together in combat.',
      'Keshik cavalry sustain through fights by regenerating HP from attacks — prioritize them in the composition.',
    ],
    keyUnits: ['Golden Horde Khan', 'Torguud', 'Kharash', 'Keshik', 'Kipchak Archer'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Batch-trained Horsemen and Kharash overwhelm English defensive setup before Longbowmen mass.',
        keyTips: [
          'Hit English with 4+ Kharash + 2 Horsemen (trained as pairs) before Longbowmen numbers build up.',
          'Khan Warcry into the fight — the HP and damage aura turns skirmishes into decisive wins.',
          'Kharash protective bonus buffs nearby units — keep them at the front to shield your Horsemen.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Both cavalry civs with strong Feudal pushes. Batch training gives slight army size edge; French Charge ability balances it.',
        keyTips: [
          'Your Horsemen train twice as fast as French Knights — overwhelm with numbers in early Feudal Age.',
          'Kharash protective bonus partially offsets the French Charge burst damage.',
          'If French masses Crossbowmen support, add Kipchak Archers (bleed effect) to counter them.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Base Mongols have superior mobility and nomadic flexibility — Golden Horde\'s fixed Golden Tent is a strategic liability.',
        keyTips: [
          'Your batch army is larger — win through raw attrition rather than raiding skirmishes.',
          'Avoid chasing Mongol Horsemen; hold your ground and force them to engage your massed Keshik.',
          'Protect the Golden Tent at all costs — it is your age-up and Edict hub; losing it is catastrophic.',
        ],
      },
    ],
  },

  // ── MACEDONIAN DYNASTY ────────────────────────────────────────────────────
  {
    civId: 'macedonian-dynasty',
    generalTips: [
      'Place Varangian Arsenal adjacent to Mining Camps from the very start — Silver flow is your tech engine.',
      'Arsenal technologies exceed per-age limits — research them every age for compounding combat power.',
      'Carve Runestones after every battle won — the permanent bonuses compound throughout the match.',
      'Riddari axe throw is a ranged ability before melee — always lead with it to soften targets.',
    ],
    keyUnits: ['Atgeirmaðr', 'Bogmaðr', 'Riddari', 'Cataphract', 'Cheirosiphon Ram'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Even',
        summary: 'Arsenal upgrades eventually out-tech English units, but English Longbowmen threaten Varangian melee-heavy compositions.',
        keyTips: [
          'Bogmaðr steady-bow ability pierces armor — use it against English MAA to bypass their armor advantage.',
          'Riddari axe throw before melee disrupts English Longbow formations before they fire Volley.',
          'Get early Arsenal tech research to exceed English Blacksmith upgrade timing.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Royal Knights arrive before Silver economy is meaningful. Early Feudal pressure is dangerous.',
        keyTips: [
          'Atgeirmaðr (Varangian spearmen) counter cavalry — train them early specifically to hold off French Knights.',
          'Protect your Mining Camps — French knights target resource camps; losing mines kills Silver income.',
          'If you survive to Castle Age, Cataphract group charge tramples French cavalry compositions.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility hits your mines repeatedly, crippling Silver generation before Arsenal techs come online.',
        keyTips: [
          'Build walls around your Mining Camps — Horsemen raiding mines is an existential threat to your strategy.',
          'Varangian Warcamp provides free reinforcements — use them as defensive mine guards.',
          'Bogmaðr ranged infantry can kite Horsemen if micromanaged — keep them separated from melee.',
        ],
      },
    ],
  },

  // ── SENGOKU DAIMYO ────────────────────────────────────────────────────────
  {
    civId: 'sengoku-daimyo',
    generalTips: [
      'Commit to your clan choice early — Oda (ranged), Takeda (cavalry), Hojo (melee) defines your army identity.',
      'Ikko-Ikki Monks heal the entire army on hit — they are more effective attacking than standing idle.',
      'Yatai units are infinite food — always station them near food sources for a sustainable late-game eco.',
      'Daimyo hero units boost attack speed even after they fall — do not retreat them to keep the buff active.',
    ],
    keyUnits: ['Daimyo', 'Ikko-Ikki Monk', 'Kanabo Samurai', 'Tanegashima Ashigaru', 'Mounted Samurai Odachi'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Oda clan Tanegashima Ashigaru counter English Longbowmen in ranged duels; Ikko-Ikki healing sustains the push.',
        keyTips: [
          'Oda path: Tanegashima Ashigaru out-range and deal bonus damage to English MAA — ideal composition.',
          'Ikko-Ikki Monks behind your line heal the army through Longbow Volley bursts.',
          'Ozutsu explosive infantry devastate grouped Longbowmen positions — a perfect Castle Age opener.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Unfavorable',
        summary: 'French Royal Knights arrive before Daimyo Estates are fully built. Early cavalry pressure is dangerous.',
        keyTips: [
          'Hojo clan path gives melee infantry deflective armor — cheaper Knight countermeasure in early Feudal Age.',
          'Kanabo Samurai deal bonus damage proportional to enemy max HP — ideal against high-HP Royal Knights.',
          'Keep Ikko-Ikki Monks in combat constantly; their healing sustains your melee through Knight charge burst.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Even',
        summary: 'Takeda cavalry path mirrors Mongol mobility; Ikko-Ikki healing gives Sengoku sustain advantage in sustained fights.',
        keyTips: [
          'Takeda clan: Mounted Samurai Odachi deal bonus infantry damage — counter Keshik and Kharash compositions.',
          'Yatai food economy is mobile — reposition them if Mongols burn your food sources.',
          'Ikko-Ikki Monks in a cavalry-heavy Takeda army: keep them moving with the cavalry blob for constant healing.',
        ],
      },
    ],
  },

  // ── TUGHLAQ DYNASTY ───────────────────────────────────────────────────────
  {
    civId: 'tughlaq-dynasty',
    generalTips: [
      'Deploy Worker Elephants near every active resource camp — they boost drop-off efficiency passively.',
      'Research technologies immediately in every age — 5-second research is free tempo; never delay it.',
      'Choose Governors based on game plan: Uch for tech, Ajmer for free Amir Warriors, Sehwan for religious play.',
      'Raider Elephants deal AoE damage on trampling charges — lead with them into grouped infantry.',
    ],
    keyUnits: ['Worker Elephant', 'Raider Elephant', 'Ballista Elephant', 'Healer Elephant', 'Amir Warrior'],
    matchups: [
      {
        opponentCivId: 'english',
        favorability: 'Favorable',
        summary: 'Raider Elephant tramples counter English MAA groups; Healer Elephant sustains through Longbow Volley.',
        keyTips: [
          'Raider Elephants are immune to the Longbow Volley area effect spike — charge them directly into Longbow lines.',
          'Ballista Elephants pierce multiple units in a line — devastating against grouped English Longbowmen.',
          'Healer Elephant counters the English defensive heal-through strategy by sustaining your elephant charge.',
        ],
      },
      {
        opponentCivId: 'french',
        favorability: 'Even',
        summary: 'Raider Elephants are tanky but slow — French Knights can kite. Healer Elephant sustain helps in direct fights.',
        keyTips: [
          'Raider Elephant\'s trample hits Knights hard in melee range — force them into a direct fight rather than kiting.',
          'Governor of Ajmer Amir Warriors cost no population — use them to absorb French Knight charges away from Elephants.',
          'Research armor upgrades in 5 seconds — Tughlaq can tech-sprint ahead of French Blacksmith timing.',
        ],
      },
      {
        opponentCivId: 'mongols',
        favorability: 'Unfavorable',
        summary: 'Mongol mobility kites Elephants endlessly — Elephants are slow and Mongols can avoid engagement.',
        keyTips: [
          'Ballista Elephants have ranged attacks — use them to force Mongol Horsemen into range rather than chasing.',
          'Worker Elephants are targets for Horsemen raids — keep them close to buildings for protection.',
          'Instant research means you can get Plate Armor and heavy upgrades faster than Mongols can adapt — win through tech advantage in direct fights.',
        ],
      },
    ],
  },
];
