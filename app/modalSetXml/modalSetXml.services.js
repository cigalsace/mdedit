// (function() {
// "use strict";

// Service
angular.module('modalSetXml')
    .factory('modalSetXmlSrv', modalSetXmlSrv);

modalSetXmlSrv.$inject = ['$http'];

function modalSetXmlSrv($http) {

    // var modalSetXmlSrv = {
    //     getDoc: getDoc
    // };
    //
    // return modalSetXmlSrv;
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
