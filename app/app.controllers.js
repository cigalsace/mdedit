/**
 * [module description]
 * @param  {[type]} 'mdEdit' [description]
 * @return {[type]}          [description]
 */
angular.module('mdEdit')
    .controller('mdEditCtrl', mdEditCtrl);
mdEditCtrl.$inject = ['$scope', '$rootScope', '$http', '$sce', '$uibModal', '$log', 'configSrv', 'localesSrv', 'modelsSrv', 'viewsSrv', 'mdjsSrv', 'jsonConverterSrv'];

function mdEditCtrl($scope, $rootScope, $http, $sce, $uibModal, $log, configSrv, localesSrv, modelsSrv, viewsSrv, mdjsSrv, jsonConverterSrv) {

    $scope.pageLoaded = false;

    $scope.$on('configLoaded', function() {
        loadPage();
        $scope.pageLoaded = true;
    });

    function loadPage() {

        $scope.clearSearch = function() {
            $scope.fieldSearch = '';
        };

        // $scope.loadXml = function() {
        //     var data = mdjsSrv.toJson($scope.xml);
        //     console.log('data', data);
        //     console.log('jsonConverterSrv.mdjsToForm(data)');
        //     $rootScope.metadata = jsonConverterSrv.mdjsToForm(data);
        //     console.log('form', $rootScope.metadata);
        // };

        // console.log($scope.views[0].path);
        $scope.template_url = $scope.views[$rootScope.view].path;
        $scope.changeView = function(view) {
            $rootScope.view = view;
            $scope.template_url = $scope.views[view].path;
        };

        // Modal to generate and get XML file
        $scope.modalGetXML = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modalGetXml/partials/modal-download.html',
                controller: 'modalGetXmlCtrl',
                size: 'lg',
                resolve: {
                    md: function() {
                        $scope.md = {};
                        // $scope.md.xml = mdjsSrv.toXml($scope.metadata);
                        console.log('jsonConverterSrv.formToMdjs($rootScope.metadata)');
                        console.log('convert', $rootScope.metadata, jsonConverterSrv.formToMdjs($rootScope.metadata));
                        $scope.md.xml = mdjsSrv.toXml(jsonConverterSrv.formToMdjs($rootScope.metadata));
                        $scope.md.errors = {};
                        var file = {
                            'filecontent': $scope.md.xml
                        };
                        $http({
                                method: 'POST',
                                url: $scope.config.server_url_getxml,
                                dataType: 'json',
                                data: file
                            })
                            .success(function(data, status, headers, config) {
                                $scope.md.url = data.url;
                                $scope.md.filename = data.filename;
                            })
                            .error(function(data, status, headers, config) {
                                console.log('modalGetXML() error.');
                            });
                        return $scope.md;
                    },
                    scopeParent: function() {
                        return $scope;
                    }
                }
            });
        };

        // Modal upload to parse XML file
        $scope.modalUpload = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modalSetXml/partials/modal-upload.html',
                controller: 'modalSetXmlCtrl',
                size: 'lg',
                resolve: {
                    scopeParent: function() {
                        return $scope;
                    }
                }
            });
        };

        // Modal doc to show documentation
        $scope.modalDoc = function(docField, e) {
            console.log(111);
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modalDoc/partials/modal-doc.html',
                controller: 'modalDocCtrl',
                size: 'lg',
                windowClass: 'modal-doc',
                resolve: {
                    docField: function() {
                        return docField;
                    }
                }
            });
        };
    }
}
