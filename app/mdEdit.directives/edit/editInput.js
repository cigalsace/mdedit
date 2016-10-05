var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editInputTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editInputTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editInput.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditInputTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editInputDirective(editInputTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editInputTemplateurl,
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
        // scope.$watch('vm.data.userLanguage', function(newValue, oldValue) {
        scope.$watch(function() {
            return AppDataSrv.userLanguage;
        }, function(newValue, oldValue) {
            if (newValue[0] || newValue[1] !== oldValue[1]) {
                init();
            }
        });

        function init() {
            AppDataSrv.pageLoaded = false;
            scope.field = attrs.field;
            scope.help = attrs.help;
            if (!scope.help) {
                scope.help = attrs.field;
            }
            scope.openModalDoc = modalDocSrv.openModalDoc;
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = AppDataSrv.fields[attrs.field][p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
            }
            AppDataSrv.pageLoaded = true;
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .directive('editInput', editInputDirective);

editInputDirective.$inject = ['editInputTemplateurl', 'AppDataSrv', 'modalDocSrv'];
