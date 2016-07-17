/**
 * [module description]
 * @param  {[type]} 'models'          [description]
 * @param  {[type]} ['jsonConverter'] [description]
 * @return {[type]}                   [description]
 */
angular.module('xml', ['jsonConverter']);

angular.module('xml')
    .factory('xmlSrv', xmlSrv);

xmlSrv.$inject = ['$http', '$location', '$rootScope', 'jsonConverterSrv', 'mdjsSrv'];

function xmlSrv($http, $location, $rootScope, jsonConverterSrv, mdjsSrv) {

    var xmlSrv = {
        getFile: getFile,
        getXml: getXml,
        loadXml: loadXml
    };

    return xmlSrv;

    ////////////////////////////////////////////////////////////////////////

    function getFile(url, callback) {
        $rootScope.xml_url = url;
        return $http({
                method: 'GET',
                url: $rootScope.config.server_url_geturl+"&url="+url,
                dataType: 'xml'
            })
            .success(function(data) {
                // console.log('xmlSrv.getFile('+url+')');
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + url + " file (status: " + status + ").");
            });
    }

    function getXml() {
        var xmlParam = $location.search().xml;
        if (xmlParam) {
            getFile(xmlParam, function(data) {
                xmlSrv.loadXml(data);
            });
            return true;
        }
        return false;
    }

    function loadXml(xml) {
        var data = mdjsSrv.toJson(xml);
        console.log('data', data);
        console.log('jsonConverterSrv.mdjsToForm(data)');
        $rootScope.metadata = jsonConverterSrv.mdjsToForm(data);
        console.log('form', $rootScope.metadata);
    }

}
