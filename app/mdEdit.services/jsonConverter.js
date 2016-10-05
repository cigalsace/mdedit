/**
 * [module description]
 * @param  {[type]} 'jsonConverter' [description]
 * @param  {[type]} []              [description]
 * @return {[type]}                 [description]
 */
// angular.module('jsonConverter', []);

angular.module('mdEdit.services')
    .factory('jsonConverterSrv', jsonConverterSrv);

jsonConverterSrv.$inject = ['AppDataSrv', 'checkValuesSrv'];

function jsonConverterSrv(AppDataSrv, checkValuesSrv) {

    var jsonConverterSrv = {
        modelToForm: modelToForm,
        mdjsToForm: mdjsToForm,
        formToMdjs: formToMdjs
    };

    return jsonConverterSrv;

    ////////////////////////////////////////////////////////////////////////

    /**
     * formToMdjs function: prepare json metadata to export to XML
     * @param  {Object} json JSON metadata object to convert before export to XML
     * @return {Object}      Result JSON metadata object to convert to XML
     */
    function formToMdjs(md) {

        json = angular.copy(md);

        // mdFileIdentifier
        json.mdFileIdentifier = checkValuesSrv.mdFileIdentifier(json.mdFileIdentifier, json.dataIdentifiers);
        AppDataSrv.metadata.mdFileIdentifier = json.mdFileIdentifier;

        // mdDateStamp
        var isToday = !json.mdDateStamp;
        json.mdDateStamp = {
            date: checkValuesSrv.formatDate(json.mdDateStamp, isToday)
        };
        AppDataSrv.metadata.mdDateStamp = new Date(json.mdDateStamp.date);

        // Put json.dataDateRevision, json.dataDateCreation and json.dataDatePublication in dataDate object (date/dateType format)
        var dataDates = [{
            date: checkValuesSrv.formatDate(json.dataDateRevision),
            dateType: 'revision'
        }, {
            date: checkValuesSrv.formatDate(json.dataDatePublication),
            dateType: 'publication'
        }, {
            date: checkValuesSrv.formatDate(json.dataDateCreation),
            dateType: 'creation'
        }];
        json.dataDates = [];
        for (var d = 0; d < dataDates.length; d++) {
            if (dataDates[d].date) {
                json.dataDates.push(dataDates[d]);
            }
        }

        // Manage contact info
        var contactTypes = ['mdContacts', 'dataPointOfContacts'];
        for (var ct = 0; ct < contactTypes.length; ct++) {
            if (json.hasOwnProperty(contactTypes[ct])) {
                for (var k = 0; k < json[contactTypes[ct]].length; k++) {
                    // mdContacts.deliveryPoints
                    // if (typeof json[contactTypes[ct]][k].deliveryPoints === 'string') {
                    if (json[contactTypes[ct]][k].deliveryPoint) {
                        json[contactTypes[ct]][k].deliveryPoints = json[contactTypes[ct]][k].deliveryPoint.split("\n");
                    }
                    // if (typeof json[contactTypes[ct]][k].phoneVoices === 'string') {
                    if (json[contactTypes[ct]][k].phoneVoice) {
                        json[contactTypes[ct]][k].phoneVoices = json[contactTypes[ct]][k].phoneVoice.split(" | ");
                    }
                    // if (typeof json[contactTypes[ct]][k].emails === 'string') {
                    if (json[contactTypes[ct]][k].email) {
                        json[contactTypes[ct]][k].emails = json[contactTypes[ct]][k].email.split(" | ");
                    }
                }
            }
        }

        // dataExtents
        json.dataExtents = [];
        // temporalExtents
        if (json.dataTemporalExtents) {
            for (var t = 0; t < json.dataTemporalExtents.length; t++) {
                if (json.dataTemporalExtents[t].dataTemporalExtentBegin) {
                    var temporalExtent = {
                        dataExtentName: json.dataTemporalExtents[t].dataExtentName,
                        dataTemporalExtentBegin: checkValuesSrv.formatDate(json.dataTemporalExtents[t].dataTemporalExtentBegin),
                        dataTemporalExtentEnd: checkValuesSrv.formatDate(json.dataTemporalExtents[t].dataTemporalExtentEnd)
                    };
                    json.dataExtents.push(temporalExtent);
                }
            }
        }
        // geographicExtents (get list of extents from service)
        if (json.dataGeographicExtents) {
            for (var g = 0; g < json.dataGeographicExtents.length; g++) {
                if (json.dataGeographicExtents[g].dataGeographicExtentWestBound) {
                    var geographicExtent = {
                        dataExtentName: json.dataGeographicExtents[g].dataExtentName,
                        dataGeographicExtentWestBound: json.dataGeographicExtents[g].dataGeographicExtentWestBound,
                        dataGeographicExtentEastBound: json.dataGeographicExtents[g].dataGeographicExtentEastBound,
                        dataGeographicExtentSouthBound: json.dataGeographicExtents[g].dataGeographicExtentSouthBound,
                        dataGeographicExtentNorthBound: json.dataGeographicExtents[g].dataGeographicExtentNorthBound
                    };
                    json.dataExtents.push(geographicExtent);
                }
            }
        }

        // dataLegalConstraints
        json.dataLegalConstraints = [];
        // dataLegalUseLimitations
        // dataLegalUseConstraints
        // dataLegalAccessConstraints
        // dataLegalAccessInspireConstraints
        // dataLegalOtherConstraints

        var dataLegalUseLimitations = checkValuesSrv.cleanList(json.dataLegalUseLimitations);
        var dataLegalUseConstraints = checkValuesSrv.cleanList(json.dataLegalUseConstraints);
        var dataLegalAccessConstraints = checkValuesSrv.cleanList(json.dataLegalAccessConstraints);
        var dataLegalOtherConstraints = checkValuesSrv.cleanList(json.dataLegalAccessInspireConstraints);

        var dataLegalConstraints = {};
        if (dataLegalUseLimitations.length) {
            dataLegalConstraints.dataLegalUseLimitations = dataLegalUseLimitations;
        }
        if (dataLegalUseConstraints.length) {
            dataLegalConstraints.dataLegalUseConstraints = dataLegalUseConstraints;
        }
        if (dataLegalAccessConstraints.length) {
            dataLegalConstraints.dataLegalAccessConstraints = dataLegalAccessConstraints;
        }
        if (dataLegalOtherConstraints.length) {
            dataLegalConstraints.dataLegalOtherConstraints = dataLegalOtherConstraints;
        }
        if (checkValuesSrv.cleanList(json.dataLegalAccessInspireConstraints).length > 0) {
            if (!dataLegalConstraints.dataLegalAccessConstraints) {
                dataLegalConstraints.dataLegalAccessConstraints = [];
            }
            dataLegalConstraints.dataLegalAccessConstraints.push('otherConstraints');
        }
        json.dataLegalConstraints.push(dataLegalConstraints);

        // dataSecurityConstraints
        json.dataSecurityConstraints = [];
        // dataSecurityClassification
        if (json.dataSecurityClassification) {
            var dataSecurityClassification = {
                dataSecurityClassification: json.dataSecurityClassification
            };
            json.dataSecurityConstraints.push(dataSecurityClassification);
        }
        // dataSecurityUseLimitations
        var dataSecurityUseLimitations = checkValuesSrv.cleanList(json.dataSecurityUseLimitations);
        if (dataSecurityUseLimitations.length) {
            json.dataSecurityConstraints.push({
                dataSecurityUseLimitations: dataSecurityUseLimitations
            });
        }

        // inspireKeywords
        if (json.dataInspireKeywords.length > 0) {
            if (json.dataInspireKeywords[0]) {
                mdjs.empty_json.inspirekeywords.keywords = json.dataInspireKeywords;
                json.dataKeywords.push(mdjs.empty_json.inspirekeywords);
            }
        }

        // dataKeywords
        if (json.dataKeywords) {
            for (var kw = 0; kw < json.dataKeywords.length; kw++) {
                // dataKeywords.keywords
                if (typeof json.dataKeywords[kw].keywords === 'string') {
                    json.dataKeywords[kw].keywords = json.dataKeywords[kw].keywords.replace(/\s*,\*s/g, ',')
                        .split(",");
                }
                if (json.dataKeywords[kw].thesaurusDates) {
                    if (json.dataKeywords[kw].thesaurusDates[0].date) {
                        json.dataKeywords[kw].thesaurusDates[0].date = checkValuesSrv.formatDate(json.dataKeywords[kw].thesaurusDates[0].date);
                    }
                }
            }

        }

        // TODO: referenceSystems
        // TODO: distributionFormats
        // TODO: ressources

        // dataIdentifiers
        if (json.dataIdentifiers) {
            json.dataRsIdentifiers = [];
            json.dataMdIdentifiers = [];
            for (var id = 0; id < json.dataIdentifiers.length; id++) {
                var identifier = json.dataIdentifiers[id];
                if (!identifier.codeSpace || identifier.codeSpace === '') {
                    json.dataMdIdentifiers.push(identifier.code);
                } else {
                    json.dataRsIdentifiers.push(identifier);
                }
            }
        }

        // dataQualityInfo
        json.dataQualityInfo = [];
        var dq = {};
        if (json.dataDqLevel) {
            dq.dataDqLevel = json.dataDqLevel;
        } else {
            dq.dataDqLevel = json.mdHierarchyLevel;
        }
        if (json.dataLiStatement) {
            dq.dataLiStatement = json.dataLiStatement;
        }
        json.dataQualityInfo.push(dq);

        console.log(json);

        return json;
    }

    /**
     * modelToForm function: prepare JSON metadata object model to display in mdEdit form
     * @param  {Object} json JSON metadata object from model before converting to form JSON object
     * @return {Object}      Resulting JSON metadata object to display in mdEdit form
     */
    function modelToForm(json) {

        // Change date in YYYY-MM-DD format to javascript date object
        if (json.mdDateStamp) {
            json.mdDateStamp = new Date(json.mdDateStamp);
        }
        if (json.dataDateCreation) {
            json.dataDateCreation = new Date(json.dataDateCreation);
        }
        if (json.dataDatePublication) {
            json.dataDatePublication = new Date(json.dataDatePublication);
        }
        if (json.dataDateRevision) {
            json.dataDateRevision = new Date(json.dataDateRevision);
        }
        if (json.dataDates) {
            for (var d in json.dataDates) {
                if (json.dataDates[d].date) {
                    json.dataDates[d].date = new Date(json.dataDates[d].date);
                }
            }
        }

        // dataKeywords
        if (json.dataKeywords) {
            for (var kw in json.dataKeywords) {
                // thesaurusDates
                if (json.dataKeywords[kw].thesaurusDates && json.dataKeywords[kw].thesaurusDates[0].date) {
                    date = json.dataKeywords[kw].thesaurusDates[0].date;
                    json.dataKeywords[kw].thesaurusDates[0].date = new Date(date);
                }
                // convert keywords to string
                if (json.dataKeywords[kw].keywords && Array.isArray(json.dataKeywords[kw].keywords)) {
                    json.dataKeywords[kw].keywords = json.dataKeywords[kw].keywords.join(', ');
                }
            }
        }

        // dataReferenceSystems
        json.dataReferenceSystems = checkValuesSrv.checkCodes(json.dataReferenceSystems, AppDataSrv.codelists.MD_ReferenceSystemCode, 'code');
        // dataLegalAccessInspireConstraints / MD_InspireRestrictionCode
        json.dataLegalAccessInspireConstraints = checkValuesSrv.checkCodes(json.dataLegalAccessInspireConstraints, AppDataSrv.codelists.MD_InspireRestrictionCode);

        // Convert Inspire keywords to code value (english)
        json.dataInspireKeywords = checkValuesSrv.translateValues(json.dataInspireKeywords, AppDataSrv.codelists.MD_InspireTopicCategoryCode);
        AppDataSrv.metadata = json;
        return json;
    }


    /**
     * mdjsToForm function: convert mdjs JSON metadata object to display in mdEdit form
     * @param  {Object} json origin JSON metadata object from mdjs
     * @return {Object}      result JSON metadata object to display in mdEdit form
     */
    function mdjsToForm(json) {
        // Dates
        function getDate(json, fieldName) {
            var formats = ['date', 'dateTime'];
            for (var f in formats) {
                if (json[fieldName][formats[f]]) {
                    json[fieldName] = new Date(json[fieldName][formats[f]]);
                }
            }
        }
        getDate(json, 'mdDateStamp');

        if (json.dataDates) {
            var formats = ['date', 'dateTime'];
            for (var d = 0; d < json.dataDates.length; d++) {
                for (var f in formats) {
                    if (json.dataDates[d].dateType == 'revision') {
                        if (json.dataDates[d][formats[f]]) {
                            json.dataDateRevision = new Date(json.dataDates[d][formats[f]]);
                        }
                    }
                    if (json.dataDates[d].dateType == 'publication') {
                        if (json.dataDates[d][formats[f]]) {
                            json.dataDatePublication = new Date(json.dataDates[d][formats[f]]);
                        }
                    }
                    if (json.dataDates[d].dateType == 'creation') {
                        if (json.dataDates[d][formats[f]]) {
                            json.dataDateCreation = new Date(json.dataDates[d][formats[f]]);
                        }
                    }
                }
            }
        }

        // dataTemporalExtents
        if (json.dataTemporalExtents) {
            // var formats = ['date', 'dateTime'];
            for (var dt = 0; dt < json.dataTemporalExtents.length; dt++) {
                if (json.dataTemporalExtents[dt]) {
                    json.dataTemporalExtents[dt].dataExtentName = json.dataTemporalExtents[dt].dataExtentName;
                    json.dataTemporalExtents[dt].dataTemporalExtentBegin = new Date(json.dataTemporalExtents[dt].dataTemporalExtentBegin);
                    json.dataTemporalExtents[dt].dataTemporalExtentEnd = new Date(json.dataTemporalExtents[dt].dataTemporalExtentEnd);
                }
            }
        }

        // Manage contact info
        var contactTypes = ['mdContacts', 'dataPointOfContacts'];
        for (var ct = 0; ct < contactTypes.length; ct++) {
            if (json.hasOwnProperty(contactTypes[ct])) {
                for (var k = 0; k < json[contactTypes[ct]].length; k++) {
                    // mdContacts.deliveryPoints
                    if (json[contactTypes[ct]][k].deliveryPoints) {
                        json[contactTypes[ct]][k].deliveryPoint = json[contactTypes[ct]][k].deliveryPoints.join("\n");
                    }
                    if (json[contactTypes[ct]][k].phoneVoices) {
                        json[contactTypes[ct]][k].phoneVoice = json[contactTypes[ct]][k].phoneVoices.join(" | ");
                    }
                    if (json[contactTypes[ct]][k].emails) {
                        json[contactTypes[ct]][k].email = json[contactTypes[ct]][k].emails.join(" | ");
                    }
                }
            }
        }

        // dataLiStatement
        json.dataLiStatement = "";
        json.dataDqLevel = "";
        if (json.dataQualityInfo) {
            if (json.dataQualityInfo[0].dataLiStatement) {
                json.dataLiStatement = json.dataQualityInfo[0].dataLiStatement;
            }
            if (json.dataQualityInfo[0].dataDqLevel) {
                json.dataDqLevel = json.dataQualityInfo[0].dataDqLevel;
            } else {
                if (json.mdHierarchyLevel) {
                    json.dataDqLevel = json.mdHierarchyLevel;
                }
            }
        }

        json.dataReferenceSystems = checkValuesSrv.checkCodes(json.dataReferenceSystems, AppDataSrv.codelists.MD_ReferenceSystemCode, 'code');

        // dataKeywords / dataInspireKeywords
        if (json.dataKeywords) {
            var dataKeywords = [];
            if (!json.dataInspireKeywords) {
                json.dataInspireKeywords = [];
            }
            for (var kw = 0; kw < json.dataKeywords.length; kw++) {
                json.dataKeywords[kw].keyword = json.dataKeywords[kw].keywords.join(', ');
                if (json.dataKeywords[kw].thesaurusName) {
                    if (json.dataKeywords[kw].thesaurusName.toLowerCase().indexOf('inspire') > -1) {
                        json.dataInspireKeywords = json.dataInspireKeywords.concat(json.dataKeywords[kw].keywords);
                    } else {
                        dataKeywords.push(json.dataKeywords[kw]);
                    }
                } else {
                    dataKeywords.push(json.dataKeywords[kw]);
                }
            }
            json.dataKeywords = dataKeywords;
        }
        // dataLegalConstraints
        // dataLegalUseLimitations
        // dataLegalUseConstraints
        // dataLegalAccessConstraints
        // dataLegalAccessInspireConstraints

        // dataLegalOtherConstraints
        // dataLegalConstraints
        if (json.dataLegalConstraints) {
            // json.dataLegalAccessConstraints = json.dataLegalConstraints[0].dataLegalAccessConstraints;
            if (json.dataLegalConstraints[0].dataLegalOtherConstraints) {
                var dataLegalOtherConstraints = [];
                if (!json.dataLegalAccessInspireConstraints) {
                    json.dataLegalAccessInspireConstraints = [];
                }
                for (var lc = 0; lc < json.dataLegalConstraints[0].dataLegalOtherConstraints.length; lc++) {
                    if (json.dataLegalConstraints[0].dataLegalOtherConstraints[lc].toLowerCase()
                        .indexOf('inspire') > -1) {
                        json.dataLegalAccessInspireConstraints.push(json.dataLegalConstraints[0].dataLegalOtherConstraints[lc]);
                    } else {
                        dataLegalOtherConstraints.push(json.dataLegalConstraints[0].dataLegalOtherConstraints[lc]);
                    }
                }
                json.dataLegalOtherConstraints = dataLegalOtherConstraints;
            }
            json.dataLegalAccessConstraints = json.dataLegalConstraints[0].dataLegalAccessConstraints;
            json.dataLegalUseLimitations = json.dataLegalConstraints[0].dataLegalUseLimitations;
            json.dataLegalUseConstraints = json.dataLegalConstraints[0].dataLegalUseConstraints;
        }
        json.dataLegalAccessInspireConstraints = checkValuesSrv.checkCodes(json.dataLegalAccessInspireConstraints, AppDataSrv.codelists.MD_InspireRestrictionCode);

        // dataSecurityConstraints
        if (json.dataSecurityConstraints) {
            // dataSecurityClassification
            json.dataSecurityClassification = json.dataSecurityConstraints[0].dataSecurityClassification;
            // dataSecurityUseLimitations
            json.dataSecurityUseLimitations = json.dataSecurityConstraints[0].dataSecurityUseLimitations;
        }

        // dataRsIdentifiers and dataMdIdentifiers to dataIdentifiers
        if (!json.dataIdentifiers) {
            json.dataIdentifiers = [];
        }
        if (json.dataRsIdentifiers) {
            for (var rsId = 0; rsId < json.dataRsIdentifiers.length; rsId++) {
                if (json.dataRsIdentifiers[rsId].code && json.dataRsIdentifiers[rsId].code !== '') {
                    var dataRsIdentifier = {
                        code: json.dataRsIdentifiers[rsId].code,
                        codeSpace: json.dataRsIdentifiers[rsId].codeSpace
                    };
                    json.dataIdentifiers.push(dataRsIdentifier);
                }
            }
        }
        if (json.dataMdIdentifiers) {
            for (var mdId = 0; mdId < json.dataMdIdentifiers.length; mdId++) {
                if (json.dataMdIdentifiers[mdId] && json.dataMdIdentifiers[mdId] !== '') {
                    var dataMdIdentifier = {
                        code: json.dataMdIdentifiers[mdId],
                    };
                    json.dataIdentifiers.push(dataMdIdentifier);
                }
            }
        }

        // dataLinkages
        if (json.dataLinkages) {
            for (var lk = 0; lk < json.dataLinkages.length; lk++) {
                if (!json.dataLinkages[lk].description) {
                    if (json.dataLinkages[lk].name) {
                        json.dataLinkages[lk].description = json.dataLinkages[lk].name;
                    } else if (json.dataLinkages[lk].url) {
                        json.dataLinkages[lk].description = json.dataLinkages[lk].url;
                    }
                }
                if (!json.dataLinkages[lk].name) {
                    if (json.dataLinkages[lk].url) {
                        json.dataLinkages[lk].name = json.dataLinkages[lk].url;
                    } else if (json.dataLinkages[lk].description) {
                        json.dataLinkages[lk].name = json.dataLinkages[lk].description;
                    }
                }
            }
        }

        // Convert Inspire keywords to code value (english) => utiliser la langue de la fiche pour décoder la valeur... ou le français par défaut
        json.dataInspireKeywords = checkValuesSrv.translateValues(json.dataInspireKeywords, AppDataSrv.codelists.MD_InspireTopicCategoryCode);
        AppDataSrv.metadata = json;
        console.log(json);
        return json;
    }
}
