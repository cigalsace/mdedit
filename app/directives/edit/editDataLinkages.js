var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('editDataLinkagesTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataLinkagesTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataLinkages.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataLinkagesTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataLinkagesDirective(editDataLinkagesTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editDataLinkagesTemplateurl,
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
        scope.$watch('pageLoaded', function(newVal) {
            if (newVal) {init();}
        });

        function init() {
            // Define values from attributes or use default fields.dataTitle properties values
            // scope.field = attrs.field;
            scope.field = 'dataLinkages';
            // scope.list = scope.codelists[attrs.list];
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['name', 'description', 'url', 'protocol'];
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

            // Add / remove item
            scope.removeItem = function(item) {
                scope.metadata[scope.field].splice(scope.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                scope.metadata[scope.field].push(angular.copy(mdjs.empty_json.temporalextent));
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
    .directive('editDataLinkages', editDataLinkagesDirective);
