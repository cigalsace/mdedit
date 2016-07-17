var changeLocalesTemplateUrl = './app/directives/changeLocales';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('changeLocalesTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.changeLocalesTemplateurl;
            return templateUrl !== undefined ? templateUrl : changeLocalesTemplateUrl + '/changeLocales.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdchangeLocalesTemplateurl [description]
 * @return {[type]}                            [description]
 */
function changeLocalesDirective($rootScope, changeLocalesTemplateurl, localesSrv, viewsSrv) {
    return {
        restrict: 'EA',
        templateUrl: changeLocalesTemplateurl,
        replace: true,
        link: link,
        scope: true
    };

    /**
     * [link description]
     * @param  {[type]} scope   [description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    function link(scope, element, attrs) {
        // scope.$watch('pageLoaded', function(newVal) {
        scope.$watchGroup(['pageLoaded', 'userLanguage'], function(newValue, oldValue) {
            if (newValue[0] || newValue[1] !== oldValue[1]) {init();}
        });

        function init() {

            scope.changeLocale = function(userLanguage) {
                console.log(userLanguage);
                localesSrv.getLocale($rootScope.config.locales_path, userLanguage)
                    .then(function(data) {
                        $rootScope.ui = data.ui;
                        $rootScope.md_errors = data.md_errors;
                    });
                viewsSrv.getViewLocales(false, $rootScope.views, userLanguage, function(view, data) {
                    $rootScope.view = view;
                    $rootScope.fields = data.fields;
                    $rootScope.codelists = data.codelists;
                    $rootScope.userLanguage = userLanguage;
                });
            };
        }
    }
}

changeLocalesDirective.$inject = ['$rootScope', 'changeLocalesTemplateurl', 'localesSrv', 'viewsSrv'];
/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .directive('changeLocales', changeLocalesDirective);
