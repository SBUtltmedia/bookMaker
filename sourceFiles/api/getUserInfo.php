<?

function getUser(){
global $path;

    $userInfo = array();
    $userInfo["firstName"] = $_SERVER['nickname'];
    $userInfo["sn"] = $_SERVER['sn'];
    $userInfo["cn"] = $_SERVER['cn'];
    $userInfo["mail"] = $_SERVER['mail'];

    print_r(json_encode($userInfo));


}

function getVQGrade($VQ,$VQNum,$netId){
  global $path;
  global $permissions;
  if($_SERVER["cn"]==$netId || $permissions["admin"]){
    print_r(json_encode($path));
  }

}
?>
