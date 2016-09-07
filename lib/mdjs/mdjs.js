var mdjs = {};

(function(mdjs, undefined) {
    "use strict";

    /**
     * List of default name space
     * @type {Object}
     */
    mdjs.xmlns = {
        "xmlns": "http://www.w3.org/2000/xmlns/",
        "xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:gco": "http://www.isotc211.org/2005/gco",
        "xmlns:gts": "http://www.isotc211.org/2005/gts",
        "xmlns:xs": "http://www.w3.org/2001/XMLSchema",
        // "xmlns:gml": "http://www.opengis.net/gml",
        "xmlns:gml": "http://www.opengis.net/gml/3.2",
        "xmlns:gsr": "http://www.isotc211.org/2005/gsr",
        "xmlns:gmx": "http://www.isotc211.org/2005/gmx",
        "xmlns:gss": "http://www.isotc211.org/2005/gss",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:gmd": "http://www.isotc211.org/2005/gmd",
        "xmlns:srv": "http://www.isotc211.org/2005/srv",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:xi": "http://www.w3.org/2001/XInclude",
        "xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd",

    };

    /**
     * Default XML root element
     * @type {String}
     */
    mdjs.root = "gmd:MD_Metadata";

    // /**
    //  *
    //  * @type {Object}
    //  */
    // mdjs.json = {};



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
        "email": "",
        "role": "",
        "logo_text": "",
        "logo_url": ""
    };

    /**
     * Empty date object
     * lends mdjs.empty_json
     * @type {Array}
     */
    mdjs.empty_json.date = {
        "type": "",
        "date": ""
    };

    /**
     * Empty resource identifier object
     * @type {Array}
     */
    mdjs.empty_json.identifier = {
        "code": "",
        "codespace": ""
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
        "keyword": "",
        "type": "",
        "thesaurus_name": "",
        "thesaurus_dates": [{
            "type": "",
            "date": ""
        }]
    };

    /**
     * Empty inspire keyword object
     * @type {Array}
     */
    mdjs.empty_json.inspirekeyword = {
        "keyword": "",
        "type": "",
        "thesaurus_name": "GEMET - INSPIRE themes, version 1.0",
        "thesaurus_dates": [{
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
        "mdFileidentifier": "",
        "mdLanguage": "",
        "md_characterset": "",
        "md_hierarchylevel": "",
        "mdContacts": [],
        "md_datestamp": "",
        "md_standardname": "",
        "md_standardversion": "",
        "data_title": "",
        "data_dates": [],
        "data_datecreation": "",
        "data_datepublication": "",
        "data_daterevision": "",
        "data_identifiers": [],
        "data_abstract": "",
        "dataBrowseGraphics": [],
        "data_maintenancefrequencycode": "",
        "data_temporalextents": [],
        "data_languages": [],
        "data_topiccategories": [],
        "data_keywords": [],
        "data_inspirekeywords": [],
        "data_keywords_list": "",
        "data_pointofcontacts": [],
        "data_geographicextents": [],
        "data_referencesystems": [],
        "data_presentationform": "",
        "data_spatialrepresentationtype": "",
        "data_scaledenominator": "",
        "data_scaledistance": "",
        "data_dq_level": "",
        "data_li_statement": "",
        "data_characterset": "",
        "data_distributionformats": [],
        "data_uselimitations": [],
        "data_legal_uselimitations": [],
        "data_legal_useconstraints": [],
        "data_legal_accessconstraints": [],
        "data_legal_accessinspireconstraints": [],
        "data_legal_accessotherconstraints": [],
        "data_security_classification": "",
        "data_security_uselimitations": [],
        "data_linkages": [],
        "data_dq_inspireconformities": [],
        "data_dq_conformities": []
    };




    /**
     * Model of metadata file.
     * It's used to generate JSON and XML Metadata object.
     * Each sub object his named "node" in this definition. Order of nodes is important to generate XML Metadata object.
     * Node properties are:
     * 	- @property {String}   xpath       - Path to value(s) in XML Metadata file
     *  - @property {String}   multi    - Element is simple or multiple. Use to store value(s) in JSON Metadata object: true = string (without child) or object (with children) and false = array
     *  - @property {Object}   children    - List of children of this node to get sub value(s) from XML Metadata file and generate JSON Metdata object
     *  - @property {Object}   attributes  - List of attributes added to XML node during XML Metdata file generation from JSON Metadata object
     *  - @property {Boolean}  skip        - If true, skip this node when generating XML Metdata file from JSON Metdata object
     *  - @property {String}   profile     - Name of profile for this field ('inspire', 'cigal' or 'iso') - Not directly used
     * @type {Object}
     */
    mdjs.model_xml = {};

    mdjs.model_xml.onlineResource = {
        url: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_OnlineResource/gmd:linkage/gmd:URL/text()'
        },
        protocol: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_OnlineResource/gmd:protocol/gco:CharacterString/text()'
        },
        name: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_OnlineResource/gmd:name/gco:CharacterString/text()'
        },
        description: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_OnlineResource/gmd:description/gco:CharacterString/text()'
        },
        'function': {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode/@codeListValue',
            attributes: {
                codeList: 'http://librairies.ign.fr/geoportail/resources/CodeLists.xml#CI_OnLineFunctionCode'
            }
        }
    };

    mdjs.model_xml.contact = {
        // Contact
        individualName: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:individualName/gco:CharacterString/text()'
        },
        organisationName: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:organisationName/gco:CharacterString/text()'
        },
        positionName: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:positionName/gco:CharacterString/text()'
        },
        // phone: {
        //     profile: 'iso', multi: false,
        //     xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice/gco:CharacterString/text()',
        // },
        phoneVoices: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:voice',
            children: {
                phoneVoice: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()'
                }
            }
        },
        phoneFacsimiles: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:phone/gmd:CI_Telephone/gmd:facsimile',
            children: {
                phoneFacsimile: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()'
                }
            }
        },
        // deliveryPoint: {
        //     profile: 'iso', multi: false,
        //     xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint/gco:CharacterString/text()',
        // },
        deliveryPoints: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:deliveryPoint',
            children: {
                deliveryPoint: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()'
                }
            }
        },
        city: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:city/gco:CharacterString/text()'
        },
        postalCode: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:postalCode/gco:CharacterString/text()'
        },
        country: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:country/gco:CharacterString/text()'
        },
        // email: {
        //     profile: 'iso', multi: false,
        //     xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress/gco:CharacterString/text()',
        //
        // },
        emails: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress',
            children: {
                email: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()',
                }
            }
        },
        linkages: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:onlineResource',
            children: mdjs.model_xml.onlineResource
        },
        logoUrl: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:contactInstructions/gmx:FileName/@src',
            skip: true
        },
        logoDescription: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:contactInstructions/gmx:FileName/text()',
            attributes: {
                src: 'node=logoUrl',
            }
        },
        role: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode/@codeListValue',
            attributes: {
                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_RoleCode'
            }
        },
    };

    mdjs.model_xml.date = {
        date: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_Date/gmd:date/gco:Date/text()'
        },
        dateTime: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_Date/gmd:date/gco:DateTime/text()'
        },
        dateType: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:CI_Date/gmd:dateType/gmd:CI_DateTypeCode/@codeListValue',
            attributes: {
                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#CI_DateTypeCode'
            }
        }
    };

    mdjs.model_xml.browseGraphic = {
        fileName: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_BrowseGraphic/gmd:fileName/gco:CharacterString/text()'
        },
        fileDescription: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_BrowseGraphic/gmd:fileDescription/gco:CharacterString/text()'
        },
        fileType: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_BrowseGraphic/gmd:fileType/gco:CharacterString/text()'
        }
    };

    mdjs.model_xml.keyword = {
        // keyword: {
        //     profile: 'iso', multi: false,
        //     xpath: 'gmd:MD_Keywords/gmd:keyword/gco:CharacterString/text()',
        // },
        keywords: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:MD_Keywords/gmd:keyword',
            children: {
                keyword: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()'
                }
            }
        },
        keywordType: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_Keywords/gmd:type/gmd:MD_KeywordTypeCode/@codeListValue',
            attributes: {
                codeList: 'http://www.isotc211.org/2005/resources/codeList.xml#MD_KeywordTypeCode'
            }
        },
        thesaurusName: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:title/gco:CharacterString/text()'
        },
        thesaurusDates: {
            profile: 'iso',
            multi: true,
            xpath: 'gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:date',
            children: mdjs.model_xml.date
        }
    };

    mdjs.model_xml.languageCode = {
        languageCode: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:LanguageCode/@codeListValue',
            attributes: {
                codeList: 'http://www.loc.gov/standards/iso639-2/'
            }
        }
    };

    mdjs.model_xml.topicCategory = {
        topicCategory: {
            profile: 'iso',
            multi: false,
            xpath: 'gmd:MD_TopicCategoryCode/text()'
        }
    };

    mdjs.model_xml.main = {
        mdFileIdentifier: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:fileIdentifier/gco:CharacterString/text()'
        },
        mdLanguage: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:language/gmd:LanguageCode/@codeListValue',
            attributes: {
                codeList: 'http://www.loc.gov/standards/iso639-2/'
            }
        },
        mdCharacterSet: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:characterSet/gmd:MD_CharacterSetCode/@codeListValue',
            attributes: {
                codeList: 'http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode'
            }
        },
        mdHierarchyLevel: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue',
            attributes: {
                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode'
            }
        },
        mdHierarchyLevelName: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:hierarchyLevelName/gco:CharacterString/text()'
        },
        mdContacts: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:contact',
            children: mdjs.model_xml.contact
        },
        mdDateStamp: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:dateStamp',
            children: {
                date: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:Date/text()'
                },
                dateTime: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:DateTime/text()'
                }
            }
        },
        mdStandardName: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString/text()'
        },
        mdStandardVersion: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString/text()'
        },
        dataReferenceSystems: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:referenceSystemInfo',
            children: {
                code: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gco:CharacterString/text()'
                },
                codeAnchorLink: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor/@xlink:href',
                    skip: true
                },
                codeAnchor: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code/gmx:Anchor/text()',
                    attributes: {
                        'xlink:href': 'node=codeAnchorLink'
                    }
                },
                codeSpace: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString/text()'
                }
            }
        },
        // Data Information
        dataTitle: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/text()',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/text()'
        },
        dataAlternateTitle: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:alternateTitle/gco:CharacterString/text()',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:alternateTitle/gco:CharacterString/text()'
        },
        // Dates
        dataDates: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:date',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:date',
            children: mdjs.model_xml.date
        },
        dataEdition: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:edition/gco:CharacterString/text()',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:citation/gmd:CI_Citation/gmd:edition/gco:CharacterString/text()'
        },
        dataEditionDates: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:editionDate/gco:Date/text()'
        },
        // Presentation form
        // TODO: vérifier position
        dataPresentationForm: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:presentationForm/gmd:CI_PresentationFormCode/@codeListValue',
            attributes: {
                codeList: ''
            }
        },
        // Identifiers
        // GRK - change dataIdentifiers par dataRSIdentifiers
        dataRsIdentifiers: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier',
            children: {
                code: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:RS_Identifier/gmd:code/gco:CharacterString/text()'
                },
                codeSpace: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:RS_Identifier/gmd:codeSpace/gco:CharacterString/text()'
                }
            }
        },
        // GRK - Add dataMdIdentifiers
        dataMdIdentifiers: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier',
            children: {
                code: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Identifier/gmd:code/gco:CharacterString/text()'
                }
            }
        },
        // series
        dataSeries: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:series',
            children: {
                name: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:CI_Series/gmd:name/gco:CharacterString/text()'
                },
                issueIdentification: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:CI_Series/gmd:issueIdentification/gco:CharacterString/text()'
                },
                page: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:CI_Series/gmd:page/gco:CharacterString/text()'
                },
            }
        },
        dataAbstract: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract/gco:CharacterString/text()',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:abstract/gco:CharacterString/text()'
        },
        // purpose
        dataPurpose: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:purpose/gco:CharacterString/text()',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:purpose/gco:CharacterString/text()'
        },
        // status
        dataStatus: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:status',
            children: {
                progressCode: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_ProgressCode/@codeListValue',
                    attributes: {
                        codeList: 'http://librairies.ign.fr/geoportail/resources/CodeLists.xml#MD_ProgressCode'
                    }
                }
            }
        },
        // Contacts: tableau d'objets
        dataPointOfContacts: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:pointOfContact',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:pointOfContact/gmd:CI_ResponsibleParty',
            children: mdjs.model_xml.contact
        },
        dataMaintenanceFrequency: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceAndUpdateFrequency/gmd:MD_MaintenanceFrequencyCode/@codeListValue',
            attributes: {
                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode'
            }
        },
        dataMaintenanceNotes: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceMaintenance/gmd:MD_MaintenanceInformation/gmd:maintenanceNote',
            children: {
                maintenanceNote: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gco:CharacterString/text()'
                }
            }
        },
        // Browsegraphic
        dataBrowseGraphics: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:graphicOverview',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:graphicOverview',
            children: mdjs.model_xml.browseGraphic
        },
        // Keywords
        dataKeywords: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:descriptiveKeywords',
            children: mdjs.model_xml.keyword
        },
        // Specific Usage
        dataUsages: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceSpecificUsage',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceSpecificUsage',
            children: {
                specificUsage: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Usage/gmd:specificUsage/gco:CharacterString/text()'
                },
                dateTime: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Usage/gmd:usageDateTime/gco:DateTime/text()'
                },
                userDeterminedLimitations: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Usage/gmd:userDeterminedLimitations/gco:CharacterString/text()'
                },
                userContactInfo: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_Usage/gmd:userContactInfo',
                    children: mdjs.model_xml.contact
                },
                // TODO: A compléter
            }
        },
        // Limits and constraints
        // dataConstraints: {
        dataUseLimitations: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints',
            children: {
                dataUseLimitation: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Constraints/gmd:useLimitation/gco:CharacterString/text()'
                }
            }
        },
        // Legal Constraints
        dataLegalConstraints: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints',
            children: {
                dataLegalUseLimitations: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_LegalConstraints/gmd:useLimitation',
                    children: {
                        legalUseLimitation: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gco:CharacterString/text()'
                        },
                    }
                },
                dataLegalAccessConstraints: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_LegalConstraints/gmd:accessConstraints',
                    children: {
                        legalAccessConstraints: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_RestrictionCode/@codeListValue',
                            attributes: {
                                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode'
                            }
                        }
                    }
                },
                dataLegalUseConstraints: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_LegalConstraints/gmd:useConstraints',
                    children: {
                        legalUseConstraints: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_RestrictionCode/@codeListValue',
                            attributes: {
                                codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_RestrictionCode'
                            }
                        }
                    }
                },
                dataLegalOtherConstraints: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_LegalConstraints/gmd:otherConstraints',
                    children: {
                        legalOtherConstraint: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gco:CharacterString/text()'
                        }
                    }
                }
            }
        },
        dataSecurityConstraints: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/gmd:resourceConstraints',
            children: {
                dataSecurityUseLimitations: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_SecurityConstraints/gmd:useLimitation',
                    children: {
                        securityUseLimitation: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gco:CharacterString/text()'
                        }
                    }
                },
                dataSecurityClassification: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode/@codeListValue',
                    attributes: {
                        codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ClassificationCode'
                    }
                }
            }
        },
        // Spatial Representation Type (vector/raster)
        dataSpatialRepresentationType: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialRepresentationType/gmd:MD_SpatialRepresentationTypeCode/@codeListValue',
            attributes: {
                codeList: 'http://www.isotc211.org/2005/resources/codeList.xml#MD_SpatialRepresentationTypeCode'
            }
        },
        // Scale
        // Scale denominator
        // DONE: change path
        dataScaleDenominator: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer/text()'
        },
        // Scale distance
        dataScaleDistance: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution/gmd:distance/gco:Distance/text()',
            attributes: {
                uom: 'http://standards.iso.org/ittf/PublicityAvailableStandards/ISO_19139_Schemas/resources.uom/ML_gmxUom.xml#m'
            }
        },
        // Languages
        dataLanguages: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:language',
            children: mdjs.model_xml.languageCode
        },
        // Data Character Set
        dataCharacterSet: {
            profile: 'iso',
            multi: false,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet/gmd:MD_CharacterSetCode/@codeListValue',
            attributes: {
                codeList: 'http://www.isotc211.org/2005/resources/codeList.xml#MD_CharacterSetCode'
            }
        },
        // Topic Categories
        dataTopicCategories: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:topicCategory',
            children: mdjs.model_xml.topicCategory
        },
        // Service Type
        srvType: {
            profile: 'iso',
            multi: false,
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:serviceType/gco:LocalName/text()',
        },
        srvAccessProperties: {
            profile: 'iso',
            multi: false,
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:accessProperties',
            children: {
                fees: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_StandardOrderProcess/gmd:fees/gco:CharacterString/text()',
                },
                plannedAvailableDateTime: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_StandardOrderProcess/gmd:plannedAvailableDateTime/gco:DateTime/text()',
                },
                orderingInstructions: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_StandardOrderProcess/gmd:orderingInstructions/gco:CharacterString/text()',
                },
                turnarournd: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_StandardOrderProcess/gmd:turnarournd/gco:CharacterString/text()',
                }
            }
        },
        // Extents
        dataExtents: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent',
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent',
            children: {
                dataExtentName: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:description/gco:CharacterString/text()',
                },
                // GeographicExtents,
                dataGeographicExtentWestBound: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:westBoundLongitude/gco:Decimal/text()',
                },
                dataGeographicExtentEastBound: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:eastBoundLongitude/gco:Decimal/text()',
                },
                dataGeographicExtentSouthBound: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:southBoundLatitude/gco:Decimal/text()',
                },
                dataGeographicExtentNorthBound: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox/gmd:northBoundLatitude/gco:Decimal/text()',
                },
                // GeographicExtents by identifier - Not implemented
                // TemporalExtents
                dataTemporalExtentBegin: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:beginPosition/text()',
                },
                dataTemporalExtentEnd: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:EX_Extent/gmd:temporalElement/gmd:EX_TemporalExtent/gmd:extent/gml:TimePeriod/gml:endPosition/text()',
                },
                // VerticalExtents
                dataVerticalExtent_Max: {
                    profile: 'iso',
                    multi: false,
                    xpath: '',
                },
                dataVerticalExtent_Unit: {
                    profile: 'iso',
                    multi: false,
                    xpath: '',
                },
                dataVerticalExtent_Ref: {
                    profile: 'iso',
                    multi: false,
                    xpath: '',
                },
            }
        },
        // TODO: <srv:coupledResource/>
        // srvCoupledResource: {
        //     profile: 'iso', multi: true,
        //     xpath_srv: '',
        //     children: {}
        // },
        // <srv:couplingType>
        srvCouplingType: {
            profile: 'iso',
            multi: false,
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:couplingType/srv:SV_CouplingType/@codeListValue',
            attributes: {
                codeList: 'http://www.isotc211.org/2005/iso19119/resources/Codelist/gmxCodelists.xml#SV_CouplingType'
            }
        },
        // <srv:containsOperations>
        srvContainsOperations: {
            profile: 'iso',
            multi: true,
            xpath_srv: '/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:containsOperations',
            children: {
                operationName: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'srv:SV_OperationMetadata/srv:operationName/gco:CharacterString/text()'
                },
                dcp: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'srv:SV_OperationMetadata/srv:DCP/srv:DCPList/@codeListValue',
                    attributes: {
                        codeList: 'http://www.isotc211.org/2005/iso19119/resources/Codelist/gmxCodelists.xml#DCPList'
                    }
                },
                connectPoint: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'srv:SV_OperationMetadata/srv:connectPoint',
                    children: mdjs.model_xml.onlineResource
                },
            }
        },
        // DistributionFormats
        dataDistributionFormats: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributionFormat',
            children: {
                formatName: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Format/gmd:name/gco:CharacterString/text()',
                },
                formatVersion: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Format/gmd:version/gco:CharacterString/text()',
                },
                formatSpecification: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Format/gmd:specification/gco:CharacterString/text()',
                },
                formatDistributor: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_Format/gmd:formatDistributor/gmd:MD_Distributor/gmd:distributorContact',
                    children: mdjs.model_xml.contact
                }
            }
        },
        // Distributors
        dataDistributors: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:distributor',
            children: {
                distributorContact: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_Distributor/gmd:distributorContact',
                    children: mdjs.model_xml.contact
                },
                // distributionOrderProcess: {
                //     profile: 'iso', multi: true,
                //     xpath: 'gmd:MD_Format/gmd:version/gco:CharacterString/text()',
                // },
                distributionOrderProcess: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_Distributor/gmd:distributionOrderProcess',
                    children: {
                        fees: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_StandardOrderProcess/gmd:fees/gco:CharacterString/text()',
                        },
                        plannedAvailableDateTime: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_StandardOrderProcess/gmd:plannedAvailableDateTime/gco:DateTime/text()',
                        },
                        orderingInstructions: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_StandardOrderProcess/gmd:orderingInstructions/gco:CharacterString/text()',
                        },
                        turnarournd: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gmd:MD_StandardOrderProcess/gmd:turnarournd/gco:CharacterString/text()',
                        }
                    }
                }
            }
        },
        // TransferOptions
        // dataTransferOptions: {
        //     profile: 'iso',
        //     multi: true,
        //     xpath: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions',
        //     children: {
        //         unitsOfDistribution: {
        //             profile: 'iso',
        //             multi: false,
        //             xpath: 'gmd:MD_DigitalTransferOptions/gmd:unitsOfDistribution/gco:CharacterString/text()',
        //         },
        //         linkages: {
        //             profile: 'iso',
        //             multi: true,
        //             xpath: 'gmd:MD_DigitalTransferOptions/gmd:onLine',
        //             children: mdjs.model_xml.onlineResource
        //         }
        //     }
        // },
        // Linkages
        dataLinkages: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:distributionInfo/gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine',
            children: mdjs.model_xml.onlineResource
        },
        // Data Quality
        // Data Quality level
        dataQualityInfo: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:dataQualityInfo',
            children: {
                dataDqLevel: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue',
                    attributes: {
                        codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ScopeCode'
                    }
                },
                // Data Lineage
                dataLiStatement: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement/gco:CharacterString/text()',
                },
                // Data Process Steps
                //'Data_LI_ProcessStep': {
                //     profile: 'iso', multi: false,
                //     xpath: '',
                // },
                // Data Source
                //'Data_LI_Source': {
                // profile: 'iso', multi: false,
                //     xpath: '',
                // },
            }
        },
        // Data Conformities
        dataDqConformities: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:report',
            children: {
                dataDqConformityTest: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:specification/gmd:CI_Citation/gmd:title/gco:CharacterString/text()',
                },
                dataDqConformityDates: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:specification/gmd:CI_Citation/gmd:date',
                    children: mdjs.model_xml.date
                },
                dataDqConformityResult: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:explanation/gco:CharacterString/text()',
                },
                dataDqConformityPass: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:DQ_DomainConsistency/gmd:result/gmd:DQ_ConformanceResult/gmd:pass/gco:Boolean',
                },
            }
        },
        mdSecurityConstraints: {
            profile: 'iso',
            multi: true,
            xpath: '/gmd:MD_Metadata/gmd:metadataConstraints',
            children: {
                securityUseLimitations: {
                    profile: 'iso',
                    multi: true,
                    xpath: 'gmd:MD_SecurityConstraints/gmd:useLimitation',
                    children: {
                        securityUseLimitation: {
                            profile: 'iso',
                            multi: false,
                            xpath: 'gco:CharacterString/text()',
                        },
                    }
                },
                securityClassification: {
                    profile: 'iso',
                    multi: false,
                    xpath: 'gmd:MD_SecurityConstraints/gmd:classification/gmd:MD_ClassificationCode/@codeListValue',
                    attributes: {
                        codeList: 'http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/Codelist/ML_gmxCodelists.xml#MD_ClassificationCode'
                    }
                }
            }
        },
    };


