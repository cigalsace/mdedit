// Controller
/**
 * [module description]
 * @param  {[type]} 'modalDoc' [description]
 * @return {[type]}            [description]
 */

//----------------------------------------------------------------------------
// app.controllers.ModalInstanceCtrl.js
// Modal Instance Controller
//----------------------------------------------------------------------------

angular.module('modalDoc.services', []);
angular.module('modalDoc', ['modalDoc.services', 'mdEdit.services']);

angular
    .module('modalDoc')
    .controller('ModalDocCtrl', ModalDocCtrl);

ModalDocCtrl.$inject = ['$sce', '$uibModalInstance', 'modalDocSrv', 'localesSrv', 'docField'];

function ModalDocCtrl($sce, $uibModalInstance, modalDocSrv, localesSrv, docField) {
    var vm = this;

    // Get modal content
    var userLanguage = localesSrv.getLanguage();
    getDoc(userLanguage, docField);

    vm.close = close;

    ////////////////////////////////////////////////////////////////////////////

    function close() {
        $uibModalInstance.close();
    }

    function getDoc(userLanguage, docField) {
        return modalDocSrv.getDoc(userLanguage, docField)
            .then(function(data) {
                vm.doc_md = $sce.trustAsHtml(data);
            });
    }

}
