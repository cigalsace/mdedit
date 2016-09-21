//----------------------------------------------------------------------------
// app.factories.broadcast.js
// App Data Management Factory
//----------------------------------------------------------------------------

// angular.module('appData', []);

angular
    .module('mdEdit.services')
    .factory('BroadcastSrv', BroadcastSrv);

BroadcastSrv.$inject = ['$rootScope'];

function BroadcastSrv($rootScope) {
    var BroadcastSrv = {
        send: send,
        on: on
    };
    
    return BroadcastSrv;
    
    ////////////////////////////////////////////////////////////////////////
    
    function send(name) {
        // args = args || [];
        $rootScope.$broadcast(name);
    }
    
    function on(name, callback) {
        $rootScope.$on(name, callback);
    }
    
}