////////////////////////////////////////////////////////////////////////
// Classe xmlDoc
////////////////////////////////////////////////////////////////////////


    /**
     * @class mdjs.XmlDoc
     * @param  {XML document} xmlDoc        - XML document to initialize XmlDoc object
     * @param  {XML element} rootElement    - Root element to initialize XmlDoc object
     * @param  {Array} xmlns                - List of name space of XML document
     * @return {Object}                     - XmlDoc object
     * @property {XML document} doc         - XML document to initialize XmlDoc object
     * @property {XML element} root         - Root element to initialize XmlDoc object
     * @property {Array} xmlns              - List of name space of XML document
     */
    mdjs.XmlDoc = function(xmlDoc, rootElement, xmlns) {
        if (xmlDoc) {
            this.doc = xmlDoc;
            this.root = this.doc.documentElement;
            this.xmlns = this.getXmlns();
        } else {
            // Define params
            rootElement = rootElement || mdjs.root;
            this.xmlns = xmlns || mdjs.xmlns;
            // Create XML document
            this.doc = document.implementation.createDocument('', '', null);
            // Create root node
            this.root = this.doc.createElementNS(xmlns['xmlns:gmd'], rootElement);
            this.doc.appendChild(this.root);
            // Add default namespace - simple xmlns attribute
            // this.root.setAttribute('xmlns', this.xmlns.gmd);
            this.root.setAttribute('xmlns', this.xmlns['xmlns:gmd']);
            // Add other namespace - attribute in xmlns namespace
            for (var ns in this.xmlns) {
                var ns_parts = ns.split(':');
                if (ns_parts.length > 1) {
                    this.root.setAttributeNS(this.xmlns[ns_parts[0]], ns, this.xmlns[ns]);
                }
            }
        }
        return this;
    };

    /**
     * Get the list of name space of XML document
     * @return {Array}  - list of name space of XML document
     */
    mdjs.XmlDoc.prototype.getXmlns = function() {
        var xmlns = mdjs.xmlns;
        if (this.root) {
            var attrs = this.root.attributes;
            for (var i = 0; i < attrs.length; ++i) {
                if (attrs[i].name.indexOf("xmlns:") === 0) {
                    xmlns[attrs[i].name] = attrs[i].value;
                }
            }
        }
        return xmlns;
    };

    /**
     * [function description]
     * @param  {[type]} parentNode     [description]
     * @param  {[type]} nodeName       [description]
     * @param  {[type]} nodeText       [description]
     * @param  {[type]} nodeAttributes [description]
     * @return {[type]}                [description]
     */
    mdjs.XmlDoc.prototype.addNode = function(parentNode, nodeName, nodeText, nodeAttributes) {
        // Define params
        nodeText = nodeText || undefined;
        nodeAttributes = nodeAttributes || {};
        var childNode;
        // Create childNode element with name space if necessary
        var nodeNameParts = nodeName.split(':');
        if (nodeNameParts.length === 1) {
            childNode = this.doc.createElement(nodeName);
        } else {
            var nameSpace = nodeNameParts[0];
            childNode = this.doc.createElementNS(this.xmlns['xmlns:'+nameSpace], nodeName);
        }
        // Add text to childNode if necessary
        if (nodeText) {
            var text = this.doc.createTextNode(nodeText);
            childNode.appendChild(text);
        }
        // Add nodeAttributes to childNode if necessary
        for (var attribute in nodeAttributes) {
            childNode.setAttribute(attribute, nodeAttributes[attribute]);
        }
        // Add childNode to parentNode
        parentNode.appendChild(childNode);
        return childNode;
    };

    /**
     * [function description]
     * @param  {[type]} path       [description]
     * @param  {[type]} doc        [description]
     * @param  {[type]} resultType [description]
     * @return {[type]}            [description]
     */
    mdjs.XmlDoc.prototype.getNodeFromPath = function(path, doc, resultType) {
        var types = {
            snapshot: 'ORDERED_NODE_SNAPSHOT_TYPE',
            any: 'ANY_TYPE',
            iterator: 'UNORDERED_NODE_ITERATOR_TYPE'
        };
        doc = doc || this.doc;
        resultType = resultType || 'snapshot';
        var xmlns = this.xmlns;
        function nsResolver(prefix) {
            prefix = prefix || 'xmlns';
            return xmlns['xmlns:'+prefix] || null;
        }
        var evaluator = new XPathEvaluator();
        return evaluator.evaluate(path, doc, nsResolver, XPathResult[types[resultType]], null);
    };

    /**
     * [function description]
     * @param  {[type]} path [description]
     * @param  {[type]} doc  [description]
     * @return {[type]}      [description]
     */
    mdjs.XmlDoc.prototype.getNodeValues = function(path, doc) {
        var nodes = this.getNodeFromPath(path, doc);
        var result = [];
        for (var i = 0; i < nodes.snapshotLength; i++) {
            result.push(nodes.snapshotItem(i).textContent.trim());
        }
        return result;
    };

    // If append = true => always add new node, else use existing node (if exists)
    /**
     * [function description]
     * @param  {[type]} doc    [description]
     * @param  {[type]} path   [description]
     * @param  {[type]} parent [description]
     * @param  {[type]} append [description]
     * @return {[type]}        [description]
     */
    mdjs.XmlDoc.prototype.addTreeFromPath = function(doc, path, parent, append) {
        append = append || false;
        parent = parent || doc.root;
        var items = path.split('/');
        for (var i = 0; i < items.length; i++) {
            if (items[i] && items[i] != "text()" && items[i] != "@codeListValue") {
                if (append || doc.getNodeFromPath(items[i], parent).snapshotLength === 0) {
                    parent = doc.addNode(parent, items[i]);
                } else {
                    parent = doc.getNodeFromPath(items[i], parent).snapshotItem(0);
                }
            }
        }
        return doc;
    };

    // If append = true => always add new node, else use existing node (if exists)
    /**
     * [function description]
     * @param  {[type]} doc    [description]
     * @param  {[type]} path   [description]
     * @param  {[type]} parent [description]
     * @param  {[type]} append [description]
     * @return {[type]}        [description]
     */
    mdjs.XmlDoc.prototype.addTreeFromObj = function(doc, path, parent, append) {
        parent = parent || doc.root;
        append = append || false;
        var node;
        for (var p in path) {
            if (append || doc.getNodeFromPath(path[p].name, parent).snapshotLength === 0) {
                node = doc.addNode(parent, path[p].name, path[p].text, path[p].attributes);
            } else {
                node = doc.getNodeFromPath(path[p].name, parent).snapshotItem(0);
            }
            if (path[p].hasOwnProperty('children')) {
                this.addTreeFromObj(doc, path[p].children, node);
            }
        }
        return doc;
    };

    /**
     * [function description]
     * @param  {[type]} config [description]
     * @return {[type]}        [description]
     */
    mdjs.XmlDoc.prototype.getXmlString = function(config) {
        //  Define params
        var beautifier = config.beautifier || false;
        var minify = config.minify || false;
        var version = config.version || '1.0';
        var characterSet = config.characterSet || 'UTF-8';
        var header = header || '<?xml version="' + version + '" encoding="' + characterSet + '"?>\n';
        // Serialize XML document
        var data = new XMLSerializer().serializeToString(this.doc);
        // Return standard or beatify XML string
        if (beautifier) {
            return vkbeautify.xml(header + data);
        } else if (minify) {
            return vkbeautify.xmlmin(header + data);
        }
        return header + data;
    };

