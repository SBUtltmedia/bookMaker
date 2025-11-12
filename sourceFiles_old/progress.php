<?php
header('Content-Type: application/json');
$SCRIPT_FILENAME = implode("/", array_reverse(array_slice(array_reverse(explode("/", $_SERVER['SCRIPT_FILENAME'])), 2)));
$file = "$SCRIPT_FILENAME/localData/userData/${_SERVER['eppn']}";
if (file_exists ($file)){
	$rawData=file_get_contents($file);
	$serverData= json_decode($rawData);
}
else{
	$serverData= json_decode("{}");
}
$clientData=$_POST;
foreach ($_POST as $key=>$value)
{
	$serverData->{$key}= $value;
}
$mergedData = json_encode($serverData);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	if($rawData!=$mergedData) {
		if (!file_put_contents($file, $mergedData)) {
			echo "couldn't write to file $file";
			exit;
		}
	}
	print_r($mergedData);
}
