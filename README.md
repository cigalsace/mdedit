# mdedit

Outil simple et ouvert de saisie, modification et consultation de fiches de métadonnées conforme au format ISO 19139 INSPIRE


## Fonctionnalités principales:

- Création de fiches de métadonnées ISO/INSPIRE
- Modification de fiches de métadonnées ISO/INSPIRE
- Visualisation de fiches de métadonnées ISO/INSPIRE
- Import de fichiers au format XML ISO/Inspire
- Export de fichiers au format XML ISO/Inspire


## Principes:

Les choix sont réalisés afin que:

- L'application soit moderne dans son graphisme et ses fonctionnalités
- L'application reste légère et maintenable
- L'application n'impose pas d'exigences particulières pour l'installation et l'utilisation
- L'application puisse fonctionner en mode connecté et déconnecté
- L'application ne nécessite pas d'authentification (possibilité d'ajouter authentification HTTP côté serveur si nécessaire)


## Choix techniques:

mdEdit repose sur les choix suivants:

### Langages de programmation:

- JS, HTML et CSS côté interface utilisateur
- Python (serveur emarqué pour usage desktop)
- Markdown pour la documentation

### Frameworks et bibliothèques utilisés:

- JQuery
- AngularJS
- Twitter Bootstrap
- Showdown
- Bottle (serveur embarqué)
