/**
 * [module description]
 * @param  {[type]} 'modalDoc' [description]
 * @return {[type]}            [description]
 */
angular.module('modalDoc')
    .factory('modalDocSrv', modalDocSrv);

modalDocSrv.$inject = ['$http'];

function modalDocSrv($http) {

    var modalDocSrv = {
        getDoc: getDoc
    };

    return modalDocSrv;

    ////////////////////////////////////////////////////////////////////////

    function getDoc(lg, field) {
        field = field || "default";
        console.log(field);
        var help_file = 'locales/' + lg + '/help.json';
        return $http
            .get(help_file)
            .then(function(help) {
                path = help.data[field] || 'locales/' + lg + '/help/' + field + '.md';
                return $http.get(path)
                    .then(function(response) {
                        showdown.setFlavor('github');
                        var converter = new showdown.Converter({
                            tables: true
                        });
                        return converter.makeHtml(response.data);
                    });
            });
    }

}
