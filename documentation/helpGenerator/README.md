# Génération des fichiers d'aide de mdEdit

Les fichiers d'aide de l'application mdEdit correspondent aux informations accessible via une fenêtre en cliquant sur le nom d'un champ dans l'interface d'édition.
Ils sont localisés dans le répertoire ``config/locales/xx/help``, où ``xx`` correspond au nom de la langue.

L'ensemble de la documentation est rédigé dans un unique fichier en markdown: ``doc_md_fr.md``.
Un fichier doit être créé pour chaque langue (penser à adapter le script de conversion).
Ce fichier est ensuite converti en différents fichiers markdown (un fichier par fenêtre d'aide).

La conversion du fichier ``doc_md_fr.md`` est réalisée grâce au script ``doc_to_md.php``.
Deux paramètres sont à adapter dans ce script:
- ``$md_file`` => nom du fichier à convertir
- ``$md_path`` => chemin de destination des fichiers résultants

Le fichier ``doc_md_fr.md`` répond à une structure précise:
- Chaque page est délimitée par 4 signes égal ("="): ``====``
- Chaque page commence par une balise ``<!-- Begin @empty.md -->`` et se termine par une balise ``<!-- End @empty.md -->`` où ``empty.md`` correspond au nom du fichier d'aide résultant.
