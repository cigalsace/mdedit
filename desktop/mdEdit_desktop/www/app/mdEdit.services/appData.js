//----------------------------------------------------------------------------
// app.factories.AppDataSrv.js
// App Data Management Factory
//----------------------------------------------------------------------------

// angular.module('appData', []);

angular
    .module('mdEdit.services')
    .factory('AppDataSrv', AppDataSrv);

// AppDataSrv.$inject = [];

function AppDataSrv() {
    var AppDataSrv = {
        pageLoaded: 0,
        config: {},
        userLanguage: '',
        locales: {},
        models: {},
        view: 0,
        views: {},
        fields: {},
        ui: {},
        md_errors: {},
        codelists: {},
        metadata: {},
    };

    return AppDataSrv;
}
