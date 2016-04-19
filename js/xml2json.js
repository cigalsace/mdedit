"use strict";

// Fonction pour parser fichier XML retourné par serveur CSW
// function readXML(xml) {
function xml2json(xml) {
    // MD HierarchyLevel
    var MD_HierarchyLevel = $(xml).find(xpaths.MD_HierarchyLevel).attr('codeListValue');
    if (MD_HierarchyLevel == 'service') {
        var Data_Title = $(xml).find(xpaths.Service_Title).text();
        var Data_Abstract = $(xml).find(xpaths.Service_Abstract).text();
        var Data_Dates = getDates($(xml), 'Service_Dates');
        var Data_PointOfContacts = getContacts($(xml), 'Service_PointOfContacts');
        var Data_Languages = getLanguages($(xml), 'Service_Languages');
        var Data_MaintenanceFrequency = getMaintenanceFrequency($(xml), 'Service_MaintenanceFrequency');
        var Data_CharacterSet = getCharacterSet($(xml), 'Service_CharacterSet');
        var Data_GeographicExtents = getExtents($(xml), 'GeographicExtents', 'Service_Extents');
        var Data_TemporalExtents = getExtents($(xml), 'TemporalExtents', 'Service_Extents');
    } else {
        var Data_Title = $(xml).find(xpaths.Data_Title).text();
        var Data_Abstract = $(xml).find(xpaths.Data_Abstract).text();
        var Data_Dates = getDates($(xml), 'Data_Dates');
        var Data_PointOfContacts = getContacts($(xml), 'Data_PointOfContacts');
        var Data_Languages = getLanguages($(xml), 'Data_Languages');
        var Data_MaintenanceFrequency = getMaintenanceFrequency($(xml), 'Data_MaintenanceFrequency');
        var Data_CharacterSet = getCharacterSet($(xml), 'Data_CharacterSet');
        var Data_GeographicExtents = getExtents($(xml), 'GeographicExtents', 'Data_Extents');
        var Data_TemporalExtents = getExtents($(xml), 'TemporalExtents', 'Data_Extents');
    }
    // Keywords
    var Data_Keywords = getKeywords($(xml));
    // Legal AccessOtherConstraints
    var Data_Legal_AccessOtherConstraints = getLegalAccessOtherConstraints($(xml));
    
    // Data title
    /*
    var truncatevalue = 87;
    var short_Data_Title = Data_Title.substr(0,truncatevalue);
    if (Data_Title.length > short_Data_Title.length) {
        short_Data_Title += "...";
    }
    */
    // Data abstract
    /*
    var truncatevalue = 397;
    var short_Data_Abstract = Data_Abstract.substr(0,truncatevalue);
    if (Data_Abstract.length > short_Data_Abstract.length) {
        short_Data_Abstract += "...";
    }
    */
    
    var md = {
        // MD
        //MD_FileIdentifier: $(xml).find(xpaths.MD_FileIdentifier).text(),
        md_fileidentifier: getFileIdentifier($(xml)),
        md_contacts: getContacts($(xml), 'MD_Contacts'),
        // MD_Contacts: MD_Contacts,
        // md_language: MD_LanguageCode[$(xml).find(xpaths.MD_Language).attr('codeListValue')],
        md_language: $(xml).find(xpaths.MD_Language).attr('codeListValue'),
        // md_characterSet: MD_CharacterSetCode[$(xml).find(xpaths.MD_CharacterSet).attr('codeListValue')],
        md_characterset: $(xml).find(xpaths.MD_CharacterSet).attr('codeListValue'),
        // md_hierarchyLevel: MD_ScopeCode[MD_HierarchyLevel],
        md_hierarchylevel: MD_HierarchyLevel,
        md_datestamp: $(xml).find(xpaths.MD_DateStamp).text(),
        md_standardname: $(xml).find(xpaths.MD_StandardName).text(),
        md_standardversion: $(xml).find(xpaths.MD_StandardVersion).text(),
        // Data
        // short_data_Title: short_Data_Title,
        data_title: Data_Title,
        // short_data_abstract: short_Data_Abstract,
        data_referencesystems: getReferenceSystems($(xml)),
        data_identifiers: getIdentifiers($(xml)),
        data_abstract: Data_Abstract,
        data_contacts: Data_PointOfContacts,
        // Data_PointOfContacts: Data_PointOfContacts,
        data_browsegraphics: getBrowsegraphics($(xml)),
        //data_dates: Data_Dates,
        data_datecreation: Data_Dates.data_datecreation,
        data_daterevision: Data_Dates.data_daterevision,
        data_datepublication: Data_Dates.data_datepublication,
        // Data_MaintenanceFrequency: $(xml).find(xpaths.Data_MaintenanceFrequency).text(),
        data_maintenancefrequency: Data_MaintenanceFrequency,
        data_keywords: Data_Keywords['keywords'],
        data_inspirekeywords: Data_Keywords['inspire'],
        data_uselimitations: getUseLimitations($(xml)),
        data_legal_accessconstraints: getLegalAccessConstraints($(xml)),
        // data_legal_accessotherconstraints == data_legal_accessinspireconstraints
        data_legal_accessotherconstraints: Data_Legal_AccessOtherConstraints['others'],
        data_legal_accessinspireconstraints: Data_Legal_AccessOtherConstraints['inspire'],
        data_legal_useconstraints: getLegalUseConstraints($(xml)),
        // Data_UseOtherConstraints: getUseOtherConstraints($(xml)),
        // data_classification: MD_ClassificationCode[$(xml).find(xpaths.Data_Classification).attr('codeListValue')],
        data_security_classification: $(xml).find(xpaths.Data_Security_Classification).attr('codeListValue'),
        // Data_SpatialRepresentationType: $(xml).find(xpaths.Data_SpatialRepresentationType).text(),
        // Data_SpatialRepresentationType: getSpatialRepresentationType($(xml)),
        data_scaledenominator: $(xml).find(xpaths.Data_ScaleDenominator).text(),
        data_scaledistance: $(xml).find(xpaths.Data_ScaleDistance).text(),
        //Data_Languages: getChildren(xml, 'Data_Languages'),
        data_languages: Data_Languages,
        data_characterset: Data_CharacterSet,
        data_topiccategories: getTopicCategories($(xml)),
        data_geographicextents: Data_GeographicExtents,
        data_temporalextents: Data_TemporalExtents,
        data_distformats: getDistFormats($(xml)),
        data_linkages: getLinkages($(xml)),
        // data_dq_level: MD_ScopeCode[$(xml).find(xpaths.Data_DQ_Level).attr('codeListValue')],
        data_dq_level: $(xml).find(xpaths.Data_DQ_Level).attr('codeListValue'),
        data_li_statement: $(xml).find(xpaths.Data_LI_Statement).text(),
        data_dq_conformities: getConformities($(xml))
    }
    console.log(md);
    return md;
}

