<?php
session_start();
$vqPath="/home/tltsecure/apache2/htdocs/vq/users/";
$netId=$_SESSION['mail'] ?? $_SERVER['mail'] ?? "error_".time();

foreach($_POST as $key=>$value)
{
$theIVQ=implode("/", array_slice(explode("/", rtrim($value,"/")), -2));
$userDataFile="${vqPath}${theIVQ}/data/$netId";
$score=0;
$duration=null;
$status="incomplete";
if(file_exists($userDataFile)){
	$data=json_decode(file_get_contents($userDataFile));
	if(property_exists($data,"duration")){
	$duration= count($data->watchData);
	}
	else{
	  $duration=0;
	}
	if(property_exists($data,"completeDate"))
	{
		$status="done";
	} 
	 if(property_exists($data,"bestScore")){
	$score=$data->bestScore;
	}
	if(is_null($score)) $score=0;
}
$item["status"]=$status;
$item["grade"]=$score;
$item["duration"]=$duration;
$all[$key]=$item;
}
print json_encode($all);

