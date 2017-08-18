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

function playPause() {

    if ($("#videoPlayer")[0].currentTime == $("#videoPlayer")[0].duration){
      $("#videoPlayer")[0].currentTime = '0';
    }else if ($("#videoPlayer")[0].paused){
      $("#videoPlayer")[0].play();
    }else if ($("#videoPlayer")[0].currentTime == 0){
      $("#videoPlayer")[0].play();
    }else{
      $("#videoPlayer")[0].pause();
    }

}

function setCompleted() {
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
  $("#videoPlayer")[0].currentTime = '0';
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
