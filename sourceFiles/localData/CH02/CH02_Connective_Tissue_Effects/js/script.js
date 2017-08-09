$(function() {
  resize();
  $(window).resize(resize);

  function resize() {
    $('html').css('fontSize', $('body').width() / 50 + "px")
  }

  checkButton();
});

var urlVars = getUrlVars();
var progress = new Progress(urlVars["local"]);

function playAudio(){
  $('#voiceover')[0].play();
  $('#voiceover')[0].loop = false
}

function setCompleted() {
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
  $('#playButton').css("background-color","#2ab673");
  $('#playButton').html("Replay Audio")
}

function checkButton(){
  if(progress.getKey(urlVars["key"]) == "done"){
    $('#playButton').css("background-color","#2ab673");
    $('#playButton').html("Replay Audio")
  }else{
    $('#playButton').css("background-color","ed1c24");
    $('#playButton').html("Play Audio To Complete Page")
  }
}
