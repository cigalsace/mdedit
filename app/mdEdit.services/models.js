/**
 * [module description]
 * @param  {[type]} 'models'          [description]
 * @param  {[type]} ['jsonConverter'] [description]
 * @return {[type]}                   [description]
 */
// angular.module('mdEdit.services');

angular.module('mdEdit.services')
    .factory('modelsSrv', modelsSrv);

modelsSrv.$inject = ['$http', '$location', 'jsonConverterSrv', 'AppDataSrv'];

function modelsSrv($http, $location, jsonConverterSrv, AppDataSrv) {

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
        callback = callback || function() {};
        var modelParam = $location.search().model;
        if (!model) {
            if (modelParam) {
                model = modelParam;
            } else {
                model = 1;
            }
        }
        // console.log(model);
        $http.get(modelsList[model-1].path)
            .success(function(data) {
                AppDataSrv.metadata = jsonConverterSrv.modelToForm(data);
                AppDataSrv.model = model;
                callback(model);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + model + " file (status: " + status + ").");
            });
    }

}
