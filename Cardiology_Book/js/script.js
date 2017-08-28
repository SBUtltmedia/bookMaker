var Sections = [];
var SectionIndex = 0;

$(function() {


  $.getJSON("Sections/module.json", function(data) {

  }).done(function(data) {
    setupSections(data);
  });

});

function setPage(factor){

  var tempPage = SectionIndex + factor;
  console.log(tempPage, Sections.length);

  if(tempPage >= Sections.length-1){

    $("#leftArrow").removeClass("hide");
    $("#rightArrow").addClass("hide");
    SectionIndex = Sections.length-1;
    setSection(SectionIndex);

  }else if(tempPage <= 0){

    $("#leftArrow").addClass("hide");
    $("#rightArrow").removeClass("hide");
    SectionIndex = 0;
    setSection(SectionIndex);

  }else if(tempPage >= 1 && tempPage <= Sections.length-1){

    $("#leftArrow").removeClass("hide");
    $("#rightArrow").removeClass("hide");
    SectionIndex = tempPage;
    setSection(SectionIndex);
  }

}

function setupSections(book) {
  for(var i = 0; i < book.Sections.length; i++){

    var page = {};

    page.id = "CH" + (i+1);
    page.url = book.Sections[i].url;
    page.name = book.Sections[i].title;
    page.description = book.Sections[i].description;
    page.button = "Go to" + book.Sections[i].title;

    Sections.push(page);
  }

  setPage(0);

}

function setSection(pageNum){
  $("#title").html(Sections[pageNum].name);
  $("#description").html(Sections[pageNum].description);
  $("#goTitle").html(Sections[pageNum].name);
  $("#goButton").click(function(){
    window.open(Sections[pageNum].url, "_self");
  });
}
