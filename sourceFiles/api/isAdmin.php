<?
function getStatus()
{	
	session_start();
	global $path;
	$structure = str_replace("/sourceFiles","",$path);
	$structure = $structure."/localData/";
	$user=$_SESSION['mail'] ?? $_SERVER['mail'];
        $adminData = json_decode(file_get_contents($structure."admins.json"));
        $permissions=array();
	$permissions["admin"] = in_array($user,$adminData -> admins);
	$permissions["superUser"]= (in_array($user,$adminData -> superUsers) || $permissions["admin"]);

	return $permissions;
}
?>
