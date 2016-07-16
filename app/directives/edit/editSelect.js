var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
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
function editSelectDirective(editSelectTemplateurl, checkValuesSrv, $rootScope) {
    return {
        restrict: 'EA',
        templateUrl: editSelectTemplateurl,
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
            scope.field = attrs.field;
            scope.list = scope.codelists[attrs.list];
            scope.disabled = attrs.disabled;
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = scope.fields[attrs.field][p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
            }

            if (attrs.onChange) {
                // console.log(attrs.onChange);
                scope.change = function() {
                    // console.log(attrs.onChange, attrs.field, 'Values', scope.list);
                    // $rootScope.metadata = checkValuesSrv[attrs.onChange]($rootScope.metadata, attrs.field, attrs.field + 'Values', attrs.list);
                    $rootScope.metadata = checkValuesSrv[attrs.onChange]($rootScope.metadata);
                };
            }
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .directive('editSelect', editSelectDirective);
