<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Book Maker</title>
    <script src="//code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="sourceFiles/js/checkMenu.js"></script>
    <script src="/resize/resize.js"></script>
    <script src="sourceFiles/js/progress.js"></script>
    <script src="sourceFiles/js/script.js"></script>
    <link rel="stylesheet" href="sourceFiles/css/style.css">
    <link rel="stylesheet" href="localData/GeneralFiles/styleCustom.css">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="apple-touch-icon" sizes="180x180" href="/bookMaker/icon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/bookMaker/icon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/bookMaker/icon/favicon-16x16.png">
    <link rel="manifest" href="/bookMaker/icon/manifest.json">
    <link rel="mask-icon" href="/bookMaker/icon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/bookMaker/icon/favicon.ico">
    <meta name="msapplication-config" content="/bookMaker/icon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
<?
print"<script>var ses;</script>";
if(array_key_exists("lis_person_name_given", $_POST)){
$JSON_POST=json_encode($_POST);
print <<<EOT
 <script src="/LTI/js/grading.js"></script>
<script>
ses=$JSON_POST;
</script>
EOT;
}
else{
print_r("<!---not found $_POST----->");

}


?>

</head>

<body>
    <div id="stage" class="screen">
        <div id="header">
            <div id="headerContent">
                <div id="moduleTitle"></div>
            </div>
            <div id="fullScreenButton"></div>
        </div>
        <div id="sidebar"></div>
        <div id="content">
          <div id="gradesOverlayTransparent" class="hidden">
          </div>
            <div id="gradesOverlay" class="hidden">
              <div id="gradesOverlayHeader"><u>Grades</u></div>
              <div id="gradesOverlayContent">Not Avaliable Yet!</div>
            </div>
            <div id="contentLoader"></div>
            <div id="overlay"></div>
        </div>
        <div id="footer">
            <div id="gradingInfo"></div>
            <div id="pageNumberLabel">Section</div>
            <div id="pageNumberText">?-?</div>
            <div id="buttonPrevious"></div>
            <div id="buttonNext"></div>
            <div id="overlayButtons">
                <div id="overlayButton1" class="overlayButton rounded"></div>
                <div id="overlayMenu" class="hidden">
                  <div id="overlayMenuOptions"></div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
