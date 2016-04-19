// (function() {
// "use strict";

// Contrôleur de l'application mdReader
angular.module('mdEdit')
    .controller('mdEditCtrl', mdEditCtrl);
mdEditCtrl.$inject = ['$scope', '$http', '$sce', '$uibModal', '$log', 'configSrv', 'localesSrv', 'modelsSrv', 'viewsSrv', 'mdjsSrv'];

function mdEditCtrl($scope, $http, $sce, $uibModal, $log, configSrv, localesSrv, modelsSrv, viewsSrv, mdjsSrv) {

    $scope.$on('configLoaded', function() {
        // $scope.name = $rootScope.config.name;
        // console.log('loaded');
        loadPage();
    });

    function loadPage() {

        $scope.clearSearch = function() {
            $scope.fieldSearch = '';
        };

        $scope.loadXml = function() {
            // console.log($scope.xml);
            // $scope.metadata = xml2json($scope.xml);
            //console.log($scope.metadata);
            $scope.metadata = mdjsSrv.toJson($scope.xml);
        };

        $scope.changeView = function(view) {
            $scope.template_url = $scope.views[view].url;
            // Todo: load locales de la view
        };

        // Manage multi value field
        // Add / remove contacts
        $scope.removeContact = function(cnt_type, contact) {
            if (cnt_type == 'mdContact') {
                $scope.metadata.mdContacts.splice($scope.metadata.mdContacts.indexOf(contact), 1);
            } else if (cnt_type == 'dataContact') {
                $scope.metadata.dataContacts.splice($scope.metadata.dataContacts.indexOf(contact), 1);
            }
        };
        $scope.addContact = function(cnt_type) {
            // var empty_contact = mdjs.empty_json.contact;
            if (cnt_type == 'mdContact') {
                //$scope.metadata.mdContacts.push(empty_contact);
                $scope.metadata.mdContacts.push(angular.copy(mdjs.empty_json.contact));
            } else if (cnt_type == 'dataContact') {
                //$scope.metadata.data_contacts.push(empty_contact);
                $scope.metadata.dataContacts.push(angular.copy(mdjs.empty_json.contact));
            }
        };
        // Add / remove geographicExtent
        $scope.removeGeographicExtent = function(geographicExtent) {
            $scope.metadata.dataGeographicExtents.splice($scope.metadata.dataGeographicExtents.indexOf(geographicExtent), 1);
        };
        $scope.addGeographicExtent = function() {
            $scope.metadata.dataGeographicExtents.push(angular.copy(mdjs.empty_json.geographicextent));
        };
        // Add / remove browsegraphic
        $scope.removeBrowsegraphic = function(browsegraphic) {
            $scope.metadata.dataBrowseGraphics.splice($scope.metadata.dataBrowseGraphics.indexOf(browsegraphic), 1);
        };
        $scope.addBrowsegraphic = function() {
            $scope.metadata.dataBrowseGraphics.push(angular.copy(mdjs.empty_json.browsegraphic));
        };
        // Add / remove temporalextent
        $scope.removeTemporalextent = function(temporalextent) {
            $scope.metadata.dataTemporalExtents.splice($scope.metadata.dataTemporalExtents.indexOf(temporalextent), 1);
        };
        $scope.addTemporalextent = function() {
            $scope.metadata.dataTemporalExtents.push(angular.copy(mdjs.empty_json.temporalextent));
        };
        // Add / remove keyword
        $scope.removeKeyword = function(keyword) {
            $scope.metadata.dataKeywords.splice($scope.metadata.dataKeywords.indexOf(keyword), 1);
        };
        $scope.addKeyword = function() {
            $scope.metadata.dataKeywords.push(angular.copy(mdjs.empty_json.keyword));
        };
        // Add / remove referencesystem
        $scope.removeReferencesystem = function(referencesystem) {
            $scope.metadata.dataReferenceSystems.splice($scope.metadata.dataReferenceSystems.indexOf(referencesystem), 1);
        };
        $scope.addReferencesystem = function() {
            $scope.metadata.dataReferenceSystems.push(angular.copy(mdjs.empty_json.referencesystem));
        };
        // Add / remove distFormat
        $scope.removeFormat = function(format) {
            $scope.metadata.dataDistributionFormats.splice($scope.metadata.dataDistributionFormats.indexOf(format), 1);
        };
        $scope.addFormat = function() {
            $scope.metadata.dataDistributionFormats.push(angular.copy(mdjs.empty_json.distributionformat));
        };
        // Add / remove inspireConstraint
        $scope.removeInspireConstraint = function(inspireConstraint) {
            $scope.metadata.dataLegalAccessInspireConstraints.splice($scope.metadata.dataLegalAccessInspireConstraints.indexOf(inspireConstraint), 1);
        };
        $scope.addInspireConstraint = function() {
            //var empty_constraint = '';
            $scope.metadata.dataLegalAccessInspireConstraints.push(angular.copy(mdjs.empty_json.constraint));
        };
        // Add / remove accessConstraint
        $scope.removeAccessConstraint = function(accessConstraint) {
            $scope.metadata.dataLegalAccessConstraints.splice($scope.metadata.dataLegalAccessConstraints.indexOf(accessConstraint), 1);
            //$scope.changeAccessconstraint();
            //$scope.required['data_legal_accessconstraints'] = true;
            //console.log($scope.required['data_legal_accessconstraints']);
        };
        $scope.addAccessConstraint = function() {
            //var empty_constraint = '';
            $scope.metadata.dataLegalAccessConstraints.push(angular.copy(mdjs.empty_json.constraint));
            //console.log($scope.metadata.data_legal_accessconstraints);
        };
        // Add / remove useConstraint
        $scope.removeUseConstraint = function(useConstraint) {
            $scope.metadata.dataLegalUseConstraints.splice($scope.metadata.dataLegalUseConstraints.indexOf(useConstraint), 1);
        };
        $scope.addUseConstraint = function() {
            //var empty_constraint = '';
            $scope.metadata.dataLegalUseConstraints.push(angular.copy(mdjs.empty_json.constraint));
        };
        // Add / remove useLimitation
        $scope.removeUseLimitation = function(useLimitation) {
            $scope.metadata.dataLegalUseLimitations.splice($scope.metadata.dataLegalUseLimitations.indexOf(useLimitation), 1);
        };
        $scope.addUseLimitation = function() {
            //var empty_limitation = '';
            $scope.metadata.dataLegalUseLimitations.push(angular.copy(mdjs.empty_json.limitation));
        };
        // Add / remove linkage
        $scope.removeLinkage = function(dataLinkage) {
            $scope.metadata.dataLinkages.splice($scope.metadata.dataLinkages.indexOf(dataLinkage), 1);
        };
        $scope.addLinkage = function() {
            $scope.metadata.dataLinkages.push(angular.copy(mdjs.empty_json.linkage));
        };

        // Check fields required validity
        // $scope.required['data_legal_accessconstraints'] = true;
        // $scope.changeAccessconstraint = function () {
        //     var required = true;
        //     angular.forEach($scope.metadata.data_legal_accessconstraints, function(data_legal_accessconstraint, key) {
        //         if (data_legal_accessconstraint) {
        //             required = false;
        //         }
        //     });
        //     $scope.required['data_legal_accessconstraints'] = required;
        // }

        // Get geographic extents list
        $http.get('autocompletion_lists/lst_geographicextents.json')
            .success(function(data) {
                $scope.geographicExtents = data;
            });
        $scope.onSelectGeographixExtent = function($item, $model, $label, $key) {
            $scope.metadata.dataGeographicExtents[$key] = $item;
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
                        $scope.md.xml = mdjsSrv.toXml($scope.metadata);
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
            if (e) {
                e.preventDefault();
                e.stopPropagation();
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

        // Manage datepichkers
        $scope.datePicker = {};
        $scope.openDatePicker = function($event, datepickerName) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.datePicker[datepickerName] = true;
        };

    }

}

// angular.module('mdEdit').controller('modalGetXmlCtrl', modalGetXmlCtrl);
// modalGetXmlCtrl.$inject = ['$sce', '$scope', '$http', '$uibModalInstance', 'scopeParent', 'md'];
//
// function modalGetXmlCtrl($sce, $scope, $http, $uibModalInstance, scopeParent, md) {
//     $scope.scopeParent = scopeParent;
//     $scope.md = md;
//
//     $scope.downloadXML = function() {
//         window.open('data:text/xml,' + encodeURIComponent($scope.md.xml));
//         $uibModalInstance.close();
//     };
//     $scope.downloadJSON = function() {
//         //window.open('data:text/json,' + encodeURIComponent($scope.md.xml));
//         //$uibModalInstance.close();
//     };
//
//     $scope.close = function() {
//         // Appel à la fonction d'annulation.
//         $uibModalInstance.dismiss('cancel');
//     };
// }

// angular.module('mdEdit').controller('modalUploadCtrl', modalUploadCtrl);
// modalUploadCtrl.$inject = ['$sce', '$scope', '$http', '$uibModalInstance', 'scopeParent'];
//
// function modalUploadCtrl($sce, $scope, $http, $uibModalInstance, scopeParent) {
//     $scope.scopeParent = scopeParent;
//
//     $scope.getMetadataModel = function(model_path) {
//         $http.get(model_path)
//             .success(function(data) {
//                 scopeParent.metadata = data;
//             });
//         $uibModalInstance.close();
//     };
//
//     $scope.getFileContent = function() {
//         var file = $('#file_input')
//             .prop('files')[0];
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             scopeParent.xml = reader.result;
//             scopeParent.loadXml();
//         };
//         reader.readAsText(file);
//         //console.log('upload');
//         scopeParent.template_url = 'views/tpl-view.html';
//         //Fermeture de la fenêtre modale
//         $uibModalInstance.close();
//     };
//
//     $scope.close = function() {
//         // Appel à la fonction d'annulation.
//         $uibModalInstance.dismiss('cancel');
//     };
// }

// })();
