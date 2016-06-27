var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('editDateTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDateTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDate.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDateTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDateDirective(editDateTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editDateTemplateurl,
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
            scope.field = attrs.field;
            var properties = ['id', 'label', 'description', 'placeholder'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = scope.fields[attrs.field][p];
                if (attrs[p] || attrs[p] === '') {
                    scope[p] = attrs[p];
                }
            }

            // Manage datePicker
            scope.datePicker = {};
            scope.openDatePicker = function(event, datepickerName) {
                event.preventDefault();
                event.stopPropagation();
                scope.datePicker[datepickerName] = !scope.datePicker[datepickerName];
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
    .directive('editDate', editDateDirective);
