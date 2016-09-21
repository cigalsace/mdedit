var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
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
function editDataKeywordsDirective(editDataKeywordsTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editDataKeywordsTemplateurl,
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
            if (newValue[0] || newValue[1] !== oldValue[1]) {init();}
        });

        function init() {
            scope.openModalDoc = modalDocSrv.openModalDoc;
            scope.MD_KeywordTypeCode = AppDataSrv.codelists.MD_KeywordTypeCode;
            // Define values from attributes or use default fields.dataTitle properties values
            scope.field = 'dataKeywords';
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['keyword', 'keywordType', 'thesaurusName', 'thesaurusDatePublication'];
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                scope[p] = AppDataSrv.fields[scope.field][p];
                for (var j = 0; j < params.length; j++) {
                    param = params[j];
                    if (!scope.hasOwnProperty(param)) { scope[param] = {}; }
                    scope[param][p] = AppDataSrv.fields[scope.field].children[param][p];
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
                AppDataSrv.metadata[scope.field].splice(AppDataSrv.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!AppDataSrv.metadata[scope.field]) {
                    AppDataSrv.metadata[scope.field] = [];
                }
                AppDataSrv.metadata[scope.field].push(angular.copy(mdjs.empty_json.keyword));
            };

            scope.checkKeywords = function(keywords, index) {
                AppDataSrv.metadata[scope.field][index].keywords = keywords.replace(/\s*,\*s/g, ',').split(",");
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
    .directive('editDataKeywords', editDataKeywordsDirective);

editDataKeywordsDirective.$inject = ['editDataKeywordsTemplateurl', 'AppDataSrv', 'modalDocSrv'];
