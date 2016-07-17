<?php

    $file_path = 'files/';
    if (!file_exists($file_path)) {
        mkdir($file_path, 0777, true);
    }

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
        $filename = uniqid().'.xml';
        $url = $file_path.$filename;
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
    } elseif ($act == 'getURL') {
        if ($url) {
            $data = file_get_contents($url);
            echo $data;
        }
    } else {
        echo json_encode($response);
    }


?>
