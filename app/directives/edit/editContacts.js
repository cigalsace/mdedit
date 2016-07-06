var baseTemplateUrl = './app/directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .value('editContactsTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editContactsTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editContacts.html';
        });

/**
 * [ContactDirective description]
 * @param  {[type]} mdeditContactsTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editContactsDirective(editContactsTemplateurl) {
    return {
        restrict: 'EA',
        templateUrl: editContactsTemplateurl,
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
            scope.cnt_type = attrs.cntType;
            
            // Add / remove contacts
            scope.removeContact = function(contact) {
                scope.metadata[scope.cnt_type].splice(scope.metadata[scope.cnt_type].indexOf(contact), 1);
            };
            scope.addContact = function() {
                scope.metadata[scope.cnt_type].push(angular.copy(mdjs.empty_json.contact));
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
    .directive('editContacts', editContactsDirective);
