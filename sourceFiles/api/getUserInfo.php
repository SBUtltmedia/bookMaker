<?

function getUser(){
global $path;
    session_start();
    $userInfo = array();
    $userInfo["firstName"] = $_SESSION['nickname'] ?? $_SERVER['nickname'];
    $userInfo["sn"] = $_SESSION['sn'] ?? $_SERVER['sn'];
    $userInfo["cn"] = $_SESSION['cn'] ?? $_SERVER['cn'];
    $userInfo["mail"] = $_SESSION['mail'] ?? $_SERVER['mail'];

    print_r(json_encode($userInfo));

}

function getVQGrade($VQ,$VQNum,$netIdJS){
  session_start();
  global $path;
  global $permissions;
   $netId= $_SESSION["mail"] ?? $_SERVER["mail"];
  if($_SERVER["mail"]==$netIdJS || $permissions["admin"]){
    $vqUsersPath = "/home1/tltsecure/apache2/htdocs/vq/users/";
    $vqUserDataPath = $vqUsersPath.$VQ."/".$VQNum."/data/".$netId;
    if(file_exists($vqUserDataPath)){
      $vqUserDataRaw = file_get_contents($vqUserDataPath);
      $vqUserData = json_decode($vqUserDataRaw,true);
      $total = 0;
      $score = 0;
      for($x=0;$x<count($vqUserData["answerData"]);$x++){
        $total++;
        $score = $score + $vqUserData["answerData"][$x]["score"];
      }
    }else{
      $score = 0;
    }
    print_r($score."/".$total);
  }

}
?>