function getFileIdentifier(xml) {
    return $(xml).find(xpaths.MD_FileIdentifier).text();
}
function getReferenceSystems(xml) {
    var data = [];
    $(xml).find(xpaths.Data_ReferenceSystems).each(function() {
        /*
        var rf = {
            code: $(this).find(xpaths.Data_ReferenceSystemCode).text()
        };
        */
        // data.push(rf);
        // Si le contenu de la balise contient un code EPSG connue, la valeur de la liste correspondante est utilisée dans l'objet json des métadonnées
        var rf_value = $(this).find(xpaths.Data_ReferenceSystemCode).text();
        var rf = {
            code: rf_value
        };
        codeslist['MD_ReferenceSystemCode'].forEach( function(obj, key) {
            if (rf_value.toLowerCase().indexOf(obj['search']) > -1) {
                rf['code'] = obj['id'];
            }
        });
        data.push(rf);
    });
    return data;
}
function getIdentifiers(xml) {
    var data = [];
    $(xml).find(xpaths.Data_Identifiers).each(function() {
        var id = {
            code: $(this).find(xpaths.Data_Code).text(),
            codespace: $(this).find(xpaths.Data_CodeSpace).text()
        };
        data.push(id);
    });
    return data;
}
function getContacts(xml, path_contacts) {
    var contacts = [];
    $(xml).find(xpaths[path_contacts]).each(function() {        
        var cnt = {
            name: $(this).find(xpaths.CntName).text(),
            position: $(this).find(xpaths.CntFunction).text(),
            organisation: $(this).find(xpaths.CntOrganism).text(),
            address: $(this).find(xpaths.CntAddress).text(),
            cp: $(this).find(xpaths.CntPostalCode).text(),
            city: $(this).find(xpaths.CntCity).text(),
            tel: $(this).find(xpaths.CntPhone).text(),
            email: $(this).find(xpaths.CntEmail).text(),
            // role: CI_RoleCode[$(this).find(xpaths.CntRole).attr('codeListValue')],
            role: $(this).find(xpaths.CntRole).attr('codeListValue'),
            logo_text: $(this).find(xpaths.CntLogo).text(),
            logo_url: $(this).find(xpaths.CntLogo).attr('src')
        };
        contacts.push(cnt);
    });
    // console.log(JSON.stringify(contacts, null, 4));
    return contacts;
}
function getBrowsegraphics(xml) {
    var data = [];
    $(xml).find(xpaths.Data_BrowseGraphics).each(function() {
        var bg = {
            url: $(this).find(xpaths.Data_BrowseGraphic_Name).text(),
            description: $(this).find(xpaths.Data_BrowseGraphic_Description).text(),
            type: $(this).find(xpaths.Data_BrowseGraphic_Type).text()
        }
        data.push(bg);
    });
    return data;
}

