/**
 * [module description]
 * @param  {[type]} 'models'          [description]
 * @param  {[type]} ['jsonConverter'] [description]
 * @return {[type]}                   [description]
 */
// angular.module('mdEdit.services');

angular.module('mdEdit.services')
    .factory('xmlSrv', xmlSrv);

xmlSrv.$inject = ['$http', '$location', 'jsonConverterSrv', 'mdjsSrv', 'AppDataSrv'];

function xmlSrv($http, $location, jsonConverterSrv, mdjsSrv, AppDataSrv) {

    var xmlSrv = {
        getFile: getFile,
        getXml: getXml,
        loadXml: loadXml,
        getListXml: getListXml
    };

    return xmlSrv;

    ////////////////////////////////////////////////////////////////////////

    function getFile(url, callback) {
        AppDataSrv.xml_url = url;
        return $http({
                method: 'GET',
                url: AppDataSrv.config.server_url_geturl+"&url="+url,
                dataType: 'xml'
            })
            .success(function(data) {
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
        AppDataSrv.metadata = jsonConverterSrv.mdjsToForm(data);
    }
    
    function getListXml(callback) {
        return $http({
                method: 'GET',
                url: AppDataSrv.config.server_url_getlistxml,
                dataType: 'json'
            })
            .success(function(data) {
                callback(data);
            })
            .error(function(data, status) {
                console.log("Error: can't get " + org + " XML files list (status: " + status + ").");
            });
    }

}
