var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
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
function editDataGeographicExtentsDirective(extentsSrv, editDataGeographicExtentsTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editDataGeographicExtentsTemplateurl,
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
            // Define values from attributes or use default fields.dataTitle properties values
            // scope.field = attrs.field;
            scope.field = 'dataGeographicExtents';
            // scope.list = scope.codelists[attrs.list];
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['dataExtentName', 'dataGeographicExtentWestBound', 'dataGeographicExtentEastBound', 'dataGeographicExtentSouthBound', 'dataGeographicExtentNorthBound'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = scope.fields[scope.field][p];
                for (var j = 0; j < params.length; j++) {
                    param = params[j];
                    if (!scope.hasOwnProperty(param)) { scope[param] = {}; }
                    scope[param][p] = scope.fields[scope.field].children[param][p];
                    if (attrs[param+'_'+p] || attrs[param+'_'+p] === '') {
                        scope[param][p] = attrs[param+'_'+p];
                    }
                }
            }

            // Manage datePicker
            // scope.datePicker = {};
            // scope.openDatePicker = function(event, datepickerName) {
            //     event.preventDefault();
            //     event.stopPropagation();
            //     scope.datePicker[datepickerName] = !scope.datePicker[datepickerName];
            //     // scope.datePicker[datepickerName] = true;
            // };

            // TODO: put in service factory
            // Get geographic extents list
            // $http.get('autocompletion_lists/lst_geographicextents.json')
            //     .success(function(data) {
            //         $scope.geographicExtents = data;
            //     });
            // $scope.onSelectGeographixExtent = function($item, $model, $label, $key) {
            //     $scope.metadata.dataGeographicExtents[$key] = $item;
            // };
            // console.log('ext:', scope.config.extents_list);
            extentsSrv.getList(scope.config.geographicextents_list)
                .then(function(data) {
                    scope.geographicExtents = data;
                });
                // console.log(scope.geographicExtents);
            scope.onSelectGeographixExtent = function($item, $model, $label, $key) {
                 scope.metadata.dataGeographicExtents[$key] = $item;
            };

            // Add / remove item
            scope.removeItem = function(item) {
                scope.metadata[scope.field].splice(scope.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!scope.metadata[scope.field]) {
                    scope.metadata[scope.field] = [];
                }
                scope.metadata[scope.field].push(angular.copy(mdjs.empty_json.geographicextent));
            };
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .directive('editDataGeographicExtents', editDataGeographicExtentsDirective);

editDataGeographicExtentsDirective.$inject = ['extentsSrv', 'editDataGeographicExtentsTemplateurl'];
