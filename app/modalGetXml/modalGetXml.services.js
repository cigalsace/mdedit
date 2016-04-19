// (function() {
// "use strict";

// Service
angular.module('modalGetXml')
    .factory('modalGetXmlSrv', modalGetXmlSrv);

modalGetXmlSrv.$inject = ['$http'];

function modalGetXmlSrv($http) {

    // var modalGetXmlSrv = {
    //     getDoc: getDoc
    // };
    //
    // return modalGetXmlSrv;
    //
    // ////////////////////////////////////////////////////////////////////////
    //
    // function getDoc(lg, field) {
    //     field = field || "default";
    //     console.log(field);
    //     var help_file = 'help/help-' + lg + '.json';
    //     return $http
    //         .get(help_file)
    //         .then(function(help) {
    //             path = help.data[field] || 'help/help-' + lg + '/' + field + '.md';
    //             return $http.get(path)
    //                 .then(function(response) {
    //                     showdown.setFlavor('github');
    //                     var converter = new showdown.Converter({
    //                         tables: true
    //                     });
    //                     return converter.makeHtml(response.data);
    //                 });
    //         });
    // }

}

// })();
