<!--- Begin @empty.html --->

[A compléter.]

<!--- End @empty.html --->

====
<!--- Begin @mdEdit.html --->

# Présentation de l'application

L'application "mdEdit" a pour objectif d'offrir un moyen simple de décrire des bases de données géographiques tout en respectant les obligations de la directives européenne Inspire et les standards et normes en vigueur (notamment série ISO 191xx).
Elle se présente sous la forme d'un formulaire web.

Les principales fonctionnalités sont:
    - Saisir une fiche descriptive d'une base de données
    - Importer un fichier XML
    - Générer un fichier XML
    - Visualiser une fiche descriptive sous la forme d'une page HTML mise en forme

Par ailleurs, mdEdit offre 2 modes de saisie:
    - un mode "simple" où seuls les champs obligatoires et importants sont affichés
    - un mode "complet" où l'ensembles des champs sont affichés

Pour chaque champ descriptif de la fiche, une aide est disponible en cliquant sur le nom du champ.


## Saisir une fiche descriptive d'une base de données

(...)


## Importer un fichier XML

(...)


## Générer un fichier XML

(...)


## Visualiser un fichier XML

(...)


## Utiliser les modes "simple" et "complet"

(...)

<!--- End @mdEdit.html --->

====
<!--- Begin @md_infos.html --->

# Information sur les métadonnées

<!--- End @md_infos.html --->
====
<!--- Begin @md_fileidentifier.html --->

# Identifiant de la fiche

## Définition

Code permettant d’identifier de manière unique la fiche de description de la donnée.  
Ce code n’est jamais modifié pour une fiche même lors de sa mise à jour.

S'il n'est pas renseigné, cet identifiant est généré automatiquement par mdEdit sous la forme d'un code unique pseudo aléatoire. 
## Recommandations

