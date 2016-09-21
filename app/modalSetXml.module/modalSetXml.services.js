// Service
/**
 * [module description]
 * @param  {[type]} 'modalGetXml' [description]
 * @return {[type]}               [description]
 */
angular.module('modalSetXml.services')
    .factory('modalSetXmlSrv', modalSetXmlSrv);

modalSetXmlSrv.$inject = ['$uibModal', 'AppDataSrv'];

function modalSetXmlSrv($uibModal, AppDataSrv) {

    var modalSetXmlSrv = {
        openModalSetXml: openModalSetXml
    };

    return modalSetXmlSrv;

    ////////////////////////////////////////////////////////////////////////////

    function openModalSetXml() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalSetXml.module/partials/modal-upload.html',
            controller: 'modalSetXmlCtrl as modal',
            size: 'lg',
            resolve: {
                models: function() {
                    return AppDataSrv.models;
                }
            }
        });
    }

}
