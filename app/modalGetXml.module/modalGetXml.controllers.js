/**
 * [module description]
 * @param  {[type]} 'modalGetXml' [description]
 * @return {[type]}               [description]
 */
 angular.module('modalGetXml.services', []);
 angular.module('modalGetXml', ['modalGetXml.services', 'mdEdit.services']);

angular.module('modalGetXml').controller('modalGetXmlCtrl', modalGetXmlCtrl);
modalGetXmlCtrl.$inject = ['$uibModalInstance', 'modalGetXmlSrv', 'AppDataSrv', 'mdjsSrv', 'jsonConverterSrv'];

function modalGetXmlCtrl($uibModalInstance, modalGetXmlSrv, AppDataSrv, mdjsSrv, jsonConverterSrv) {
    var vm = this;

    vm.ui = {};
    vm.ui.modal_download = AppDataSrv.ui.modal_download;

    vm.md = {};
    generateXML();

    // Close modal window button
    vm.close = close;

    vm.downloadXML = downloadXML;

    vm.downloadJSON = downloadJSON;
    
    vm.uploadXml = uploadXml;

    ////////////////////////////////////////////////////////////////////////////

    function close() {
        // Call cancel function.
        $uibModalInstance.close();
    }

    function downloadXML() {
        window.open('data:text/xml,' + encodeURIComponent(vm.md.xml));
        $uibModalInstance.close();
    }

    function downloadJSON() {
        //window.open('data:text/json,' + encodeURIComponent(vm.md.xml));
        //$uibModalInstance.close();
    }
    
    function uploadXml(filename) {
        modalGetXmlSrv.uploadXml(filename, function(response) {
            alert(response.data.msg);
        });
    }

    function generateXML() {
        vm.md.xml = mdjsSrv.toXml(jsonConverterSrv.formToMdjs(AppDataSrv.metadata));
        var file = {
            'filecontent': vm.md.xml,
            'filename': AppDataSrv.metadata.mdFileIdentifier
        };
        modalGetXmlSrv.getFileUrl(file, function(response) {
            vm.md.url = response.data.url;
            vm.md.filename = response.data.filename;
            vm.sec = AppDataSrv.sec;
            // vm.sec = [];
            // vm.md.sec_editor = response.data.sec_editor;
            // vm.md.sec_username = response.data.sec_username;
            // vm.md.sec_email = response.data.sec_email;
            // vm.md.sec_org = response.data.sec_org;
            // vm.md.sec_roles = response.data.sec_roles;
        });
    }

}
