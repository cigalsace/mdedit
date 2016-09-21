# mdedit

Outil simple et ouvert de saisie, modification et consultation de fiches de métadonnées conformes au format ISO 19139 / INSPIRE.

La présente documentation est adressée aux personnes souhaitant installer mdEdit et contribuer au projet.

Un [Guide d'utilisation de mdEdit](./documentation/userGuide/mdEdit_UserDocumentation.md) est également disponible.


## Fonctionnalités principales

- Création de fiches de métadonnées ISO/INSPIRE
- Modification de fiches de métadonnées ISO/INSPIRE
- Visualisation/consultation de fiches de métadonnées ISO/INSPIRE
- Import de fichiers au format XML ISO/Inspire
- Export de fichiers au format XML ISO/Inspire

**NB**: l'application mdEdit ne propose pas de zone de stockage. Les fichiers vers lesquels pointe la fiche de métadonnées (miniature, documentation, données, etc.) doivent être stockés sur un serveur public pour ensuite être accessible facilement.


## Installation

### Prérequis

Un serveur web avec PHP (testé avec les versions 5.6 et 7.0).
Une version fonctionnant sur Python est prévue. les délais de sa mise en oeuvre dépendront des besoins et demandes exprimées.

### Procédure

mdEdit ne nécessite pas d'installation particulière.
Il suffit de placer les fichiers du dépôt git ci-dessus sur un serveur web fonctionnant avec PHP.

Une version [desktop](https://github.com/cigalsace/mdedit/tree/master/desktop) est également disponible. Elle fonctionne grâce à un serveur web embarqué.


## Configuration

La configuration de mdEdit se fait principalement via les fichiers contenus dans le répertoire [``config``](https://github.com/cigalsace/mdedit/tree/master/config).


## Utilisation

### Interface

L'interface a été conçue pour être simple et facilement utilisable par toute personne disposant d'un minimum de connaissance en terme de description de données géographiques.

_A compléter_

### Permaliens et paramètre d'URL

Il est possible de définir plusieurs propriétés via des paramètres d'URL.
Cela permet entre autre de personnaliser l'interface de l'application en se connectant via une URL spécifique.

#### "model"

Un modèle spécifique de la liste contenue dans "config/models/models.json" peut être utilisé en précisant son identifiant, c'est à dire son numéro d'ordre dans le fichier en commençant à 1.
Ainsi, pour utiliser le premier modèle de la liste, il faut ajouter dans l'URL ``index.html?model=1`` ou ``&model=1``.

#### "view"

Une vue spécifique de la liste contenue dans ``config/views/views.json`` peut-être utitisée en précisant son identifiant, c'est à dire son numéro d'ordre dans le fichier en commençant à 1.
Ainsi si l'on souhaite utiliser la deuxième vue de la liste, il faut ajouter dans l'URL ``index.html?view=2`` ou ``&view=2``.

#### "lang"

Une langue spécifique peut-être utilisée en précisant le paramètre "lang" et le code de la langue sur 2 caratères (``fr`` pour français, ``de`` pour allemand, ``en`` pour anglais, etc.).
Aini, pour forcer l'affichage en allemand (pour peut que cette traduction existe...), il faut ajouter dans l'URL ``index.html?lang=de`` ou ``&lang=de``.


## Choix techniques et développement

Les choix sont réalisés afin que:

- L'application soit moderne dans son graphisme et ses fonctionnalités
- L'application reste légère et maintenable
- L'application n'impose pas d'exigences particulières pour l'installation et l'utilisation
- L'application puisse fonctionner en mode connecté et déconnecté
- L'application ne nécessite pas d'authentification (possibilité d'ajouter une authentification HTTP côté serveur si nécessaire)

### Langages utilisés

- JS, HTML et CSS côté interface utilisateur
- PHP pour le téléchargement des fichiers XML (version web)
- Python (serveur embarqué pour usage [desktop](https://github.com/cigalsace/mdedit/tree/master/desktop))
- Markdown pour la documentation

### Frameworks et bibliothèques utilisés

- [jquery](https://jquery.com/) - version 2.2.4
- [twitter bootstrap](http://getbootstrap.com/) - version 3.3.6
- [angular js](https://angularjs.org/) - version 1.5.3
- [ui-bootstrap](https://angular-ui.github.io/bootstrap/) - version 1.3.0
- [showdown](https://github.com/showdownjs/showdown) - version 22-07-2015
- [mdjs](https://github.com/cigalsace/mdjs) - version b15
- [moment](http://momentjs.com/) - version 2.12.0
- [vkbeautify](https://github.com/vkiryukhin/vkBeautify) - version 0.99.0 beta
- [bottle](http://bottlepy.org/docs/0.12/) - version 0.12.8 (serveur Python embarqué)
