# Répertoire ``config``

Ce répertoire contient les fichiers de configuration de l'application mdEdit.


## Fichier ``config.json``

Ce fichier permet de définir plusieurs variables générales de l'application:

```
{
    "app_name": "mdEdit",                                               // Nom de l'application
    "app_title": "mdEdit",                                              // Titre de l'application
    "app_version": "2.0.12",                                            // Version de l'application
    "app_copyrights": "(c) CIGAL 2016",                                 // Licence et droits de l'application
    "defaultLanguage": "fr",                                            // Langue par défaut
    "server_url_getxml": "php/index.php?act=getXML",                    // URL relative pour tester l'accès au serveur d'export des fichiers XML
    "views_file": "config/views/views.json",                            // Chemin vers la liste des vues
    "models_file": "config/models/models.json",                         // Chemin vers la liste des modèles
    "locales_path": "config/locales/",                                  // Chemin vers la liste des traductions
    "geographicextents_list": "config/list_geographicextents.json",     // Chemin vers la liste des emprises géographiques
    "referencesystems_list": "config/list_referencesystems.json"        // Chemin vers la liste des systèmes de projection
}
```

## Fichier `list_geographicextents.json`

Ce fichier permet de définir la liste des étendues géographiques utilisées pour l'autocomplétion du champs "Emprises des données" de la vue édition.

Par défaut il est localisé dans le répertoire ``config``.


## Fichier ``list_referencesystems.json``

NON UTILISE POUR LE MOMENT
Ce fichier permet de définir la liste des étendues géographiques utilisées pour l'autocomplétion du champs "Emprises des données" de la vue édition.

Par défaut il est localisé dans le répertore ``config``.

## Répertoire ``models``

Le répertoire [``models``](https://github.com/cigalsace/mdedit/tree/master/config/models) contient les fichiers de configuration des modèles de fiches de métadonnées.

## Répertoire ``views``

Le répertoire [``views``](https://github.com/cigalsace/mdedit/tree/master/config/views) contient les fichiers de configuration des vues disponibles dans mdEdit.
