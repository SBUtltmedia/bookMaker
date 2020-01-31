<?
$vqPath="/home1/tltsecure/apache2/htdocs/vq/users/";
$netId=$_SERVER['cn'];

foreach($_POST as $key=>$value)
{
$theIVQ=implode("/", array_slice(explode("/", rtrim($value,"/")), -2));
$userDataFile="${vqPath}${theIVQ}/data/$netId";
$score=0;
$status="incomplete";
if(file_exists($userDataFile)){
	$data=json_decode(file_get_contents($userDataFile));
	if(property_exists($data,"completeDate"))
	{
		$status="done";
	} 
	$score=$data->bestScore;
	if(is_null($score)) $score=0;
}
$item["status"]=$status;
$item["grade"]=$score;
$all[$key]=$item;
}
print json_encode($all);

