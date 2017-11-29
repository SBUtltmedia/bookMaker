var chapters = [];

var testing = false;
var clearLocalStorage = true;

var refreshInterval = -1;

var currentPage = {
  chapterID: 0,
  quizID: 0
}

var isFullScreen = false;

var canShowOverlay = false;
var showingOverlay = false;

var progress;

// Called on page load.
$(function() {

  if(clearLocalStorage){
    localStorage.clear();
    console.log("Cleared for Testing!")
  }

  $.getJSON("module.json", function(data) {
    module = data;
    progress = new Progress(module.localStorageKey);
    loadModule(module);
  }).fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });;

  $("#buttonPrevious").click(function() {
    nextPage(-1);
  });

  $("#buttonNext").click(function() {
    nextPage(1);
  });

  $("#fullScreenButton").click(function() {
    var userAgent = window.navigator.userAgent;
    if (isFullScreen) {
      // setFullScreen(false);
      exitFullscreen();
      if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        isFullScreen = false;
      }
    } else {
      launchFullscreen();
      if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        isFullScreen = true;
      }
    }
  });

  $("#overlayButton1").click(function() {
    if (canShowOverlay) {
      if (!showingOverlay) {
        showOverlay(true);
      } else {
        showOverlay(false);
      }
    }
  });

  $(document).keydown(function (e) {
    switch(e.which) {
        case 37: // left
        $("#buttonPrevious").click();
        break;

        case 39: // right
        $("#buttonNext").click();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

});

// Find the right method, call on correct element
function launchFullscreen() {
  var i = document.getElementById("contentLoader");
  if(i.requestFullscreen) {
    i.requestFullscreen();
  } else if(i.mozRequestFullScreen) {
    i.mozRequestFullScreen();
  } else if(i.webkitRequestFullscreen) {
    i.webkitRequestFullscreen();
  } else if(i.msRequestFullscreen) {
    i.msRequestFullscreen();
  }else{
    $("#content").css({
      "width" : "100%",
      "height" : "100%",
      "left" : "0%",
      "top" : "0%",
    });
  $("#headerContent").css("visibility","hidden");
  }
  $("#fullScreenButton").removeClass("anim_fullScreenButtonOut");
  $("#fullScreenButton").addClass("anim_fullScreenButtonIn");
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }else{
    $("#content").css({
      "width" : "85%",
      "height" : "85%",
      "left" : "15%",
      "top" : "5%",
    });
    $("#headerContent").css("visibility","visible");
  }
  $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
  $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
  resizeWindow();
}

