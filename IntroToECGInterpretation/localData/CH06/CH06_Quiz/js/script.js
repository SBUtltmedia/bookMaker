$(function() {
  resize();
  $(window).resize(resize)

  function resize() {
    $('html').css('fontSize', $('body').width() / 100 + "px")
  }
})
var urlVars = getUrlVars();
var progress = new Progress(urlVars["local"]);
var answerEnum = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"] // DIVS TO BE MADE AS B
} // DIVS TO BE MADE AS BUTTON

var retrying = false;
var currentIndex = 0;
var questionsNotAnswered = [];
var answerCount;
var scenarios = []; // ANSWER KEY
$.ajax({
  url: "/gproxy/?id=e/2PACX-1vQEE8WmJuAonUYLqismjT0Et98aHvCm88KQil0dr-WVGeURltEtLcquMBDlzrQ04NlsGs-iGEeEvz0w&gid=1760465612"
}).done(function(data) {

  var quizInfo = $.csv.toArrays(data);
  if (urlVars["testing"] == "true") {
    quizInfo = quizInfo.slice(0, 3);
  }

  if (progress.getKey(urlVars["key"]) == "done" && retrying == false) {
    $("#completedDisplayHeader,#completedDisplayText,#OverlayCorrectChoice").css('color', '#2ab673');
    openCompletedDisplay();
  }
  //console.log(quizInfo.length - 1);
  for (var i = 0; i < quizInfo.length - 1; i++) {
    questionsNotAnswered.push(i);

    scenario = {};
    scenario["options"] = {};
    scenario["optionsText"] = {};
    scenario["scenarioText"] = quizInfo[i + 1][quizInfo[0].indexOf("Question")];
    scenario["correct_options"] = quizInfo[i + 1][quizInfo[0].indexOf("Correct Answer")];
    scenario["image"] = quizInfo[i + 1][quizInfo[0].indexOf("Image")];
    scenario["correct_image"] = quizInfo[i + 1][quizInfo[0].indexOf("Answer Image")];
    answerEnum["options"].forEach(function(val, idx) {

      scenario["options"][idx] = quizInfo[i + 1][quizInfo[0].indexOf(val)];
      scenario["optionsText"][idx] = quizInfo[i + 1][quizInfo[0].indexOf(val + " Text")];

    })

    scenarios.push(scenario)

  }

  startQuestion();
  createAnswerAreas();

  //scenarios.push([quizInfo[i+1][0],[quizInfo[i+1][1],quizInfo[i+1][2]]]);
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function closeAnswerDisplay() {
  if (retrying == false) {
    openCompletedDisplay();
    nextQuestion();
  }
  document.getElementById("answerDisplay").style.left = "-100%";
  setTimeout(function() {
    createAnswerAreas();
  }, 250);
}

function closeCompletedDisplay() {
  document.getElementById("completedDisplay").style.left = "-100%";
  setTimeout(function() {
    createAnswerAreas();
  }, 250);
}

function closeImageEnlargeDisplay() {
  document.getElementById("imageEnlargeDisplay").style.left = "-100%";
  setTimeout(function() {
    createAnswerAreas();
  }, 250);
}

function createAnswerAreas() {

  var answer = scenarios[questionsNotAnswered[currentIndex]];
  $("#options").empty();


  for (var propertyName in answerEnum) {

    answerEnum[propertyName].forEach(function(val, idx) {

      if(answer.options[idx].replace(/\s/g,'') != ''){
      var posDiv = $('<div/>')
      $(posDiv).html(answer.options[idx])
      $(posDiv).attr("id", val)
      $(posDiv).attr("class", "answerOption")

      $('#' + propertyName).append(posDiv);
    }

    })

    $('#' + propertyName + " div").on("click", handleClick);
    $('#' + propertyName + " div").css("cursor", "pointer");

    if(answer.image == ""){
      $("#image").attr("style", "display: none");
    }else{
      $("#image").attr("style", "display: initial");
      $("#image").attr("src", answer.image);
      $("#imageEnlarge").attr("src", answer.image);
    }

    if(answer.correct_image==""){
      $("#correctImage").attr("style", "display: none");
    }else{
      $("#correctImage").attr("style", "display: initial");
      $("#correctImage").css("display","contents");
      $("#correctImage").attr("src", answer.correct_image);
    }
  }
}

function handleClick(evt) {

  var clickedItem = $(evt.target).html();
  var clickedCategory = $(evt.target).attr("id");
  var correctItem = capitalizeFirstLetter(scenarios[currentScenario]["correct_options"]);

  if (clickedItem.toLowerCase() == correctItem.toLowerCase()) {

    $('#' + clickedCategory + 'Container').css({
      "pointer-events": "none"
    });

    showCorrect(clickedItem, clickedCategory);

  } else {
    showIncorrect(clickedItem, clickedCategory);
  }

}

function nextQuestion() {
  if (questionsNotAnswered.length != 0) {
    startQuestion();
    $("#optionsText").empty();
    $('#optionsContainer,#options').css("pointer-events", "auto");
    retrying = true;
  } else {
    repopulatingQuestionsNotAnswered();
  }
}

function repopulatingQuestionsNotAnswered() {
  for (var i = 0; i < scenarios.length; i++) {
    questionsNotAnswered.push(i);
  }
  currentIndex = 0;
  retrying = false;
}

function openAnswerDisplay(ChosenItem, ChosenCategory) {
  document.getElementById("answerDisplay").style.left = "0%";

  var chosenOptionsDisplay = capitalizeFirstLetter(ChosenItem);
  var optionNumber = parseInt(ChosenCategory.charAt(ChosenCategory.length-1));
  var chosenOptionsDisplayText = scenarios[currentScenario].optionsText[optionNumber-1];
  var correctOptionsDisplay = capitalizeFirstLetter(scenarios[currentScenario].correct_options);

  $("#OverlayChosenOption").html(chosenOptionsDisplay);
  $("#OverlayChosenOptionText").html(chosenOptionsDisplayText);
  $("#OverlayCorrectChoice").html(correctOptionsDisplay);

  $("#OverlayCorrectChoice").css('color', '#2ab673');
}

function showCorrect(clickedItem, clickedCategory) {
  $("#OverlayHeader").html("<u>Correct</u>");
  $("#OverlayHeader,#OverlayChosenOption").css("color", "#2ab673");
  openAnswerDisplay(clickedItem, clickedCategory);

  questionsNotAnswered.splice(currentIndex, 1);
  currentIndex %= questionsNotAnswered.length;

  nextQuestion();
}

function showIncorrect(clickedItem, clickedCategory) {
  $("#OverlayHeader").html("<u>Incorrect</u>");
  $("#OverlayHeader,#OverlayChosenOption").css("color", "#ed1c24");
  openAnswerDisplay(clickedItem, clickedCategory);

  currentIndex += 1;
  currentIndex %= questionsNotAnswered.length;

  nextQuestion();
}

function openCompletedDisplay() {
  document.getElementById("completedDisplay").style.left = "0%";
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
}

function openImageEnlargeDisplay() {
  document.getElementById("imageEnlargeDisplay").style.left = "0%";
}

function startQuestion() {
  answerCount = 0;
  currentScenario = questionsNotAnswered[currentIndex];
  $("#scenarioHeader").html("Scenario " + (currentScenario + 1) + " / " + scenarios.length);
  $('#scenarioText').html("<pre>"+scenarios[questionsNotAnswered[currentIndex]].scenarioText+"</pre>");
$("pre").css("font-family","FuturaDemi");

  $("#optionsTextHeader").html("Choose One Above").css({
    "background-color": "#7e828c",
    "color": "white"
  });
}
