// (function() {
// "use strict";

angular.module('config', []);

angular.module('config').factory('configSrv', configSrv);

configSrv.$inject = ['$http'];

function configSrv($http) {

        var promise;
        var configSrv = {
            getFile: getFile
        };

        return configSrv;

        ////////////////////////////////////////////////////////////////////////

        function getFile(url) {
            if (!promise) {
                promise = $http.get(url)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(reason) {
                        console.log("Error in configSrv.getFile service : can't get " + url + " JSON file (reason: " + reason + ").");
                    });
            }
            return promise;
        }

    }

// })();
