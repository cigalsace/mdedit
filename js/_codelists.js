// Liste des valeurs
var CI_DateTypeCode = {
    creation: "Création", 
    publication: "Publication", 
    revision: "Révision"
    //: "Validité"
};
    
// Liste des valeurs des TopicCategories
var MD_TopicCategoryCode = {
    farming: "Agriculture",
    biota: "Flore et faune", 
    boundaries: "Limites politiques et administratives", 
    climatologyMeteorologyAtmosphere: "Climatologie, météorologie", 
    economy: "Economie", 
    elevation: "Topographie", 
    environment: "Ressources et gestion de l’environnement", 
    geoscientificInformation: "Géosciences", 
    health: "Santé", 
    imageryBaseMapsEarthCover: "Carte de référence de la couverture terrestre", 
    intelligenceMilitary: "Infrastructures militaires", 
    inlandWaters: "Hydrographie", 
    location: "Localisant", 
    oceans: "Océans", 
    planningCadastre: "Planification et aménagement du territoire", 
    society: "Société", 
    structure: "Aménagements urbains", 
    transportation: "Infrastructures de transport", 
    utilitiesCommunication: "Réseaux de télécommunication, d’énergie"
};

// Liste des valeurs
var MD_CharacterSetCode = {
    ucs2: "ucs2", 
    ucs4: "ucs4", 
    utf7: "utf7", 
//        8859part16: "8859part16",
//        8859part15: "8859part15", 
//        8859part1: "8859part1", 
    utf16: "utf16", 
    utf8: "utf-8",
//        8859part2: "8859part2", 
//        8859part3: "8859part3", 
//        8859part4: "8859part4", 
//        8859part5: "8859part5", 
//        8859part6: "8859part6", 
//        8859part7: "8859part7", 
//        8859part8: "8859part8", 
//        8859part9: "8859part9", 
//        8859part10: "8859part10", 
//        8859part11: "8859part11", 
//        8859part13: "8859part13", 
//        8859part14: "8859part14", 
    jis: "jis", 
    shiftJIS: "shiftJIS", 
    eucJP: "eucJP", 
    usAscii: "usAscii", 
    ebcdic: "ebcdic", 
    eucKR: "eucKR", 
    big5: "big5", 
    GB2312: "GB2312"
};

// Liste des valeurs
var CI_RoleCode = {
    resourceProvider: "Fournisseur",
    custodian: "Gestionnaire",
    owner: "Propriétaire", 
    author: "Auteur",
    pointOfContact: "Point de contact",
    user: "Utilisateur",
    distributor: "Distributeur", 
    originator: "Commanditaire", 
    principalInvestigator: "Producteur / Maître d’œuvre principal ou d'ensemble", 
    processor: "Intégrateur / Exécutant secondaire", 
    publisher: "Editeur"
};

// Liste des valeurs
var MD_ClassificationCode = {
    topSecret: "Top secret",
    secret: "Secret", 
    confidential: "Confidentiel", 
    restricted: "Restreint", 
    unclassified: "Non classifié"
};

// Liste des valeurs
var MD_InspireRestrictionCode =[
    { v:"L124-4-I-1 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.a)", 
      t: "La confidentialité des travaux des autorités publiques, lorsque cette confidentialité est prévue par la loi." },
    { v:"L124-5-II-1 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.b)", 
      t: "Les relations internationales, la sécurité publique ou la défense nationale." },
    { v:"L124-5-II-2 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.c)", 
      t: "La bonne marche de la justice, la possibilité pour toute personne d’être jugée équitablement ou la capacité d’une autorité publique d’effectuer une enquête d’ordre pénal ou disciplinaire." },
    { v:"L124-4-I-1 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.d)", 
      t: "La confidentialité des informations commerciales ou industrielles, lorsque cette confidentialité est prévue par la législation nationale ou communautaire afin de protéger un intérêt économique légitime, notamment l’intérêt public lié à la préservation de la confidentialité des statistiques et du secret fiscal." },
    { v:"L124-5-II-3 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.e)", 
      t: "Les droits de propriété intellectuelle." },
    { v:"L124-4-I-1 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.f)", 
      t: "La confidentialité des données à caractère personnel et/ou des fichiers concernant une personne physique lorsque cette personne n’a pas consenti à la divulgation de ces informations au public, lorsque la confidentialité de ce type d’information est prévue par la législation nationale ou communautaire." },
    { v:"L124-4-I-3 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.g)", 
      t: "Les intérêts ou la protection de toute personne qui a fourni les informations demandées sur une base volontaire sans y être contrainte par la loi ou sans que la loi puisse l’y contraindre, à moins que cette personne n’ait consenti à la divulgation de ces données." },
    { v:"L124-4-I-2 du code de l'environnement (Directive 2007/2/CE (INSPIRE), Article 13.1.h)", 
      t: "La protection de l’environnement auquel ces informations ont trait, comme par exemple la localisation d’espèces rares." },
    { v: "Pas de restriction d’accès public selon INSPIRE", 
      t: "Aucun des articles de la loi ne peut être invoqué pour justifier d’une restriction d’accès public." }
];

