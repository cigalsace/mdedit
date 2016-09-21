// Controller
/**
 * [module description]
 * @param  {[type]} 'modalSetXml' [description]
 * @param  {[type]} []            [description]
 * @return {[type]}               [description]
 */
angular.module('modalSetXml.services', []);
angular.module('modalSetXml.directives', []);
angular.module('modalSetXml', ['modalSetXml.directives', 'modalSetXml.services', 'mdEdit.services']);

angular.module('modalSetXml')
    .controller('modalSetXmlCtrl', modalSetXmlCtrl);

modalSetXmlCtrl.$inject = ['AppDataSrv', '$uibModalInstance', 'modelsSrv', 'xmlSrv', 'models', 'viewsSrv'];

function modalSetXmlCtrl(AppDataSrv, $uibModalInstance, modelsSrv, xmlSrv, models, viewsSrv) {

    var vm = this;

    vm.models = models;

    // Close modal window button
    vm.close = close;

    vm.getMetadataModel = getMetadataModel;

    vm.getFileContent = getFileContent;

    vm.getUrl = getUrl;

    ////////////////////////////////////////////////////////////////////////////

    function close() {
        // Appel à la fonction d'annulation.
        $uibModalInstance.close();
    }

    function getMetadataModel(model_path) {
        modelsSrv.getModel(AppDataSrv.models, model_path);
        $uibModalInstance.close();
    }

    function getFileContent(xml) {
        // Convert xml get from uploadFile directive to json
        xmlSrv.loadXml(xml);
        // Change view
        viewsSrv.changeView(2);
        // Close modal
        $uibModalInstance.close();
    }

    function getUrl(url_xml) {
        xmlSrv.getFile(url_xml, function(data) {
            // scopeParent.xml = data;
            xmlSrv.loadXml(data);
        });
        viewsSrv.changeView(2);
        $uibModalInstance.close();
    }
}
