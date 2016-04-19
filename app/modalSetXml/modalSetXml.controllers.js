// (function() {
// "use strict";

// Controller
angular.module('modalSetXml')
    .controller('modalSetXmlCtrl', modalSetXmlCtrl);

modalSetXmlCtrl.$inject = ['$http', '$scope', '$uibModalInstance', 'scopeParent', 'localesSrv'];

function modalSetXmlCtrl($http, $scope, $uibModalInstance, scopeParent, localesSrv) {

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
        // TODO: A convertir en service
        $http.get(model_path)
            .success(function(data) {
                scopeParent.metadata = data;
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
        };
        reader.readAsText(file);
        //console.log('upload');
        scopeParent.template_url = 'views/tpl-view.html';
        //Fermeture de la fenêtre modale
        $uibModalInstance.close();
    }

}

// })();
