/**
 * [module description]
 * @param  {[type]} 'locales' [description]
 * @param  {[type]} []        [description]
 * @return {[type]}           [description]
 */
// angular.module('locales', []);

angular.module('mdEdit.services')
    .factory('localesSrv', localesSrv);

localesSrv.$inject = ['$http', '$location'];

function localesSrv($http, $location) {

    var localesSrv = {
        getLocales: getLocales,
        getLanguage: getLanguage,
        getLocale: getLocale
    };

    return localesSrv;

    ////////////////////////////////////////////////////////////////////////

    function getLanguage(defaultLanguage) {
        // var userLanguage;
        var urlLanguage = $location.search().lang;
        if (urlLanguage) {
            userLanguage = urlLanguage;
        } else {
            userLanguage = navigator.language || navigator.userLanguage;
        }
        // Keep only 2 first characters from language (ex.: 'fr' or 'en' or 'de')
        userLanguage = userLanguage.substring(0, 2);
        // Use french by default
        if (['fr', 'en', 'de'].indexOf(userLanguage) == -1) {
            userLanguage = 'fr';
        }
        return userLanguage;
    }

    function getLocale(locales_path, lg) {
        return $http
            .get(locales_path + lg + '/locales.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(reason) {
                console.log("Error: can't get locales file for " + lg + " (reason: " + reason + ").");
            });
    }

    function getLocales(locales_path) {
        return $http
            .get(locales_path + '/locales.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(reason) {
                console.log("Error: can't get locales list (reason: " + reason + ").");
            });
    }

}
