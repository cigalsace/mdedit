/**
 * Application Angular JS mdEditApp
 */

angular.module('mdEdit.services', []);
angular.module('mdEdit.filters', []);
angular.module('mdEdit.directives', []);
// Déclaration du module mdEdit
angular.module('mdEdit', ['ui.bootstrap', 'mdEdit.services', 'mdEdit.directives', 'mdEdit.filters', 'modalDoc', 'modalSetXml', 'modalGetXml']);

angular.module('mdEdit.directives')
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

angular.module('mdEdit')
    .run(['configSrv', 'modelsSrv', 'viewsSrv', 'localesSrv', 'xmlSrv', 'AppDataSrv', 'BroadcastSrv', runApp]);


function runApp(configSrv, modelsSrv, viewsSrv, localesSrv, xmlSrv, AppDataSrv, BroadcastSrv) {

    // Config file URL
    var config_file = 'config/config.json';

    getConfig(config_file);

    // Get config data from config_file
    function getConfig(config_file) {
        configSrv.getFile(config_file)
            .then(function(data) {
                AppDataSrv.config = data;
                getLocales(AppDataSrv.config.locales_path);
                AppDataSrv.userLanguage = localesSrv.getLanguage(AppDataSrv.config.defaultLanguage);
                getLocale(AppDataSrv.userLanguage);
                getViews(AppDataSrv.userLanguage);
            });
    }

    // Get locales list from translate service
    function getLocales(localesPath) {
        localesSrv.getLocales(localesPath)
            .then(function(data) {
                AppDataSrv.locales = data.locales;
            });
    }

    // Get locales from translate service
    function getLocale(userLanguage) {
        localesSrv.getLocale(AppDataSrv.config.locales_path, userLanguage)
            .then(function(data) {
                AppDataSrv.ui = data.ui;
                AppDataSrv.md_errors = data.md_errors;
                AppDataSrv.codelists = data.codelists;
            });
    }

    // Get list of view from views service
    // Get locales from views service (get URL param or the first item of models list)
    function getViews(userLanguage) {
        // viewsSrv.getList($rootScope.config.views_file, function(data) {
        viewsSrv.getList(AppDataSrv.config.views_file, function(data) {
                AppDataSrv.views = data;
            })
            .then(function() {
                viewsSrv.getViewLocales(false, AppDataSrv.views, userLanguage, function(view, data) {
                    AppDataSrv.view = view;
                    AppDataSrv.fields = data.fields;
                });
                getModels();
            });
    }

    // Get list of models from models service
    // Get model from models service (get URL param or the first item of models list)
    function getModels() {
        modelsSrv.getList(AppDataSrv.config.models_file, function(data) {
                AppDataSrv.models = data;
            })
            .then(function() {
                // If 'xml' query parameters is defined, load XML else load model (from query parameter 'model' or default model)
                if (xmlSrv.getXml()) {
                    // Send configLoaded signal to start mdEdit controller
                    BroadcastSrv.send('configLoaded');
                } else {
                    modelsSrv.getModel(AppDataSrv.models, false, function(model) {
                        // Send configLoaded signal to start mdEdit controller
                        BroadcastSrv.send('configLoaded');
                    });
                }
            });
    }
}
