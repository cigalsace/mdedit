<?php
header('Content-type: text/plain');

$md_file = 'doc_md.md';
$md_path = './md/';

function find_keywords($txt, $key='@') {
    $result = False;
    preg_match_all("/\s".$key."([a-zA-Z0-9_\-\.]+[a-zA-Z0-9]*)/i", $txt, $list, PREG_PATTERN_ORDER);
    if ($list[1]) {
        $result = $list[1];
        natcasesort($result);
        $result = array_unique($result);
    }
    return $result;
}

$md_txt = file_get_contents($md_file);
$md_items = explode('====', $md_txt);

foreach ($md_items as $key => $md_item) {
    $files[$key]['md'] = $md_item;
    $files[$key]['filename'] = find_keywords($md_item, '@')[1];
    if ($files[$key]['filename']) {
        file_put_contents($md_path.$files[$key]['filename'], $files[$key]['md']);
        echo $key." - ".$md_path.$files[$key]['filename'].": fichier écrit.\n";
    } else {
        echo $key." - Nom du fichier inconnu.\n";
    }
}

?>
