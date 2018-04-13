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
    $theway = "/home1/tltsecure/apache2/htdocs/vq/users/";
    $theway = $theway.$VQ."/".$VQNum."/data/".$netId;
    if(file_exists($theway)){
      $theway = file_get_contents($theway);
      $thenewway = json_decode($theway,true);
      $total = 0;
      $score = 0;
      for($x=0;$x<count($thenewway["answerData"]);$x++){
        $total++;
        $score = $score + $thenewway["answerData"][$x]["score"];
      }
    }else{
      $score = 0;
    }
    print_r($score."/".$total);
  }

}
?>
