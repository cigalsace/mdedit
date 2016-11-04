/**
 * [module description]
 * @param  {[type]} 'checkValues' [description]
 * @param  {[type]} []            [description]
 * @return {[type]}               [description]
 */
// angular.module('mdEdit.services', []);

angular.module('mdEdit.services')
    .factory('checkValuesSrv', checkValuesSrv);

checkValuesSrv.$inject = ['AppDataSrv'];

function checkValuesSrv(AppDataSrv) {

    var checkValuesSrv = {
        mdFileIdentifier: mdFileIdentifier,
        cleanList: cleanList,
        formatDate: formatDate,
        checkCodes: checkCodes,
        translateValues: translateValues
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
                return dataIdentifiers[0].code;
            } else {
                return guid();
            }
        }

        return mdFileIdentifier;
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
     * @param  {[type]} data [description]
     * @param  {[type]} list [description]
     * @param  {[type]} field    [description]
     * @return {[type]}          [description]
     */
    function checkCodes(data, list, field) {
        field = field || false;
        if (data) {
            for (var item in data) {
                var code;
                if (field) {
                    code = data[item][field];
                } else {
                    code = data[item];
                }
                if (code) {
                    // var list = $rootScope.codelists[listname];
                    // var list = AppDataSrv.codelists[listname];
                    for (var option in list) {
                        var id = list[option].id;
                        var search = list[option].search.toLowerCase();
                        if (code.toLowerCase()
                            .indexOf(search) > -1) {
                            if (field) {
                                data[item][field] = id;
                            } else {
                                data[item] = id;
                            }
                        }
                    }
                }
            }
            return data;
        }
        return {};
    }

    /**
     * translateValues function
     * @param  {[type]} data [description]
     * @param  {[type]} list [description]
     * @param  {[type]} field    [description]
     * @return {[type]}          [description]
     */
    function translateValues(data, list, field) {
        field = field || false;
        if (data) {
            var type;
            type = typeof(data);
            if (Array.isArray(data)) {
                type = 'array';
            }
            // var list = $rootScope.codelists[listname];
            //var list = list;
            var item, option;
            if (type == 'string') {
                code = data;
                for (option in list) {
                    if (code.toLowerCase() == list[option].value.toLowerCase()) {
                        data = list[option].id;
                    }
                }
            } else {
                for (item in data) {
                    if (typeof(data[item]) == 'string') {
                        code = data[item];
                        if (code) {
                            for (option in list) {
                                if (code.toLowerCase() == list[option].value.toLowerCase()) {
                                    data[item] = list[option].id;
                                }
                            }
                        }
                    } else {
                        code = data[item][field];
                        if (code) {
                            for (option in list) {
                                if (code.toLowerCase() == list[option].value.toLowerCase()) {
                                    data[item] = {};
                                    data[item][field] = list[option].id;
                                }
                            }
                        }
                    }
                }
            }
            return data;
        }
        return {};
    }

}
