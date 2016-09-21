/**
 * [module description]
 * @param  {[type]} 'mdjs' [description]
 * @param  {[type]} []     [description]
 * @return {[type]}        [description]
 */
// angular.module('mdjs', []);

angular.module('mdEdit.services')
    .factory('mdjsSrv', mdjsSrv);

function mdjsSrv() {

    var mdjsSrv = {
        toXml: toXml,
        toJson: toJson
    };

    return mdjsSrv;

    ////////////////////////////////////////////////////////////////////////

    function toXml(json) {
        
        var metadata = new mdjs.Metadata();
        // console.log(222, metadata);

        // md = angular.copy(json);
        // console.log(md);

        return metadata.toXmlString({
            beautifier: true
        }, json);
        // return false;
    }

    function toJson(xml) {
        xml = $.parseXML(xml);
        var metadata = new mdjs.Metadata();
        metadata.setXml(xml);
        // console.log(metadata.toJson());
        return metadata.toJson();
    }
}
