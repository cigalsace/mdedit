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

    function getModel(modelsList, modelId, callback) {
        model = modelId || false;
        var modelParam = $location.search().model;
        if (!model) {
            if (modelParam) {
                model = modelParam;
            } else {
                model = 1;
            }
        }
        model -= 1;
        $http.get(modelsList[model].path)
            .success(function(data) {
                //var model = {};
                console.log('jsonConverterSrv.modelToForm(data)');
                $rootScope.metadata = jsonConverterSrv.modelToForm(data);
                console.log($rootScope.metadata);
                $rootScope.model = model;
                callback(model);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + model + " file (status: " + status + ").");
            });
    }

}
