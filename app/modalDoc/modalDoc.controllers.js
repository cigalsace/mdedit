// Controller
/**
 * [module description]
 * @param  {[type]} 'modalDoc' [description]
 * @return {[type]}            [description]
 */
angular.module('modalDoc')
    .controller('modalDocCtrl', modalDocCtrl);

modalDocCtrl.$inject = ['$sce', '$scope', '$uibModalInstance', 'modalDocSrv', 'localesSrv', 'docField'];

function modalDocCtrl($sce, $scope, $uibModalInstance, modalDocSrv, localesSrv, docField) {
    // Close modal window button
    $scope.close = closeModal;

    // Get modal content
    var userLanguage = localesSrv.getLanguage();
    getDoc(userLanguage, docField);

    ////////////////////////////////////////////////////////////////////////////

    function closeModal() {
        // Appel à la fonction d'annulation.
        $uibModalInstance.dismiss('cancel');
    }

    function getDoc(userLanguage, docField) {
        return modalDocSrv.getDoc(userLanguage, docField)
            .then(function(data) {
                $scope.doc_md = $sce.trustAsHtml(data);
            });
    }

}
