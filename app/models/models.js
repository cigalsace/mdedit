// (function() {
// "use strict";

angular.module('models', []);

angular.module('models')
    .factory('modelsSrv', modelsSrv);

modelsSrv.$inject = ['$http', '$location'];

function modelsSrv($http, $location) {

    // var url = 'models/models.json';
    var modelsSrv = {
        getList: getList,
        getModel: getModel
    };

    return modelsSrv;

    ////////////////////////////////////////////////////////////////////////

    function getList(models_file, callback) {
        return $http.get(models_file)
            .success(function(data) {
                data = data.list;
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + models_file + " file (status: " + status + ").");
            });
    }

    function getModel(modelsList, callback) {
        var modelPath;
        var urlModelPath = $location.search()
            .model;
        if (urlModelPath) {
            modelPath = urlModelPath;
        } else {
            modelPath = modelsList[0].path;
        }
        $http.get(modelPath)
            .success(function(data) {
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + modelPath + " file (status: " + status + ").");
            });
    }

}

// })();
