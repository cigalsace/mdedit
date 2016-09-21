var baseTemplateUrl = './app/mdEdit.directives/edit/partials';

/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit.directives')
    .value('editDataDistributionFormatsTemplateurl',
        /**
         * [function description]
         * @param  {[type]} element [description]
         * @param  {[type]} attrs   [description]
         * @return {[type]}         [description]
         */
        function(element, attrs) {
            var templateUrl = attrs.editDataDistributionFormatsTemplateurl;
            return templateUrl !== undefined ? templateUrl : baseTemplateUrl + '/editDataDistributionFormats.html';
        });

/**
 * [dataTitleDirective description]
 * @param  {[type]} mdeditDataDistributionFormatsTemplateurl [description]
 * @return {[type]}                            [description]
 */
function editDataDistributionFormatsDirective(editDataDistributionFormatsTemplateurl, AppDataSrv, modalDocSrv) {
    return {
        restrict: 'EA',
        templateUrl: editDataDistributionFormatsTemplateurl,
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
            // Define values from attributes or use default fields.dataTitle properties values
            scope.field = 'dataDistributionFormats';
            scope.disabled = attrs.disabled;
            scope.multi = false;
            if (attrs.multi === 'true') {
                scope.multi = true;
            }
            var properties = ['id', 'label', 'description', 'placeholder'];
            var params = ['formatName', 'formatVersion', 'formatSpecification'];
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

            // Add / remove item
            scope.removeItem = function(item) {
                AppDataSrv.metadata[scope.field].splice(AppDataSrv.metadata[scope.field].indexOf(item), 1);
            };
            scope.addItem = function() {
                if (!AppDataSrv.metadata[scope.field]) {
                    AppDataSrv.metadata[scope.field] = [];
                }
                AppDataSrv.metadata[scope.field].push(angular.copy(mdjs.empty_json.temporalextent));
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
    .directive('editDataDistributionFormats', editDataDistributionFormatsDirective);

editDataDistributionFormatsDirective.$inject = ['editDataDistributionFormatsTemplateurl', 'AppDataSrv', 'modalDocSrv'];
