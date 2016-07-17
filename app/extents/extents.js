/**
 * [module description]
 * @param  {[type]} 'extents' [description]
 * @param  {[type]} []        [description]
 * @return {[type]}           [description]
 */
angular.module('extents', []);

angular.module('extents')
    .factory('extentsSrv', extentsSrv);

extentsSrv.$inject = ['$http'];

function extentsSrv($http) {

    var extentsSrv = {
        getList: getList
        // getModel: getModel
    };

    return extentsSrv;

    ////////////////////////////////////////////////////////////////////////

    function getList(geographicextents_file) {
        return $http.get(geographicextents_file)
            .then(function(response) {
                return response.data;
            })
            .catch(function(reason) {
                console.log("Error: can't get extents file for " + geographicextents_file + " (reason: " + reason + ").");
                console.log(reason);
            });
    }

}
