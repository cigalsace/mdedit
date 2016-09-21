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

    vm.test = function() {
        console.log('test');
    };

    vm.data = AppDataSrv;
    // console.log(AppDataSrv);
    // AppDataSrv.pageLoaded = 0;
    // User service to manage if var are undefined
    //AppDataSrv.permalink = 'index.html?lang='+AppDataSrv.userLanguage+'&model='+AppDataSrv.model+'&view='+AppDataSrv.view; // +'&xml='+AppDataSrv.xml_url;

    BroadcastSrv.on('configLoaded', function() {
        // console.log(888);
        // AppDataSrv.pageLoaded += 1;
        loadPage();
        // console.log(PermalinkSrv.get());
        // AppDataSrv.pageLoaded -= 1;
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
        // vm.openModalGetXML = function() {
        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: 'app/modalGetXml.module/partials/modal-download.html',
        //         controller: 'modalGetXmlCtrl as modal',
        //         size: 'lg',
        //         resolve: {
        //             models: function() {
        //                 console.log('111');
        //                 return vm.data.models;
        //             }
        //         }
        //     });
        // };

        // Modal to set XML
        vm.openModalSetXml = modalSetXmlSrv.openModalSetXml;
        // vm.openModalSetXml
        // vm.openModalSetXml = function() {
        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: 'app/modalSetXml.module/partials/modal-upload.html',
        //         controller: 'modalSetXmlCtrl as modal',
        //         size: 'lg',
        //         resolve: {
        //             models: function() {
        //                 return vm.data.models;
        //             }
        //         }
        //     });
        // };


        // Modal to show documentation
        vm.openModalDoc = modalDocSrv.openModalDoc;
        // vm.openModalDoc = function(docField) {
        //     var modalInstance = $uibModal.open({
        //         animation: true,
        //         ariaLabelledBy: 'modal-title',
        //         ariaDescribedBy: 'modal-body',
        //         templateUrl: 'app/modalDoc.module/partials/modal-doc.html',
        //         controller: 'ModalDocCtrl as modal',
        //         size: 'lg',
        //         resolve: {
        //             docField: function() {
        //                 console.log('test');
        //                 return docField;
        //             }
        //         }
        //     });
        // };


    }
}
