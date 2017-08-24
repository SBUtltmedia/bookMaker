$(function() {


  $.getJSON("Sections/module.json", function(data) {

  }).done(function(data) {
    setupChapters(data);
  });;

  });


function setupChapters(book) {
  for(var i = 0; i < book.Sections.length; i++){
    var divID = "CH" + (i+1);
    var url = book.Sections[i].url;
    var name = book.Sections[i].title;

    $( "#Chapters" ).append( '<a href="'+url+'" class="pages" target="_self"><object type="image/svg+xml" data="media/page.svg" id='+ divID +' class="pagesIcon" onclick="window.open('+url+',_blank)"> </object><p>'+name+'</p></a>' );
  }
}
