// Service
/**
 * [module description]
 * @param  {[type]} 'modalGetXml' [description]
 * @return {[type]}               [description]
 */
angular.module('modalGetXml.services')
    .factory('modalGetXmlSrv', modalGetXmlSrv);

modalGetXmlSrv.$inject = ['$http', 'AppDataSrv', '$uibModal'];

function modalGetXmlSrv($http, AppDataSrv, $uibModal) {

    var modalGetXmlSrv = {
        getFileUrl: getFileUrl,
        openModalGetXml: openModalGetXml,
        uploadXml: uploadXml
    };

    return modalGetXmlSrv;

    ////////////////////////////////////////////////////////////////////////////

    function getFileUrl(file, callback) {
        return $http({
            method: 'POST',
            url: AppDataSrv.config.server_url_getxml,
            dataType: 'json',
            data: file
        })
        .then(function(response) {
            callback(response);
        })
        .catch(function(reason) {
            console.log('modalGetXMLSrv.getFileUrl() error.');
        });
    }
    
    function uploadXml(filename, callback) {
        return $http({
            method: 'GET',
            url: AppDataSrv.config.server_url_sendxml,
            dataType: 'json',
            params: { filename: filename }
        })
        .then(function(response) {
            callback(response);
        })
        .catch(function(reason) {
            console.log('modalGetXMLSrv.uploadXml() error.');
        });
    }

    function openModalGetXml() {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'app/modalGetXml.module/partials/modal-download.html',
            controller: 'modalGetXmlCtrl as modal',
            size: 'lg',
            resolve: {
                models: function() {
                    return AppDataSrv.models;
                }
            }
        });
    }

}
