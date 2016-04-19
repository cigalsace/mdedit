# mdedit

Outil simple et ouvert de saisie, modification et consultation de fiches de métadonnées conforme au format ISO 19139 INSPIRE.
Version alpha: maquette réalisée en 2015 (dernière version = v0.09).


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


## Historique:

### TODO:

- [ ] Ajouter possibilité de configurer authentification HTTP côté serveur Python (Bottle)
- [ ] Reprendre view-tpl.html pour visualisation des fiches
- [ ] Compléter documentation (rédaction + ajout à l'interface des liens vers les fichiers)
- [ ] Nettoyer code de mdEdit.js
- [ ] Ajouter liste de sélection pour les contacts avec recherche sur le nom, l'organisme et l'email (cf. data_geographicextent)
- [ ] Utiliser Angular UI Bootstrap pour la gestion de l'accordéon 
- [ ] Ajouter typeahead pour les systèmes de projection à la place de liste de sélection (cf. data_geographicextent)
- [x] Générer liste des emprises communes, département, région, SCOT, EPCI, etc. (cf. fichier Excel v2)
- [x] Ajouter import de fichiers au format XML ISO/Inspire
- [x] Ajouter export de fichiers au format XML ISO/Inspire
- [ANNULE] Ajouter import de fichiers au format JSON - intérêt?
- [ANNULE] Ajouter import de fichiers au format XLS CIGAL - intérêt?
- [ANNULE] Ajouter import de fichiers au format XLSX CIGAL - intérêt?
- [ANNULE] Ajouter export de fichiers au format JSON - intérêt?
- [ANNULE] Ajouter export de fichiers au format XLSX CIGAL - intérêt?


### Version 0.08:

21/10/15:

- [x] Correction erreur de génération XML pour les mots-clés sous forme de list (data_keywords_list) + adaptation fichiers de modèle json
- [x] Correction erreur de génération XML des dates de création/publication/révision des données (problème dans l'utilisation de la librairie Moment JS)

### Version 0.07:

10/10/15:

- [x] Mise à jour vers Angular UI Bootstrap 1.14.0 + adaptation du code
- [x] Ajout d'un variable empty_data dans config.js pour gestion de l'ajout de champs multiples. Possibilité de réutilisation dans XMLparse().

### Version 0.06:

29/09/15:

- [x] Ajout d'une liste de sélection pour les emprises (data_geographicextent)
- [x] Génération et ajout de la liste des emprises d'Alsace (région, département, PNR, SCOT, Pays et EPCI)

17/09/15:

- [x] Utilisation directe de fichiers markdown pour la documentation. mdEdit.js convertit les fichiers en HTML directement via showdown.js. Possibilité de rédiger documentation dans "doc_md.md" et générer les fichiers md via md_to_md.php, ou de mdifier directement des lifichiers du répertoire md. Attention cependant à conserver la synchronisation des 2... (solution 1 à privilégier).
    
    
### Version 0.05:
    
- [x] Ajout des différents formats d'import dans le bouton "Download file" de "partials/modal-download.html".
- [x] Ajout de la documentation. Cf. fichier doc.md. (génération des fichiers html avec "md_to_html.php")

