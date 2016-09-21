// Filter string2array (string to array)
angular.module('mdEdit.filters')
    .filter('string2array', string2array);

// string2array.$inject = [];

function string2array() {
    return function(string, breakTag) {
        if (typeof(string) === 'string') {
            breakTag = breakTag || ',';
            var result = string.split(breakTag);
            for (var i = 0; i < result.length; i++) {
                result[i] = result[i].trim();
            }
            return result;
        }
        return string;
    };
}
