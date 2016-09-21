var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editMultiSelectTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editMultiSelectTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editMultiSelect.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditMultiSelectTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editMultiSelectDirective(editMultiSelectTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editMultiSelectTemplateurl,
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
            scope.openModalDoc = modalDocSrv.openModalDoc;
            // Define values from attributes or use default fields.dataTitle properties values
            scope.field = attrs.field;
            scope.list = AppDataSrv.codelists[attrs.list];
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

            // if (attrs.onChange) {
            //     scope.change = function() {
            //         AppDataSrv.metadata = checkValuesSrv[attrs.onChange](AppDataSrv.metadata);
            //     };
            //     scope.change();
            // }

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
    .directive('editMultiSelect', editMultiSelectDirective);

editMultiSelectDirective.$inject = ['editMultiSelectTemplateurl', 'AppDataSrv', 'modalDocSrv'];
