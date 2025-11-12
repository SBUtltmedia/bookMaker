<?php

$path = explode("/api", dirname($_SERVER['SCRIPT_FILENAME']));
$path = $path[0];
global $path;

require "$path/api/vendor/autoload.php";
require "$path/api/getUserInfo.php";
require "$path/api/isAdmin.php";

$permissions = getStatus();
$app = new \Slim\Slim();
$body= $app->request()->getBody();

$app->get('/getUser', function (){

    getUser();
    exit;

});

$app->get('/getVQGrade/:VQ/:VQNum/:netId', function ($VQ,$VQNum,$netId){

      getVQGrade($VQ,$VQNum,$netId);
      exit;

});

$app->run();
?>
