
  $('#contentCover #title').html(state.lookup[currentPage.chapterID].title)
  $('#contentCover').append($('<div/>',{id:"image_"+currentPage.chapterID,class:"chapterImage"}))
  //$('img').addClass("image_"+query["chapterNum"]);
