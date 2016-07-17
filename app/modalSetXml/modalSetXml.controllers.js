// Controller
/**
 * [module description]
 * @param  {[type]} 'modalSetXml' [description]
 * @param  {[type]} []            [description]
 * @return {[type]}               [description]
 */
angular.module('modalSetXml', [])
    .controller('modalSetXmlCtrl', modalSetXmlCtrl);

modalSetXmlCtrl.$inject = ['$http', '$scope', '$rootScope', '$uibModalInstance', 'scopeParent', 'localesSrv', 'modelsSrv', 'mdjsSrv', 'jsonConverterSrv', 'xmlSrv'];

function modalSetXmlCtrl($http, $scope, $rootScope, $uibModalInstance, scopeParent, localesSrv, modelsSrv, mdjsSrv, jsonConverterSrv, xmlSrv) {

    var userLanguage = localesSrv.getLanguage();
    $scope.modelValue = 'value_' + userLanguage;

    $scope.scopeParent = scopeParent;

    // Close modal window button
    $scope.close = closeModal;

    $scope.getMetadataModel = getMetadataModel;

    $scope.getFileContent = getFileContent;

    $scope.getUrl = getUrl;

    ////////////////////////////////////////////////////////////////////////////

    function closeModal() {
        // Appel à la fonction d'annulation.
        $uibModalInstance.dismiss('cancel');
    }

    function getMetadataModel(model_path) {
        modelsSrv.getModel($rootScope.models, model_path, function(model) {
            // $rootScope.metadata = jsonConverterSrv.modelToForm(model.data);
            // $rootScope.model = model.path;
        });
        $uibModalInstance.close();
    }

    function getFileContent() {
        // TODO: éviter l'usage de jquery et la manipulation du DOM
        var file = $('#file_input').prop('files')[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            xmlSrv.loadXml(reader.result);
        };
        reader.readAsText(file);
        // TODO: Use service to change view
        scopeParent.changeView(1);
        //Fermeture de la fenêtre modale
        $uibModalInstance.close();
    }

    function getUrl(url_xml) {
        xmlSrv.getFile(url_xml, function(data) {
            // scopeParent.xml = data;
            xmlSrv.loadXml(data);
        });
        // TODO: Use service to change view
        scopeParent.changeView(1);
        // scopeParent.template_url = scopeParent.views[1].path;
        $uibModalInstance.close();
    }

}
