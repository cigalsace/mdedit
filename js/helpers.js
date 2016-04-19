function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function getParamsURL(url) {
    var variables = url.split('&');
    var params = {};
    for (var i in variables) {
        // v = variables[i].split('=');
        v = variables[i].split(/=(.+)?/);    // Split only first "=" char
        params[v[0]] = decodeURIComponent(v[1]);
        //console.log(v[0] + ' - '+ decodeURIComponent(v[1]));
    }
    return params;
}