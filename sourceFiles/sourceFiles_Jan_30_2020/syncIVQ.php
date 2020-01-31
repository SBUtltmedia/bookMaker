<?
$vqPath="/home1/tltsecure/apache2/htdocs/vq/users/";
$netId=$_SERVER['cn'];
$theIVQ=implode("/", array_slice(explode("/", rtrim($_POST['ivq'],"/")), -2));
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
print "{\"status\":\"$status\",\"grade\":$score}";
$SCRIPT_FILENAME = implode("/", array_reverse(array_slice(array_reverse(explode("/", $_SERVER['SCRIPT_FILENAME'])), 2)));
