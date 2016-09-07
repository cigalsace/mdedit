var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
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
function editMultiTextareaDirective(editMultiTextareaTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editMultiTextareaTemplateurl,
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
            scope.rows = attrs.rows;
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = scope.fields[attrs.field][p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
            }
            if (!scope.metadata[attrs.field]) {
                scope.metadata[attrs.field] = [''];
            }

            // Add / remove item
            scope.removeItem = function(item) {
                scope.metadata[attrs.field].splice(scope.metadata[attrs.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!scope.metadata[scope.attrs]) {
                    scope.metadata[scope.attrs] = [];
                }
                scope.metadata[attrs.field].push('');
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
    .directive('editMultiTextarea', editMultiTextareaDirective);
