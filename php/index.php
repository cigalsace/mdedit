<?php

    // Config
    $role_prefix = 'ROLE_EL_';
    $file_path = 'files/';
    $md_path = '/metadata/';
    $extentions = array('xml');
    $edit_roles = array('ROLE_SV_REVIEWER', 'ROLE_SV_ADMIN');

    //========================================================================

    function get($param, $default = false) {
        if (isset($_GET[$param])) {
            return $_GET[$param];
        }
        return $default;
    }

    function getHeader($param, $default = false) {
        if (isset($_SERVER[$param])) {
            return $_SERVER[$param];
        }
        return $default;
    }

    //========================================================================

    if (!file_exists($file_path)) {
        mkdir($file_path, 0777, true);
    }

    $act = get('act');
    $url = get('url');
    $filename = get('filename');

    // prepare response var
    $response['success'] = False;
    $response['sec_editor'] = False;

    // Get headers from security proxy
    $response['sec_proxy'] = getHeader('HTTP_SEC_PROXY');
    $response['sec_username'] = getHeader('HTTP_SEC_USERNAME');
    $response['sec_email'] = getHeader('HTTP_SEC_EMAIL');
    // Get last role EL in LDAP group
    $roles = explode(';', getHeader('HTTP_SEC_ROLES'));
    $org = '';
    foreach ($roles as $key => $role) {;
        if (substr($role, 0, strlen($role_prefix)) == $role_prefix) {
            $org = substr($role, strlen($role_prefix));
        }
        if (in_array($role, $edit_roles)) {
            $response['sec_editor'] = True;
        }
    }
    $response['sec_roles'] = $roles;
    $response['sec_org'] = $org;

    // For tests
    // $response['sec_editor'] = True;
    // $response['sec_username'] = 'CIGAL';
    // $response['sec_org'] = 'CIGAL';
    // $org = 'CIGAL';

    if ($act == 'getXML') {
        $inputJSON = file_get_contents('php://input');
        $data = json_decode( $inputJSON, TRUE );
        if (array_key_exists('filename', $data)) {
            $filename = $data['filename'];
        } else {
            $filename = uniqid();
        }
        $url = $file_path.$filename.'.xml';
        file_put_contents($url, $data['filecontent']);
        $response['success'] = True;
        $response['url'] = $url;
        $response['filename'] = $filename;
        echo json_encode($response);
    } elseif ($act == 'downloadXML') {
        if ($url) {
            header('Content-Type: application/octet-stream');
            header("Content-Transfer-Encoding: Binary");
            header("Content-disposition: attachment; filename=\"" . basename($url) . "\"");
            readfile($url);
        }
    } elseif ($act == 'sendXML') {
        $src = $file_path;
        $dst = getHeader('DOCUMENT_ROOT').$md_path.$org.'/'.$filename.'/';
        if ($filename and $response['sec_editor']) {
            if (!is_dir($dst)) {
                if (!mkdir($dst, 0777, true)) {
                    $response['msg'] = "Le dossier ".$md_path.$org."/".$filename."/ ne peut pas être créé.";
                }
            }
            if (is_dir($dst)) {
                $response['msg'] = chmod($dst, 0777);
                $success = copy($src.$filename.'.xml', $dst.$filename.'.xml');
                chmod($dst.$filename.'.xml', 0777);
                $response['success'] = $success;
                $response['src'] = $src;
                $response['dst'] = $dst;
                $response['filename'] = $filename.'.xml';
                $response['msg'] = "Le fichier a été transmis au serveur.";
            }
        }
        echo json_encode($response);
        // echo $response[msg];
    } elseif ($act == 'getListXML') {
        $response['files'] = array();
        $response['success'] = false;
        if ($org and $response['sec_editor']) {
            $path = getHeader('DOCUMENT_ROOT').$md_path.$org;
            $response['path'] = $path;
            // Gets files from org directory
            $files = new RecursiveDirectoryIterator($path);
            foreach(new RecursiveIteratorIterator($files) as $file) {
                $pathinfo =  pathinfo($file);
                $f = array();
                $ext = $pathinfo['extension'];
                if (in_array(strtolower($ext), $extentions)) {
                    $f['title'] = 'Error';
                    libxml_use_internal_errors(true);
                    $xml = simplexml_load_file($file);
                    if ($xml !== False) {
                        $namespaces = $xml->getDocNamespaces();
                        foreach ($namespaces as $key => $value) {
                            $xml->registerXPathNamespace($key, $value);
                        }
                        $xpath_title = "gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title/gco:CharacterString/text()";
                        $f['title'] = implode('', $xml->xpath($xpath_title));
                        // echo $f['title'];
                    }
                    // $f['path'] = $pathinfo['dirname'];
                    $f['path'] = str_replace(getHeader('DOCUMENT_ROOT').$md_path, '', $pathinfo['dirname']);
                    // $f['path'] = str_replace('\\', '/', $f['path']);
                    $f['filename'] = $pathinfo['basename'];
                    $f['ext'] = $ext;
                    $f['file'] = $pathinfo['filename'];
                    $response['files'][] = $f;
                }
            }
        }
        echo json_encode($response);
    } elseif ($act == 'getURL') {
        if ($url) {
            $data = file_get_contents($url);
            echo $data;
        }
    } else {
        echo json_encode($response);
    }

?>
