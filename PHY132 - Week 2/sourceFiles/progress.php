<?php
header('Content-Type: application/json');
$SCRIPT_FILENAME = implode("/", array_reverse(array_slice(array_reverse(explode("/", $_SERVER['SCRIPT_FILENAME'])), 2)));

$file = "$SCRIPT_FILENAME/localData/userData/${_SERVER['eppn']}";
#echo $file;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
if (!file_put_contents($file, json_encode($_POST))) {
  echo "couldn't write to file $file";
  exit;
}
}
$encoded = file_get_contents($file);
print_r($encoded);
