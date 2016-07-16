var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('editDataKeywordsTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataKeywordsTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataKeywords.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataKeywordsTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataKeywordsDirective(editDataKeywordsTemplateurl, $rootScope) {
    return {
        restrict: 'EA',
        templateUrl: editDataKeywordsTemplateurl,
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
            scope.field = 'dataKeywords';
            // scope.list = scope.codelists[attrs.list];
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['keyword', 'keywordType', 'thesaurusName', 'thesaurusDatePublication'];
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
            scope.datePicker = {};
            scope.openDatePicker = function(event, datepickerName) {
                event.preventDefault();
                event.stopPropagation();
                scope.datePicker[datepickerName] = !scope.datePicker[datepickerName];
            };

            // Add / remove item
            scope.removeItem = function(item) {
                scope.metadata[scope.field].splice(scope.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                scope.metadata[scope.field].push(angular.copy(mdjs.empty_json.keyword));
            };

            scope.checkKeywords = function(keyword, index) {
                // console.log(scope.keyword);
                $rootScope.metadata[scope.field][index].keywords = keyword.replace(/\s*,\*s/g, ',').split(",");
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
    .directive('editDataKeywords', editDataKeywordsDirective);