Afin d’obtenir un code unique, il existe 2 possibilités:
  - Construire cet identifiant en associant le code pays de l’organisme propriétaire de la donnée, son numéro SIREN, ainsi qu’un code unique définit par le propriétaire de la donnée (ex.: FR–#00019–1#3_004).
  - Utiliser une URI, c'est à dire une adresse internet (URL) composée du nom de domaine du site internet de l'organisme propriétaire des données suivi d'un identifiant (ex.: http://www.cigalsace.org/FR–#00019–1#3_004). Cette adresse ne dit pas obligatoirement pointée vers une ressource particulière. 

**Structure recommandée de l’identifiant :**

- Code du pays : « FR »
- Séparateur   : « – »
- Code SIREN   : code à 9 chiffres
- Séparateur   : « – »
- Code unique  : choisi par l'administrateur des données

## Exemples

Identifiant de la fiche : « FR–#00019–1#3_004 »

- FR : code pour la France
- 00019 : numéro SIREN de la Région Alsace
- 120426_004 : numéro unique établi en interne à la Région Alsace, composé de la date de création de la fiche de description (26/04/2012) suivi d’un numéro d’ordre de la fiche.

Identifiant de la fiche : « FR–#00019–110#BdOCS2008-CIGAL-v2 »

- FR : code pour la France
- 00019 : numéro SIREN de la Région Alsace
- BdOCS2008-CIGAL-v1 : code unique établi en interne à la Région Alsace pour le partenariat CIGAL, composé du nom abrégé officiel de la base de données.

<!--- End @md_fileidentifier.html --->

====
<!--- Begin @md_language.html --->

# Langue de la fiche

## Définition

Langue utilisée pour décrire la donnée.

Parmi la liste des 23 langues officielles de l’union européenne indiquées par la directive Inspire, dans le cadre du partenariat CIGAL, 3 langues sont proposées par défaut : le français, l’anglais et l’allemand.

## Recommandations

La valeur par défaut est fixée à « français ».
Si la description d’une donnée est disponible en plusieurs langues, il est recommandé de remplir une fiche pour chaque langue et de ne pas mélanger plusieurs langues au sein de la même fiche.

## Exemples

Langue : « Français »  
Langue : « Allemand »  
Langue : « Anglais »  

<!--- End @md_language.html --->

====
<!--- Begin @md_characterset.html --->

# Jeu de caractères (encodage) de la fiche

## Définition

Il s’agit d’une information purement technique précisant l’encodage utilisé pour générer le fichier d’échange de la fiche au format XML. Il est normalement définit par l’application utilisée.
Parmi les valeurs possibles d’encodage des caractères de la fiche définies par la norme ISO 19115 (liste B.# MD_CharacterSetCode), dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont « utf8 », « utf16 », « 8859part1 », « 8859part15 » et « 8859part16 ».

## Recommandations

La valeur par défaut est « utf8 ».
En cas de doute, il est conseillé de laisser la valeur par défaut.

## Exemples

Jeu de caractères de la fiche : « utf8 »  
Jeu de caractères de la fiche : « 8859part1 »  

<!--- End @md_characterset.html --->

====
<!--- Begin @md_hierarchylevel.html --->

# Type de ressource décrite

## Définition

Cet élément de métadonnées renseigne le type de ressource décrit dans la fiche.  
La directive européenne INSPIRE concerne 3 types de ressource :

1. Les « séries de données géographiques » ou « jeu de données géographiques » correspondant à une compilation/ensemble identifiable et cohérent de données géographiques selon un thème dominant. Il peut s’agir d’une couche d’information ou d’un ensemble de couches (base de données géographique). 
2. Les « ensembles de séries de données géographiques » correspondant à une compilation de séries de données géographiques partageant la même spécification de produit. Par exemple, la BdOCS2000-CIGAL et la BdOCS2008-CIGAL forment un ensemble de jeux de données géographiques.
3. Les services de données géographiques.

Le présent document concerne uniquement la description des séries et ensembles de séries de données géographiques.  
Parmi les valeurs possibles de types de ressources définies par la norme ISO 19115 (liste B.# MD_ScopeCode), pour faciliter la saisie dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont « Jeu / série de données » et « Collection / ensemble de série de données ».

## Recommandations

Dans un souci de simplification et d’homogénéité, il est proposé dans le cadre du partenariat CIGAL de décrire les données à un niveau suffisamment fin (couche d’information ou base de donnée cohérente – ex. : BdOCS2008-CIGAL).
Ainsi, par défaut la valeur utilisée est « jeu de données ».

## Exemples

Type de donnée décrite : « jeu de données »  
Type de donnée décrite : « ensemble de jeux de données »

<!--- End @md_hierarchylevel.html --->

====
<!--- Begin @md_contacts.html --->

# Contacts pour la fiche

## Définition

Ce groupe de champs permet de connaître la personne ou l’organisme qui a décrit la donnée ou qui gère la fiche de description et en assure la maintenance.

Il se compose :

- du Nom/Prénom,
- de la Fonction, 
- du Nom de l’organisme,
- de l’Adresse,
- du Code postal,
- de la Ville,
- du Téléphone,
- de l’Email,
- et du Rôle de la personne à contacter

Parmi les valeurs possibles des rôles pour un contact définies par la norme ISO 19115 (liste B.#CI_RoleCode), pour faciliter la saisie dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont :

- « Fournisseur » : organisme  ou personne qui délivre physiquement la fiche de description, soit de manière directe au destinataire, soit par l’intermédiaire d’un diffuseur.
- « Gestionnaire » : organisme  ou personne responsable de la gestion et de la mise à jour de la fiche de description.
- « Point de contact » : organisme  ou personne que l’on peut contacter pour avoir des renseignements détaillés sur la fiche de description.
- « Auteur » : organisme  ou personne qui a complété la fiche de description. Il en détient les droits moraux.

## Recommandations

Au moins un contact avec pour rôle « Point de contact » doit être défini pour chaque fiche. Il correspond au gestionnaire de la fiche ou de l’inventaire des données géographique.  
D’autres contacts peuvent être également ajoutés, comme par exemple l’auteur de la fiche en précisant le rôle correspondant.

Il est recommandé de saisir l’ensemble des informations descriptives du contact, notamment :

- Le nom du contact en majuscules et le prénom avec la première lettre en majuscules
- La fonction du contact, en précisant si nécessaire la direction ou le service dont il dépend
- L’organisme en toute lettre (éviter les signes non explicités)
- L’adresse e-mail de la personne à contacter
- Le rôle, indispensable avec comme valeur par défaut « Point de contact » 

## Exemples

Nom: Guillaume RYCKELYNCK  
Fonction: Chef de projet CIGAL  
Organisme: Région Alsace  
Adresse: 1, place Adrien Zeller  
Code postal: 67000  
Ville: STRASBOURG  
Tél: 03 88 15 65 48  
Email: guillaume.ryckelynck@region-alsace.eu  
Rôle: Point de contact  

<!--- End @md_contacts.html --->

====
<!--- Begin @md_contact_name.html --->

[A compléter]

<!--- End @md_contact_name.html --->

====
<!--- Begin @md_contact_position.html --->

[A compléter]

<!--- End @md_contact_position.html --->

====
<!--- Begin @md_contact_organisation.html --->

[A compléter]

<!--- End @md_contact_organisation.html --->

====
<!--- Begin @md_contact_tel.html --->

[A compléter]

<!--- End @md_contact_tel.html --->

====
<!--- Begin @md_contact_email.html --->

[A compléter]

<!--- End @md_contact_email.html --->

====
<!--- Begin @md_contact_address.html --->

[A compléter]

<!--- End @md_contact_address.html --->

====
<!--- Begin @md_contact_cp.html --->

[A compléter]

<!--- End @md_contact_cp.html --->

====
<!--- Begin @md_contact_city.html --->

[A compléter]

<!--- End @md_contact_city.html --->

====
<!--- Begin @md_contact_logo_url.html --->

[A compléter]

<!--- End @md_contact_logo_text.html --->

====
<!--- Begin @md_contact_role.html --->

[A compléter]

<!--- End @md_contact_role.html --->


====
<!--- Begin @md_datestamp.html --->

# Date de la fiche

## Définition
Date de création ou de dernière mise à jour de la fiche.

## Recommandations
Cette information est généralement générée automatiquement par l’application lors de la création/modification de la fiche.

## Exemples
Date de la fiche : « 02/10/2008 »

<!--- End @md_datestamp.html --->

====
<!--- Begin @md_standardname.html --->

# Standard des métadonnées

## Définition
Cette information est composée de 2 éléments :
Le nom du standard
La version du standard.

Elle définit le standard ou la norme utilisée pour structurer la description de la donnée et la rédaction de la fiche.

## Recommandations
Par défaut le standard est « ISO19115 » faisant référence à la norme du même nom et sa version « 2003/Cor.1 :2006 ».

## Exemples
Standard des métadonnées :
Nom du standard : « ISO19115 »
Version du standard : « 2003/Cor.1 :2006 »

<!--- End @md_standardname.html --->

====
<!--- Begin @md_standardversion.html --->

[A compléter]

<!--- End @md_standardversion.html --->

====
<!--- Begin @todo.html --->

#  Description de la donnée géographique

<!--- End @todo.html --->

====
<!--- Begin @data_title.html --->

# Titre de la donnée

## Définition
Le titre correspond à un ensemble d’informations permettant d’identifier et qualifier rapidement la donnée. C’est généralement l’information qui apparaît en premier à la suite des recherches effectuées pour trouver une donnée. Le titre doit être explicite et définir clairement la donnée.

## Recommandations
Il est recommandé de préciser dans le titre :

- Le type de donnée (carte, donnée thématique, référentiel, etc.)
- Le nom de la donnée, officiel ou habituel, en évitant l’utilisation d’un acronyme non explicité
- La version ou le millésime (année/date de production) de la donnée
- Le nom de l’emprise ou du territoire concerné par la donnée

## Exemples
**Titre de la donnée : « REFERENTIEL CIGAL : Base de données d’occupation du sol 2008 (BdOCS2008-CIGAL) – Alsace »**

- *"REFERENTIEL CIGAL"* : la donnée correspond à un référentiel produit ou acquis dans le cadre du partenariat CIGAL.
- *"Base de données (...) 2008 (BdOCS2008-CIGAL)"* : nom développé de la donnée avec entre parenthèse la version abrégée.
- *"Alsace"* : territoire couvert par la donnée.

**Titre de la donnée : « DONNEE THEMATIQUE : Piste cyclables 2010 – Communauté Urbaine de Strasbourg (CUS) »**

- *"DONNEE THEMATIQUE"* : la donnée correspond à une donnée thématique.
- *"Piste cyclables 2010"* : nom de la donnée, précisant le thème concerné ainsi que le millésime.
- *"Communauté Urbaine de Strasbourg (CUS)"* : territoire couvert par la donnée.

**Titre de la donnée : « CARTE : Découpage administratif pas SCOT en 2004 – Haut-Rhin »**

- *"CARTE"* : la fiche décrit une carte (donnée mise en forme).
- *"Découpage administratif pas SCOT en 2004"* : titre de la carte précisant son objet ainsi que le millésime.
- *"Haut-Rhin"* : territoire couvert par la donnée.

<!--- End @data_title.html --->

====
<!--- Begin @data_abstract.html --->

# Résumé

## Définition
Le résumé permet de décrire la donnée en lui attribuant une définition officielle, quand elle existe, ou une définition commune, afin de rendre la donnée compréhensible par l’utilisateur. Il s’agit en particulier de définir au mieux l’information ou le phénomène représenté dans la donnée.
C’est un élément indispensable de la fiche de description.

## Recommandations
Le résumé doit reprendre les éléments essentiels et caractéristiques de la donnée pour offrir une description synthétique et précise.

Voici quelques pistes qui peuvent servir d’aide à la saisie :
Existe-il une définition de la donnée ? Si oui, elle peut être reprise dans le résumé.
Quel est l’objectif du lot de données, pourquoi est-il produit/géré ?
Des exemples d’usages de ces données géographiques ? 
A quelle(s) compétence(s) de la collectivité répond-il ?
Combien de personnes gèrent le lot ? 
Comment est organisé le cycle de vie de l’information ? Est-ce sous traité à un bureau d’étude ?
Quel est le nombre de classes ?
Quel est le volume total (nombre d’enregistrements) ?
En moyenne quel est le volume mis à jour par jour/semaine/mois ou autre ? 

## Exemples

<!--- End @data_abstract.html --->

====
<!--- Begin @data_browsegraphics.html --->

# Illustration de la donnée

## Définition
Ce champ fourni un lien vers une image représentant la donnée (principalement le lot de donnée). 
Il peut s’agir d’une représentation de la donnée ou d’une carte basée sur cette donnée. La carte ou la couche de données doit être clairement mise en évidence sur l’image créée par une sémiologie graphique adaptée.

## Recommandations
Les caractéristiques de l’image ne sont pas imposées, cependant, il faut veiller à :
Fournir une image lisible et représentative de la donnée décrite.
Fournir une image de taille et de poids raisonnable, adaptée aux données représentées (ex. : 300 x 300px à 96dpi pour 50 à 200ko). 
Privilégier un format standard, adapté à une représentation sur internet (ex. : jpg, png, etc) et éviter les format non compressés ou spécifiques à une utilisation (ecw, geoTif, etc.)

Il est recommandé de donner à l’image le même nom que le fichier de métadonnées. Un suffixe précisant le numéro d’ordre peut être ajouté lorsque plusieurs illustrations sont mises à disposition : « NomFiche-1.jpg », « NomFiche-2.jpg », etc.

Le lien vers la ou les illustrations doit être unique, public et disponible de façon pérenne.
Le stockage des illustration et leur accessibilité est sous la responsabilité de l’organisme qui saisie ou gère la fiche de métadonnées

## Exemples
Illustration : « http://www. ... »

<!--- End @data_browsegraphics.html --->

====
<!--- Begin @data_browsegraphic_url.html --->

<!--- End @data_browsegraphic_url.html --->

====
<!--- Begin @data_browsegraphic_description.html --->

<!--- End @data_browsegraphic_description.html --->

====
<!--- Begin @data_browsegraphic_type.html --->

<!--- End @data_browsegraphic_type.html --->

====
<!--- Begin @data_browsegraphic_image.html --->

<!--- End @data_browsegraphic_image.html --->

====
<!--- Begin @data_dates.html --->

# Dates de création, de mise à jour et de publication de la donnée

## Définition
Ces informations permettent de préciser une ou plusieurs dates représentatives de la vie de la donnée :
« création » : la date de création de la donnée,
« publication » : la date de publication ou de diffusion de la donnée
« révision » : la date de révision, de dernière mise à jour ou de version de la donnée.

## Recommandations
Une date au moins doit être renseignée. Normalement, à minima ce sera la date de création.

La date de mise à jour ou dernière révision n’a de sens que si elle se distingue de la date de création.

Dans le cadre d’une donnée « vivante » c’est-à-dire, une donnée qui se complète ou se met à jour très régulièrement (tous les jours, plusieurs fois par semaine), il est alors préférable de remplir de façon précise, l’information sue le « rythme de mise à jour » qui fait l’objet du paragraphe suivant. Il est néanmoins recommandé d’indiquer la date de création initiale qui reste inchangée pendant toute la vie de la donnée.

## Exemples
Actualité de la donnée :
Date de création : « 02/10/1978 »
Date de mise à jour : « 10/01/2012 »

<!--- End @data_dates.html --->

====
<!--- Begin @data_maintenancefrequencycode.html --->

# Rythme de mise à jour

## Définition
Ce champ permet de spécifier la fréquence de mise à jour prévue de la donnée, selon une liste fermée de possibilités.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit par la norme ISO 19115 (liste B.# MD_MaintenanceFrequencyCode) :
« en continue » : mise à jour continue
« quotidienne » : mise à jour quotidienne
« hebdomadaire » : mise à jour hebdomadaire
« tous les 15 jours » : mise à jour 2 fois par mois
« mensuelle » : mise à jour mensuelle
« trimestrielle » : mise à jour trimestrielle
« semestrielle » : mise à jour bi-annuelle
« annuelle » : mise à jour annuelle
« quand nécessaire » : mise à jour lorsque cela est jugé nécessaire
« irrégulière » : mise à jour irrégulière
« non planifiée » : mise à jour non planifiée
« inconnue » : mise à jour inconnue

## Recommandations
Si la fréquence de mise à jour prévue n’est pas disponible dans la liste, utiliser le code "Inconnue".
Si aucun changement n'est programmé, sélectionnez "Non planifiée" dans la liste.

La valeur par défaut est « Inconnue »

## Exemples
Fréquence de mise à jour : « Continue »

<!--- End @data_maintenancefrequencycode.html --->

====
<!--- Begin @data_languages.html --->

# Langue de la donnée

## Définition
Si la donnée décrite contient des informations textuelles (table attributaire avec des noms de lieu par exemple), c’est la ou les langue(s) utilisée(s) pour renseigner ces informations.

Parmi la liste des 23 langues officielles de l’union européenne indiquées par la directive Inspire, dans le cadre du partenariat CIGAL, 3 langues sont proposées par défaut : le français, l’anglais et l’allemand.

## Recommandations
Par défaut la langue de la donnée est « français ».
Si la donnée ne contient pas de données textuelles (ex. : un modèle numérique de terrain (MNT) sous forme de fichiers de points XYZ, ou un orthophotographie), il est préconiser d’indiquer comme langue pour la donnée la même langue que pour la description de la fiche de métadonnées. Généralement ce sera le français.

## Exemples
Langue de la donnée : « Français »

<!--- End @data_languages.html --->

====
<!--- Begin @data_identifiers.html --->

# Identifiant de la donnée

## Définition
Le ou les identifiants de la donnée correspondent à un ou plusieurs codes permettant d’identifier de manière unique la donnée.
Ces codes ne sont jamais modifiés pour une donnée même lors de sa mise à jour.

## Recommandations
Afin d’obtenir un code unique, il est recommandé de construire cet identifiant en associant le code pays de l’organisme propriétaire de la donnée, son numéro SIREN, ainsi qu’un code unique définit par le propriétaire de la donnée selon le schéma ci-dessous.
Le code unique peut être généré de façon automatique selon un algorithme ou de façon aléatoire.

Structure recommandée de l’identifiant :
Code du pays : « FR »
Séparateur : « – »
Code SIREN : code à 9 chiffres
Séparateur : « – »
Code unique

Il est également possible d’associer au code un espace de nommage pour préciser sa provenance (cf. exemple 2 ci-dessous). L’espace de nommage correspond au domaine dans lequel la donnée est identifiée par ce code et renvoie généralement à l’organisme qui a attribué l’identifiant à la donnée.
Il est recommandé d’intégrer les informations concernant l’espace de nom, dans le code de la donnée (cf. exemple 1 ci-dessous).

## Exemples
Identifiant de la donnée :
Code : « FR–#00019–1#3_D023 »

Ce qui signifie :
FR : code pour la France
00019 : numéro SIREN de la Région Alsace
1#3_R004 : numéro unique établi en interne à la Région Alsace, composé de la date de création de la donnée (23/0#12) suivi de la lettre « D » indiquant qu’il s’agit d’une donnée et d’un numéro d’ordre.

Identifiant de la donnée :
Code : « 110#BdOCS2008-CIGAL »
Espace de nommage : « FR–#00019 »

Ce qui signifie :
Pour le code : « 110#BdOCS2008-CIGAL » est un code unique établi en interne à la Région Alsace pour le partenariat CIGAL, composé de la date de création de la donnée (09/0#11) suivi du nom officiel de la base de données
Pour l’espace de nommage : « FR » est le code pour la France et « #00019 », le numéro SIREN de la Région Alsace

<!--- End @data_identifiers.html --->

====
<!--- Begin @data_topiccategories.html --->

# Catégorie internationale

## Définition
Ce champ permet de classer la donnée dans une ou plusieurs catégories d’une liste fermée et internationale, facilitant ainsi la recherche de cette donnée. Il est important d’associer la donnée à la (ou les) thématique(s) la plus pertinente.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit par la norme ISO 19115 (liste B.# MD_TopicCategories) et reprise dans le tableau suivant.

Liste des catégories internationales :

Id
Intitulé
Définition
1
Agriculture
Elevage et/ou cultures
Exemples : agriculture, irrigation, aquaculture, plantations
2
Flore et faune
Flore et faune dans un écosystème naturel
Exemples : habitat, écologie, faune sauvage, faune aquatique, sciences biologiques, zones humides, végétation, biodiversité
3
Limites politiques et administratives
Exemples : limites de pays, de provinces, de départements, de communes
4
Climatologie, météorologie
Processus et phénomènes atmosphériques
Exemples : climat, météorologie, conditions atmosphériques, changements climatiques, couverture nuageuse
5
Economie
Activités économiques
Exemples : production, travail, revenu, commerce, industrie, tourisme et éco-tourisme, foresterie, pêche, chasse, exploration et exploitation des ressources minières, pétrole, gaz naturel
6
Topographie
Topographie au dessous et dessus du niveau de la mer
Exemples : altitude, bathymétrie, MNT, pentes et calculs dérivés de l’altitude
7
Ressources et gestion de l’environnement
Ressources naturelles, protection, conservation des ressources naturelles
Exemples : pollution, traitement et stockage des déchets, suivi de l’environnement, gestion du risque, réserves naturelles, paysage
8
Géosciences
Informations relatives aux sciences de la terre
Exemples : composants et processus géophysiques, géologie, minéralogie, tectonique, risque sismique
9
Santé
Santé, services de santé, épidémiologie
Exemples : maladies et épidémie, facteurs affectant la santé, santé mentale et physique, services de santé
10
Carte de référence de la couverture terrestre
Carte de référence
Exemples : occupation des terres, imagerie aérienne et satellitale, carte thématiques, carte topographiques
11
Infrastructures militaires
Bases militaires et infrastructures
12
Hydrographie
Exemples : fleuves, rivières, glaciers, lacs salés, systèmes hydrographiques, barrages, débits, qualité de l’eau
13
Localisant
Exemples : zones postales, adresses, points de contrôle, réseau géodésique
14
Océans
Composants et caractéristiques du milieu maritime
Exemples : littoral, récifs, marée, etc.
15
Planification et aménagement du territoire
Exemples : carte d’utilisation des terres, plan d’occupation des sols, planification pour la prévention des risques
16
Société
Caractéristiques des sociétés et des cultures
Exemples :lois, anthropologie, éducation, données démographiques, archéologique, suivi des systèmes  sociaux, croyances, us et coutumes, crimes et justices
17
Aménagements urbains
aménagements urbains
Exemples : musée, église, usines, maisons, monuments, boutiques, immeubles
18
Infrastructures de transport
Moyens de transports des personnes et des biens
Exemples : routes, aéroports, tunnels, viaducs, ponts, chemin de fer
19
Réseaux de télécommunication, d’énergie
Systèmes de distribution de gestion ou de stockage de l’énergie, de l’eau, des déchets. Infrastructures et services de communication.
Exemples : source d’énergie solaire, hydroélectrique, nucléaire, épuration et distribution des eaux, réseau de distributi

## Recommandations
Il est recommandé de n’indiquer qu’une seule catégorie. Une donnée appartenant à plusieurs catégories doit rester une exception, mais si elle appartient bien à plusieurs catégories alors ne pas hésiter à lui associer plusieurs catégories.
Il est important de s’assurer de la cohérence des informations saisies pour la catégorie internationale et la classification européenne Inspire (cf. paragraphe #et tableau de correspondance en annexe 2).

## Exemples
Catégorie internationale : « Localisant »

<!--- End @data_topiccategories.html --->

====
<!--- Begin @data_inspirekeywords.html --->

# Classification européenne INSPIRE
#1. Définition
Ce champ permet de classer la donnée dans un ou plusieurs thèmes d’une liste fermée de valeurs définis au niveau européen via la directive INSPIRE. Cette classification vise à faciliter la recherche de cette donnée. 
Il est important d’associer la donnée au(x) thème(s) le(s) plus pertinent parmi les 34 thèmes ci-après définis.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit par la directive européenne Inspire, s’appuyant sur le Thesaurus GEMET des thèmes Inspire et reprise dans le tableau suivant.

Liste des thèmes de classification européens :

Id
Intitulé
Défintion
1
Référentiels de coordonnées
Systèmes de référencement unique des informations géographiques dans l'espace sous forme d'une série de coordonnées (x, y, z) et/ou la latitude et la longitude et l'altitude, en se fondant sur un point géodésique horizontal et vertical.
2
Systèmes de maillage géographique
Grille multi-résolution harmonisée avec un point d'origine commun et une localisation ainsi qu'une taille des cellules harmonisées.
3
Dénominations géographiques
Noms de zones, de régions, de localités, de grandes villes, de banlieues,  de villes moyennes ou d'implantations, ou tout autre élément géographique ou topographique d'intérêt public ou historique.
4
Unités administratives
Unités d'administration séparées par des limites administratives et délimitant les zones dans lesquelles les États membres détiennent et/ou exercent leurs compétences, aux fins de l'administration locale, régionale et nationale.
5
Adresses
Localisation des propriétés fondée sur les identifiants des adresses, habituellement le nom de la rue, le numéro de la maison et le code postal.
6
Parcelles cadastrales
Zones définies par les registres cadastraux ou équivalents.
7
Réseaux de transport
Réseaux routier, ferroviaire, aérien et navigable ainsi que les infrastructures associées. Sont également incluses les correspondances entre les différents réseaux, ainsi que le réseau transeuropéen de transport tel que défini dans la décision no 1#96/CE du Parlement européen et du Conseil du 23 juillet 1996 sur les orientations communautaires pour le développement du réseau transeuropéen de transport et les révisions futures de cette décision.
8
Hydrographie
Éléments hydrographiques, y compris les zones maritimes ainsi que toutes les autres masses d'eau et les éléments qui y sont liés, y compris les bassins et sous-bassins hydrographiques. Conformes, le cas échéant, aux définitions établies par la directive 2000/60/CE du Parlement européen et du Conseil du 23 octobre 2000 établissant un cadre pour une politique communautaire dans le domaine de l'eau et sous forme de réseaux.
9
Sites protégés
Zone désignée ou gérée dans un cadre législatif international, communautaire ou national en vue d'atteindre des objectifs spécifiques de conservation.
10
Altitude
Modèles numériques pour l'altitude des surfaces terrestres, glaciaires et océaniques. Comprend l'altitude terrestre, la bathymétrie et la ligne de rivage.
11
Occupation des terres
Couverture physique et biologique de la surface terrestre, y compris les surfaces artificielles, les zones agricoles, les forêts, les zones (semi-) naturelles, les zones humides et les masses d'eau.
12
Ortho-imagerie
Images géoréférencées de la surface terrestre, provenant de satellites ou de capteurs aéroportés.
13
Géologie
Géologie caractérisée en fonction de la composition et de la structure. Englobe le substratum rocheux, les aquifères et la géomorphologie.
14
Unités statistiques
Unités de diffusion ou d'utilisation d'autres informations statistiques.
15
Bâtiments
Situation géographique des bâtiments.
16
Sols
Sols et sous-sol caractérisés selon leur profondeur, texture, structure et teneur en particules et en matières organiques, pierrosité, érosion, le cas échéant pente moyenne et capacité anticipée de stockage de l'eau.
17
Usage des sols
Territoire caractérisé selon sa dimension fonctionnelle prévue ou son objet socioéconomique actuel et futur (par exemple, résidentiel, industriel, commercial, agricole, forestier, récréatif).
18
Santé et sécurité des personnes
Répartition géographique des pathologies dominantes (allergies, cancers, maladies respiratoires, etc.) liées directement (pollution de l'air, produits chimiques, appauvrissement de la couche d'ozone, bruit, etc.) ou indirectement (alimentation, organismes génétiquement modifiés, etc.) à la qualité de l'environnement, et ensemble des informations relatif à l'effet de celle-ci sur la santé des hommes (marqueurs biologiques, déclin de la fertilité, épidémies) ou leur bien-être (fatigue, stress, etc.).
19
Services d'utilité publique et services publics
Comprend les installations d'utilité publique, tels que les égouts ou les réseaux et installations liés à la gestion des déchets, à l'approvisionnement énergétique, à l'approvisionnement en eau, ainsi que les services administratifs et sociaux publics, tels que les administrations publiques, les sites de la protection civile, les écoles et les hôpitaux. 
20
Installations de suivi environnemental
La situation et le fonctionnement des installations de suivi environnemental comprennent l'observation et la mesure des émissions, de l'état du milieu environnemental et d'autres paramètres de l'écosystème (biodiversité, conditions écologiques de la végétation, etc.) par les autorités publiques ou pour leur compte. 
21
Lieux de production et sites industriels
Sites de production industrielle, y compris les installations couvertes par la directive 96/61/CE du Conseil du 24 septembre 1996 relative à la prévention et à la réduction intégrées de la pollution et les installations de captage d'eau, d'extraction minière et de stockage.
22
Installations agricoles et aquacoles
Équipement et installations de production agricoles (y compris les systèmes d'irrigation, les serres et les étables).
23
Répartition de la population – démographie
Répartition géographique des personnes, avec les caractéristiques de population et les niveaux d'activité, regroupées par grille, région, unité administrative ou autre unité analytique.
24
Zones de gestion, de restriction ou de réglementation et unités de déclaration
Zones gérées, réglementées ou utilisées pour les rapports aux niveaux international, européen, national, régional et local. Sont inclus les décharges, les zones restreintes aux alentours des sources d'eau potable, les zones vulnérables aux nitrates, les chenaux réglementés en mer ou les eaux intérieures importantes, les zones destinées à la décharge de déchets, les zones soumises à limitation du bruit, les zones faisant l'objet de permis d'exploration et d'extraction minière, les districts hydrographiques, les unités correspondantes utilisées pour les rapports et les zones de gestion du littoral.
25
Zones à risque naturel
Zones sensibles caractérisées en fonction des risques naturels (tous les phénomènes atmosphériques, hydrologiques, sismiques, volcaniques, ainsi que les feux de friche qui peuvent, en raison de leur situation, de leur gravité et de leur fréquence, nuire gravement à la société), tels qu'inondations, glissements et affaissements de terrain, avalanches, incendies de forêts, tremblements de terre et éruptions volcaniques.
26
Conditions atmosphériques
Conditions physiques dans l'atmosphère. Comprend les données géographiques fondées sur des mesures, sur des modèles ou sur une combinaison des deux, ainsi que les lieux de mesure. 
27
Caractéristiques géographiques météorologiques 
Conditions météorologiques et leur mesure: précipitations, température, évapotranspiration, vitesse et direction du vent.
28
Caractéristiques géographiques océanographiques 
Conditions physiques des océans (courants, salinité, hauteur des vagues, etc.).
29
Régions maritimes
Conditions physiques des mers et des masses d'eau salée divisées en régions et en sous-régions à caractéristiques communes.
30
Régions biogéographiques
Zones présentant des conditions écologiques relativement homogènes avec des caractéristiques communes.
31
Habitats et biotopes
Zones géographiques ayant des caractéristiques écologiques particulières — conditions, processus, structures et fonctions (de maintien de la vie) — favorables aux organismes qui y vivent. Sont incluses les zones terrestres et aquatiques qui se distinguent par leurs caractéristiques géographiques, abiotiques ou biotiques, qu'elles soient naturelles ou semi-naturelles.
32
Répartition des espèces
Répartition géographique de l'occurrence des espèces animales et végétales regroupées par grille, région, unité administrative ou autre unité analytique.
33
Sources d'énergie
Sources d'énergie comprenant les hydrocarbures, l'énergie hydraulique, la bioénergie, l'énergie solaire, l'énergie éolienne, etc., le cas échéant accompagnées d'informations relatives à la profondeur/la hauteur de la source.
34
Ressources minérales
Données minérales comprenant les minerais métalliques, les minéraux industriels, etc., le cas échéant accompagnées d'informations relatives à la profondeur/la hauteur de la donnée.
#2. Recommandations
Il est recommandé de n’indiquer qu’un seul thème INSPIRE. Une donnée appartenant à plusieurs thèmes doit rester une exception, mais si elle appartient bien à plusieurs thèmes, ne pas hésiter à lui associer plusieurs thèmes.
Il est important de s’assurer de la cohérence des informations saisies pour la catégorie internationale et la classification européenne Inspire (cf. paragraphe #et tableau de correspondance en annexe 2).
#3. Exemples
Classification européenne : « Répartition de la population – démographie »

<!--- End @data_inspirekeywords.html --->

====
<!--- Begin @data_keywords.html --->

# Mots-clés
#1. Définition
Lors de la description d’une donnée, il est possible et conseillé d’indiquer un ou plusieurs mots-clés qui faciliteront la recherche pour l’utilisateur final.
#2. Recommandations
Les mots-clés viennent en complément de la catégorie internationale et des éléments de la classification européenne. Il n’est donc pas nécessaire de reprendre les thèmes déjà définis.
Les mots-clés doivent être écrits en minuscule, accentués et au singulier.

Leur choix doit répondre à quelques règles de bon sens pour faciliter la recherche par l’utilisateur final :
Inutile de saisir un trop grand nombre de mots-clés : 3 à 10 mots-clés doivent généralement suffire.
Privilégier les termes qui qualifient la donnée au détriment de ceux qui seront trop génériques comme « donnée géographique » ou « base de données ».
Eviter de renseigner ici une information qui relève d’un autre champ, comme le système de projection, le format de diffusion ou la catégorie internationale.
Saisir des mots susceptibles d’être recherchés par l’utilisateur final, c’est à dire utilisés dans le langage habituel. Par exemple, le terme « chemin » sera sans doute préférable à celui de « sente ». Cependant, dans certains cas, données techniques par exemple, des termes spécifiques peuvent être privilégiés.

Lorsque les mots-clés sont issus d’un thésaurus, il est recommandé de préciser les informations sur le thésaurus (nom du thesaurus et la date de création, publication ou mise à jour) dans les champs correspondants.

Pour renseigner les mots-clés, il est conseillé d’utiliser le thésaurus GEMET qui est multilingue :  http://www.eionet.europa.eu/gemet/alphabetic?langcode=fr.
Pour ce thésaurus, les informations à renseigner sont :
Nom du thésaurus : « GEMET - Concepts, version 3.0, 2011-07-13 »
Date de publication : « 13/07/2011 »
#3. Exemples
Mot-clé complémentaire :
Mot-clé : « modèle terrestre numérique »
Nom du thésaurus : « GEMET - Concepts, version 3.0, 2011-07-13 »
Date de publication : « 13/07/2011 »

<!--- End @data_keywords.html --->

====
<!--- Begin @data_contacts.html --->

# Contacts pour les données
## Définition
Ce groupe de champs permet de connaître les personnes ou les organismes qui sont intervenus ou interviennent encore dans la vie de la donnée (production, mise à jour, diffusion, etc.).
Chaque contact se compose de plusieurs informations :
Nom/Prénom,
Fonction, 
Nom de l’organisme,
Adresse,
Code postal,
Ville,
Téléphone,
Email,
Rôle de la personne à contacter

Parmi les valeurs possibles des rôles pour un contact définies par la norme ISO 19115 (liste B.#CI_RoleCode), pour faciliter la saisie dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont :
les valeurs proposées par défaut sont :
 « Fournisseur » : organisme  ou personne qui délivre physiquement la fiche de description, soit de manière directe au destinataire, soit par l’intermédiaire d’un diffuseur.
« Gestionnaire » : organisme  ou personne responsable de la gestion et de la mise à jour de la fiche de description.
« Propriétaire » : organisme  ou personne qui est propriétaire de la donnée et qui en détient les droits patrimoniaux.
« Point de contact » : organisme  ou personne que l’on peut contacter pour avoir des renseignements détaillés sur la fiche de description.
 « Auteur » : organisme  ou personne qui a complété la fiche de description. Il en détient les droits moraux.

## Recommandations
Au moins un contact ayant pour rôle « Point de contact » doit être défini pour chaque donnée. Il correspond à la personne ou l’organisme à contacter pour obtenir des informations complémentaires et des précisions sur la donnée. Il s’agit généralement de son gestionnaire ou administrateur qui est également l’auteur de la fiche de description.
D’autres contacts peuvent être également ajoutés. Il est d’ailleurs recommandé d’indiquer le fournisseur de la donnée. Cette information apparaîtra dans la partie « Accès aux données « sur la fiche de consultation.

Il est recommandé de saisir l’ensemble des informations descriptives du contact, notamment :
Le nom du contact en majuscules et le prénom avec la première lettre en majuscules
La fonction du contact, en précisant si nécessaire la direction ou le service dont il dépend
L’organisme en toute lettre (éviter les signes non explicités)
L’adresse e-mail de la personne à contacter
Le rôle, indispensable avec comme valeur par défaut « Point de contact » 

## Exemples

<!--- End @data_contacts.html --->

====
<!--- Begin @data_contact_name.html --->

[A compléter]

<!--- End @data_contact_name.html --->

====
<!--- Begin @data_contact_position.html --->

[A compléter]

<!--- End @data_contact_position.html --->

====
<!--- Begin @data_contact_organisation.html --->

[A compléter]

<!--- End @data_contact_organisation.html --->

====
<!--- Begin @data_contact_tel.html --->

[A compléter]

<!--- End @data_contact_tel.html --->

====
<!--- Begin @data_contact_email.html --->

[A compléter]

<!--- End @data_contact_email.html --->

====
<!--- Begin @data_contact_address.html --->

[A compléter]

<!--- End @data_contact_address.html --->

====
<!--- Begin @data_contact_cp.html --->

[A compléter]

<!--- End @data_contact_cp.html --->

====
<!--- Begin @data_contact_city.html --->

[A compléter]

<!--- End @data_contact_city.html --->

====
<!--- Begin @data_contact_logo_url.html --->

[A compléter]

<!--- End @data_contact_logo_text.html --->

====
<!--- Begin @data_contact_role.html --->

[A compléter]

<!--- End @data_contact_role.html --->

====
<!--- Begin @todo.html --->

# Référence géographique de la donnée


====
<!--- Begin @data_geographicextents.html --->

# Emprise
## Définition
Ce champ permet d’indiquer l'emprise explorée où des informations ont été recueillies pour constituer la donnée. Ils s’agit d’un rectangle de délimitation intégrant la zone d’étude dans laquelle les données ont été identifiées et localisées. 

Une emprise est ainsi constituée :
D’un nom la qualifiant
De 4 coordonnées précisant les longitudes ouest et est et les latitudes sud et nord du rectangle englobant dans lequel est située la zone concernant la donnée

## Recommandations
Dans le cas particulier où la donnée couvre plusieurs zones distinctes, il est possible de renseigner plusieurs emprises si celles-ci ne se superposent pas.

L’emprise doit englober l’étendue du territoire pour lequel le producteur garantit la connaissance et la saisie de l’information fournie. L’absence vérifiée d’éléments sur un territoire constitue une information en soi, ainsi, le rectangle englobant peut parfois couvrir une zone bien plus large que l’emprise des données elles-mêmes.
Cependant, dans un souci de qualité et de précision de la description de la donnée, le rectangle de délimitation doit être le plus ajusté possible, afin de délimiter le plus fidèlement possible la donnée décrite. 
## Exemples

<!--- End @data_geographicextents.html --->

====
<!--- Begin @data_referencesystems.html --->

# Système de projection
## Définition
Information qui indique le ou les systèmes de projections dans lesquels sont disponibles la donnée décrite.
La liste des systèmes de projection couramment utilisés en Alsace est la suivante :
RGF93 – Lambert 93 (EPSG:#)
RGF93 – Lambert 93 CC48 (EPSG:#)
RGF93 – Lambert 93 CC49 (EPSG:#)
NTF Paris – Lambert zone II (EPSG:#2)
NTF Paris – Lambert zone I (EPSG:#1)
NTF Paris – Lambert Nord (EPSG:#1)
WGS84 – UTM Zone 32N (EPSG:3#)
WGS84 – 2D (EPSG:4#
WGS84 – 3D (EPSG:4979)

## Recommandations
Toutes les données échangeables devraient être disponibles au moins en projection Lambert 93. Pour l’Alsace, la projection locale Lambert 93 CC48 (zone 9) est privilégiée.

Il est recommandé d’indiquer le système géodésique utilisé (datum), le nom habituel d’usage de la projection le cas échéant et son code EPSG.

Pour la France, la liste des systèmes de projection et des codes EPSG peut être consultée en suivant le lien : http://georezo.net/wiki/main/dico/epsg.

## Exemples
Système de projection : « RGF93 – Lambert 93 CC48 (EPSG:#) »

<!--- End @data_referencesystems.html --->

====
<!--- Begin @data_temporalextents.html --->

# Etendue temporelle

##Définition
L’étendue temporelle définit la période de temps couverte par le contenu de la donnée. C’est un indicateur de l’actualité de la donnée

Cette période peut être exprimée de l’une des manières suivantes :
une date déterminée,
un intervalle de dates exprimé par la date de début et la date de fin de l’intervalle,
un mélange de dates et d’intervalles.
## Recommandations
Dans le cadre du partenariat CIGAL il est recommandé de renseigner prioritairement une date de création, de révision ou de publication pour la donnée (cf. paragraphe #. L’étendu temporelle est une information alors considérée comme optionnelle.

Pour les étendues temporelles, le système de référence par défaut est le calendrier grégorien.
Indiquer le système de référence uniquement lors de l’utilisation d’un autre système de calcul des périodes de temps, comme par exemple les ères géologiques.

## Exemples
Il peut s’agir par exemple des dates de début et de fin d’une campagne de prise de mesures ou de la période de validité d’une donnée règlementaire.

Etendue temporelle : « 2011-08-24 » / « 2013-08-24 »

<!--- End @data_temporalextents.html --->

====
<!--- Begin @data_spatialrepresentationtype.html --->

# Type de représentation
## Définition
Cette information permet de savoir s’il s’agit de données vecteur, raster, tabulaire, à maille triangulaire, 3D, etc. 

Parmi les valeurs possibles des type de représentations spatiales définies par la norme ISO 19115 (liste B.# MD_SpatialRepresentationTypeCode), pour faciliter la saisi dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont « Vecteur » et « Raster ».
## Recommandations
La valeur par défaut est « Vecteur ».
La représentation spatiale d’une carte est « Raster ».
## Exemples
Type de représentation : « Vecteur ».

<!--- End @data_spatialrepresentationtype.html --->

====
<!--- Begin @todo.html --->

5.  Qualité de la donnée

<!--- End @todo.html --->

====
<!--- Begin @data_scales.html --->

# Résolution spatiale
## Définition
Ce champ permet de spécifier l’échelle ou la résolution de la donnée.
Il s’agit généralement de l’échelle optimum d’utilisation de la donnée pour réaliser des cartes ou des analyses spatiales.

On choisit d’indiquer la résolution spatiale : 
soit en échelle de représentation ou échelle équivalente (principalement pour les représentations cartographiques),
soit sous la forme d’une distance au sol, principalement pour les données maillées et des produits dérivés d’imagerie, représentant la résolution des données (typiquement la taille d’un pixel d’une image au sol).
## Recommandations
L’échelle de la donnée décrite ne peut pas être plus grande que celle du référentiel utilisé pour produire cette donnée géographique. Par exemple, on ne produit pas une donnée au 1 :2000ème  avec un SCAN 25).

Pour l’échelle de représentation, indiquer seulement le dénominateur : pour une échelle au 1 :10000ème, la valeur à renseigner est « 10000 ».
Pour la résolution, la valeur doit être renseignée en mètre.

Un complément d’information concernant la résolution spatiale et notamment la précision de positionnement altimétrique et planimétrique de la donnée peut être indiqué dans le champ relatif à la qualité (cf. paragraphe #.
## Exemples
Echelle : « 10000 »
Résolution : « 0,5 »

<!--- End @data_scales.html --->

====
<!--- Begin @data_dq_level.html --->

# Niveau décrit
## Définition
Il s’agit d’une information technique précisant à quel niveau est décrite la qualité de la donnée, généralement au niveau du « jeu de données » ou de la « série de données ».

Parmi les valeurs possibles de type de ressources définies par la norme ISO 19115 (liste B.# MD_ScopeCode), pour faciliter la saisie dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont « Jeu / série de données » et « Collection / ensemble de série de données ».
## Recommandations
La valeur par défaut est celle du « Type de donnée décrite » (cf. paragraphe 1.4).
Cette information technique ne devrait pas être modifiée par l’utilisateur.
## Exemples
Niveau décrit : « Jeu de données ».

<!--- End @data_dq_level.html --->

====
<!--- Begin @data_li_statement.html --->

# Texte sur la qualité
##Définition
La description de la qualité des données n'a pas pour vocation de dire si la donnée est de bonne ou de mauvaise qualité mais de vérifier que le niveau de qualité proposé est en adéquation avec l'application envisagée et les besoins des utilisateurs.
Elle en précise par notamment l’exhaustivité, la précision, les limites d’utilisation, etc.
Ce texte doit également fournir des éléments sur la généalogie de la donnée (données sources) et son mode de production.
## Recommandations
Il est recommandé d’être le plus précis possible dans la description de la qualité de la donnée. Les informations qui doivent être renseignées sont par exemple :
L’exhaustivité : quelle partie est concernée par le lot de données ? Qu’est-ce qui est exclut ?
La précision positionnement planimétrique : indiquer des éléments complémentaires aux informations sur la résolution spatiale (cf. paragraphe # en explicitant les conditions optimum d’usage et d’exploitation de la donnée.
Le contrôle qualité : y-a-il un contrôle qualité des données ? Si oui, expliquer les règles générales de celui-ci et les résultats obtenus. Y-a-il des attributs qui informent de la qualité de l’objet (par exemple un code précision) ?
Le mode de production : existe-il un cahier des charges ou un dossier de spécifications techniques ?
Les limites techniques d’utilisation : vous pouvez avertir l’utilisateur des usages pour lesquels le jeu de données n’est pas adapté.
La généalogie et l’historique de la donnée : texte libre qui retrace l'histoire des données en décrivant les principales phases de production, de contrôle et de correction de la base, en indiquant les données ayant permis cette fabrication (référentiels et données exogènes notamment). 
Pour les données 3D préciser l’étendue verticale et le système vertical de référence.
Préciser les éléments d’étendu temporelle.

Il est également possible de faire le lien avec des éléments de documentation (cf. paragraphe 6.8).
## Exemples

<!--- End @data_li_statement.html --->

====
<!--- Begin @todo.html --->

6.  Diffusion de la donnée

<!--- End @todo.html --->

====
<!--- Begin @data_characterset.html --->

# Jeu de caractères (encodage) de la donnée
## Définition
Il s’agit d’une information purement technique précisant l’encodage utilisé pour générer le fichier d’échange de la fiche au format XML. Il est normalement définit par l’application utilisée.

Parmi les valeurs possibles d’encodage des caractères de la fiche définies par la norme ISO 19115 (liste B.# MD_CharacterSetCode), dans le cadre du partenariat CIGAL, les valeurs proposées par défaut sont « utf8 », « utf16 », « 8859part1 », « 8859part15 » et « 8859part16 ».
## Recommandations
La valeur par défaut est « utf8 ».
## Exemples
Jeu de caractères : « utf8 »
Jeu de caractères : « 8859part1 »

<!--- End @data_characterset.html --->

====
<!--- Begin @todo.html --->

# Format de diffusion
## Définition
Ces informations indiquent le ou les formats dans lesquels la donnée est disponible auprès du fournisseur. Il est demandé de précisé la version du format.
Les spécifications ou une description du format peuvent également être renseignées.  
## Recommandations
Privilégier les formats communément utilisés dans les SIG et notamment les formats d’échange.
Il est recommandé d’indiquer le nom du format en toute lettre en plus de l’extension du fichier lorsque c’est le cas.
## Exemples
Format de diffusion : « Shapefile (shp) » / « 1.0 ».

<!--- End @data_distformats.html --->

====
<!--- Begin @data_constraints_limitations.html --->

# Limites et contraintes légales d’accès et d’utilisation
## Généralité sur les contraintes légales d’accès et d’utilisation
Ces informations concernent l’approche légale des limites et contraintes d’accès et d’utilisation de la donnée. Les limites d’usage de la donnée relatives à ses caractéristiques techniques (échelle, précision, etc.) sont à renseigner dans le texte sur la qualité de la donnée (cf. paragraphe #.

Pour définir les limites et contraintes légales d’accès et d’utilisation de la donnée, 4 informations sont à renseigner :
Les contraintes de sécurité liées au niveau de classification ou de confidentialité de la donnée (donnée sensible, donnée secret défense, etc.)
Les contraintes l’égales d’accès et d’utilisation publique liées à des restrictions permises par la directive Inspire (données sur les espèces menacées, données nominatives, etc.)
Les contraintes l’égales d’accès et d’utilisation liées à l’existence d’autres restrictions imposées par la loi (droits d’auteur, licence, etc.)
Les conditions légales d’utilisation de la donnée liées à des contraintes administratives d’usage et d’accès (redevances, droits de représentation, mentions légales, etc.)

Les 3 premières informations dépendant de listes fermées de valeurs. La dernière permet la saisie de texte libre.

Dans le cadre du partenariat CIGAL il est proposé de mettre en œuvre ces éléments de la façon suivante :
Le niveau de confidentialité est une liste de valeurs (secret, confidentiel, etc.) à saisir obligatoirement et ayant par défaut la valeur « Non classifié » (cf. paragraphe 6.#
Les contraintes légales d’accès et d’utilisation définis par la directive INSPIRE correspondent à une liste de valeurs relatives au code de l’environnement et à la directive INSPIRE. Par défaut, la valeur est fixée à « Pas de restriction d’accès public selon INSPIRE » (cf. paragraphe 6.#.
Les contraintes légales d’accès et d’utilisation liées à d’autres restrictions imposées par la loi sont définies via une liste de valeurs relatives au droit d’auteur / propriété (brevet, licence, etc.). Par défaut ce champ est non renseigné et non obligatoire (cf. paragraphe 6.#.
Les conditions et mentions légales d’utilisation sont saisies sous forme de texte libre et viennent compléter les informations des 3 listes précédentes. Par défaut, la valeur renseignée est « Aucune condition d’accès ne s’applique ». Il est cependant recommandé de bien préciser les mentions légales et les sources à faire figurer sur les supports utilisant les données (cf. paragraphe 6.#.

<!--- End @data_constraints_limitations.html --->

====
<!--- Begin @data_security_classification.html --->

# Niveau de classification ou confidentialité de la donnée
## Définition
Information sur le niveau de classification ou confidentialité de la donnée.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit par la norme ISO 19115 (liste B.# MD_ClassificationCode) :
« Non classifié » : la donnée ne revêt pas un caractère sensible
« Restreint » : le caractère sensible de la donnée restreint son utilisation ou sa diffusion
« Confidentiel » : la donnée présente un caractère confidentiel.
« Secret » : la confidentialité de la donnée implique des mesures de protection particulière
« Top secret » : la confidentialité de la donnée implique des mesures de protection extrêmes

## Recommandations
La valeur par défaut est fixée à « Non classifié ».
Une seule valeur peut-être renseignée.

La classification de la donnée à un niveau supérieur de confidentialité, autre que « Non classifié » indique le caractère sensible de la donnée. Elle doit être justifiée légalement.

## Exemples
Niveau de confidentialité : « Non classifié »

<!--- End @data_security_classification.html --->

====
<!--- Begin @data_legal_accessinspireconstraints.html --->

# Contraintes légales d’accès public selon INSPIRE
## Définition
Cette information renseigne l’utilisateur sur les contraintes d’accès publics imposées par la loi au regarde la mise en œuvre d’Inspire.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit au niveau français par la Conseil National de l’information Géographique (CNIG) et reprise dans le tableau suivant.

Liste des valeurs pour la définition des contraintes légales d’accès public selon INSPIRE :

Id
Raison légale
Intitulé de la contrainte
0
Pas de restriction d’accès public selon INSPIRE
Aucun des articles de la loi ne peut être invoqué pour justifier d’une restriction d’accès public.
1
L12#I-1 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
La confidentialité des travaux des autorités publiques, lorsque cette confidentialité est prévue par la loi.
2
L124-5-II-1 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article1#)
Les relations internationales, la sécurité publique ou la défense nationale. 
3
L124-5-II-2 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
La bonne marche de la justice, la possibilité pour toute personne d’être jugée équitablement ou la capacité d’une autorité publique d’effectuer une enquête d’ordre pénal ou disciplinaire. 
4
L12#I-1 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
La confidentialité des informations commerciales ou industrielles, lorsque cette confidentialité est prévue par la législation nationale ou communautaire afin de protéger un intérêt économique légitime, notamment l’intérêt public lié à la préservation de la confidentialité des statistiques et du secret fiscal.
5
L124-5-II-3 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
Les droits de propriété intellectuelle.
6
L12#I-1 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
La confidentialité des données à caractère personnel et/ou des fichiers concernant une personne physique lorsque cette personne n’a pas consenti à la divulgation de ces informations au public, lorsque la confidentialité de ce type d’information est prévue par la législation nationale ou communautaire.
7
L12#I-3 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
Les intérêts ou la protection de toute personne qui a fourni les informations demandées sur une base volontaire sans y être contrainte par la loi ou sans que la loi puisse l’y contraindre, à moins que cette personne n’ait consenti à la divulgation de ces données.
8
L12#I-2 du code de l’environnement (Directive 2007/2/CE (INSPIRE), Article 1#)
La protection de l’environnement auquel ces informations ont trait, comme par exemple la localisation d’espèces rares.

Il est précisé que l’article L12#I du code de l’environnement (cas 1, 4, 6, 7 et 8) ne peut pas être invoqué pour justifier une restriction d’accès public à des informations concernant des émissions dans l’environnement (article L 127-6 du même code).
Par ailleurs, selon l’article L127-8-IV du code de l’environnement, une restriction d’accès public au titre de l’article L124-5-II 1er ou 2ème alinéa du code de l’environnement (cas 2 et 3) induit une restriction de partage de la donnée entre autorités publiques.

## Recommandations
La valeur par défaut est « Pas de restriction d’accès public selon INSPIRE ».
## Exemples
Contrainte légale d’accès public selon Inspire : « Pas de restriction d’accès public selon INSPIRE ».

<!--- End @data_legal_accessinspireconstraints.html --->

====
<!--- Begin @data_legal_accessotherconstraints.html --->

# Autres contraintes légales d’accès public à la donnée
## Définition
Cet information renseigne l’utilisateur sur les contraintes d’accès publics imposées par la loi, indépendamment de la directive Inspire.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit par la norme ISO 19115 (liste B.# MD_RestrictionCode) :
« Pas de restriction d’accès public » : aucune restriction ne s’applique
« Droit d’auteur / Droit moral (copyright) » : restriction lié à l’exercice du droit moral
« Brevet » : restriction induite par l’existence d’un brevet
« Brevet en instance » : restriction induite par le dépôt d’un brevet en cours
« Marque de commerce » : restriction lié à l’existence d’un dépôt de marque
« Licence » : restriction induite par l’existence d’une licence
« Droit de propriété intellectuelle / Droit patrimonial » : restriction lié à l’exercice du droit patrimonial
« Restreint » : cette valeur n’a pas d’application identifiée en France

## Recommandations
Par défaut, le champ est non renseigné ou possède la valeur « Pas de restriction d’accès public ».

## Exemples
Autre contrainte légale d’accès public : « Pas de restriction d’accès public ».

<!--- End @data_legal_accessotherconstraints.html --->

====
<!--- Begin @todo.html --->

# Autres conditions et mentions légales d’accès et d’utilisation
## Définition
Cet information renseigne l’utilisateur sur les conditions d’utilisation de la donnée d’un point de vue administratif et légal.
Il complète les informations relatives aux contraintes d’accès public liées à Inspire et autres contraintes précédemment renseignées. Il précise notamment les conditions d’accès en terme de licence, d’acte d’engagement, de mentions légales, de restriction d’usage dans un cadre commercial ou concurrentiel, etc.

## Recommandations
Les limites techniques d’usage et d’exploitation liées à la qualité de la donnée doivent être indiquées dans le champ dédié à cet effet (cf. paragraphe #.
Si aucune condition légale d’utilisation et d’accès n’existe, indiquer « Aucune autre condition légale ne s’applique ».
Si les conditions ne sont pas connues, indiquer « Conditions inconnues ».

Il est recommandé de préciser les mentions légales et les sources à faire figurer sur les supports de diffusion utilisant les données concernées.

## Exemples
Conditions d’utilisation et mentions légales : 
« Données disponibles pour les autorités publiques après adhésion au partenariat CIGAL »
« Utilisation commerciale directe ou indirecte interdite »
« Mention obligatoire sur tout support de diffusion : BdOCS2008-CIGAL – www.cigalsace.org »

<!--- End @todo.html --->

====
<!--- Begin @data_linkages.html --->

# Accès aux données et documents associés
## Définition
Ce champ permet de lister les liens vers des données concernant la donnée. Il peut s’agir d’un lien de téléchargement de la donnée elle-même ou de tout document complémentaire et utile à une meilleure compréhension du lot de données (dossier de spécifications, acte d’engagement, tarifs, etc.).
Ce lien (URL) doit être accompagné d’un nom et d’une description précisant la nature et le contenu de la donnée accessible. 
## Recommandations
Il est recommandé d’utiliser des adresses URL complètes (pas de chemin relatif), publiques et pérennes.
## Exemples
Accès en ligne :
Nom : « Rapport méthodologique de la BdOCS2008-CIGAL »
Description : « Rapport méthodologique de production de la base de données d’occupation du sol CIGAL 2008 (BdOCS2008-CIGAL). »
URL : « http://www.cigalsace.org/content/rapport-m%C3%A9thodologique-bdocs-2008-cigal »

<!--- End @data_linkages.html --->

====
<!--- Begin @data_dq_conformities.html --->

#  Conformité de la donnée
## Généralités sur la conformité des données
Cette information vise à renseigner l’utilisateur sur le respect de normes, standards ou autre spécification dans la manière dont la donnée est produite, structurée et diffusée.

Dans le cadre du partenariat CIGAL, 2 niveaux distincts de conformité sont distingués afin de faciliter la saisie :
La conformité aux règlements d’interopérabilité de la directive Inspire pour les données
La conformité à d’autres spécifications sur lesquelles s’est appuyé le producteur de la donnée (COVADIS, CNIG, AFNOR, etc.).

Le premier niveau dépend d’une liste fermée de valeurs. Si une classification européenne est renseignée (cf. paragraphe #, le degré de conformité au règlement d’interopérabilité qui s’y rattache doit être fourni. 
Le second niveau n’est pas obligatoire et est rempli au libre choix de l’organisme décrivant les données. 

Dans les 2 cas, 4 informations sont attendues :
Le nom de la spécification
La date de sa création, révision ou publication
La description des du contrôle de conformité réalisé
Le degré de conformité

<!--- End @data_dq_conformities.html --->

====
<!--- Begin @data_dq_inspireconformities.html --->

# Conformité de la donnée aux règles d’interopérabilité Inspire

## Nom de la spécification

### Définition
Cette information indique le nom et les références de la règle d’interopérabilité Inspire pour laquelle le degré de conformité a été évalué pour es données.

La liste des valeurs proposées dans le cadre du partenariat CIGAL est celle définit au niveau français par la Conseil National de l’information Géographique (CNIG) et reprise dans le tableau suivant.

Liste des spécifications relatives aux règles d’interopérabilité Inspire publiées au 1er juin 2012 :

Id
Intitulé Inspire
Nom de la spécification
Date de publication
0
None
Aucun test réalisé

1
COMMISSION REGULATION (EC) No 1#2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata (publication:2008-12-04)
COMMISSION REGULATION (EC) No 1#2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata (publication:2008-12-04)
0#08
2
Corrigendum to INSPIRE Metadata Regulation published in the Official Journal of the European Union, L # page 83 (publication:2009-12-15))
Corrigendum to INSPIRE Metadata Regulation published in the Official Journal of the European Union, L # page 83 (publication:2009-12-15)
1#09
3
COMMISSION REGULATION (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services (publication:2010-12-08)
COMMISSION REGULATION (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services (publication:2010-12-08)
08/1#10
4
COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 97#09 as regards download services and transformation services (publication:2010-12-08)
COMMISSION REGULATION (EU) No 1088/2010 of 23 November 2010 amending Regulation (EC) No 97#09 as regards download services and transformation services (publication:2010-12-08)
08/1#10
5
COMMISSION REGULATION (EC) No 97#09 of 19 October 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the Network Services (publication:2009-10-20)
COMMISSION REGULATION (EC) No 97#09 of 19 October 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the Network Services (publication:2009-10-20)
20/10/2009
6
COMMISSION REGULATION (EU) No 268/2010 of 29 March 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the access to spatial data sets and services of the Member States by Community institutions and bodies under harmonised conditions (publication:2010-0#)
COMMISSION REGULATION (EU) No 268/2010 of 29 March 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards the access to spatial data sets and services of the Member States by Community institutions and bodies under harmonised conditions (publication:2010-0#)
30/0#10
7
Commission Decision of 5 June 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards monitoring and reporting (notified under document number C(2009) 4199) (2009/#EC) (publication:2009-0#)
Commission Decision of 5 June 2009 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards monitoring and reporting (notified under document number C(2009) 4199) (2009/#EC) (publication:2009-0#)
11/0#09

### Recommandations
Seules les règles d’interopérabilité en lien avec le thème de la donnée renseigné au paragraphe #doit être saisie.

### Exemples
Nom de la spécification : « COMMISSION REGULATION (EC) No 1#2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata »

<!--- End @data_dq_inspireconformities.html --->

====
<!--- Begin @data_dq_inspireconformities_dates.html --->

# Conformité de la donnée aux règles d’interopérabilité Inspire
## Date de création / modification / publication de la spécification
### Définition
Cette information indique la date de modification, publication ou révision de la spécification renseignée.
### Recommandations
Se rapporter à la spécification pour en connaître la date de création, publication ou révision (cf. tableau du paragraphe 7.2.1.1).
### Exemples
Date de publication : « 0#08 »

<!--- End @data_dq_inspireconformities_dates.html --->

====
<!--- Begin @data_dq_inspireconformities_explaination.html --->

# Conformité de la donnée aux règles d’interopérabilité Inspire
## Explication du test réalisé
### Définition
Cette information permet de renseigner l’utilisateur sur la manière dont le degré de conformité a été évalué.
### Recommandations
Il ne s’agit pas d’indiquer le degré de conformité (cf. paragraphe 7.#, mais la façon dont celui-ci a été évalué et les éventuels problèmes rencontrés.
### Exemples
Résultat du test : « … »

<!--- End @data_dq_inspireconformities_explaination.html --->

====
<!--- Begin @data_dq_inspireconformities_pass.html --->

# Conformité de la donnée aux règles d’interopérabilité Inspire
## Degré de conformité
### Définition
Cette information précise le résultat du test de conformité.
La liste des valeurs possible est la suivante : « Conforme », « Non conforme » et « Non évalué ».
### Recommandations
Si cette information n’est pas renseignée, le degré de conformité est considéré comme « Non évalué ».
La valeur par défaut est « Non évalué ».
### Exemples
Degré de conformité : « Non évalué »

<!--- End @data_dq_inspireconformities_pass.html --->

====
<!--- Begin @todo.html --->

# Conformité de la donnée à d’autres spécifications

<!--- End @todo.html --->

====
<!--- Begin @data_dq_inspireconformities_specification.html --->

# Conformité de la donnée aux règles d’interopérabilité Inspire
7.#Nom de la spécification
7.#. Définition
Cette information indique le nom du standard, de la norme ou autre spécification pour lequel le degré de conformité de la donnée a été évalué.
7.#. Recommandations
La conformité aux règles d’interopérabilité Inspire ne doit pas être renseigné à ce niveau (cf. paragraphe 7.2.1).
7.#. Exemples
Nom de la spécification : « Géostandard de la COVADIS : Aménagement Numérique des Territoires - Infrastructures de communications électroniques »

<!--- End @data_dq_inspireconformities_specification.html --->

====
<!--- Begin @todo.html --->

7.# Date de création / modification / publication de la spécification
7.#1. Définition
Cette information indique la date de modification, publication ou révision de la spécification renseignée.
7.3.# Recommandations
Se rapporter à la spécification pour en connaître la date de création, publication ou révision.
7.3.# Exemples
Date de publication : « 25/01/2012 »

<!--- End @todo.html --->

====
<!--- Begin @todo.html --->

7.# Explication du test
7.3.#Définition
Cette information permet de renseigner l’utilisateur sur la manière dont le degré de conformité a été évalué.
7.3.# Recommandations
Il ne s’agit pas d’indiquer le degré de conformité (cf. paragraphe 7.#, mais la façon dont celui-ci a été évalué et les éventuels problèmes rencontrés.
7.#3. Exemples
Résultat du test : « … »

<!--- End @todo.html --->

====
<!--- Begin @todo.html --->

7.# Degré de conformité
7.#1. Définition
Cette information précise le résultat du test de conformité.
La liste des valeurs possible est la suivante : « Conforme », « Non conforme » et « Non évalué ».
7.#2. Recommandations
Si cette information n’est pas renseignée, le degré de conformité est considéré comme « Non évalué ».
La valeur par défaut est « Non évalué ».
7.#3. Exemples
Degré de conformité : « Non évalué »

<!--- End @todo.html --->