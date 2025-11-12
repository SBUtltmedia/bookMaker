<?php
header('Content-Type: application/json');
$SCRIPT_FILENAME = implode("/", array_reverse(array_slice(array_reverse(explode("/", $_SERVER['SCRIPT_FILENAME'])), 2)));
$file = "$SCRIPT_FILENAME/localData/userData/${_SERVER['eppn']}";
$serverData= json_decode(file_get_contents($file));
$clientData=$_POST;
$mergedData = json_encode((object) array_merge((array) $clientData, (array) $serverData));
if($_SERVER['REQUEST_METHOD'] == 'POST'){
if (!file_put_contents($file, $mergedData)) {
  echo "couldn't write to file $file";
  exit;
}
}
print_r($mergedData);

function mergeObjects($obj1,$obj2){



}
