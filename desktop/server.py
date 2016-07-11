#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Server for mdEdit desktop application.

Copyright (c) 2016, Guillaume Ryckelynck.
License: LGPL 3
"""

__author__ = 'Guillaume Ryckelynck'
__version__ = '0.2'
__license__ = 'LGPL3'

import os
import webbrowser
import uuid
import json
import bottle

config_filename = 'config.json'
with open(config_filename) as config_file:
    config = json.load(config_file)


@bottle.route('/'+config['SERVER']['app_name']+'/<filename:path>')
def server_static(filename):
    """Serve statics files
    """
    return bottle.static_file(filename, root='www')


@bottle.route('/hello/<name>')
def index(name):
    """Test function
    """
    return bottle.template('<b>Hello {{name}}</b>!', name=name)


@bottle.post('/get_xml')
def get_xml():
    """Get XML file
    """
    # Define response variable
    response = {}
    response['success'] = False
    # Get data from post
    postdata = bottle.request.body.read() or None
    if postdata is not None:
        data = json.loads(postdata)
        filecontent = data['filecontent'].encode('utf8')
        filename = str(uuid.uuid4()) + '.xml'
        # Create dir to save file if not exist
        if not os.path.isdir(config['SERVER']['files_path']):
            os.makedirs(config['SERVER']['files_path'])
        # Define URL param and write file
        url = os.path.join(config['SERVER']['files_path'], filename)
        with open(url, 'w') as f:
            f.write(filecontent)
            response['success'] = True
        # Define response properties
        response['url'] = url
        response['filename'] = filename
    return response


@bottle.route('/download_xml', method=['GET', 'POST'])
def download_xml():
    """Download XML file
    """
    # Define response variable
    response = {}
    response['success'] = False
    # Get data from post
    filename = bottle.request.query.filename or None
    if filename is not None:
        return bottle.static_file(filename, root='.', download=filename)
    return response


if __name__ == "__main__":
    webbrowser.open_new_tab('http://localhost:8080/'+config['SERVER']['app_name']+'/index.html')
    # Develppement:
    # bottle.run(host='localhost', port=8080, debug=True, reloader=True)
    # Production:
    bottle.run(host='localhost', port=8080)
