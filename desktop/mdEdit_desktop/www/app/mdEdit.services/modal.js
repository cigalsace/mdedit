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
        console.log('test');
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalDoc.module/partials/modal-doc.html',
            controller: 'ModalDocCtrl as modal',
            size: 'lg',
            resolve: {
                docField: function() {
                    console.log('test');
                    return docField;
                }
            }
        });
    }

    // Modal to get XML
    vm.openModalGetXML = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalGetXml.module/partials/modal-download.html',
            controller: 'modalGetXmlCtrl as modal',
            size: 'lg',
            resolve: {
                models: function() {
                    console.log('111');
                    return vm.data.models;
                }
            }
        });
    };

    // Modal to set XML
    vm.openModalSetXml = function() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalSetXml.module/partials/modal-upload.html',
            controller: 'modalSetXmlCtrl as modal',
            size: 'lg',
            resolve: {
                models: function() {
                    return vm.data.models;
                }
            }
        });
    };


    // Modal to show documentation



    function close(name, callback) {
        console.log('close');
    }

}
