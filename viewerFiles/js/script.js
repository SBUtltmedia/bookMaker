var Books = [];
var SectionIndex = 0;

$(function() {


  $.getJSON("viewerFiles/books.json", function(data) {

  }).done(function(data) {
    setupBooks(data);
  });

});

function setPage(factor){

  var tempPage = SectionIndex + factor;
  console.log(tempPage, Books.length);

  if(Books.length == 0){

    $("#leftArrow").addClass("hide");
    $("#rightArrow").addClass("hide");
    setSection(SectionIndex);

  }else if(tempPage >= Books.length-1){

    $("#leftArrow").removeClass("hide");
    $("#rightArrow").addClass("hide");
    SectionIndex = Books.length-1;
    setSection(SectionIndex);

  }else if(tempPage <= 0){

    $("#leftArrow").addClass("hide");
    $("#rightArrow").removeClass("hide");
    SectionIndex = 0;
    setSection(SectionIndex);

  }else if(tempPage >= 1 && tempPage <= Books.length-1){

    $("#leftArrow").removeClass("hide");
    $("#rightArrow").removeClass("hide");
    SectionIndex = tempPage;
    setSection(SectionIndex);
  }

}

function setupBooks(book) {

  var page = {};

  for(var i = 0; i < book.Books.length; i++){

    var page = {};

    page.url = book.Books[i].url;
    page.name = book.Books[i].title;
    page.img = book.Books[i].img;

    Books.push(page);
  }

  setPage(0);

}

function setSection(pageNum){
    $("#page").attr("src",Books[pageNum].img);
    $("#goTitle").html(Books[pageNum].name);
    $("#goButton").click(function(){
      window.open(Books[pageNum].url, "_self");
    });
}
