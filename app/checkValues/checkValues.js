/**
 * [module description]
 * @param  {[type]} 'checkValues' [description]
 * @param  {[type]} []            [description]
 * @return {[type]}               [description]
 */
angular.module('checkValues', []);

angular.module('checkValues')
    .factory('checkValuesSrv', checkValuesSrv);

function checkValuesSrv($rootScope) {

    var checkValuesSrv = {
        mdFileIdentifier: mdFileIdentifier,
        cleanList: cleanList,
        formatDate: formatDate,
        checkCode: checkCode,
        translateCode: translateCode,
        dataSpatialRepresentationType: dataSpatialRepresentationType,
        dataMaintenanceFrequency: dataMaintenanceFrequency
    };

    return checkValuesSrv;

    ////////////////////////////////////////////////////////////////////////

    /**
     * checkMdFileIdentifier function
     * @param  {[type]} mdFileIdentifier [description]
     * @param  {[type]} dataIdentifiers  [description]
     * @return {[type]}                  [description]
     */
    function mdFileIdentifier(mdFileIdentifier, dataIdentifiers) {
        /**
        * [guid description]
        * @return {[type]} [description]
        */
        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        if (!mdFileIdentifier || mdFileIdentifier === '') {
            if (dataIdentifiers && dataIdentifiers.length && dataIdentifiers[0].code) {
                return json.dataIdentifiers[0].code;
            } else {
                return guid();
            }
        }
    }

    /**
    * [cleanList description]
    * @param  {[type]} items [description]
    * @return {[type]}       [description]
    */
    function cleanList(items) {
        var cleanItems = [];
        if (items) {
            for (var i = 0; i < items.length; i++) {
                if (items[i]) {
                    cleanItems.push(items[i]);
                }
            }
        }
        return cleanItems;
    }

    /**
    * Manage date format
    * @param  {[type]} d [description]
    * @return {[type]}   [description]
    */
    function formatDate(d, today) {
        today = today || false;
        var date;
        if (d) {
            date = new Date(d);
        } else {
            if (today) {
                date = new Date();
            } else {
                return '';
            }
        }
        var day = date.getDate();
        day = (day < 10 ? '0' + day : day);
        var month = date.getMonth() + 1;
        month = (month < 10 ? '0' + month : month);
        var fullYear = date.getFullYear();
        return [fullYear, month, day].join('-');
    }

    /**
     * checkValues function
     * @param  {[type]} dataname [description]
     * @param  {[type]} listname [description]
     * @param  {[type]} field    [description]
     * @return {[type]}          [description]
     */
    function checkCode(dataname, listname, field) {
        field = field || false;
        for (var item in json[dataname]) {
            var code;
            if (field) {
                code = json[dataname][item][field];
            } else {
                code = json[dataname][item];
            }
            if (code) {
                var list = $rootScope.codelists[listname];
                for (var option in list) {
                    var id = list[option].id;
                    var search = list[option].search.toLowerCase();
                    if (code.toLowerCase()
                    .indexOf(search) > -1) {
                        if (field) {
                            json[dataname][item][field] = id;
                        } else {
                            json[dataname][item] = id;
                        }
                    }
                }
            }
        }
    }

    /**
     * translateCode function
     * @param  {[type]} dataname [description]
     * @param  {[type]} newname  [description]
     * @param  {[type]} listname [description]
     * @param  {[type]} field    [description]
     * @return {[type]}          [description]
     */
    function translateCode(json, dataname, newname, listname, field) {
        field = field || false;
        if (json[dataname]) {
            var type;
            type = typeof(json[dataname]);
            if (Array.isArray(json[dataname])) {
                type = 'array';
            }
            var list = $rootScope.codelists[listname];
            var item, option;
            if (type == 'string') {
                code = json[dataname];
                for (option in list) {
                    if (code.toLowerCase() == list[option].id.toLowerCase()) {
                        json[newname] = list[option].value;
                    }
                }
            } else {
                json[newname] = [];
                for (item in json[dataname]) {
                    if (typeof(json[dataname][item]) == 'string') {
                        code = json[dataname][item];
                        for (option in list) {
                            if (code.toLowerCase() == list[option].id.toLowerCase()) {
                                json[newname][item] = list[option].value;
                            }
                        }
                    } else {
                        code = json[dataname][item][field];
                        // console.log(code);
                        for (option in list) {
                            // console.log(list, option, list[option].id, list[option].value);
                            if (code.toLowerCase() == list[option].id.toLowerCase()) {
                                json[newname][item] = {};
                                json[newname][item][field] = list[option].value;
                            }
                        }
                    }
                }
            }
        }
        console.log(json);
        return json;
    }

    function dataSpatialRepresentationType(json) {
        return translateCode(json, 'dataSpatialRepresentationType', 'dataSpatialRepresentationTypeValues', 'MD_SpatialRepresentationTypeCode');
    }

    function dataMaintenanceFrequency(json) {
        return translateCode(json, 'dataMaintenanceFrequency', 'dataMaintenanceFrequencyValues', 'MD_MaintenanceFrequencyCode');
    }

    function dataLegalAccessInspireConstraints(json) {
        return translateCode(json, 'dataLegalAccessInspireConstraints', 'dataLegalAccessInspireConstraintsValues', 'MD_InspireRestrictionCode');
    }

    function dataLegalAccessConstraints(json) {
        return translateCode(json, 'dataLegalAccessConstraints', 'dataLegalAccessConstraintsValues', 'MD_RestrictionCode');
    }
    function dataPointOfContacts(json) {
        return translateCode(json, 'dataPointOfContacts', 'dataPointOfContactsValues', 'CI_RoleCode', 'role');
    }
    function mdContacts(json) {
        return translateCode(json, 'mdContacts', 'mdContactsValues', 'CI_RoleCode', 'role');
    }
    function dataReferenceSystems(json) {
        return translateCode(json, 'dataReferenceSystems', 'dataReferenceSystemsValues', 'MD_ReferenceSystemCode', 'code');
    }
    function dataInspireKeywords(json) {
        return translateCode(json, 'dataInspireKeywords', 'dataInspireKeywordsValues', 'MD_InspireTopicCategoryCode');
    }
    function dataTopicCategories(json) {
        return translateCode(json, 'dataTopicCategories', 'dataTopicCategoriesValues', 'MD_TopicCategoryCode');
    }
    function dataLegalUseConstraints(json) {
        return translateCode(json, 'dataLegalUseConstraints', 'dataLegalUseConstraintsValues', 'MD_RestrictionCode');
    }

}
