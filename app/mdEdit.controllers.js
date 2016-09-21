/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .controller('mdEditCtrl', mdEditCtrl);
mdEditCtrl.$inject = ['AppDataSrv', '$http', '$sce', '$log', 'configSrv', 'localesSrv', 'modelsSrv', 'viewsSrv', 'mdjsSrv', 'jsonConverterSrv', 'BroadcastSrv', 'PermalinkSrv', '$window', 'modalDocSrv', 'modalSetXmlSrv', 'modalGetXmlSrv'];

function mdEditCtrl(AppDataSrv, $http, $sce, $log, configSrv, localesSrv, modelsSrv, viewsSrv, mdjsSrv, jsonConverterSrv, BroadcastSrv, PermalinkSrv, $window, modalDocSrv, modalSetXmlSrv, modalGetXmlSrv) {

    var vm = this;

    vm.data = AppDataSrv;

    BroadcastSrv.on('configLoaded', function() {
        AppDataSrv.pageLoaded = false;
        loadPage();
        AppDataSrv.pageLoaded = true;
    });


    function loadPage() {
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

        // Modal to get XML
        vm.openModalGetXml = modalGetXmlSrv.openModalGetXml;

        // Modal to set XML
        vm.openModalSetXml = modalSetXmlSrv.openModalSetXml;

        // Modal to show documentation
        vm.openModalDoc = modalDocSrv.openModalDoc;

    }
}
