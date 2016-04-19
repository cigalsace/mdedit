// (function() {
// "use strict";

angular.module('mdjs', []);

angular.module('mdjs')
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

        md = angular.copy(json);

        for (var k = 0; k < md.mdContacts.length; k++) {
            // mdContacts.deliveryPoints
            if (typeof md.mdContacts[k].deliveryPoints === 'string') {
                md.mdContacts[k].deliveryPoints = md.mdContacts[k].deliveryPoints.split("\n");
            }
            if (typeof md.mdContacts[k].phoneVoices === 'string') {
                md.mdContacts[k].phoneVoices = md.mdContacts[k].phoneVoices.split(" | ");
            }
            if (typeof md.mdContacts[k].emails === 'string') {
                md.mdContacts[k].emails = md.mdContacts[k].emails.split(" | ");
            }
        }

        console.log(md);

        return metadata.toXmlString({
            beautifier: true
        }, md);
    }

    function toJson(xml) {
        var metadata = new mdjs.Metadata();
        return metadata.toJson(xml);
    }

}

// })();
