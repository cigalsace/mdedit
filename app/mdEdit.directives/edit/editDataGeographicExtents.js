var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editDataGeographicExtentsTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataGeographicExtentsTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataGeographicExtents.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataGeographicExtentsTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataGeographicExtentsDirective(editDataGeographicExtentsTemplateurl, extentsSrv, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editDataGeographicExtentsTemplateurl,
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
                scope.field = 'dataGeographicExtents';
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
            var params = ['dataExtentName', 'dataGeographicExtentWestBound', 'dataGeographicExtentEastBound', 'dataGeographicExtentSouthBound', 'dataGeographicExtentNorthBound'];
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

            extentsSrv.getList(AppDataSrv.config.geographicextents_list)
                .then(function(data) {
                    scope.geographicExtents = data;
                });
            scope.onSelectGeographixExtent = function($item, $model, $label, $key) {
                 AppDataSrv.metadata.dataGeographicExtents[$key] = $item;
            };

            // Add / remove item
            scope.removeItem = function(item) {
                AppDataSrv.metadata[scope.field].splice(AppDataSrv.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!AppDataSrv.metadata[scope.field]) {
                    AppDataSrv.metadata[scope.field] = [];
                }
                AppDataSrv.metadata[scope.field].push(angular.copy(mdjs.empty_json.geographicextent));
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
    .directive('editDataGeographicExtents', editDataGeographicExtentsDirective);

editDataGeographicExtentsDirective.$inject = ['editDataGeographicExtentsTemplateurl', 'extentsSrv', 'AppDataSrv', 'modalDocSrv'];