function getSpatialRepresentationType(xml) {
    var Data_SpatialRepresentationType = $(xml).find(xpaths.Data_SpatialRepresentationType).attr('codeListValue');
    lb[lang]['Data_SpatialRepresentationType_description'] = MD_SpatialRepresentationTypeCode[Data_SpatialRepresentationType]['description'];
    return MD_SpatialRepresentationTypeCode[Data_SpatialRepresentationType]['name'];
}

function getMaintenanceFrequency(xml, xpath_maintenanceFrequency) {
    var Data_MaintenanceFrequency = $(xml).find(xpaths[xpath_maintenanceFrequency]).attr('codeListValue');
    // return MD_MaintenanceFrequencyCode[Data_MaintenanceFrequency];
    return Data_MaintenanceFrequency;
}
function getCharacterSet(xml, xpath_characterSet) {
    var Data_CharacterSet = $(xml).find(xpaths[xpath_characterSet]).attr('codeListValue');
    // return MD_CharacterSetCode[Data_CharacterSet];
    return Data_CharacterSet;
}

function getDates(xml, xpath_dates) {
    var data = {};
    $(xml).find(xpaths[xpath_dates]).each(function() {
        var Date = $(this).find(xpaths.Date).text();
        var DateType = $(this).find(xpaths.DateType).text();
        if (DateType == 'creation') {
            data['data_datecreation'] = Date;
        } else if (DateType == 'publication') {
            data['data_datepublication'] = Date;
        } else if (DateType == 'revision') {
            data['data_daterevision'] = Date;
        }
    });
    return data;
}
function getIsoDates(xml, xpath_dates) {
    var data = [];
    $(xml).find(xpaths[xpath_dates]).each(function() {
        var date = {
            date: $(this).find(xpaths.Date).text(),
            type: $(this).find(xpaths.DateType).text(),
        };
        data.push(date);
    });
    return data;
}
function getKeywords(xml) {
    var data = { 'inspire': [], 'keywords': [] };
    $(xml).find(xpaths.Data_Keywords).each(function() {
        var kw = {
            keyword: $(this).find(xpaths.Data_Keyword).text(),
            type: $(this).find(xpaths.Data_KeywordType).attr('codeListValue'),
            thesaurus_name: $(this).find(xpaths.Data_ThesaurusName).text(),
            thesaurus_dates: getIsoDates($(this), 'Data_ThesaurusDates'),
        }
        if (kw['thesaurus_name'].toLowerCase().indexOf('gemet') > -1 && kw['thesaurus_name'].toLowerCase().indexOf('inspire') > -1) {
            data['inspire'].push(kw);
        } else {
            data['keywords'].push(kw);
        }
    });
    return data;
}
function getUseLimitations(xml) {
    var data = [];
    $(xml).find(xpaths.Data_UseLimitations).each(function() {
        var ul = $(this).find(xpaths.CharacterString).text();
        data.push(ul);
    });
    return data;
}
function getLegalAccessConstraints(xml) {
    var data = [];
    $(xml).find(xpaths.Data_Legal_AccessConstraints).each(function() {
        var restriction = $(this).find(xpaths.Data_RestrictionCode).attr('codeListValue');
        if (restriction != 'otherRestrictions') {
            /*
            var ac = {
                // Data_RestrictionCode: MD_RestrictionCode[restriction],
                Data_RestrictionCode: restriction,
            }*/
            data.push(restriction);
        }
    });
    return data;
}
/*
function getLegalAccessOtherConstraints(xml) {
    var data = [];
    $(xml).find(xpaths.Data_Legal_AccessOtherConstraints).each(function() {
        var otherconstraint = $(this).find(xpaths.CharacterString).text();
        data.push(otherconstraint);
    });
    return data;
}
*/
function getLegalAccessOtherConstraints(xml) {
    var data = { 'inspire': [], 'others': [] };
    $(xml).find(xpaths.Data_Legal_AccessOtherConstraints).each(function() {
        var otherconstraint_value = $(this).find(xpaths.CharacterString).text();
        var otherconstraint = otherconstraint_value;
        var inspire = false;
        // rechercher si la valeur du XML contient un élément de la liste à partir de 'search' dans la codelist
        codeslist['MD_InspireRestrictionCode'].forEach( function(obj, key) {
            if (otherconstraint_value.toLowerCase().indexOf(obj['search']) > -1) {
                inspire = true;
                otherconstraint = obj['id']; 
            }
        });
        if (inspire) {
            data['inspire'].push(otherconstraint);
        } else {
            data['others'].push(otherconstraint);
        }
        // data.push(otherconstraint);
    });
    return data;
}

