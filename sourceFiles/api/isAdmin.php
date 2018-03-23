<?
function getStatus()
{
	global $path;
	$structure = $path."/data/";
	$user=$_SERVER['cn'];
        $adminData = json_decode(file_get_contents($structure."admins.json"));
        $permissions=array();
	$permissions["admin"] = in_array($user,$adminData -> admins);
	$permissions["superUser"]= (in_array($user,$adminData -> superUsers) || $permissions["admin"]);


	return $permissions;
}
?>
