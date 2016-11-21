/**
 * empty_json main object
 * lends mdjs
 * @type {Object}
 */
mdjs.empty_json = {};

/**
 * Empty contact object
 * lends mdjs.empty_json
 * @type {Array}
 */
mdjs.empty_json.contact = {
    "individualName": "",
    "positionName": "",
    "organisationName": "",
    "deliveryPoints": "",
    "postalCode": "",
    "city": "",
    "phoneVoices": "",
    "emails": "",
    "role": "",
    "logoDescription": "",
    "logoUrl": ""
};

/**
 * Empty date object
 * lends mdjs.empty_json
 * @type {Array}
 */
mdjs.empty_json.date = {
    "dateType": "",
    "date": ""
};

/**
 * Empty resource identifier object
 * @type {Array}
 */
mdjs.empty_json.identifier = {
    "code": "",
    "codeSpace": ""
};

/**
 * Empty geographic extent object
 * @type {Array}
 */
mdjs.empty_json.geographicextent = {
    "dataExtentName": "",
    "dataGeographicExtentWestBound": "",
    "dataGeographicExtentEastBound": "",
    "dataGeographicExtentSouthBound": "",
    "dataGeographicExtentNorthBound": ""
};

/**
 * Empty browse graphic object
 * @type {Array}
 */
mdjs.empty_json.browsegraphic = {
    "fileName": "",
    "fileDescription": "",
    "fileType": ""
};

/**
 * Empty temporal extent object
 * @type {Array}
 */
mdjs.empty_json.temporalextent = {
    "dataTemporalExtentBegin": "",
    "dataTemporalExtentEnd": "",
    "dataExtentName": ""
};

/**
 * Empty keyword object
 * @type {Array}
 */
mdjs.empty_json.keyword = {
    "keywords": '',
    "keywordType": "",
    "thesaurusName": "",
    "thesaurusDates": [{
        "dateType": "",
        "date": ""
    }]
};

/**
 * Empty inspire keyword object
 * @type {Array}
 */
mdjs.empty_json.inspirekeywords = {
    "keywords": [],
    "keywordType": "theme",
    "thesaurusName": "GEMET - INSPIRE themes, version 1.0",
    "thesaurusDates": [{
        "type": "publication",
        "date": "2008-06-01"
    }]
};

/**
 * Empty reference system object
 * @type {Array}
 */
mdjs.empty_json.referencesystem = {
    "code": "",
    "codeSpace": ""
};

/**
 * Empty data format object
 * @type {Array}
 */
mdjs.empty_json.distributionformat = {
    "formatName": "",
    "formatVersion": "",
    "formatSpecification": ""
};

/**
 * Empty linkage object
 * @type {Array}
 */
mdjs.empty_json.linkage = {
    "name": "",
    "description": "",
    "url": "",
    "protocol": ""
};

/**
 * Empty data quality conformity object
 * @type {Array}
 */
mdjs.empty_json.dq_conformity = {
    "specification": "",
    "explaination": "",
    "pass": "",
    "dates": [{
        "type": "",
        "date": ""
    }]
};

/**
 * Empty metdata object
 * @type {Array}
 */
mdjs.empty_json.metadata = {
    "mdFileIdentifier": "",
    "mdLanguage": "",
    "mdCharacterSet": "",
    "mdHierarchyLevel": "",
    "mdContacts": [],
    "mdDateStamp": "",
    "mdStandardName": "",
    "mdStandardVersion": "",
    "dataTitle": "",
    "dataDates": [],
    "dataDateCreation": "",
    "dataDatePublication": "",
    "dataDateRevision": "",
    "dataIdentifiers": [],
    "dataAbstract": "",
    "dataBrowseGraphics": [],
    "dataMaintenanceFrequency": "",
    "dataTemporalExtents": [],
    "dataLanguages": [],
    "dataTopicCategories": [""],
    "dataKeywords": [],
    "dataInspireKeywords": [""],
    "dataKeywordsList": "",
    "dataPointOfContacts": [],
    "dataGeographicExtents": [],
    "dataReferenceSystems": [],
    "dataPresentationForm": "",
    "dataSpatialRepresentationType": "",
    "dataScaleDenominator": "",
    "dataScaleDistance": "",
    "dataDqLevel": "",
    "dataLiStatement": "",
    "dataCharacterSet": "",
    "dataDistributionFormats": [],
    "dataUseLimitations": [],
    "dataLegalUseLimitations": [""],
    "dataLegalUseConstraints": [""],
    "dataLegalAccessConstraints": [""],
    "dataLegalAccessInspireConstraints": [""],
    "dataLegalAccessotherConstraints": [""],
    "dataSecurityClassification": "",
    "dataSecurityUseLimitations": [""],
    "dataLinkages": [],
    "dataDqInspireConformities": [],
    "dataDqConformities": []
};
