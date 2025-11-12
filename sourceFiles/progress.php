<?php
session_start();
header('Content-Type: application/json');
$user= $_SESSION['mail'] ?? $_SERVER['mail'] ?? "pstdenis_error";
$SCRIPT_FILENAME = implode("/", array_reverse(array_slice(array_reverse(explode("/", $_SERVER['SCRIPT_FILENAME'])), 2)));
$file = "$SCRIPT_FILENAME/localData/userData/$user";

if (file_exists ($file)){
	$rawData=file_get_contents($file);
	$serverData= json_decode($rawData);
}
else{

	$rawData=  (object)[];
	$serverData=  (object)[];
	//$serverData= json_decode("{}");
	//$serverData= json_decode("{}");
}
$clientData=$_POST;
foreach ($_POST as $key=>$value)
{
	if(!property_exists($serverData,$key) && is_array($value)){
	$serverData->{$key} = (object)[];
	}
	$serverData->{$key}= $value;
}
//$serverData->mail=$user;
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
