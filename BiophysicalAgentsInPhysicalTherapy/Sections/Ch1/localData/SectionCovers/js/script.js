

$(function(){

$(window).on("resize",function(){

var windowWidth= $(window).width();
$('html').css({"font-size":windowWidth/40+"px"})
console.log(windowWidth)


}).trigger("resize")
var query = parseQuery(location.search)
  $('#content #title').html(query["title"])
  $('#content').append($('<img/>',{src:"img/chapter"+ query["chapterNum"]+".svg"}))
  $('img').addClass("image_"+query["chapterNum"]);
});


function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
