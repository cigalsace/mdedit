# mdEdit

mdedit est un outil simple de saisie et modification des m�tadonn�es.  
Il doit permettre d'importer et d'exporter les m�tadonn�es au formats XML, JSON et XLS(X).

## Fonctionnalit�s:

- Cr�ation de fiches de m�tadonn�es ISO/INSPIRE
- Modification de fiches de m�tadonn�es ISO/INSPIRE
- Visualisation de fiches de m�tadonn�es ISO/INSPIRE
- Import de fichiers au format XML ISO/Inspire
- Import de fichiers au format JSON
- Import de fichiers au format XLS CIGAL
- Import de fichiers au format XLSX CIGAL
- Export de fichiers au format XML ISO/Inspire
- Export de fichiers au format JSON
- Export de fichiers au format XLSX CIGAL


## Principes:

Les choix sont r�alis�s afin que:

- L'application soit moderne dans son graphisme et ses fonctionnalit�s
- L'application reste l�g�re et maintenable
- L'application n'impose pas d'exigences particuli�res pour l'installation et l'utilisation
- L'application puisse fonctionner en mode connect� et d�connect�
- L'application ne n�cessite pas d'authentification (possibilit� d'ajouter authentification HTTP c�t� serveur si n�cessaire)


## Choix techniques:

mdEdit repose sur les choix suivants:

### Langages de programmation:

- JS, HTML et CSS c�t� interface utilisateur
- Python c�t� serveur (import et export XLS(X))
- Markdown pour la documentation


### Frameworks et biblioth�ques utilis�s:

C�t� interface:

- JQuery
- AngularJS
- Twitter Bootstrap
- Showdown
    
C�t� serveur:

- Python Bottle
- Openpyxl
- API Zaphir


## Historique:

### TODO:

- [] Ajouter possibilit� de configurer authentification HTTP c�t� serveur Python (Bottle)
- [] Reprendre view-tpl.html pour visualisation des fiches
- [] Compl�ter documentation (r�daction + ajout � l'interface des liens vers les fichiers)
- [] Nettoyer code de mdEdit.js
- [] Ajouter liste de s�lection pour les contacts avec recherche sur le nom, l'organisme et l'email ((cf. data_geographicextent)
- [x] G�n�rer liste des emprises communes, d�partement, r�gion, SCOT, EPCI, etc. (cf. fichier Excel v2)
- [x] Ajouter import de fichiers au format XML ISO/Inspire
- [x] Ajouter export de fichiers au format XML ISO/Inspire
- [ANNULE] Ajouter import de fichiers au format JSON
- [ANNULE] Ajouter import de fichiers au format XLS CIGAL
- [ANNULE] Ajouter import de fichiers au format XLSX CIGAL
- [ANNULE] Ajouter export de fichiers au format JSON 
- [ANNULE] Ajouter export de fichiers au format XLSX CIGAL


### Version 0.06:

29/09/15:

- [x] Ajout d'une liste de s�lection pour les emprises (data_geographicextent)
- [x] G�n�ration et ajout de la liste des emprises d'Alsace (r�gion, d�partement, PNR, SCOT, Pays et EPCI)

17/09/15:

- [x] Utilisation directe de fichiers markdown pour la documentation. mdEdit.js convertit les fichiers en HTML directement via showdown.js. Possibilit� de r�diger documentation dans "doc_md.md" et g�n�rer les fichiers md via md_to_md.php, ou de mdifier directement des lifichiers du r�pertoire md. Attention cependant � conserver la synchronisation des 2... (solution 1 � privil�gier).
    
    
### Version 0.05:
    
- [x] Ajout des diff�rents formats d'import dans le bouton "Download file" de "partials/modal-download.html".
- [x] Ajout de la documentation. Cf. fichier doc.md. (g�n�ration des fichiers html avec "md_to_html.php")
    