function dumpFullscreen() {
  console.log("document.fullscreenElement is: ", document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  console.log("document.fullscreenEnabled is: ", document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
}

// Events
document.addEventListener("fullscreenchange", function(e) {
  console.log("fullscreenchange event! ", e);

  if(isFullScreen){
    $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
    $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
    isFullScreen = false;
  }else{

    isFullScreen = true;
  }
});
document.addEventListener("mozfullscreenchange", function(e) {
  console.log("mozfullscreenchange event! ", e);

  if(isFullScreen){
    $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
    $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
    isFullScreen = false;
  }else{

    isFullScreen = true;
  }
});
document.addEventListener("webkitfullscreenchange", function(e) {
  console.log("webkitfullscreenchange event! ", e);

  if(isFullScreen){
    $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
    $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
    isFullScreen = false;
  }else{

    isFullScreen = true;
  }
});
document.addEventListener("msfullscreenchange", function(e) {
  console.log("msfullscreenchange event! ", e);

  if(isFullScreen){
    $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
    $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
    isFullScreen = false;
  }else{

    isFullScreen = true;
  }
});

// Set full screen
function setFullScreen(bool) {
  isFullScreen = bool;
  if (isFullScreen) {
    $("#content").removeClass("anim_fullScreenOff");
    $("#content").addClass("anim_fullScreenOn");
    $("#headerContent").removeClass("anim_quickFadeIn");
    $("#headerContent").addClass("anim_quickFadeOut");
    $("#fullScreenButton").removeClass("anim_fullScreenButtonOut");
    $("#fullScreenButton").addClass("anim_fullScreenButtonIn");
  } else {
    $("#content").removeClass("anim_fullScreenOn");
    $("#content").addClass("anim_fullScreenOff");
    $("#headerContent").removeClass("anim_quickFadeOut");
    $("#headerContent").addClass("anim_quickFadeIn");
    $("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
    $("#fullScreenButton").addClass("anim_fullScreenButtonOut");
  }
}

// Loads the module m into the view.
function loadModule(m) {
  // Clear sidebar
  clearSidebar();
  // Create sidebar thumbnails
  for (var i = 0; i < m.chapters.length; i++) {
    // For each chapter...
    initChapter(m.chapters[i]);
    // Make chapter thumbnail
    makeChapterThumbnail(m.chapters[i], i);
    // Make page thumbnails
    for (var j = 0; j < m.chapters[i].pages.length; j++) {
      makePageThumbnail(m.chapters[i].pages[j], i, j);
    }
  }
  // Set positions of thumbnails
  animateThumbPositions(chapters, true);

  setPages();
  // Check completion
  updateCompletion();
  // refreshInterval = setInterval(function() {
  //   updateCompletion();
  // }, 1000);
  setContent(chapters[0].pages[0], 0, 0);
  resizeWindow();
}

function clearSidebar() {
  $("#sidebar").empty();
}

function makeChapterThumbnail(ch, chapterID) {
  // Create divs
  $("#sidebar").append('<div id="thumbBox' + chapterID + '" class="thumbBox chapterBox"></div>');
  $("#thumbBox" + chapterID).append('<div id="thumb' + chapterID + '" class="thumb chapterThumb"></div>');
  $("#thumb" + chapterID).append('<div id="thumbText' + chapterID + '" class="thumbText"></div>');
  $("#thumb" + chapterID).append('<div id="thumbType' + chapterID + '" class="thumbType"></div>');
  $("#thumb" + chapterID).append('<div id="thumbNumber' + chapterID + '" class="thumbNumber"></div>');

  // Set title text
  $("#thumbText" + chapterID).text(ch.title);
  // Set chapter number
  $("#thumbNumber" + chapterID).text(chapterID + 1);
  // Bind event listener
  initChapterThumbnailClick(chapterID);
}

function initChapterThumbnailClick(i) {
  $("#thumb" + i).click(function() {
    chapters[i].expanded = !chapters[i].expanded;
    for (var j = 0; j < chapters[i].pages.length; j++) {
      if ($("#thumbBox" + i + "-" + j).css("visibility") == "hidden") {
        $("#thumbBox" + i + "-" + j).css("visibility", "visible");
        $("#thumbGlow" + i + "-" + j).css("left", "11%");
      } else {
        $("#thumbBox" + i + "-" + j).css("visibility", "hidden");
        $("#thumbGlow" + i + "-" + j).css("left", "6%");
      }
    }
    animateThumbPositions(chapters, false);
  });
}

function makePageThumbnail(pg, chapterID, pageID) {
  // Create divs
  $("#sidebar").append('<div id="thumbBox' + chapterID + '-' + pageID + '" class="thumbBox pageBox"></div>');
  $("#thumbBox" + chapterID + "-" + pageID).append('<div id="thumb' + chapterID + '-' + pageID + '" class="thumb pageThumb"></div>');
  $("#thumbBox" + chapterID + "-" + pageID).append('<div id="thumbGlow' + chapterID + '-' + pageID + '" class="thumbGlow"></div>');
  $("#thumb" + chapterID + "-" + pageID).append('<div id="thumbText' + chapterID + '-' + pageID + '" class="thumbText"></div>');
  $("#thumb" + chapterID + "-" + pageID).append('<div id="thumbType' + chapterID + '-' + pageID + '" class="thumbType"></div>');
  $("#thumb" + chapterID + "-" + pageID).append('<div id="thumbTypeText' + chapterID + '-' + pageID + '" class="thumbTypeText"></div>');
  // Set title text
  $("#thumbText" + chapterID + "-" + pageID).text(pg.title);
  // Set type text

  $("#thumbTypeText" + chapterID + "-" + pageID).text(pg.type.toUpperCase());

  // if (pg.type == "text") {
  //   $("#thumbTypeText" + chapterID + "-" + pageID).text("TEXT");
  // } else if (pg.type == "vq") {
  //   $("#thumbTypeText" + chapterID + "-" + pageID).text("VIDEO QUIZ");
  // } else if (pg.type == "html") {
  //   $("#thumbTypeText" + chapterID + "-" + pageID).text(pg.thumbText);
  // }

  // Bind event listener
  initPageThumbnailClick(chapterID, pageID);
}

function initPageThumbnailClick(i, j) {
  $("#thumb" + i + "-" + j).click(function() {
    currentPage.chapterID = i;
    currentPage.quizID = j;
    setContent(chapters[i].pages[j], i, j);
    $("#thumb" + i + "-" + j).attr("clicked", true)
      updateCompletion();
  });
}

function animateThumbPositions(chapters, isInstant) {
  var thumbCount = -1;
  var delay = 250;
  if (isInstant) {
    delay = 0;
  }
  for (var i = 0; i < chapters.length; i++) {
    thumbCount++;
    animateToPosition($("#thumbBox" + i), thumbCount, delay);
    for (var j = 0; j < chapters[i].pages.length; j++) {
      if (chapters[i].expanded) {
        thumbCount++;
      }

      animateToPosition($("#thumbBox" + i + "-" + j), thumbCount, delay);
    }
  }
}

function animateToPosition(div, position, duration) {
  div.animate({
    "top": (12.5 * position) + "%"
  }, duration);
}

function initChapter(ch) {
  var chapter = new Chapter(ch);
  chapters.push(chapter);
}

function Chapter(ch) {
  var chapter = {};
  chapter.title = ch.title;
  chapter.pages = [];
  for (var i = 0; i < ch.pages.length; i++) {
    var page = new Page(ch.pages[i]);
    chapter.pages.push(page);
  }
  chapter.expanded = false;
  return chapter;
}

function Page(pg) {
  var page = {};
  page.type = pg.type;
  page.title = pg.title;
  page.content = pg.content;
  page.overlays = pg.overlays;
  page.key = pg.key;
  return page;
}

// Set content in the center of the page to
function setContent(pg, chapterID, pageID) {
  $("#contentLoader").empty();
  if (pg.type == "text") {
    // TODO: display text
    $("#contentLoader").append('<div id="contentText"></div>');
    $("#contentText").html(pg.content);
  } else {
    // Display an iframe containing the specified video quiz
    $("#contentLoader").append('<iframe id="contentFrame"></iframe>');
    if (pg.content) {
      $("#contentFrame").attr("src", pg.content + "?testing=" + testing + "&key=" + pg.type + "_" + chapterID + "_" + pageID + "&local=" + module.localStorageKey);
    }

  }

  if (showingOverlay) {
    showOverlay(false);
  }
  $(".overlayButton").removeClass("caliperButton");
  $(".overlayButton").removeClass("btn");
  $("#overlay").empty();
  canShowOverlay = false;
  if (pg.overlays != null && pg.overlays != undefined) {
    if (pg.overlays.length > 0) {
      $("#overlayButton1").addClass("btn");
      var overlay = pg.overlays[0];
      if (overlay == "calipers") {
        $("#overlayButton1").addClass("caliperButton");
      }
      $("#overlay").append('<iframe id="overlayFrame"></iframe>');
      $("#overlayFrame").attr("src", module.overlayURLs[overlay]);
      canShowOverlay = true;
    }
  }
  $(".thumbGlow").css("visibility", "hidden");
  $("#thumbGlow" + chapterID + "-" + pageID).css("visibility", "visible");
  $("#pageNumberText").text((chapterID + 1) + "-" + (pageID + 1));
  resizeWindow();


}

function nextPage(offset) {
  var moved = false;
  while (offset != 0) {
    if (offset > 0) {
      if (currentPage.quizID < chapters[currentPage.chapterID].pages.length - 1) {
        currentPage.quizID++;
        moved = true;
      } else {
        if (currentPage.chapterID < chapters.length - 1) {
          currentPage.chapterID++;
          currentPage.quizID = 0;
          moved = true;
        }
      }
      offset--;
    } else if (offset < 0) {
      if (currentPage.quizID > 0) {
        currentPage.quizID--;
        moved = true;
      } else {
        if (currentPage.chapterID > 0) {
          currentPage.chapterID--;
          currentPage.quizID = chapters[currentPage.chapterID].pages.length - 1;
          moved = true;
        }
      }
      offset++;
    }
  }
  if (moved) {
    setContent(chapters[currentPage.chapterID].pages[currentPage.quizID], currentPage.chapterID, currentPage.quizID);
  }
}

// Update completion
function updateCompletion() {

  $(".thumbType").removeClass("page_incomplete");
  $(".thumbType").removeClass("page_complete");

  console.log('\n' + "----------Update Completion----------");

  for (var i = 0; i < chapters.length; i++) {

      var completedPages = 0;
      var chapterSelected = chapters[i];
      var chapterEl = $("#thumbType" + i);

      completedPages = updatePages(i,completedPages);

    if(completedPages == chapterSelected.pages.length){
        chapterEl.addClass("chapter_complete")
    }else{
      chapterEl.addClass("chapter_incomplete")
    }
  }

  console.log("----------End Update Completion----------" + '\n');
}

function updatePages(i,completedPages){

  for (var j = 0; j < chapters[i].pages.length; j++) {

    var complete = false;
    var pg = chapters[i].pages[j];
    var thumbEl = $("#thumbType" + i + "-" + j)
    var key = progress.getKey(pg.type + "_" + i + "_" + j);

    console.log(key,pg.type,i,j, $("#thumb" + i + "-" + j).attr("clicked"))

    if (pg.type == "text" && $("#thumb" + i + "-" + j).attr("clicked")) {

      thumbEl.addClass("page_complete");

    } else if (pg.type == "vq") {

      // Check local storage
      var quizCompletion = JSON.parse(localStorage.getItem(pg.content));
      var complete = false;

      if (quizCompletion != null) {
        complete = true;
        for (var k = 0; k < quizCompletion.length; k++) {
          if (quizCompletion[k] == false) {
            complete = false;
          }
        }
      }
    } else if (progress.getKey(pg.type + "_" + i + "_" + j)) {
      thumbEl.addClass("page_complete");
      completedPages++;
  } else{
      thumbEl.addClass("page_incomplete");
    }
  }

  return completedPages;

}

function showOverlay(bool) {
  showingOverlay = bool;
  if (showingOverlay) {
    $("#overlay").removeClass("anim_overlayOff");
    $("#overlay").addClass("anim_overlayOn");
  } else {
    $("#overlay").removeClass("anim_overlayOn");
    $("#overlay").addClass("anim_overlayOff");
  }
}

function setPages() {
  for (var i = 0; i < chapters.length; i++) {
    for (var j = 0; j < chapters[i].pages.length; j++) {
      $("#thumbBox" + i + "-" + j).css("visibility", "hidden");
    }
  }
}
