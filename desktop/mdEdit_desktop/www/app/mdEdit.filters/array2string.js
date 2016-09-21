// Filter array2string (array to line)
angular.module('mdEdit.filters')
    .filter('array2string', array2string);

array2string.$inject = ['$sce'];

function array2string($sce) {
    return function(msg, breakTag) {
        breakTag = breakTag || '\n';
        msg = msg.join(breakTag);
        return $sce.trustAsHtml(msg);
    };
}
