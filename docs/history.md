# mdEdit

mdedit est un outil simple de saisie et modification des métadonnées.  
Il doit permettre d'importer et d'exporter les métadonnées au formats XML, JSON et XLS(X).

## Fonctionnalités:

- Création de fiches de métadonnées ISO/INSPIRE
- Modification de fiches de métadonnées ISO/INSPIRE
- Visualisation de fiches de métadonnées ISO/INSPIRE
- Import de fichiers au format XML ISO/Inspire
- Import de fichiers au format JSON
- Import de fichiers au format XLS CIGAL
- Import de fichiers au format XLSX CIGAL
- Export de fichiers au format XML ISO/Inspire
- Export de fichiers au format JSON
- Export de fichiers au format XLSX CIGAL


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
- Python côté serveur (import et export XLS(X))
- Markdown pour la documentation


### Frameworks et bibliothèques utilisés:

Côté interface:

- JQuery
- AngularJS
- Twitter Bootstrap
- Showdown
    
Côté serveur:

- Python Bottle
- Openpyxl
- API Zaphir


## Historique:

### TODO:

- [] Ajouter possibilité de configurer authentification HTTP côté serveur Python (Bottle)
- [] Reprendre view-tpl.html pour visualisation des fiches
- [] Compléter documentation (rédaction + ajout à l'interface des liens vers les fichiers)
- [] Nettoyer code de mdEdit.js
- [] Ajouter liste de sélection pour les contacts avec recherche sur le nom, l'organisme et l'email ((cf. data_geographicextent)
- [x] Générer liste des emprises communes, département, région, SCOT, EPCI, etc. (cf. fichier Excel v2)
- [x] Ajouter import de fichiers au format XML ISO/Inspire
- [x] Ajouter export de fichiers au format XML ISO/Inspire
- [ANNULE] Ajouter import de fichiers au format JSON
- [ANNULE] Ajouter import de fichiers au format XLS CIGAL
- [ANNULE] Ajouter import de fichiers au format XLSX CIGAL
- [ANNULE] Ajouter export de fichiers au format JSON 
- [ANNULE] Ajouter export de fichiers au format XLSX CIGAL


### Version 0.06:

29/09/15:

- [x] Ajout d'une liste de sélection pour les emprises (data_geographicextent)
- [x] Génération et ajout de la liste des emprises d'Alsace (région, département, PNR, SCOT, Pays et EPCI)

17/09/15:

- [x] Utilisation directe de fichiers markdown pour la documentation. mdEdit.js convertit les fichiers en HTML directement via showdown.js. Possibilité de rédiger documentation dans "doc_md.md" et générer les fichiers md via md_to_md.php, ou de mdifier directement des lifichiers du répertoire md. Attention cependant à conserver la synchronisation des 2... (solution 1 à privilégier).
    
    
### Version 0.05:
    
- [x] Ajout des différents formats d'import dans le bouton "Download file" de "partials/modal-download.html".
- [x] Ajout de la documentation. Cf. fichier doc.md. (génération des fichiers html avec "md_to_html.php")
    
