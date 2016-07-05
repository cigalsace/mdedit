# mdEdit desktop

L'objectif est de disposer d'une version bureautique de mdEdit pour pouvoir l'utiliser sans connexion internet.


## Principe:

L'application est exactement la même que la version web.

Il s'agit simplement d'un micro serveur web Python qui permet d'encapsuler l'ensemble et de lancer l'application en double-cliquant sur un fichier.


## Installation:

- Téléchargez le fichier "mdEdit_desktop.zip".
- Décompressez-le sur votre ordinateur
- Double-cliquez sur le fichier "mdEdit.bat"

Une console DOS s'ouvre. Ne pas la fermer sinon l'application s'arrête.

Parallèlement, votre navigateur par défaut s'ouvre également et doit afficher l'application mdEdit (URL: http://www.localhost:8080/mdedit/index.html)


## Solution alternative:

Le même comportement peut-être obtenu en utilisant la version web de mdEdit et un serveur PHP local.

Pour cela:

- Téléchargez PHP à partir de la page http://php.net/downloads.php (version 5.6 ou 7.0 "x64 Thread Safe" pour les utilisateur de Windows)
- Décompressez l'archive sur votre ordinateur
- Télécharger le code de mdEdit (via "git clone" ou par téléchargement direct: https://github.com/cigalsace/mdedit/archive/master.zip)
- Créer un fichier "mdedit.bat" à la racine du dossier mdedit
- Ajouter dans le fichier mdedit.bat le code suivant:

```
REM Lancement du navigateur internet sur http://localhost:8080
start http://localhost:8080
REM Lancement du serveur PHP local
"C:\Chemin\Vers\PHP\php.exe" -S localhost:8080
pause
```

- double cliquez sur le fichier mdedit.bat
