"use strict";

/**
 * Déclaration de l'application Angular JS mdEditApp
 */
var mdEditApp = angular.module('mdEditApp', [
    // Dépendance
    'ui.bootstrap',
    'mdEdit'
]);

// Déclaration du module mdEdit
var mdEdit = angular.module('mdEdit',[]);

// Contrôleur de l'application mdReader
mdEdit.controller('mdEditCtrl', ['$scope', '$http', '$sce',  '$uibModal', '$log', function ($scope, $http, $sce,  $uibModal, $log) {
    /*
    $scope.renderHTML = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };
    */

    // Manage validation of fields
    //$scope.required = {};
    
    // Get locales
    $http.get('locales/locales-'+config.userLang+'.json').success(function(data) {
        $scope.ui = data.ui;
        $scope.fields = data.fields;
        $scope.codelists = codeslist = data.codelists;
        $scope.md_errors = data.md_errors;
    });
    // Define and load default model
    $scope.models = config.models;
    $http.get(config.default_model).success(function(data) {
        $scope.metadata = data;
    });
    
    $scope.clearSearch = function () {
        $scope.fieldSearch = '';
    };
    
    $scope.loadXml = function () {
        // console.log($scope.xml);
        $scope.metadata = xml2json($scope.xml);
        //console.log($scope.metadata);
    };
    
    // Manage multi value field
    // Add / remove contacts
    $scope.removeContact = function (cnt_type, contact) {
        if (cnt_type == 'md_contact') {
            $scope.metadata.md_contacts.splice($scope.metadata.md_contacts.indexOf(contact), 1);
        } else if (cnt_type == 'data_contact') {
            $scope.metadata.data_contacts.splice($scope.metadata.data_contacts.indexOf(contact), 1);
        }
    };
    $scope.addContact = function (cnt_type) {
        /*
        var empty_contact = {
                name:           '',
                position:       '',
                organisation:   '',
                address:        '',
                cp:             '',
                city:           '',
                tel:            '',
                email:          '',
                role:           '',
                logo_text:      '',
                logo_url:       ''
            };
        */
        var empty_contact = empty_data.contact;
        if (cnt_type == 'md_contact') {
            //$scope.metadata.md_contacts.push(empty_contact);
            $scope.metadata.md_contacts.push(empty_data.contact);
        } else if (cnt_type == 'data_contact') {
            //$scope.metadata.data_contacts.push(empty_contact);
            $scope.metadata.data_contacts.push(empty_data.contact);
        }
    };
    // Add / remove geographicExtent
    $scope.removeGeographicExtent = function (geographicExtent) {
        $scope.metadata.data_geographicextents.splice($scope.metadata.data_geographicextents.indexOf(geographicExtent), 1);
    };
    $scope.addGeographicExtent = function () {
        /*
        var empty_geographicextent = {
                name: '',
                xmin: '',
                xmax: '',
                ymin: '',
                ymax: ''
            };
        */
        $scope.metadata.data_geographicextents.push(empty_data.geographicextent);
    };
    // Add / remove browsegraphic
    $scope.removeBrowsegraphic = function (browsegraphic) {
        $scope.metadata.data_browsegraphics.splice($scope.metadata.data_browsegraphics.indexOf(browsegraphic), 1);
    };
    $scope.addBrowsegraphic = function () {
        /*
        var empty_browsegraphic = {
                url: '',
                description: '',
                type: ''
            };
        */
        $scope.metadata.data_browsegraphics.push(empty_data.browsegraphic);
    };
    // Add / remove temporalextent
    $scope.removeTemporalextent = function (temporalextent) {
        $scope.metadata.data_temporalextents.splice($scope.metadata.data_temporalextents.indexOf(temporalextent), 1);
    };
    $scope.addTemporalextent = function () {
        /*
        var empty_temporalextent = {
                begin: '',
                end: '',
                description: ''
            };
        */
        $scope.metadata.data_temporalextents.push(empty_data.temporalextent);
    };
    // Add / remove keyword
    $scope.removeKeyword = function (keyword) {
        $scope.metadata.data_keywords.splice($scope.metadata.data_keywords.indexOf(keyword), 1);
    };
    $scope.addKeyword = function () {
        /*
        var empty_keyword = {
                "keyword": "",
                "type": "",
                "thesaurus_name": "",
                "thesaurus_dates": [
                    {
                        "type": "",
                        "date": ""
                    }
                ]
            };
        */
        $scope.metadata.data_keywords.push(empty_data.keyword);
    };
    // Add / remove referencesystem
    $scope.removeReferencesystem = function (referencesystem) {
        $scope.metadata.data_referencesystems.splice($scope.metadata.data_referencesystems.indexOf(referencesystem), 1);
    };
    $scope.addReferencesystem = function () {
        /*
        var empty_referencesystem = {
                "code": "",
                "codespace": ""
            };
        */
        $scope.metadata.data_referencesystems.push(empty_data.referencesystem);
    };
    // Add / remove distFormat
    $scope.removeFormat = function (format) {
        $scope.metadata.data_distformats.splice($scope.metadata.data_distformats.indexOf(format), 1);
    };
    $scope.addFormat = function () {
        /*
        var empty_format = {
                name:           '',
                version:        '',
                specification:  ''
            };
        */
        $scope.metadata.data_distformats.push(empty_data.format);
    };
    // Add / remove inspireConstraint
    $scope.removeInspireConstraint = function (inspireConstraint) {
        $scope.metadata.data_legal_accessinspireconstraints.splice($scope.metadata.data_legal_accessinspireconstraints.indexOf(inspireConstraint), 1);
    };
    $scope.addInspireConstraint = function () {
        //var empty_constraint = '';
        $scope.metadata.data_legal_accessinspireconstraints.push(empty_data.constraint);
    };
    // Add / remove accessConstraint
    $scope.removeAccessConstraint = function (accessConstraint) {
        $scope.metadata.data_legal_accessconstraints.splice($scope.metadata.data_legal_accessconstraints.indexOf(accessConstraint), 1);
        //$scope.changeAccessconstraint();
        //$scope.required['data_legal_accessconstraints'] = true;
        //console.log($scope.required['data_legal_accessconstraints']);
    };
    $scope.addAccessConstraint = function () {
        //var empty_constraint = '';
        $scope.metadata.data_legal_accessconstraints.push(empty_data.constraint);
        //console.log($scope.metadata.data_legal_accessconstraints);
    };
    // Add / remove useConstraint
    $scope.removeUseConstraint = function (useConstraint) {
        $scope.metadata.data_legal_useconstraints.splice($scope.metadata.data_legal_useconstraints.indexOf(useConstraint), 1);
    };
    $scope.addUseConstraint = function () {
        //var empty_constraint = '';
        $scope.metadata.data_legal_useconstraints.push(empty_data.constraint);
    };
    // Add / remove useLimitation
    $scope.removeUseLimitation = function (useLimitation) {
        $scope.metadata.data_legal_uselimitations.splice($scope.metadata.data_legal_uselimitations.indexOf(useLimitation), 1);
    };
    $scope.addUseLimitation = function () {
        //var empty_limitation = '';
        $scope.metadata.data_legal_uselimitations.push(empty_data.limitation);
    };
    // Add / remove linkage
    $scope.removeLinkage = function (data_linkage) {
        $scope.metadata.data_linkages.splice($scope.metadata.data_linkages.indexOf(data_linkage), 1);
    };
    $scope.addLinkage = function () {
        /*
        var empty_linkage = {
            name:           '',
            description:    '',
            url:            '',
            protocol:       ''
        };
        */
        $scope.metadata.data_linkages.push(empty_data.linkage);
    };

    // Check fields required validity
    /*
    $scope.required['data_legal_accessconstraints'] = true;
    //console.log($scope.metadata);
    $scope.changeAccessconstraint = function () {
        var required = true;
        angular.forEach($scope.metadata.data_legal_accessconstraints, function(data_legal_accessconstraint, key) {
            if (data_legal_accessconstraint) {
                required = false;
            }
        });
        $scope.required['data_legal_accessconstraints'] = required;
    }
    */
    
    // Get geographic extents list
    $http.get('autocompletion_lists/lst_geographicextents.json').success(function(data) {
        $scope.geographicExtents = data;
    });
    $scope.onSelectGeographixExtent = function ($item, $model, $label, $key) {
        //console.log($item);
        //console.log($model);
        //console.log($label);
        //console.log($key);
        $scope.metadata.data_geographicextents[$key] = $item;
        //console.log($scope.metadata.data_geographicextents[$key]);
    };
            
    // Modal to generate and get XML file
    $scope.modalGetXML = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/modal-download.html',
            controller: 'modalGetXmlCtrl',
            size: 'lg',
            //windowClass: 'modal-fullscreen',
            resolve: {
                md: function () {
                    $scope.md = json2xml($scope.metadata);
                    var file = {'filecontent': $scope.md.xml};
                    $http({
                        method  : 'POST',
                        url     : config.server_url_getxml,
                        dataType: 'json',
                        data : file
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
                scopeParent: function () {
                    return $scope;
                }
            }
        });
        
    };
    // Modal upload to parse XML file
    $scope.modalUpload = function() {
        //$scope.trashNote = note;
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/modal-upload.html',
            controller: 'modalUploadCtrl',
            size: 'lg',
            //windowClass: 'modal-fullscreen',
            resolve: {
                scopeParent: function () {
                    return $scope;
                }
            }
        });
    };
    // Modal doc to show documentation
    $scope.modalDoc = function(doc_url) {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/modal-doc.html',
            controller: 'modalDocCtrl',
            size: 'lg',
            windowClass: 'modal-doc',
            resolve: {
                doc_url: function () {
                    return doc_url;
                },
                scopeParent: function () {
                    return $scope;
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

}]);

mdEdit.controller('modalGetXmlCtrl', function ($sce, $scope, $http, $modalInstance, scopeParent, md) {
    $scope.scopeParent = scopeParent;
    $scope.md = md;

    $scope.downloadXML = function() {
        //window.open('data:text/xml;base64,' + window.btoa($scope.md.xml));
        window.open('data:text/xml,' + encodeURIComponent($scope.md.xml));
        $modalInstance.close();
    };
    $scope.downloadJSON = function() {
        //window.open('data:text/xml;base64,' + window.btoa($scope.md.xml));
        //window.open('data:text/json,' + encodeURIComponent($scope.md.xml));
        //$modalInstance.close();
    };
    
    $scope.close = function() {
        // Appel à la fonction d'annulation.
        $modalInstance.dismiss('cancel');
    };
});

mdEdit.controller('modalUploadCtrl', function ($http, $sce, $scope, $modalInstance, scopeParent) {
    $scope.scopeParent = scopeParent;
	
	$scope.getMetadataModel = function(model_path) {
        $http.get(model_path).success(function(data) {
            scopeParent.metadata = data;
        });
        $modalInstance.close();
	}

    $scope.getFileContent = function() {
        var file = $('#file_input').prop('files')[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            scopeParent.xml = reader.result;
            scopeParent.loadXml();
        }
        reader.readAsText(file);
        //console.log('upload');
        scopeParent.template_url = 'partials/tpl-view.html';
        //Fermeture de la fenêtre modale
        $modalInstance.close();
    };
    
    $scope.close = function() {
        // Appel à la fonction d'annulation.
        $modalInstance.dismiss('cancel');
    };
});

mdEdit.controller('modalDocCtrl', function ($http, $sce, $scope, $modalInstance, scopeParent, doc_url) {
    $scope.scopeParent = scopeParent;
    $scope.doc_url = doc_url;

    $http.get(doc_url).success(function(data) {
        showdown.setFlavor('github');
        var converter = new showdown.Converter({tables: true});
        $scope.doc_md = $sce.trustAsHtml(converter.makeHtml(data));
        //console.log(data);
    });
        
    $scope.close = function() {
        // Appel à la fonction d'annulation.
        $modalInstance.dismiss('cancel');
    };
});
