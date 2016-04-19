var baseTemplateUrl = './app/directives/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('editDataTitleTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataTitleTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataTitle.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataTitleTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataTitleDirective(editDataTitleTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editDataTitleTemplateurl,
        replace: true,
        link: link,
        // scope: true
    };

    /**
     * [link description]
     * @param  {[type]} scope   [description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    function link(scope, element, attrs) {
        scope.$on('configLoaded', function() {
            init();
        });

        function init() {
            // Define values from attributes or use default fields.dataTitle properties values
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = scope.fields.dataTitle[p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
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
    .directive('editDataTitle', editDataTitleDirective);
