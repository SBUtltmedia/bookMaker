<?php
$vqPath="/home/tltsecure/apache2/htdocs/vq/users/";
$netId=$_SERVER['cn'];

foreach($_POST as $key=>$value)
{
$theIVQ=implode("/", array_slice(explode("/", rtrim($value,"/")), -2));
$userDataFile="${vqPath}${theIVQ}/data/$netId";
$score=0;
$duration=null;
$status="incomplete";
if(file_exists($userDataFile)){
	$data=json_decode(file_get_contents($userDataFile));
	$duration= count($data->watchData);
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

