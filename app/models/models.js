/**
 * [module description]
 * @param  {[type]} 'models'          [description]
 * @param  {[type]} ['jsonConverter'] [description]
 * @return {[type]}                   [description]
 */
angular.module('models', ['jsonConverter']);

angular.module('models')
    .factory('modelsSrv', modelsSrv);

modelsSrv.$inject = ['$http', '$location', '$rootScope', 'jsonConverterSrv'];

function modelsSrv($http, $location, $rootScope, jsonConverterSrv) {

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

    function getModel(modelsList, modelPath, callback) {
        modelPath = modelPath || false;
        var urlModelPath = $location.search().model;
        if (!modelPath) {
            if (urlModelPath) {
                modelPath = urlModelPath;
            } else {
                modelPath = modelsList[0].path;
            }
        }
        $http.get(modelPath)
            .success(function(data) {
                // TODO: à mettre dans un service à part pour réutilisation lors du chargement dynamique d'un model
                var model = {};
                console.log('jsonConverterSrv.modelToForm(data)');
                $rootScope.metadata = jsonConverterSrv.modelToForm(data);
                // console.log('jsonConverterSrv.formToView(data)');
                // $rootScope.metadata = jsonConverterSrv.formToView(data);
                // model.data = jsonConverterSrv.modelToForm(data);
                // model.path = modelPath;
                // $rootScope.metadata = jsonConverterSrv.modelToForm(data);
                console.log($rootScope.metadata);
                $rootScope.model = modelPath;
                callback(model);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + modelPath + " file (status: " + status + ").");
            });
    }

}
