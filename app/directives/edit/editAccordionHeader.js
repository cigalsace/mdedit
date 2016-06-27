var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit').value('editAccordionHeaderTemplateurl',
    /**
     * [function description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    function(element, attrs) {
        var templateUrl = attrs.editAccordionHeaderTemplateurl;
        return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editAccordionHeader.html';
    });

/**
 * [ContactDirective description]
 * @param  {[type]} editAccordionHeaderTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editAccordionHeaderDirective(editAccordionHeaderTemplateurl, $parse) {
    return {
        restrict: 'EA',
        templateUrl: editAccordionHeaderTemplateurl,
        replace: true,
        link: link,
        transclude: true,
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
        scope.$watch('pageLoaded', function(newVal) {
            if (newVal) {init();}
        });

        function init() {
            scope.tooltip = attrs.tooltip;
            scope.header = attrs.header;
            scope.doc = attrs.doc;
            scope.showFields = true;
            if (attrs.showfields) {
                scope.showFields = scope[attrs.showfields];
                scope.$watch(attrs.showfields, function(value) {
                    scope.showFields = scope[attrs.showfields];
                });
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
    .directive('editAccordionHeader', editAccordionHeaderDirective);
