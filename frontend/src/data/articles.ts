export type ArticleBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; html: string }
  | { type: 'quote'; text: string };

export interface Article {
  slug: string;
  category: string;
  /** Titre complet en texte brut (sans balise). */
  title: string;
  /** Titre avec le fragment mis en italique laiton via <em>…</em>. */
  titleHtml: string;
  date: string;
  /** Durée affichée dans le hero de l'article, ex. "3 min de lecture". */
  readTime: string;
  /** Durée courte affichée dans la liste, ex. "3 min". */
  readTimeShort: string;
  /** Chapô court repris dans la liste du blog. */
  excerpt: string;
  /** Paragraphe d'introduction de l'article. */
  lead: string;
  /** Suite ordonnée des blocs du corps de l'article. */
  body: ArticleBlock[];
  ctaTitle: string;
  ctaLabel: string;
}

export const articles: Article[] = [
  {
    slug: 'decret-tertiaire',
    category: 'Transition énergétique',
    title: 'Décret tertiaire : transformer une obligation en économies',
    titleHtml: 'Décret tertiaire : transformer une <em>obligation</em> en économies',
    date: '28 mai 2026',
    readTime: '3 min de lecture',
    readTimeShort: '3 min',
    excerpt:
      "40 % de consommation en moins d'ici 2030. Derrière la contrainte réglementaire se cachent des leviers très concrets, du relamping LED au pilotage technique, pour réduire la facture sans tout reconstruire.",
    lead:
      "Le décret tertiaire impose au parc immobilier français une trajectoire de sobriété énergétique. Pour beaucoup de gestionnaires, c'est d'abord une contrainte. Pour qui s'y prend bien, c'est surtout une feuille de route vers des économies durables.",
    body: [
      { type: 'h2', text: 'Ce que dit la réglementation' },
      {
        type: 'p',
        html: "Issu de la loi ELAN et entré en vigueur avec le décret du 23 juillet 2019, le dispositif Éco Énergie Tertiaire concerne tous les bâtiments à usage tertiaire de plus de 1 000 m², publics comme privés. L'objectif est clair : réduire la consommation d'énergie finale de 40 % d'ici 2030, 50 % en 2040 et 60 % en 2050, par rapport à une année de référence choisie entre 2010 et 2019. Chaque année, avant le 30 septembre, les consommations doivent être déclarées sur la plateforme OPERAT, pilotée par l'ADEME, qui délivre une attestation et une note de performance.",
      },
      { type: 'h2', text: 'La première échéance se prépare maintenant' },
      {
        type: 'p',
        html: "2030 peut sembler lointain, mais la trajectoire se construit dès aujourd'hui. Les bâtiments les plus énergivores ne se redressent pas en une saison de travaux, et les prestataires sérieux sont déjà très sollicités. Anticiper, c'est éviter l'engorgement et lisser l'investissement sur plusieurs exercices.",
      },
      { type: 'h2', text: 'Trois leviers concrets' },
      {
        type: 'p',
        html: 'Atteindre ces objectifs ne suppose pas toujours de tout reconstruire. Trois leviers donnent souvent les meilleurs résultats au meilleur coût.',
      },
      {
        type: 'p',
        html: '<span class="lead-in">L\'éclairage.</span> Le passage en LED, ou relamping, reste l\'action au retour sur investissement le plus rapide. Au-delà de l\'économie d\'énergie, il améliore le confort visuel et réduit fortement la maintenance.',
      },
      {
        type: 'p',
        html: '<span class="lead-in">Le pilotage.</span> La gestion technique du bâtiment, ou GTB, encadrée par le décret BACS, automatise le chauffage, la ventilation, la climatisation et l\'éclairage. Elle traque les dérives et fait baisser la consommation dès la première année.',
      },
      {
        type: 'p',
        html: '<span class="lead-in">Les usages et le second œuvre.</span> Régler les équipements, traiter les déperditions, repenser les espaces : des actions souvent modestes qui, cumulées, pèsent lourd dans le bilan.',
      },
      {
        type: 'quote',
        text: "La conformité n'est pas une dépense. C'est le point de départ d'un bâtiment moins gourmand, plus confortable et mieux valorisé.",
      },
      { type: 'h2', text: 'Le décret BACS, complément du décret tertiaire' },
      {
        type: 'p',
        html: "Le décret BACS impose l'installation d'une GTB selon la puissance des installations de chauffage et de climatisation. Les sites dont la puissance dépasse 290 kW sont concernés depuis le 1er janvier 2025. Pour les bâtiments compris entre 70 et 290 kW, l'échéance, initialement prévue en 2027, a été reportée au 1er janvier 2030. Une exemption reste possible lorsque le retour sur investissement dépasse dix ans. Le report n'enlève rien à l'intérêt économique d'agir tôt.",
      },
      { type: 'h2', text: 'Notre rôle' },
      {
        type: 'p',
        html: "En tant que bureau d'études et de conseil tous corps d'état, notre métier consiste à transformer ces obligations en plan d'action réaliste. Audit du bâtiment, hiérarchisation des travaux par retour sur investissement, pilotage du chantier en site occupé, suivi des consommations : nous accompagnons chaque projet de l'étude à la livraison, avec un interlocuteur unique.",
      },
      {
        type: 'p',
        html: "Le décret tertiaire fixe le cap. La manière de l'atteindre se décide bâtiment par bâtiment. C'est précisément là que tout se joue.",
      },
    ],
    ctaTitle: 'Un bâtiment à mettre en conformité ? Parlons-en.',
    ctaLabel: 'Nous contacter',
  },
  {
    slug: 'relamping-led',
    category: 'Éclairage',
    title: "Relamping LED : bien plus qu'un changement d'ampoule",
    titleHtml: "Relamping LED : bien plus qu'un <em>changement</em> d'ampoule",
    date: '14 mai 2026',
    readTime: '3 min de lecture',
    readTimeShort: '3 min',
    excerpt:
      "Le relamping ne se résume pas à remplacer des sources. Pensé comme un projet, il combine économies d'énergie, confort visuel et maintenance allégée sur la durée.",
    lead:
      "Remplacer des tubes par des LED paraît anodin. En réalité, un relamping réussi se pense comme un projet, où l'économie d'énergie n'est que le premier des bénéfices.",
    body: [
      { type: 'h2', text: "Un gisement d'économies immédiat" },
      {
        type: 'p',
        html: "L'éclairage pèse lourd dans la facture électrique d'un bâtiment tertiaire. Passer à la LED réduit cette consommation de façon spectaculaire, souvent de moitié face à d'anciennes sources fluorescentes, davantage encore face à l'halogène. En ajoutant la détection de présence et la gradation selon la lumière du jour, le gain grimpe encore. C'est l'action dont le retour sur investissement est généralement le plus rapide d'un plan d'économies.",
      },
      { type: 'h2', text: 'La qualité de lumière, le vrai sujet' },
      {
        type: 'p',
        html: "Réduire les watts ne suffit pas. Une LED mal choisie fatigue les yeux, fausse les couleurs ou éblouit. Trois critères comptent autant que la puissance. La température de couleur, en kelvins, donne une ambiance plus chaude ou plus froide selon l'usage. L'indice de rendu des couleurs mesure la fidélité des teintes, essentiel dans un commerce ou un cabinet. La maîtrise de l'éblouissement, enfin, conditionne le confort dans les bureaux et les lieux de passage. Un bon relamping améliore le confort autant que la facture.",
      },
      { type: 'h2', text: 'Moins de maintenance, plus de tranquillité' },
      {
        type: 'p',
        html: "Une source LED dure des dizaines de milliers d'heures, loin devant ce qu'elle remplace. Pour un gestionnaire, cela veut dire moins d'interventions, moins de nacelles, moins de stocks de tubes à gérer. Sur un parc étendu ou des locaux difficiles d'accès, l'économie de maintenance pèse parfois autant que l'économie d'énergie.",
      },
      {
        type: 'quote',
        text: 'Un bon relamping ne se voit pas. Il se ressent : une lumière plus juste, une facture plus légère, des pannes plus rares.',
      },
      {
        type: 'p',
        html: "Changer une ampoule, tout le monde sait le faire. Concevoir un éclairage qui dure, qui éclaire juste et qui coûte moins, c'est un métier.",
      },
    ],
    ctaTitle: "Un parc d'éclairage à moderniser ? Parlons-en.",
    ctaLabel: 'Nous contacter',
  },
  {
    slug: 'decret-bacs',
    category: 'Pilotage',
    title: "Décret BACS : pourquoi piloter, c'est déjà économiser",
    titleHtml: "Décret BACS : pourquoi piloter, c'est déjà <em>économiser</em>",
    date: '2 mai 2026',
    readTime: '3 min de lecture',
    readTimeShort: '3 min',
    excerpt:
      "La GTB devient obligatoire par paliers de puissance. Au-delà de la conformité, automatiser le chauffage, la ventilation et l'éclairage fait baisser la consommation dès la première année.",
    lead:
      "La gestion technique du bâtiment n'est plus une option de confort. Le décret BACS la rend obligatoire par paliers, mais son intérêt dépasse de loin la simple conformité.",
    body: [
      { type: 'h2', text: "Ce qu'impose le décret" },
      {
        type: 'p',
        html: "Le décret BACS impose d'équiper les bâtiments tertiaires d'un système d'automatisation et de contrôle, autrement dit une GTB. Le seuil dépend de la puissance des installations de chauffage et de climatisation. Les sites au-delà de 290 kW sont concernés depuis le 1er janvier 2025. Pour ceux compris entre 70 et 290 kW, l'échéance, d'abord fixée à 2027, a été reportée au 1er janvier 2030. Une exemption reste possible si le retour sur investissement dépasse dix ans.",
      },
      { type: 'h2', text: 'À quoi sert vraiment une GTB' },
      {
        type: 'p',
        html: "Une GTB centralise le pilotage du chauffage, de la ventilation, de la climatisation et de l'éclairage. Elle ne se contente pas d'allumer et d'éteindre : elle mesure, enregistre, compare à des références et signale les dérives. Un local surchauffé la nuit, une centrale qui tourne à vide le week-end, une consigne oubliée : autant de gaspillages invisibles qu'elle met en lumière et corrige automatiquement.",
      },
      { type: 'h2', text: 'Un investissement qui se rentabilise vite' },
      {
        type: 'p',
        html: "Là où d'autres travaux demandent du temps, une GTB bien réglée fait souvent baisser la consommation dès la première année, sans gros œuvre. Elle s'inscrit aussi dans la trajectoire du décret tertiaire, dont elle facilite le suivi et le reporting. Le report d'échéance pour les sites moyens ne change rien au calcul : agir tôt, c'est économiser plus longtemps et éviter l'engorgement des prestataires à l'approche des dates limites.",
      },
      {
        type: 'quote',
        text: "Piloter, ce n'est pas surveiller pour surveiller. C'est transformer des données en économies concrètes.",
      },
      {
        type: 'p',
        html: "La conformité est l'occasion. Le vrai gain, lui, se mesure chaque mois sur la facture.",
      },
    ],
    ctaTitle: 'Un bâtiment à piloter ? Parlons-en.',
    ctaLabel: 'Nous contacter',
  },
  {
    slug: 'renovation-site-occupe',
    category: 'Rénovation',
    title: "Rénover un site tertiaire sans interrompre l'activité",
    titleHtml: "Rénover un site tertiaire <em>sans interrompre</em> l'activité",
    date: '22 avril 2026',
    readTime: '2 min de lecture',
    readTimeShort: '2 min',
    excerpt:
      "Travailler en site occupé impose un phasage millimétré. Un interlocuteur unique et une coordination tous corps d'état évitent les arrêts d'exploitation.",
    lead:
      "Fermer pour rénover coûte cher, parfois plus que les travaux eux-mêmes. La vraie difficulté d'une rénovation tertiaire, c'est de la mener pendant que l'activité continue.",
    body: [
      { type: 'h2', text: 'Le phasage, nerf de la guerre' },
      {
        type: 'p',
        html: "Rénover un site occupé suppose de découper le chantier en séquences, de libérer des zones l'une après l'autre et d'organiser des bascules sans interrompre le travail des occupants. Certains lots se traitent en horaires décalés, le soir ou le week-end. Chaque phase est pensée pour qu'une partie du bâtiment reste pleinement utilisable.",
      },
      { type: 'h2', text: 'Maîtriser les nuisances' },
      {
        type: 'p',
        html: "Poussière, bruit, circulations, sécurité : ce sont eux qui font ou défont l'acceptabilité d'un chantier en milieu occupé. Cloisonnements provisoires, zones tampons, protection des flux, gestion des accès et des secours : ces précautions, invisibles dans le résultat final, conditionnent la sérénité de l'exploitation pendant les travaux. Dans un établissement recevant du public, elles relèvent aussi de la réglementation.",
      },
      { type: 'h2', text: 'Un interlocuteur unique' },
      {
        type: 'p',
        html: "Multiplier les entreprises, c'est multiplier les risques de retard et les renvois de responsabilité. Une coordination tous corps d'état, avec un interlocuteur unique, fluidifie les arbitrages quotidiens et tient les délais. Pour le gestionnaire, c'est un seul numéro à appeler quand une question se pose, et une seule personne responsable du planning.",
      },
      {
        type: 'quote',
        text: 'Le meilleur chantier en site occupé est celui que les occupants remarquent à peine.',
      },
      {
        type: 'p',
        html: "Rénover sans fermer, ce n'est pas un luxe. C'est une méthode, et elle se prépare bien avant le premier coup de marteau.",
      },
    ],
    ctaTitle: 'Une rénovation à mener sans fermer ? Parlons-en.',
    ctaLabel: 'Nous contacter',
  },
  {
    slug: 'space-planning',
    category: 'Aménagement',
    title: 'Space planning : aménager pour la performance et le bien-être',
    titleHtml: 'Space planning : aménager pour la performance et <em>le bien-être</em>',
    date: '9 avril 2026',
    readTime: '2 min de lecture',
    readTimeShort: '2 min',
    excerpt:
      "Densité, acoustique, lumière, flexibilité. L'agencement d'un espace de travail se conçoit comme un système où chaque mètre carré sert l'usage et le confort.",
    lead:
      "Aménager un espace de travail ne consiste pas à caser des bureaux. C'est arbitrer, mètre carré par mètre carré, entre densité, confort et usages réels.",
    body: [
      { type: 'h2', text: "Penser l'espace comme un système" },
      {
        type: 'p',
        html: "Un bon aménagement part des usages avant les meubles. Combien de personnes, pour quels modes de travail, avec quels pics de présence ? On retient souvent un repère de l'ordre de dix mètres carrés par poste, circulations comprises, mais le vrai sujet est l'équilibre entre espaces individuels, salles de réunion, zones de concentration et lieux d'échange. Trop dense, l'espace épuise. Trop lâche, il coûte cher et sonne creux.",
      },
      { type: 'h2', text: 'Acoustique, lumière, air' },
      {
        type: 'p',
        html: "Ce sont les angles morts des projets ratés. Un open space sans traitement acoustique devient vite invivable. Un éclairage mal pensé fatigue. Une ventilation sous-dimensionnée plombe la concentration l'après-midi. Ces sujets techniques, souvent relégués en fin de projet, déterminent pourtant le confort quotidien bien plus que le choix des couleurs.",
      },
      { type: 'h2', text: 'La flexibilité, une assurance' },
      {
        type: 'p',
        html: "Les organisations changent, les effectifs varient, les modes de travail évoluent. Un aménagement réussi anticipe ces mouvements : cloisons démontables, zones reconfigurables, réseaux accessibles. Investir dans la flexibilité, c'est éviter de tout refaire au premier changement d'organigramme.",
      },
      {
        type: 'quote',
        text: "Un espace bien pensé ne se voit pas. Il se traverse sans friction, et l'on y travaille mieux sans savoir pourquoi.",
      },
      {
        type: 'p',
        html: "Le space planning, c'est de l'ingénierie autant que du design : faire en sorte que chaque mètre carré serve à la fois l'usage et le bien-être.",
      },
    ],
    ctaTitle: 'Un espace à repenser ? Parlons-en.',
    ctaLabel: 'Nous contacter',
  },
  {
    slug: 'equipement-medical',
    category: 'Santé',
    title: 'Équipement médical : concevoir des espaces de santé conformes',
    titleHtml: 'Équipement médical : concevoir des espaces de santé <em>conformes</em>',
    date: '27 mars 2026',
    readTime: '3 min de lecture',
    readTimeShort: '3 min',
    excerpt:
      "Hygiène, fluides, normes électriques, ergonomie des soins. L'installation d'équipements de santé conjugue exigences techniques et réalité du terrain.",
    lead:
      "Concevoir un espace de santé ne ressemble à aucun autre chantier. Hygiène, fluides, sécurité électrique, ergonomie des soins : chaque détail engage la sécurité du patient.",
    body: [
      { type: 'h2', text: 'Une sécurité électrique à part' },
      {
        type: 'p',
        html: "Dans un local à usage médical, le patient peut être en contact direct avec des équipements, parfois sous anesthésie ou relié à des appareils vitaux. La norme NF C 15-211 encadre ces installations électriques basse tension. Elle classe les locaux par groupes selon le niveau de risque et impose, pour les soins critiques, des alimentations de sécurité et des temps de bascule très courts en cas de coupure. Identifier le bon groupe avant de concevoir conditionne toute l'installation.",
      },
      { type: 'h2', text: "Fluides médicaux et qualité de l'air" },
      {
        type: 'p',
        html: "L'oxygène, l'air médical et le vide circulent par des réseaux dédiés, conçus et réceptionnés selon des référentiels stricts comme l'ISO 7396-1. Dans les zones sensibles, blocs et salles propres, la maîtrise de la contamination de l'air relève de référentiels comme la NF S 90-351. Ces exigences ne tolèrent pas l'approximation : elles se traitent dès la conception, pas après coup.",
      },
      { type: 'h2', text: "L'ergonomie au service du soin" },
      {
        type: 'p',
        html: "Au-delà des normes, un espace de santé doit se vivre. Largeur des circulations pour les brancards, hauteurs de travail, nettoyabilité des surfaces, fluidité du parcours patient : ces choix conditionnent le confort des soignants et la sécurité des soins. La technique et l'humain s'y rejoignent.",
      },
      {
        type: 'quote',
        text: "Dans un lieu de soin, la conformité n'est pas une contrainte administrative. C'est une promesse de sécurité.",
      },
      {
        type: 'p',
        html: "Équiper un espace de santé, c'est conjuguer des normes exigeantes et la réalité du terrain. Aucune des deux ne se néglige.",
      },
    ],
    ctaTitle: "Un projet d'équipement médical ? Parlons-en.",
    ctaLabel: 'Nous contacter',
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
