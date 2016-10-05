/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .controller('mdEditCtrl', mdEditCtrl);
mdEditCtrl.$inject = ['AppDataSrv', '$http', '$sce', '$log', 'configSrv', 'localesSrv', 'modelsSrv', 'viewsSrv', 'mdjsSrv', 'jsonConverterSrv', 'BroadcastSrv', 'PermalinkSrv', '$window', 'modalDocSrv', 'modalSetXmlSrv', 'modalGetXmlSrv', 'xmlSrv'];

function mdEditCtrl(AppDataSrv, $http, $sce, $log, configSrv, localesSrv, modelsSrv, viewsSrv, mdjsSrv, jsonConverterSrv, BroadcastSrv, PermalinkSrv, $window, modalDocSrv, modalSetXmlSrv, modalGetXmlSrv, xmlSrv) {

    var vm = this;

    vm.data = AppDataSrv;

    BroadcastSrv.on('configLoaded', function() {
        AppDataSrv.pageLoaded = false;
        loadPage();
        AppDataSrv.pageLoaded = true;
    });


    function loadPage() {
        
        xmlSrv.getListXml(function(data) {
            vm.data.xmlfiles = data.files;
            vm.data.sec = {
                success: data.success,
                editor: data.sec_editor,
                username: data.sec_username,
                email: data.sec_email,
                org: data.sec_org,
                roles: data.sec_roles
            };
        });
        
        vm.clearSearch = function() {
            vm.fieldSearch = '';
        };

        vm.data.template_url = AppDataSrv.views[AppDataSrv.view-1].path;
        vm.changeView = function(view) {
            viewsSrv.changeView(view);
        };

        vm.getPermalink = function() {
            var url = PermalinkSrv.get();
            $window.location.href = url;
        };
        
        vm.getListXml = function() {
            viewsSrv.changeView(3);
        };

        // Modal to get XML
        vm.openModalGetXml = modalGetXmlSrv.openModalGetXml;

        // Modal to set XML
        vm.openModalSetXml = modalSetXmlSrv.openModalSetXml;

        // Modal to show documentation
        vm.openModalDoc = modalDocSrv.openModalDoc;

    }
}
