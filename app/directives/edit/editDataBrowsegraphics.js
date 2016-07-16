var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
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
function editDataBrowsegraphicsDirective(editDataBrowsegraphicsTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editDataBrowsegraphicsTemplateurl,
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
            scope.field = 'dataBrowseGraphics';
            // scope.list = scope.codelists[attrs.list];
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['fileName', 'fileDescription', 'fileType'];
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
            // TODO: remplacer par un service/factory
            // scope.getExt = function(url) {
            //     url = url || '';
            //     var ext = url.substr(url.lastIndexOf('.')+1);
            //     if (ext == url) {
            //         return "";
            //     }
            //     return ext.toLowerCase();
            // };

            // Add / remove item
            scope.removeItem = function(item) {
                scope.metadata[scope.field].splice(scope.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                scope.metadata[scope.field].push(angular.copy(mdjs.empty_json.browsegraphic));
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
    .directive('editDataBrowsegraphics', editDataBrowsegraphicsDirective);
