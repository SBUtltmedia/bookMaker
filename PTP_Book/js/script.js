$(function() {


  $.getJSON("Sections/module.json", function(data) {

  }).done(function(data) {
    setupChapters(data);
  });;

  });


function setupChapters(book) {
  for(var i = 0; i < book.Sections.length; i++){
    var divID = "CH" + (i+1);

    $( "#Chapters" ).append( '<div id='+ divID +' class="chapterIcon flex"> </div>' );
  }
}
