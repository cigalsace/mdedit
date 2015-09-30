<?php

    $response['success'] = False;
    if (isset($_GET['act'])) {
        $act = $_GET['act'];
    }
    if (isset($_GET['url'])) {
        $url = $_GET['url'];
    }
    
    if ($act == 'getXML') {
        $inputJSON = file_get_contents('php://input');
        $data = json_decode( $inputJSON, TRUE );
        //$url = 'files/'.$data['filename'];
        $filename = uniqid().'.xml';
        $url = 'files/'.$filename;
        file_put_contents($url, $data['filecontent']);
        /*
        header('Content-Type: application/octet-stream');
        header("Content-Transfer-Encoding: Binary"); 
        header("Content-disposition: attachment; filename=\"" . basename($filename) . "\""); 
        readfile($filename);
        */
        $response['success'] = True;
        //$response['url'] = 'php'.$url;
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
    } else {
        echo json_encode($response);
    }


?>
