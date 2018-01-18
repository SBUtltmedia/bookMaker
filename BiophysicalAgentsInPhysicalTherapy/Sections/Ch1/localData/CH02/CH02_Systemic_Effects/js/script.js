$(function() {
  resize();
  $(window).resize(resize);

  checkButton();
  setupVideo();

  resize();
  $(window).resize(resize);

  function resize() {
    $('html').css('fontSize', $('body').width() / 50 + "px")
  }
});

var urlVars = getUrlVars();
var progress = new Progress(urlVars["local"]);

function setupVideo(){

   AdobeEdge.loadComposition('boy', 'EDGE-39385733', {
    scaleToFit: "both",
    centerStage: "horizontal",
    minW: "0rem",
    maxW: "undefined",
    minH: "0rem",
    maxH: "undefined",
    width: "550px",
    height: "400px",
    bScaleToParent: true
}, {dom: [ ]}, {dom: [ ]})

}

function replay(){
  var symbol = AdobeEdge.getComposition("EDGE-39385733").getStage().getSymbol("Stage");
  var position = symbol.getPosition();
  var timelength = symbol.getDuration();

if (position != timelength){
  if(symbol.isPlaying()){
    symbol.stop(position);
    symbol.$("boy3")[0].pause();
    show();
  }else{
  symbol.play(position);
  symbol.$("boy3")[0].play();
  hide();
  }
}else{
  symbol.play(0);
  symbol.$("boy3")[0].currentTime = 0;
  symbol.$("boy3")[0].play();
  hide();
}

}

function hide(){
  $("#playButton").addClass("disabled");
  $("#playButton").css({
    "width":"100%",
    "height":"100%",
    "left": "0%",
    "top": "0%"
  });
}

function show(){
  $("#playButton").css({
    "width":"20%",
    "height":"10%",
    "left": "40%",
    "top": "52.5%"
  });
  $("#playButton").removeClass("disabled");
}


function setCompleted() {
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
  show();
  $('#playButton').css("background-color","#2ab673");
  $('#playButton').html("Replay Video")
}

function checkButton(){
  if(progress.getKey(urlVars["key"]) == "done"){
    $('#playButton').css("background-color","#2ab673");
    $('#playButton').html("Replay Video")
  }else{
    $('#playButton').css("background-color","ed1c24");
    $('#playButton').html("Play Video To Complete Page")
  }
}
