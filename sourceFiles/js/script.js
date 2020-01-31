var state={}
state.chapters = [];
state.chapterList=[];
state.lookup={};
state.stem=1;
var testing = false;
var clearLocalStorage = false;
var hideSpeed=0;
var refreshInterval = -1;
var timeOut=null;
var currentPage = {
chapterIndex: 0,
	      quizIndex: 0
}

var isFullScreen = false;

var canShowOverlay = false;
var showingOverlay = false;
var debug = false;
var progress;
var zero = false;
var numbers = true;

// Called on page load.
$(function() {


		$.getJSON("module.json", function(data) {
				module = data;
				progress = new Progress(module.localStorageKey);
				loadModule(data)
				syncIVQ().then(()=>{
						updateCompletion("start",100,"done");
						})
				//updateCompletion("start",100,"done");
				$(window).on( "unload", ()=> updateCompletion("start",100,"done") )



				});






		var buttons=["#buttonPrevious", "#buttonNext"];

		$(buttons.join(",")).on("click",function(evt) {
				var direction = (buttons.indexOf("#"+evt.currentTarget.id) * 2) - 1;
				var chapterListLength = state.chapterList.length;
				var  chapterIndex=state.chapterList.indexOf(currentPage.chapterID);
				var newPageIndex =(chapterIndex+chapterListLength+direction)%chapterListLength;
				navigateToPage(state.chapterList[newPageIndex]);
				//$().click();
				//setContent(state.chapterList[newPageIndex]);
				});

		$("#gradingInfo").click(function() {
				///  showGrades();
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

		$(document).keydown(function(e) {
				switch (e.which) {
				case 37: // left
				$("#buttonPrevious").click();
				break;

				case 39: // right
				$("#buttonNext").click();
				break;

				default:
				return; // exit this handler for other keys
				}
				e.preventDefault(); // prevent the default action (scroll / move caret)
				});

});

function syncIVQ(){
	var defer= $.Deferred();
	var ivqList={};
	for(i of state.chapterList){
		var pageContent=state.lookup[i];
		if(pageContent.type=="video"){
			ivqList[i]=pageContent.content;

		}
	}
	progress.syncKeys(ivqList).then(()=>defer.resolve())
		return defer.promise();
}

function navigateToPage(thumbID){

	state.stem=thumbID;

	window.location='#thumb_'+thumbID;
	$('.thumb').removeClass("selected")
		$('#thumb_'+thumbID).addClass("selected")
		var branchClicked = $("#thumbBox_"+$("#thumb_"+thumbID).parent().attr("id").split("_")[1])
		//Setting the currentPage chapterID and QuizID based on the clicked thumb for
		//later usage with next page and previous page
		currentPage.chapterID = state.stem
		setContent(state.stem)


		$(".thumbBox").each(function(idx,val){

				var searchBranch= "#thumbBox_"+$(val).attr("id").split("_")[1];
				if($(searchBranch).attr("id")!=branchClicked.attr("id")){
				$(val).find(".thumbBox").hide(hideSpeed);
				}
				})
	hideSpeed=500;

	thumbBoxID = "#thumbBox_"+state.stem;

	var clickedItemSiblings= $("#thumb_"+thumbID).parent().find('>  .thumbBox');
	var buttonItemSiblings = $("#thumb_"+thumbID).parent().parent().find('> .thumbBox');
	var buttonItemUncles = $("#thumb_"+thumbID).parent().parent().parent().find('> .thumbBox');
	$(clickedItemSiblings).find(".thumbText").css({opacity:0})

		if ($(thumbBoxID).is(':hidden')) {
			$(thumbBoxID).show(hideSpeed);
			buttonItemSiblings.show(hideSpeed);
			buttonItemUncles.show(hideSpeed);
		}
		else if (clickedItemSiblings.is(':visible')){
			clickedItemSiblings.hide(hideSpeed)
		}
		else{
			branchClicked.show(hideSpeed)
				clickedItemSiblings.show(hideSpeed)
		}
	$(clickedItemSiblings).find(".thumbText").animate({opacity:1},1000)

}

// Find the right method, call on correct element
function launchFullscreen() {
	var i = document.getElementById("contentLoader");
	if (i.requestFullscreen) {
		i.requestFullscreen();
	} else if (i.mozRequestFullScreen) {
		i.mozRequestFullScreen();
	} else if (i.webkitRequestFullscreen) {
		i.webkitRequestFullscreen();
	} else if (i.msRequestFullscreen) {
		i.msRequestFullscreen();
	} else {
		var w = $(window).width();
		var h = $(window).height();

		var aw = $("#contentLoader").width();
		var ah = $("#contentLoader").height();
		// If the aspect ratio is greater than or equal to 4:3, fix height and set width based on height
		if ((w / h) >= 4 / 3) {
			stageHeight = h;
			stageWidth = (4 / 3) * h;
		}
		// If the aspect ratio is less than 4:3, fix width and set height based on width
		else {
			stageWidth = w;
			stageHeight = (3 / 4) * w;
		}

		var shiftw = (stageWidth / 2);
		var shifth = (stageHeight / 2);

		$("#content").css("transform", "scale(" + stageWidth / aw + ", " + stageHeight / ah + ")");
		$("#content").css({
				"left": "7.5%",
				"top": "7.5%"
				})
		$("#headerContent").css("visibility", "hidden");
	}

	$("#fullScreenButton").removeClass("anim_fullScreenButtonOut");
	$("#fullScreenButton").addClass("anim_fullScreenButtonIn");
}
function calculateTotalDuration(){
	return state.chapters[0].pages.reduce((acc,cur)=>{

			return acc+cur.duration}, 0)
}
function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else {
		iosExitFullscreen();
	}
	$("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
	$("#fullScreenButton").addClass("anim_fullScreenButtonOut");
	resizeWindow();
}

function iosExitFullscreen() {
	$("#content").css({
			"transform": "scale(1, 1)"
			});
	$("#content").css({
			"left": "15%",
			"top": "5%"
			})

	$("#headerContent").css("visibility", "visible");
}

function dumpFullscreen() {
	console.log("document.fullscreenElement is: ", document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
	console.log("document.fullscreenEnabled is: ", document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
}

// Events
document.addEventListener("fullscreenchange", function(e) {
		console.log("fullscreenchange event! ", e);

		if (isFullScreen) {
		$("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
		$("#fullScreenButton").addClass("anim_fullScreenButtonOut");
		isFullScreen = false;
		} else {
		isFullScreen = true;
		}
		});
document.addEventListener("mozfullscreenchange", function(e) {
		console.log("mozfullscreenchange event! ", e);

		if (isFullScreen) {
		$("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
		$("#fullScreenButton").addClass("anim_fullScreenButtonOut");
		isFullScreen = false;
		} else {

		isFullScreen = true;
		}
		});
document.addEventListener("webkitfullscreenchange", function(e) {
		console.log("webkitfullscreenchange event! ", e);

		if (isFullScreen) {
		$("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
		$("#fullScreenButton").addClass("anim_fullScreenButtonOut");
		isFullScreen = false;
		} else {

		isFullScreen = true;
		}
		});
document.addEventListener("msfullscreenchange", function(e) {
		console.log("msfullscreenchange event! ", e);

		if (isFullScreen) {
		$("#fullScreenButton").removeClass("anim_fullScreenButtonIn");
		$("#fullScreenButton").addClass("anim_fullScreenButtonOut");
		isFullScreen = false;
		} else {

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
	zero = m.zero;
	numbers = m.numbers;
	// Create sidebar thumbnails
	state.chapters = m.chapters;
	insertIDs(state.chapters);
	for (var i = 0; i < m.chapters.length; i++) {
		// For each chapter...

		state.chapters[i].expanded=false;
		// Make chapter thumbnail
		makeThumbnail(m.chapters[i], [i+1]);
		// Make page thumbnails
		for (var j = 0; j < m.chapters[i].pages.length; j++) {
			makeThumbnail(m.chapters[i].pages[j], [i+1, j+1]);
			if(m.chapters[i].pages[j].pages){
				for (var k = 0; k < m.chapters[i].pages[j].pages.length; k++) {
					makeThumbnail(m.chapters[i].pages[j].pages[k],[ i+1, j+1,k+1]);
				}
			}
		}
	}

	$(".thumb").on("click",function(evt){



			var thumbID=  $(evt.currentTarget).attr("id").split("thumb_")[1];
			navigateToPage(thumbID);
			})
	$("#thumb_1").trigger("click")



		// Set positions of thumbnails
		// animateThumbPositions(true);
		setPages();
	// Check completion
	updateCompletion("start",100,"done");
	setContent("1");
	calculateTotalDuration();
	resizeWindow();
}


function clearSidebar() {
	$("#sidebar").empty();
}

function initChapter(ch) {
	var chapter = new Chapter(ch);
	state.chapters.push(chapter);
}


function makeThumbnail(pg, treeInfo) {


	var pageTypes= ["chapter","page","subpage"]
		var treeInfoString=treeInfo.join("_");
	var [chapterID,pageID,subpageID]=treeInfo;
	var thumbClass=pageTypes[treeInfo.length-1]
		var chapterIndex =treeInfo[0];
	var navSelector="#sidebar"
		if (treeInfo.length!=1){
			navSelector ="#thumbBox_"+treeInfo.slice(0,-1).join("_")
		}
	state.lookup[treeInfoString]=pg;

	//gives pages no 'chapter numbers'
	if (treeInfo.length > 1) {
		chapterIndex = "";
	}
	state.chapterList.push(treeInfoString)

		var thumbBox= $('<div/>',{id:"thumbBox_" +treeInfoString, class:"thumbBox "+thumbClass+"Box"})
											    var thumb =$('<div/>',{id:"thumb_" + treeInfoString, class:"page_incomplete thumb "+thumbClass+"Thumb"})
																						var thumbText =$('<div/>',{id:"thumbText_" + treeInfoString,text:pg.title, class:"thumbText"})

																							var thumbNumber =$('<div/>',{id:"thumbNumber_" + treeInfoString, text:chapterIndex, class:"thumbNumber"})
																								var thumbGlow= $('<div/>',{id:"thumbGlow_" + treeInfoString, class:"thumbGlow"})
																									$(navSelector).append(thumbBox.append(thumb.append([thumbText,thumbNumber, thumbGlow])))

																										// Bind event listener
																										if (pageID=="chapter"){
																											//initChapterThumbnailClick(chapterID);
																										}
																										else {
																											//initPageThumbnailClick(i, j)

																										}
}




// Set content in the center of the page to
function setContent(stem) {
	clearTimeout(timeOut);

	if($("#contentLoader").data("stem")==stem){return}
	$("#contentLoader").css({"opacity":0})
		setTimeout(function(){$('#contentLoader').fadeTo("fast", 1, function() {})}, 500)
		$('#contentLoader').stop(true, true)

		$('#contentLoader').fadeTo("fast", 0, function() {$('#contentLoader').fadeTo("fast", 1, function() {})});
	currentPage.chapterID = stem;
	$("#contentLoader").data("stem",stem)
		var pg=state.lookup[stem];
	var content = pg.content;
	var qs="?testing=" + testing + "&key=" +stem+ "&local=" + module.localStorageKey;
	if (pg.type == "cover") {
		query="?title="+pg.title;
		$("#contentLoader").html('<div id="contentCover" style="width: 100%; height: 100%;" ALLOWTRANSPARENCY="true"></div>');
		$("#contentCover").load("sourceFiles/html/SectionCovers/index.html");
	}

	else if (pg.type == "text") {
		// TODO: display text
		$("#contentLoader").html('<div id="contentText" style="width: 100%; height: 100%;" ALLOWTRANSPARENCY="true"></div>');
		$("#contentText").load(pg.content);
	} else {
		// Display an iframe containing the specified video quiz
		if (pg.type == "document") {
			if (progress.getKey(pg.label).status != "done") {
				console.log(pg.label)
					updateCompletion(pg.label,100,"done")
			}
		}
		$("#contentLoader").html('<iframe id="contentFrame" style="width: 100%; height: 100%;" ALLOWTRANSPARENCY="true"></iframe>');
		if (pg.content) {
			var contentSource=pg.content + qs;



			$("#contentFrame").attr("src",contentSource);
			if (pg.type.toLowerCase() == "vq") {
				$('#contentFrame').on("load", function() {
						$('#contentFrame')
						.contents().find("head")
						.append($('<script>$("#scoreBox").css("display","none"); $("#noQuestionText").css("display","none");            </script>'));
						});
			}
		}
	}




	if (showingOverlay) {
		showOverlay(false);
	}
	$(".overlayButton").removeClass("caliperButton");
	$(".overlayButton").removeClass("btn");
	$(".overlayButton").removeClass("hidden");
	$("#overlayMenu").addClass("hidden");
	$("#overlay").empty();
	$("#overlayMenuOptions").html("");
	canShowOverlay = false;
	if (pg.overlays != null && pg.overlays != undefined) {
		if (pg.overlays.length > 0) {
			$("#overlayButton1").addClass("btn");

			$("#overlayButton1").addClass("caliperButton");
			if (pg.overlays.length == 1) {
				var overlay = pg.overlays[0];
				//if (overlay == "calipers") {
				// }
				$("#overlay").append('<iframe id="overlayFrame" ALLOWTRANSPARENCY="true"></iframe>');
				$("#overlayFrame").attr("src", module.overlayURLs[overlay]);
				canShowOverlay = true;

				$("#overlayButton1").click(function() {
						if (canShowOverlay) {
						if (!showingOverlay) {
						showOverlay(true);
						} else {
						showOverlay(false);
						}
						}
						resizeWindow();
						});

			} else {
				for (var i = 0; i < pg.overlays.length; i++) {
					linkOverlay(pg.overlays[i]);
				}
				$("#overlayButton1").off("click");
				$("#overlayButton1").on("click",
						function() {
						if ($("#overlayMenu").hasClass("hidden")) {
						$("#overlayMenu").removeClass("hidden");
						} else {
						$("#overlayMenu").addClass("hidden");
						}
						}
						);
				canShowOverlay = true;
			}

		}
	} else {
		$(".overlayButton").addClass("hidden");
	}

	var sectionArr = stem.split("_");
	if (sectionArr.constructor === Array) {
		var sectionStr = "" + sectionArr[0];
		for (i = 1; i < sectionArr.length; i++) {
			sectionStr = sectionStr + "-" + sectionArr[i];
		}
	}
	$('#pageNumberText').text(sectionStr);







}

function linkOverlay(overlay) {
	$("#overlay").append('<iframe class="' + overlay + ' overlay" ALLOWTRANSPARENCY="true"></iframe>');
	$("." + overlay).attr("src", module.overlayURLs[overlay]);
	var option = $("<a></a>");
	option.addClass('overlayMenuItem');
	option.attr('id', overlay);
	option.html(overlay);

	option.on("click", function() {
			if ($("." + overlay).hasClass("anim_overlayOff")) {

			$(".overlay").each(function() {
					$(this).removeClass("anim_overlayOn");
					$(this).addClass("anim_overlayOff");
					})

			$("." + overlay).removeClass("anim_overlayOff");
			$("." + overlay).addClass("anim_overlayOn");
			resizeWindow();
			} else {

			$(".overlay").each(function() {
					$(this).removeClass("anim_overlayOn");
					$(this).addClass("anim_overlayOff");
					})

			$("." + overlay).removeClass("anim_overlayOn");
			$("." + overlay).addClass("anim_overlayOff");
			resizeWindow();
			}
	})
	$("#overlayMenuOptions").append(option);
}




function showGrades() {
	var htAccess = true;
	if (htAccess) {
		$.ajax({
url: "sourceFiles/api/getUser"
}).done(function(keydata) {
	$("#gradesOverlayContent").html("Grading<br><strong style='color:#FF3B3F'>Loading</strong><br>Please Wait!");
	var studentInfo = organizeKey(keydata);

	grading(studentInfo);


	$("#gradesOverlay").toggleClass("hidden");
	$("#gradesOverlayTransparent").toggleClass("hidden");
	$("#gradesOverlayHeader").html("<u>" + studentInfo[0] + "'s Grades</u>");
	});
} else {
	$("#gradesOverlay").toggleClass("hidden");
	$("#gradesOverlayTransparent").toggleClass("hidden");
	$("#gradesOverlayContent").html("Grading Was<br><strong style='color:#FF3B3F'>Not Enabled</strong><br>For This Class");
}
}

function grading(studentInfo) {
	$("#gradesOverlayContent").html("<div id='vqGrading' class='hidden'></div><div id='quizGrading' class='hidden'></div>");
	$("#gradesOverlayContent").append("<div id='gradingSelection' class=''><div id='VQgradingTitleSection' class='gradingTitleSection'>VQ Grades</div><div id='QUIZgradingTitleSection' class='gradingTitleSection'>Quiz Grades</div></div>");

	$("#QUIZgradingTitleSection").click(function(){
			$("#vqGrading").removeClass("hidden");
			$("#quizGrading").removeClass("hidden");
			$("#vqGrading").addClass("hidden");
			});

	$("#VQgradingTitleSection").click(function(){
			$("#vqGrading").removeClass("hidden");
			$("#quizGrading").removeClass("hidden");
			$("#quizGrading").addClass("hidden");
			});

	for (var x = 0; x < state.chapters.length; x++) {
		var currentChapter = state.chapters[x];
		for (var y = 0; y < currentChapter.pages.length; y++) {
			var currentPage = currentChapter.pages[y];
			if (currentPage.type.toLowerCase() == "vq") {
				createVQGrade(currentPage, studentInfo);
			} else if (currentPage.type.toLowerCase() == "quiz") {
				createQUIZGrade(currentPage, studentInfo, x, y);
			}
		}
	}
}

function showDemQuizGrades(fullgrades) {
	var gradeTitle = "<div class='gradeTitleItem'><u>" + fullgrades.page + "</u></div>";
	var gradeGrades = "<div class='gradeGradesItem'>" + fullgrades.grade + "</div>";
	var grade = "<div class='gradeItem '>" + gradeTitle + gradeGrades + "</div>";
	$("#quizGrading").append(grade);
}

function showDemVQGrades(fullgrades) {
	var gradeTitle = "<div class='gradeTitleItem'><u>" + fullgrades.page + "</u></div>";
	var gradeGrades = "<div class='gradeGradesItem'>" + fullgrades.grade + "</div>";
	var grade = "<div class='gradeItem '>" + gradeTitle + gradeGrades + "</div>";
	$("#vqGrading").append(grade);
}

function createVQGrade(currentPage, studentInfo) {
	var grade = {};
	grade.page = currentPage.title;

	var linkSplit = currentPage.content.split("/");
	$.ajax({
url: "sourceFiles/api/getVQGrade/" + linkSplit[3] + "/" + linkSplit[4] + "/" + studentInfo[2]
}).done(function(keydata) {
	var calcgrade = keydata.split("/");
	if (calcgrade[1] != 0) {
	grade.grade = ((calcgrade[0] / calcgrade[1]) * 100.00).toFixed(2);
	} else {
	grade.grade = 100;
	}
	showDemVQGrades(grade);
	});
}

function createQUIZGrade(currentPage, studentInfo, x, y) {
	var grade = {};
	grade.page = currentPage.title;

	if (progress.getKey(currentPage.type + "_" + x + "_" + y).status == "done") {
		grade.grade = 100;
	} else {
		grade.grade = 0;
	}

	showDemQuizGrades(grade);
}

function organizeKey(keydata) {
	var data = keydata.split(",");

	for (var i = 0; i < data.length; i++) {
		var segment = data[i];

		segment = segment.split('"').join('');
		segment = segment.split('}').join('');
		var index = segment.indexOf(':');

		data[i] = segment.slice(index + 1, segment.length);
	}

	return data;
}


function updateCompletion(key,grade=100,status="incomplete"){
	var promiseList=[];
	console.log(progress.getDict())
		dict={}
	dict[key]={status:status, grade:grade}

	progress.setKey(dict).then(function(){for (var i = 0; i < state.chapters.length; i++) {
			promiseList.push(isChecked(state.chapters[i]));
			}})
	if(ses){
		ses.grade=progress.calculateGrade()/2000
			$('#gradingInfo').html(`Your cummulative score for this book: ${Math.floor(ses.grade*2000)}`);

		if(ses.grade){
			postLTI(ses)
		}
	}

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
	for (var i = 0; i < state.chapters.length; i++) {
		for (var j = 0; j < state.chapters[i].pages.length; j++) {
			$("#thumbBox" + i + "-" + j).css("visibility", "hidden");
		}
	}
}