function getLegalUseConstraints(xml) {
    var data = [];
    $(xml).find(xpaths.Data_Legal_UseConstraints).each(function() {
        var restriction = $(this).find(xpaths.Data_RestrictionCode).attr('codeListValue');
        if (restriction != 'otherRestrictions') {
            var ac = {
                // Data_RestrictionCode: MD_RestrictionCode[restriction],
                Data_RestrictionCode: restriction,
            }
            data.push(ac);
        }
    });
    return data;
}
function getLanguages(xml, xpath_languages) {
    var data = [];
    $(xml).find(xpaths[xpath_languages]).each(function() {
        var lg = $(this).find(xpaths.Data_Language).attr('codeListValue');
        data.push(lg);
    });
    return data;
}
function getExtents(xml, extentType, xpath_extents) {
    var data_geo = [];
    var data_temp = []
    $(xml).find(xpaths[xpath_extents]).each(function() {
        var Data_ExtentName = $(this).find(xpaths.Data_ExtentName).text();
        var Data_ExtentNorthbound = $(this).find(xpaths.Data_ExtentNorthbound).text();
        var Data_ExtentSouthbound = $(this).find(xpaths.Data_ExtentSouthbound).text();
        var Data_ExtentEastbound = $(this).find(xpaths.Data_ExtentEastbound).text();
        var Data_ExtentWestbound = $(this).find(xpaths.Data_ExtentWestbound).text();
        var Data_TemporalExtent_Begin = $(this).find(xpaths.Data_TemporalExtent_Begin).text();
        var Data_TemporalExtent_End = $(this).find(xpaths.Data_TemporalExtent_End).text();
        if (Data_TemporalExtent_Begin) {
            ext = {
                description: Data_ExtentName,
                begin: Data_TemporalExtent_Begin,
                start: Data_TemporalExtent_End
            }
            data_temp.push(ext);
        } else {
            var ext = {
                name: Data_ExtentName,
                ymax: Data_ExtentNorthbound,
                ymin: Data_ExtentSouthbound,
                xmax: Data_ExtentEastbound,
                xmin: Data_ExtentWestbound
            }
            data_geo.push(ext);
        }
    });
    if (extentType == 'GeographicExtents') {
        return data_geo;    
    }
    return data_temp;
}    
function getTopicCategories(xml) {
    var d = [];
    $(xml).find(xpaths.Data_TopicCategories).each(function() {
        var tc = $(this).find(xpaths.Data_TopicCategory).text();
        d.push(tc);
    });
    return d;
}
function getDistFormats(xml) {
    var data = [];
    $(xml).find(xpaths.Data_DistFormats).each(function() {
        var df = {
            name: $(this).find(xpaths.Data_DistFormatName).text(),
            version: $(this).find(xpaths.Data_DistFormatVersion).text(),
            specification: $(this).find(xpaths.Data_DistFormatSpecification).text()
        }
        data.push(df);
    });
    return data;
}
function getLinkages(xml) {
    var data = [];
    $(xml).find(xpaths.Data_Linkages).each(function() {
        var df = {
            name: $(this).find(xpaths.Data_LinkageName).text(),
            description: $(this).find(xpaths.Data_LinkageDescription).text(),
            url: $(this).find(xpaths.Data_LinkageURL).text()
        }
        data.push(df);
    });
    return data;
}
function getConformities(xml) {
    var data = [];
    $(xml).find(xpaths.Data_DQ_Conformities).each(function() {
        var dc = {
            //Data_LinkageName: $(this).find(xpaths.Data_LinkageName).text(),
            specification: $(this).find(xpaths.Data_DQ_ConformityTest).text(),
            dates: getIsoDates($(this), 'Data_DQ_ConformityDates'),
            explaination: $(this).find(xpaths.Data_DQ_ConformityResult).text(),
            pass: $(this).find(xpaths.Data_DQ_ConformityPass).text()
        }
        data.push(dc);
    });
    return data;
}
