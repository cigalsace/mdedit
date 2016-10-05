var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editMultiTextareaTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editMultiTextareaTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editMultiTextarea.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditMultiTextareaTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editMultiTextareaDirective(editMultiTextareaTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editMultiTextareaTemplateurl,
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
        scope.$watch('vm.data.userLanguage', function(newValue, oldValue) {
            if (newValue[0] || newValue[1] !== oldValue[1]) {init();}
        });

        function init() {
            scope.field = attrs.field;
            scope.help = attrs.help;
            if (!scope.help) {
                scope.help = attrs.field;
            }
            scope.openModalDoc = modalDocSrv.openModalDoc;
            scope.rows = attrs.rows;
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = AppDataSrv.fields[attrs.field][p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
            }
            if (!AppDataSrv.metadata[attrs.field]) {
                AppDataSrv.metadata[attrs.field] = [''];
            }

            // Add / remove item
            scope.removeItem = function(item) {
                AppDataSrv.metadata[attrs.field].splice(AppDataSrv.metadata[attrs.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!AppDataSrv.metadata[attrs.field]) {
                    AppDataSrv.metadata[attrs.field] = [];
                }
                AppDataSrv.metadata[attrs.field].push('');
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
    .directive('editMultiTextarea', editMultiTextareaDirective);

editMultiTextareaDirective.$inject = ['editMultiTextareaTemplateurl', 'AppDataSrv', 'modalDocSrv'];
