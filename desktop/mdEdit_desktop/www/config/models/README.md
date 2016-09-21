# Répertoire ``config/models``

Un modèle est un ensemble d'informations permettant de pré-remplir une fiche de métadonnées avec des éléments régulièrement utilisées (contact, emprise, système de projection, ect.).
Il agit sur le contenu de la fiche et non la mise en page qui elle est gérée par les [``vues``](https://github.com/cigalsace/mdedit/tree/master/config/views).
Pour un affichage correct dans mdEdit, un modèle doit contenir l'ensemble des champs de la fiche en le définissant à la valeur nulle si nécessaire.  
Un fichier de modèle se présente sous la forme d'un fichier JSON.

Le répertoire ``models`` contient:
- Un fichier ``models.json`` qui liste l'ensemble des models (obligatoire)
- Les fichiers de models dont la dénomination est libre.

**NB:** il est possible d'utiliser des fichiers XML comme modèle. Pour cela, il suffit de préremplir une fiche et de l'exporter au format XML puis la recharger à chaque fois que l'on en a besoin.
