"use strict";

// Initiate config array
var config = {};

var codeslist = [];

// URL server getXML
config.server_url_getxml = 'php/index.php?act=getXML';

// Get params from URL
var params = getParamsURL(window.location.search.substring(1));

// App language (only 'fr' support for now)
// Get app language: param_lang else language of browser
var param_lang = params['lang'];
if (param_lang) {
    config.userLang = param_lang;
} else {
    config.userLang = navigator.language || navigator.userLanguage;
}
// Keep only 2 first characters from language (ex.: 'fr' or 'en' or 'de')
config.userLang = config.userLang.substring(0,2);
// Use french by default
if (['fr', 'en', 'de'].indexOf(config.userLang) == -1) { config.userLang = 'fr'; }
//console.log(config.userLang);

// Default model
// Liste of default models 
config.models = [
    {
        path: 'models/model-empty.json',
        value: 'Modèle de fiche vierge'
    },
	{
        path: 'models/model-opendata.json',
        value: 'Modèle de fiche Open data'
    },
	{
        path: 'models/model-bdocs_cigal.json',
        value: 'Exemple de fiche BdOCS 2011-12 CIGAL V2'
    }
];
// Get default model path: param_model else first model of list above
var param_model = params['model'];
if (param_model) {
    config.default_model = param_model;
} else {
    config.default_model = config.models[0]['path'];
}

// Empty data var
var empty_data = {
    contact: {
        name:           '',
        position:       '',
        organisation:   '',
        address:        '',
        cp:             '',
        city:           '',
        tel:            '',
        email:          '',
        role:           '',
        logo_text:      '',
        logo_url:       ''
    },
    geographicextent: {
        name: '',
        xmin: '',
        xmax: '',
        ymin: '',
        ymax: ''
    },
    browsegraphic: {
        url: '',
        description: '',
        type: ''
    },
    temporalextent: {
        begin: '',
        end: '',
        description: ''
    },
    keyword: {
        keyword: '',
        type: '',
        thesaurus_name: '',
        thesaurus_dates: [
            {
                type: '',
                date: ''
            }
        ]
    },
    referencesystem: {
        code: '',
        codespace: ''
    },
    format: {
        name:           '',
        version:        '',
        specification:  ''
    },
    constraint: '',
    limitation: '',
    linkage: {
        name:           '',
        description:    '',
        url:            '',
        protocol:       ''
    }
};
             
