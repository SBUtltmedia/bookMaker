$(function() {


  $.getJSON("Sections/module.json", function(data) {

  }).done(function(data) {
    setupSections(data);
    setSection(0);
  });

});

var Sections = [];

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
}

function setSection(pageNum){
  $("#title").html(Sections[pageNum].name);
  $("#description").html(Sections[pageNum].description);
}
