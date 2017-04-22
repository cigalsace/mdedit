var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editSelectTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editSelectTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editSelect.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditSelectTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editSelectDirective(editSelectTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editSelectTemplateurl,
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
            list = AppDataSrv.codelists[attrs.list];
            scope.list = [];
            for (var l in list) {
                if (! list[l].id.startsWith('_')) {
                    scope.list.push(list[l]);
                }
            }
            scope.disabled = attrs.disabled;
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
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .directive('editSelect', editSelectDirective);

editSelectDirective.$inject = ['editSelectTemplateurl', 'AppDataSrv', 'modalDocSrv'];
