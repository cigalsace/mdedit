# Répertoire ``config/views``

Une vue est une mise en forme des fiches de métadonnées.
Elle agit sur le contenant (présentation) et non le contenu.

Il existe 2 vues par défaut dans mdEdit:
- Une vue "Edition" qui permet la saisie et la modification des fiches de métadonnées
- Une vue "Consultation" qui facilite la lecture des fiches de métadonnées

Le fichier ``view.json`` (obligatoire) liste l'ensemble des vues disponibles.

Chaque vue est composée:
- d'un fichier HTML qui permet de définir l'organisation des champs dans la page.  
Il s'appuie sur les frameworks Bootstrap et Angular JS qui sont inclu par défaut dans mdEdit et peuvent notamment réutiliser des [directives](https://github.com/cigalsace/mdedit/tree/master/app/directives) Angular JS (composants pré-formatés).
- de fichiers de traduction au format JSON