////////////////////////////////////////////////////////////////////////
// Classe Metadata
////////////////////////////////////////////////////////////////////////

    /**
     * Metadata object class
     * @return {Object} - Metadata object
     */
    mdjs.Metadata = function() {
        this.xml = new mdjs.XmlDoc(false, mdjs.root, mdjs.xmlns);
        this.json = mdjs.json;
        return this;
    };

    /**
     * Set XML property
     * @param  {XML document} xmlDoc        - XML document to initialize Metadata object
     * @param  {XML element} rootElement    - Root element to initialize Metadata object
     * @param  {Array} xmlns                - List of name space of XML document
     * @return {Object}                     - Metadata object
     */
    mdjs.Metadata.prototype.setXml = function(xmlDoc, rootElement, xmlns) {
        if (xmlDoc) {
            this.xml = new mdjs.XmlDoc(xmlDoc);
        } else {
            this.xml = new mdjs.XmlDoc(false, mdjs.root, mdjs.xmlns);
        }
        return this;
    };

    /**
     * Set JSON property
     * @param  {Object} json - Objet to initialize json property
     * @return {Object}      - Metadata object
     */
    mdjs.Metadata.prototype.setJson = function(json) {
        this.json = json || mdjs.json;
        return this;
    };

    /**
     * Get XML document from JSON property
     * @param  {Object} json - Objet to set json property if necessary
     * @return {Object}      - Metadata XML document property
     */
    mdjs.Metadata.prototype.getXml = function() {
        return this.xml;
    };

    /**
     * [function description]
     * @param  {[type]} config [description]
     * @param  {[type]} json   [description]
     * @return {[type]}        [description]
     */
    mdjs.Metadata.prototype.getXmlString = function(config) {
        return this.getXml().getXmlString(config);
    };

    /**
     * Get XML document from JSON property
     * @param  {Object} json - Objet to set json property if necessary
     * @return {Object}      - Metadata XML document property
     */
    mdjs.Metadata.prototype.toXml = function(json) {
        this.json = json || this.json;
        this.xml = this._json2Xml(this.xml, mdjs.model_xml.main, this.json, this.xml.root);
        return this.xml;
    };

    /**
     * [function description]
     * @param  {[type]} config [description]
     * @param  {[type]} json   [description]
     * @return {[type]}        [description]
     */
    mdjs.Metadata.prototype.toXmlString = function(config, json) {
        return this.toXml(json)
            .getXmlString(config);
    };

    /**
     * [function description]
     * @param  {[type]} xml [description]
     * @return {[type]}     [description]
     */
    mdjs.Metadata.prototype.getJson = function() {
        return this.json;
    };

    /**
     * [function description]
     * @param  {[type]} xml [description]
     * @return {[type]}     [description]
     */
    mdjs.Metadata.prototype.toJson = function(xml) {
        // console.log('xml', xml);
        this.xml = xml || this.xml;
        this.json = this._xml2Json(this.xml, mdjs.model_xml.main, this.xml.doc);
        console.log(this.json);
        // Chage extents organisation
        this.json = this._separateJsonExtents(this.json);
        return this.json;
    };

    /**
     * [function description]
     * @param  {[type]} property [description]
     * @return {[type]}          [description]
     */
    mdjs.Metadata.prototype.get = function(property) {
        return this[property] || undefined;
    };

    /**
     * [function description]
     * @param  {[type]} property [description]
     * @param  {[type]} value    [description]
     * @return {[type]}          [description]
     */
    mdjs.Metadata.prototype.set = function(property, value) {
        this[property] = value || undefined;
        return this[property];
    };

    /**
     * [function description]
     * @param  {[type]} node [description]
     * @return {[type]}      [description]
     */
    mdjs.Metadata.prototype.getXmlValues = function(node) {
        return this.xml.getNodeValues(mdjs.model_xml.main[node].xpath);
    };

    /**
     * [function description]
     * @param  {[type]} node [description]
     * @return {[type]}      [description]
     */
    mdjs.Metadata.prototype.getJsonValues = function(node) {
        return this.json[node];
    };

    /**
     * [function description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    mdjs.Metadata.prototype._isService = function(type) {
        if (type == 'xml') {
            return this.getXmlValues('mdHierarchyLevel')[0] == 'service';
        } else {
            return this.getJsonValues('mdHierarchyLevel') == 'service';
        }
    };

    /**
     * [function description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} model [description]
     * @param  {[type]} xml   [description]
     * @return {[type]}       [description]
     */
    mdjs.Metadata.prototype._xml2Json = function(doc, model, xml) {
        var json = {};
        for (var node in model) {
            // Define xpath variable. Use xpath_srv property if Metadata concern service.
            var xpath = model[node].xpath;
            if (model[node].hasOwnProperty('xpath_srv') && this._isService('xml')) {
                xpath = model[node].xpath_srv;
            }
            if (!model[node].multi && xpath) {
                if (model[node].hasOwnProperty('children')) {
                    // String with children
                    var elt = doc.getNodeFromPath(xpath, xml);
                    json[node] = this._xml2Json(doc, model[node].children, elt.snapshotItem(0));
                } else {
                    // String node without child
                    // console.log(doc);
                    var nodeValue = doc.getNodeValues(xpath, xml)[0];
                    if (nodeValue) {
                        json[node] = nodeValue;
                    }
                }
            } else if (model[node].multi) {
                // json[node] is an array
                // json[node] = [];
                var array = [];
                var elts = doc.getNodeFromPath(xpath, xml);
                for (var i = 0; i < elts.snapshotLength; i++) {
                    if (model[node].hasOwnProperty('children')) {
                        var child = this._xml2Json(doc, model[node].children, elts.snapshotItem(i));
                        // If only one children item property, remove nodeName
                        if (Object.keys(model[node].children)
                            .length === 1) {
                            for (var c in model[node].children) {
                                child = child[c];
                            }
                        }
                        if (child && Object.keys(child)
                            .length) {
                            array.push(child);
                        }
                    }
                    if (array.length) {
                        json[node] = array;
                    }
                }
            }
        }
        return json;
    };

    /**
     * Separate extents property of sjson object to 3 properties: geographicExtents, temporalExtents and vertical to get more usefull object
     * @param  {Object} json sjson object
     * @return {Object}       modified sjson object
     */
    mdjs.Metadata.prototype._separateJsonExtents = function(json) {
        // console.log('a ', json);
        var dataGeographicExtents = [];
        var dataTemporalExtents = [];
        var dataVerticalExtents = [];
        for (var extent in json.dataExtents) {
            if (json.dataExtents[extent].hasOwnProperty('dataGeographicExtentEastBound')) {
                dataGeographicExtents.push(json.dataExtents[extent]);
            } else if (json.dataExtents[extent].hasOwnProperty('dataTemporalExtentBegin')) {
                dataTemporalExtents.push(json.dataExtents[extent]);
            } else {
                dataVerticalExtents.push(json.dataExtents[extent]);
            }
        }
        if (dataGeographicExtents.length) {
            json.dataGeographicExtents = dataGeographicExtents;
        }
        if (dataTemporalExtents.length) {
            json.dataTemporalExtents = dataTemporalExtents;
        }
        if (dataVerticalExtents.length) {
            json.dataVerticalExtents = verticalExtents;
        }
        return json;
    };

    // Hash string to get an id
    /**
     * [function description]
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    mdjs.Metadata.prototype._getHash = function(string) {
        var hash = 0;
        for (var c = 0; c < string.length; c++) {
            hash = ((hash << 5) + hash) + string.charCodeAt(c);
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    };

/**
 * [function description]
 * @param  {[type]} doc    [description]
 * @param  {[type]} model  [description]
 * @param  {[type]} json   [description]
 * @param  {[type]} parent [description]
 * @return {[type]}        [description]
 */
    mdjs.Metadata.prototype._json2Xml = function(doc, model, json, parent) {
        for (var node in model) {
            if (json[node] && !model[node].skip) {
                var xpath = model[node].xpath;
                if (model[node].hasOwnProperty('xpath_srv') && this._isService('json')) {
                    xpath = model[node].xpath_srv;
                }
                var localParent = parent;
                if (xpath.indexOf('/') === 0) {
                    localParent = doc.root;
                }
                var items = xpath.split('/');
                for (var i = 0; i < items.length; i++) {
                    if (items[i] &&
                        items[i] != "text()" &&
                        items[i].indexOf('@') !== 0 &&
                        items[i] != "gmd:MD_Metadata") {
                        var text = '';
                        var attributes = {};
                        if (items[i + 1] && (
                                items[i + 1] == "text()" ||
                                items[i + 1].indexOf('@') === 0)) {
                            text = json[node];
                            attributes = {};
                            if (model[node].attributes) {
                                for (var attr in model[node].attributes) {
                                    if (model[node].attributes[attr].indexOf('node=') === 0) {
                                        attributes[attr] = json[model[node].attributes[attr].substring(5)];
                                    } else {
                                        attributes[attr] = model[node].attributes[attr];
                                    }
                                }
                            }
                            if (items[i + 1].indexOf('@') === 0) {
                                attributes[items[i + 1].substring(1)] = json[node];
                            }
                        }
                        if (model[node].hasOwnProperty('children')) { // = model[node].multi == true
                            if (i + 1 == items.length) { // Last item of xpath
                                if (!json[node].length) {
                                    // json[node] is an object and not an array. Convert it to array to use it
                                    json[node] = [json[node]];
                                }
                                for (var value in json[node]) {
                                    var subParent = doc.addNode(localParent, items[i]);
                                    if (Object.keys(model[node].children)
                                        .length === 1) {
                                        // json[node] is an array of string and not an array of objects
                                        var child_property = Object.keys(model[node].children)[0];
                                        var json_value = json[node][value];
                                        json[node][value] = {};
                                        json[node][value][child_property] = json_value;
                                    }
                                    this._json2Xml(doc, model[node].children, json[node][value], subParent);
                                }
                            }
                        }
                        if (items[i] == 'gml:TimePeriod') {
                            attributes['gml:id'] = 'timePeriod_' + this._getHash(json[node]);
                        }
                        if (doc.getNodeFromPath(items[i], localParent)
                            .snapshotLength === 0) {
                            localParent = doc.addNode(localParent, items[i], text, attributes);
                        } else {
                            localParent = doc.getNodeFromPath(items[i], localParent)
                                .snapshotItem(0);
                        }
                    }
                }
            }
        }
        return doc;
    };

}(window.mdjs = window.mdjs || {}));
