//----------------------------------------------------------------------------
// app.factories.broadcast.js
// App Data Management Factory
//----------------------------------------------------------------------------

// angular.module('appData', []);

angular
    .module('mdEdit.services')
    .factory('PermalinkSrv', PermalinkSrv);

PermalinkSrv.$inject = ['AppDataSrv'];

function PermalinkSrv(AppDataSrv) {
    var PermalinkSrv = {
        get: get
    };
    
    return PermalinkSrv;
    
    ////////////////////////////////////////////////////////////////////////
    
    function get() {
        var url = 'index.html?';
        var params = [];
        if (AppDataSrv.userLanguage) {
            params.push('lang='+AppDataSrv.userLanguage);
        }
        if (AppDataSrv.model) {
            params.push('model='+AppDataSrv.model);
        }
        if (AppDataSrv.view) {
            params.push('view='+AppDataSrv.view);
        }
        if (AppDataSrv.xml_url) {
            params.push('xml='+AppDataSrv.xml_url);
        }
        return url + params.join('&');
    }
    
}
