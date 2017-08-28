var hovers = ["Need to screen patients for sensory deficits", "Potential for overheating", "May cause adverse reactions to heat", "Increases inflammatory response", "Potential to spread malignancy", "Metal can conduct heat, putting patient at risk for injury", "Examples: poor communication, age, cognition, language barrier", "May cause retention of additional heat"]

var defaultText = "Hover Over The Areas Above To Learn More About Them. (Hover Over All To Complete Page)"


$(function() {
  resize();
  $(window).resize(resize);

  checkDefaultText();

  $('#hoverText').html(defaultText);

  function resize() {
    $('html').css('fontSize', $('svg').width() / 50 + "px")
    $('#hoverText').css('height', $('svg').width() / 40 + "px")
  }


    $(".hex").on("mouseover", function(evt) {

    var offsetX = 0;
    var currentHover = $('.hex').index($(evt.target))

    $(evt.target).attr("hovered", true);
    $('#hoverText').html(hovers[currentHover])

    $('#sound' + (currentHover + 1))[0].play();
    $('#sound' + (currentHover + 1))[0].loop = false;

    checkHovered();

  });

  $(".hex,text").on("mouseout", function(evt) {

    var currentHover = $('.hex').index($(evt.target))

    $('#hoverText').html(defaultText)

    $('#sound' + (currentHover + 1))[0].pause();
    $('#sound' + (currentHover + 1))[0].currentTime = 0;
    $('#sound' + (currentHover + 1))[0].loop = false;

  });

  checkDefaultText();
});

var urlVars = getUrlVars();
var progress = new Progress(urlVars["local"]);

function checkDefaultText(){
    if(progress.getKey(urlVars["key"]) == "done"){
      defaultText = "Page Completed. Hover Over Areas to Relearn About Them.";
    }
}

function checkHovered() {

  var complete = 0;
  var currentMouse;

  for (i = 0; i < $('.hex').length; i++) {

    currentMouse = $('.hex').get(i);

    if (currentMouse.hasAttribute("hovered")) {
      complete++;
    }
  }

  if (complete == $('.hex').length) {
    setCompleted();
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
  checkDefaultText();
  $('#hoverText').html(defaultText);
}
