// Controller
/**
 * [module description]
 * @param  {[type]} 'modalSetXml' [description]
 * @param  {[type]} []            [description]
 * @return {[type]}               [description]
 */
angular.module('modalSetXml', [])
    .controller('modalSetXmlCtrl', modalSetXmlCtrl);

modalSetXmlCtrl.$inject = ['$http', '$scope', '$rootScope', '$uibModalInstance', 'scopeParent', 'localesSrv', 'modelsSrv', 'mdjsSrv', 'jsonConverterSrv'];

function modalSetXmlCtrl($http, $scope, $rootScope, $uibModalInstance, scopeParent, localesSrv, modelsSrv, mdjsSrv, jsonConverterSrv) {

    var userLanguage = localesSrv.getLanguage();
    $scope.modelValue = 'value_' + userLanguage;

    $scope.scopeParent = scopeParent;

    // Close modal window button
    $scope.close = closeModal;

    $scope.getMetadataModel = getMetadataModel;

    $scope.getFileContent = getFileContent;

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
            scopeParent.xml = reader.result;
            scopeParent.loadXml();
            // console.log(11111111);
            // $rootScope.metadata = 'test4444';
        };
        reader.readAsText(file);
        //console.log('upload');
        // console.log(scopeParent.models[1].path);
        scopeParent.template_url = scopeParent.views[1].path;
        // scopeParent.changeView(1);
        //Fermeture de la fenêtre modale
        $uibModalInstance.close();
    }

}
