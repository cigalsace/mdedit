
/**
 * Déclaration de l'application Angular JS mdEditApp
 */
angular.module('mdEditApp', ['ui.bootstrap', 'mdEdit']);

// Déclaration du module mdEdit
angular.module('mdEdit', ['config', 'locales', 'models', 'views', 'mdjs', 'modalDoc', 'modalGetXml', 'modalSetXml', 'extents', 'jsonConverter', 'checkValues']);

angular.module('mdEdit').config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('mdEdit').run(function($http, $rootScope, configSrv, modelsSrv, viewsSrv, localesSrv){

      // Config file URL
      var config_file = 'config/config.json';
      $rootScope.config = {};

      getConfig(config_file);

      // Get config data from config_file
      function getConfig(config_file) {
          configSrv.getFile(config_file)
              .then(function(data) {
                  $rootScope.config = data;
                  // console.log(data);
                  getLocales();
                  $rootScope.userLanguage = localesSrv.getLanguage(data.defaultLanguage);
                  getLocale($rootScope.userLanguage);
                  getViews($rootScope.userLanguage);
              });
      }

      // Get locales list from translate service
      function getLocales() {
          localesSrv.getLocales($rootScope.config.locales_path)
              .then(function(data) {
                  $rootScope.locales = data.locales;
              });
      }

      // Get locales from translate service
      function getLocale(userLanguage) {
          localesSrv.getLocale($rootScope.config.locales_path, userLanguage)
              .then(function(data) {
                  $rootScope.ui = data.ui;
                  $rootScope.md_errors = data.md_errors;
              });
      }

      // Get list of view from views service
      // Get locales from views service (get URL param or the first item of models list)
      function getViews(userLanguage) {
          viewsSrv.getList($rootScope.config.views_file, function(data) {
                  $rootScope.views = data;
              })
              .then(function() {
                  viewsSrv.getViewLocales(false, $rootScope.views, userLanguage, function(view, data) {
                      //console.log(view);
                      $rootScope.view = view;
                      $rootScope.fields = data.fields;
                      $rootScope.codelists = data.codelists;
                  });
                  getModels();
              });
      }

      // Get list of models from models service
      // Get model from models service (get URL param or the first item of models list)
      function getModels() {
          modelsSrv.getList($rootScope.config.models_file, function(data) {
              $rootScope.models = data;
          })
          .then(function() {
              modelsSrv.getModel($rootScope.models, false, function(model) {
                  //   $rootScope.metadata = model.data;
                  //   $rootScope.model = model.path;
                  $rootScope.$broadcast('configLoaded');
              });
          });
      }
});

// })();
