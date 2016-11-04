// Filter array2string (array to line)
angular.module('mdEdit.filters')
    .filter('translateCode', translateCode);

translateCode.$inject = ['AppDataSrv'];

function translateCode(AppDataSrv) {
    return function(code, listName) {
        console.log(code);
        if (listName) {
            var list = AppDataSrv.codelists[listName];
            for (var option in list) {
                if (code.toLowerCase() == list[option].id.toLowerCase()) {
                    return list[option].value;
                }
            }
        } else {
            return code;
        }
    };
}
