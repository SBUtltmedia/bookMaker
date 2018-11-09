function isChecked(node) {
    if (!node.pages){
      var isDone=progress.getKey(node.label);
      if(isDone){
            $("#thumb_"+node.label).addClass("page_complete")
      }
      return isDone;

    }
    var assumeTrue = true;
    var length = node.pages.length;
    // if (length>1){
      for (i = 0; i < length; i++) {
        assumeTrue = isChecked(node.pages[i]) && assumeTrue;
      }
    // }
    if (assumeTrue) {
      $("#thumb_"+node.label).addClass("page_complete")
    }
    return assumeTrue
  }

  function insertIDs(node, label) {
    if (label) {
      node.label = label;
    }
    if (Array.isArray(node)) {
      for (var i in node) {

        if (!label) {
          var newLabel = parseInt(i) + 1
        } else {
          var newLabel = label + "_" + (parseInt(i) + 1)
        }
        node[i].label = newLabel

        if (node[i].pages) {


          insertIDs(node[i].pages, node[i].label)


        }


      }
    }
  }
