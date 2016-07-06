#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Test bottle server.

Copyright (c) 2016, Guillaume Ryckelynck.
License: LGPL 3
"""

__author__ = 'Guillaume Ryckelynck'
__version__ = '0.1'
__license__ = 'LGPL3'

import os
import webbrowser
import ConfigParser
import uuid
import json
import bottle

# Import pour résoudre un problème de compilation avec py2exe et piinstaller
from email.mime import audio, base, image, message, multipart, nonmultipart, text


config = ConfigParser.RawConfigParser()
config.read('config.cfg')

app_name = config.get('SERVER', 'app_name')
files_path = config.get('SERVER', 'files_path')

@bottle.route('/'+app_name+'/<filename:path>')
def server_static(filename):
    return bottle.static_file(filename, root='www')

@bottle.route('/hello/<name>')
def index(name):
    return bottle.template('<b>Hello {{name}}</b>!', name=name)

    
@bottle.post('/get_xml')
def get_xml():
    response = {}
    response['success'] = False

    postdata = bottle.request.body.read() or None
    #print 'postdata:' + postdata
    if postdata is not None:
        data = json.loads(postdata)
        filecontent = data['filecontent'].encode('utf8')
        
        filename = str(uuid.uuid4()) + '.xml'
        if not os.path.isdir(files_path):
            os.makedirs(files_path)
        url = os.path.join (files_path, filename)
        with open(url, 'w') as f:
            f.write(filecontent)

        response['success'] = True;
        response['url'] = url;
        response['filename'] = filename;
    return response

@bottle.route('/download_xml', method=['GET', 'POST'])
def download_xml():
    response = {}
    response['success'] = False
    
    filename = bottle.request.query.filename or None
    if filename is not None: 
        return bottle.static_file(filename, root='.', download=filename)
    
    return response
    

webbrowser.open_new_tab('http://localhost:8080/'+app_name+'/index.html')
# Develppement:
# bottle.run(host='localhost', port=8080, debug=True, reloader=True)
# Production:
bottle.run(host='localhost', port=8080)
