var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives').value('editAccordionHeaderTemplateurl',
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
function editAccordionHeaderDirective($parse, editAccordionHeaderTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editAccordionHeaderTemplateurl,
        replace: true,
        link: link,
        transclude: true,
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
angular.module('mdEdit.directives')
    .directive('editAccordionHeader', editAccordionHeaderDirective);

editAccordionHeaderDirective.$inject = ['$parse', 'editAccordionHeaderTemplateurl', 'AppDataSrv', 'modalDocSrv'];
