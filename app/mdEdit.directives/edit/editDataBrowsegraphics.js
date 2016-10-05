var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editDataBrowsegraphicsTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataBrowsegraphicsTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataBrowsegraphics.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataBrowsegraphicsTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataBrowsegraphicsDirective(editDataBrowsegraphicsTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editDataBrowsegraphicsTemplateurl,
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
            if (!scope.field) {
                scope.field = 'dataBrowseGraphics';
            }
            scope.help = attrs.help;
            if (!scope.help) {
                scope.help = attrs.field;
            }
            scope.openModalDoc = modalDocSrv.openModalDoc;
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['fileName', 'fileDescription', 'fileType'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = AppDataSrv.fields[scope.field][p];
                for (var j = 0; j < params.length; j++) {
                    param = params[j];
                    if (!scope.hasOwnProperty(param)) { scope[param] = {}; }
                    scope[param][p] = AppDataSrv.fields[scope.field].children[param][p];
                    if (attrs[param+'_'+p] || attrs[param+'_'+p] === '') {
                        scope[param][p] = attrs[param+'_'+p];
                    }
                }
            }

            // Add / remove item
            scope.removeItem = function(item) {
                AppDataSrv.metadata[scope.field].splice(AppDataSrv.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!AppDataSrv.metadata[scope.field]) {
                    AppDataSrv.metadata[scope.field] = [];
                }
                AppDataSrv.metadata[scope.field].push(angular.copy(mdjs.empty_json.browsegraphic));
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
    .directive('editDataBrowsegraphics', editDataBrowsegraphicsDirective);

editDataBrowsegraphicsDirective.$inject = ['editDataBrowsegraphicsTemplateurl', 'AppDataSrv', 'modalDocSrv'];
