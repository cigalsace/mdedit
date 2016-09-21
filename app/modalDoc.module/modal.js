//----------------------------------------------------------------------------
// app.factories.modal.js
// App Data Management Factory
//----------------------------------------------------------------------------

// angular.module('appData', []);

angular
    .module('mdEdit.services')
    .factory('ModalSrv', ModalSrv);

ModalSrv.$inject = ['$uibModal'];

function ModalSrv($uibModal) {
    var ModalSrv = {
        open: open,
        close: close
    };

    return ModalSrv;

    ////////////////////////////////////////////////////////////////////////

    function open(docField) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalDoc.module/partials/modal-doc.html',
            controller: 'ModalDocCtrl as modal',
            size: 'lg',
            resolve: {
                docField: function() {
                    return docField;
                }
            }
        });
    }

    function close(name, callback) {
        console.log('close');
    }

}
