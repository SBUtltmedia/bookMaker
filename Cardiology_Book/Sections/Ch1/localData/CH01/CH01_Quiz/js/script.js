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
  url: "//apps.tlt.stonybrook.edu/gproxy/?id=e/2PACX-1vQBU9RsWb2EraX9ZwBbANyiHq6b63FUB_U5FnYqiQEDi2KdAIoounM9huMhDb6VSB5wpDR1_StfUEpp&gid=1760465612"
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
    scenario["correct_image"] = quizInfo[i + 1][quizInfo[0].indexOf("Image")];
    answerEnum["options"].forEach(function(val, idx) {

      scenario["options"][idx] = quizInfo[i + 1][quizInfo[0].indexOf(val)];
      scenario["optionsText"][idx] = quizInfo[i + 1][quizInfo[0].indexOf(val + " Text")];

    })

    scenarios.push(scenario)

  }

  startQuestion();

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
  document.getElementById("answerDisplay").style.width = "0%";
}

function closeCompletedDisplay() {
  document.getElementById("completedDisplay").style.width = "0%";
}

function createAnswerAreas(answer) {

  $("#options").empty();

  for (var propertyName in answerEnum) {

    answerEnum[propertyName].forEach(function(val, idx) {

      var posDiv = $('<div/>')
      $(posDiv).html(answer.options[idx])
      $(posDiv).attr("id", val)

      $('#' + propertyName).append(posDiv)

    })
    $('#' + propertyName + " div").on("click", handleClick);
    $('#' + propertyName + " div").css("cursor", "pointer");
  }
}

function handleClick(evt) {

  var clickedItem = evt.target.id
  var clickedCategory = $(evt.target).parent().attr("id")
  var correctItem = capitalizeFirstLetter(scenarios[currentScenario]["correct_" + clickedCategory]);

  $('#' + clickedCategory + 'TextHeader').html(clickedItem);
  $('#' + clickedCategory + "Text").html(scenarios[currentScenario][clickedCategory][clickedItem]);

  if (clickedItem.toLowerCase() == correctItem.toLowerCase()) {
    answerCount++;
    $('#' + clickedCategory + 'Container').css({
      "pointer-events": "none"
    });

    if (answerCount > 0) {
      $("#hotPacksSection").css("visibility", "visible");
    }

    if (answerCount == 2) {
      showCorrect(clickedItem, clickedCategory);
    }

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
  document.getElementById("answerDisplay").style.width = "100%";

  var chosenOptionsDisplay;
  var chosenOptionsDisplayText;
  var correctOptionsDisplay = capitalizeFirstLetter(scenarios[currentScenario].correct_options);



  if (ChosenCategory == "options") {
    chosenOptionsDisplay = capitalizeFirstLetter(scenarios[currentScenario].correct_options);
    chosenOptionsDisplayText = scenarios[currentScenario].optionsText;
    $("#OverlayChosenOptions,#OverlayChosenOptionsText").css('color', '#2ab673');
  }

  var correctChoiceText = correctOptionsDisplay;

  $("#OverlayChosenOptions").html(chosenOptionsDisplay);
  $("#OverlayChosenOptionsText").html(chosenOptionsDisplayText);
  $("#OverlayCorrectChoice").html(correctChoiceText);

  $("#OverlayCorrectChoice").css('color', '#2ab673');
}

function showCorrect(clickedItem, clickedCategory) {
  $("#OverlayHeader").html("<u>Correct</u>");
  $("#OverlayHeader,#OverlayChosenOptions,#OverlayChosenOptions").css("color", "#2ab673");
  openAnswerDisplay(clickedItem, clickedCategory);

  questionsNotAnswered.splice(currentIndex, 1);
  currentIndex %= questionsNotAnswered.length;

  nextQuestion();
}

function showIncorrect(clickedItem, clickedCategory) {
  $("#OverlayHeader").html("<u>Incorrect</u>");
  $("#OverlayHeader,#OverlayChosenOptions,#OverlayChosenOptions").css("color", "#ed1c24");
  openAnswerDisplay(clickedItem, clickedCategory);

  currentIndex += 1;
  currentIndex %= questionsNotAnswered.length;

  nextQuestion();
}

function openCompletedDisplay() {
  document.getElementById("completedDisplay").style.width = "100%";
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
}

function startQuestion() {
  answerCount = 0;
  currentScenario = questionsNotAnswered[currentIndex];
  $("#scenarioHeader").html("Scenario " + (currentScenario + 1) + " / " + scenarios.length);
  $('#scenarioText').html(scenarios[questionsNotAnswered[currentIndex]].scenarioText);


  $("#optionsTextHeader").html("Choose One Above").css({
    "background-color": "#7e828c",
    "color": "white"
  });

  createAnswerAreas(scenarios[questionsNotAnswered[currentIndex]]);
}
