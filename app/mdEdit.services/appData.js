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
        pageLoaded: false,
        config: {},
        userLanguage: '',
        locales: {},
        models: {},
        model: 1,
        view: 1,
        views: {},
        fields: {},
        ui: {},
        md_errors: {},
        codelists: {},
        metadata: {},
    };

    return AppDataSrv;
}
