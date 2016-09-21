var changeLocalesTemplateUrl = './app/mdEdit.directives/changeLocales';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
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
function changeLocalesDirective(AppDataSrv, changeLocalesTemplateurl, localesSrv, viewsSrv) {
    return {
        restrict: 'EA',
        templateUrl: changeLocalesTemplateurl,
        replace: true,
        link: link,
        controller: 'mdEditCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {}
    };

    /**
     * [link description]
     * @param  {[type]} scope   [description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    function link(scope, element, attrs, vm) {
        scope.first = true;
        scope.$watch('vm.data.userLanguage', function() {
            if (scope.first) {
                init();
                scope.first = false;
            }
        });

        function init() {
            scope.locales = vm.data.locales;
            scope.userLanguage = vm.data.userLanguage;
            scope.changeLocale = function(userLanguage) {
                localesSrv.getLocale(AppDataSrv.config.locales_path, userLanguage)
                    .then(function(data) {
                        vm.data.ui = data.ui;
                    });
                viewsSrv.getViewLocales(false, AppDataSrv.views, userLanguage, function(view, data) {
                    vm.data.fields = data.fields;
                    vm.data.codelists = data.codelists;
                    vm.data.userLanguage = userLanguage;
                });
            };
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .directive('changeLocales', changeLocalesDirective);

changeLocalesDirective.$inject = ['AppDataSrv', 'changeLocalesTemplateurl', 'localesSrv', 'viewsSrv'];
