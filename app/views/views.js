/**
 * [module description]
 * @param  {[type]} 'views' [description]
 * @param  {[type]} []      [description]
 * @return {[type]}         [description]
 */
angular.module('views', []);

angular.module('views')
    .factory('viewsSrv', viewsSrv);

viewsSrv.$inject = ['$http', '$location'];

function viewsSrv($http, $location) {

    var viewsSrv = {
        getList: getList,
        getViewLocales: getViewLocales
    };

    return viewsSrv;

    ////////////////////////////////////////////////////////////////////////

    function getList(views_file, callback) {
        return $http.get(views_file)
            .success(function(data) {
                data = data.list;
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + views_file + " file (status: " + status + ").");
            });
    }

    function getViewLocales(viewId, viewsList, userLanguage, callback) {
        var viewParam = $location.search().view;
        if (viewParam) {
            view = viewParam;
        } else if (viewId) {
            view = viewId;
        } else {
            view = 0;
        }
        // console.log(viewsList, view);
        viewLocales = viewsList[view].locales[userLanguage];
        $http.get(viewLocales)
            .success(function(data) {
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + viewLocales + " file (status: " + status + ").");
            });
    }

}
