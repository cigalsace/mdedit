/**
 * [module description]
 * @param  {[type]} 'views' [description]
 * @param  {[type]} []      [description]
 * @return {[type]}         [description]
 */
// angular.module('views', []);

angular.module('mdEdit.services')
    .factory('viewsSrv', viewsSrv);

viewsSrv.$inject = ['$http', '$location', 'AppDataSrv'];

function viewsSrv($http, $location, AppDataSrv) {

    var viewsSrv = {
        getList: getList,
        getViewLocales: getViewLocales,
        changeView: changeView
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
        view = viewId || false;
        var viewParam = $location.search().view;
        if (!view) {
            if (viewParam) {
                view = viewParam;
            } else {
                view = 1;
            }
        }
        viewLocales = viewsList[view-1].locales[userLanguage];
        $http.get(viewLocales)
            .success(function(data) {
                callback(view, data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + viewLocales + " file (status: " + status + ").");
            });
    }

    function changeView(viewId) {
        getViewLocales(viewId, AppDataSrv.views, AppDataSrv.userLanguage, function(viewId, data) {
            AppDataSrv.fields = data.fields;
            AppDataSrv.view = viewId;
            AppDataSrv.template_url = AppDataSrv.views[viewId-1].path;
        });
    }

}