/*
// Liste des valeurs
var MD_InspireTopicCategoryCode = {
    Coordinate reference systems: "Référentiels de coordonnées", 
    Geographical grid systems: "Systèmes de maillage géographique", 
    Geographical names: "Dénominations géographiques", 
    Administrative units: "Unités administratives", 
    Addresses: "Adresses", 
    Cadastral parcels: "Parcelles cadastrales", 
    Transport networks: "Réseaux de transport", 
    Hydrography: "Hydrographie", 
    Protected sites: "Sites protégés", 
    Elevation: "Altitude", 
    Land cover: "Occupation des terres", 
    Orthoimagery: "Ortho-imagerie", 
    Geology: "Géologie", 
    Statistical units: "Unités statistiques", 
    Buildings: "Bâtiments", 
    Soil: "Sols", 
    Land use: "Usage des sols", 
    Human health and safety: "Santé et sécurité des personnes", 
    Utility and governmental services: "Services d'utilité publique et services publics", 
    Environmental monitoring facilities: "Installations de suivi environnemental", 
    Production and industrial facilities: "Lieux de production et sites industriels", 
    Agricultural and aquaculture facilities: "Installations agricoles et aquacoles", 
    Population distribution — demography: "Répartition de la population – démographie", 
    Area management/restriction/regulation zones and reporting units: "Zones de gestion, de restriction ou de réglementation et unités de déclaration", 
    Natural risk zones: "Zones à risque naturel", 
    Atmospheric conditions: "Conditions atmosphériques", 
    Meteorological geographical features: "Caractéristiques géographiques météorologiques", 
    Oceanographic geographical features: "Caractéristiques géographiques océanographiques", 
    Sea regions: "Régions maritimes", 
    Bio-geographical regions: "Régions biogéographiques", 
    Habitats and biotopes: "Habitats et biotopes", 
    Species distribution: "Répartition des espèces", 
    Energy resources: "Sources d'énergie", 
    Mineral resources: "Ressources minérales"
};
*/
// Liste des valeurs
/*
var MD_InspireSpecificationCode = {
    COMMISSION REGULATION (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata: "COMMISSION REGULATION (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata", d : "2008-12-04", 
    Corrigendum to INSPIRE Metadata Regulation published in the Official Journal of the European Union, L 328, page 83: "Corrigendum to INSPIRE Metadata Regulation published in the Official Journal of the European Union, L 328, page 83" , d : "2009-12-15", 
    COMMISSION REGULATION (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services: "COMMISSION REGULATION (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services" , d : "2010-12-08", 
    COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 976/2009 as regards download services and transformation services: "COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 976/2009 as regards download services and transformation services", d : "2010-12-08", 
    COMMISSION REGULATION (EC) No 976/2009 of 19 October 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the Network Services: "COMMISSION REGULATION (EC) No 976/2009 of 19 October 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the Network Services" , d : "2009-10-20" },
    { COMMISSION REGULATION (EU) No 268/2010 of 29 March 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the access to spatial data sets and services of the Member States by Community institutions and bodies under harmonised conditions: "COMMISSION REGULATION (EU) No 268/2010 of 29 March 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the access to spatial data sets and services of the Member States by Community institutions and bodies under harmonised conditions" , d : "2010-03-30", 
    Commission Decision of 5 June 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards monitoring and reporting (notified under document number C(2009) 4199) (2009/442/EC): "Commission Decision of 5 June 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards monitoring and reporting (notified under document number C(2009) 4199) (2009/442/EC)" , d : "2009-06-11" }
    //{ Aucun test réalisé: "Aucun test réalisé", d : "2000-01-01"
};
*/

// Liste des valeurs
var MD_KeywordTypeCode = {
    discipline: "Discipline", 
    place: "Localisation", 
    stratum: "Strate", 
    temporal: "Temps", 
    theme: "Thème"
};

// Liste des valeurs
var MD_LanguageCode = {
    ger: "Allemand",
    eng: "Anglais",
    fre: "Français" 
};    

// Liste des valeurs
var MD_PassCode = {
    true: "Conforme", 
    false: "Non conforme", 
    empty: "Non évalué"
};

// Liste des valeurs
var MD_MaintenanceFrequencyCode = {
    continual: "en continu", 
    daily: "quotidienne", 
    weekly: "hebdomadaire", 
    fortnightly: "tous les 15 jours", 
    monthly: "mensuelle", 
    quaterly: "trimestrielle", 
    biannually: "semestrielle", 
    annually: "annuelle", 
    asNeeded: "quand nécessaire", 
    irregular: "irrégulierère", 
    notPlanned: "non plannifiée", 
    unknown: "inconnue"
};

// Liste des valeurs
var MD_RestrictionCode = {
    copyright: "Droit d’auteur / Droit moral (copyright)", 
    patent: "Brevet", 
    patentPending: "Brevet en instance", 
    trademark: "Marque de commerce", 
    license: "Licence", 
    intellectualPropertyRights: "Droit de propriété intellectuelle / Droit patrimonial", 
    restricted: "Restreint",
    otherRestrictions: ''
    //otherRestrictions: "Autres restrictions"
};

// Liste des valeurs
var MD_ScopeCode = {
    attribute: "Attribut", 
    attributeType: "Type d’attribut", 
    collectionHardware: "Collection matérielle", 
    collectionSession: "Collection de session", 
    series: "Collection de données", 
    dataset: "Jeu de données",
    nonGeographicDataset: "Jeu de données non géographique", 
    dimensionGroup: "Dimension d’un groupe", 
    feature: "Entité", 
    featureType: "Type d’entité", 
    propertyType: "Type de propriété", 
    software: "Logiciel", 
    fieldSession: "Champ de Session", 
    service: "Service", 
    model: "Modèle", 
    tile: "Sous-ensemble de données", 
    fieldCampaign: "Campagne de mesures"
};

// Liste des valeurs
var MD_SpatialRepresentationTypeCode = {
    grid: {
        name: 'Raster',
        description: 'données raster - sous forme de grille ou d\'image'
    },
    vector: {
        name: 'Vecteur',
        description: 'données vecteur - sous forme de points, lignes, polygones'
    },
    textTable: "Table texte", 
    tin: "Tin", 
    stereoModel: "Vue 3D", 
    video: "Vidéo",
    undefined: {
        name: 'Non définie',
        description: 'la valeur est inconnue'
    }
};
