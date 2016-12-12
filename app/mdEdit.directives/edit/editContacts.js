var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
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
function editContactsDirective(editContactsTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editContactsTemplateurl,
        // template: '<p>test</p>',
        replace: true,
        link: link,
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
            if (newValue[0] || newValue[1] !== oldValue[1]) {
                init();
            }
        });

        function init() {
            scope.openModalDoc = modalDocSrv.openModalDoc;
            scope.CI_RoleCode = AppDataSrv.codelists.CI_RoleCode;
            scope.cnt_type = attrs.cntType;

            scope.fields = AppDataSrv.fields[scope.cnt_type];

            // Add / remove contacts
            scope.removeContact = function(contact) {
                AppDataSrv.metadata[scope.cnt_type].splice(AppDataSrv.metadata[scope.cnt_type].indexOf(contact), 1);
            };
            scope.addContact = function() {
                if (!AppDataSrv.metadata[scope.cnt_type]) {
                    AppDataSrv.metadata[scope.cnt_type] = [];
                }
                AppDataSrv.metadata[scope.cnt_type].push(angular.copy(mdjs.empty_json.contact));
            };
            scope.duplicateContact = function(contact) {
                if (!AppDataSrv.metadata[scope.cnt_type]) {
                    AppDataSrv.metadata[scope.cnt_type] = [];
                }
                AppDataSrv.metadata[scope.cnt_type].push(angular.copy(contact));
            };
        }
    }
}

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .directive('editContacts', editContactsDirective);

editContactsDirective.$inject = ['editContactsTemplateurl', 'AppDataSrv', 'modalDocSrv'];
