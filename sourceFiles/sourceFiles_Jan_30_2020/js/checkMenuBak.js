function isChecked(node,internal=false) {
	//if (!internal) {
	//	var defer= $.Deferred();
	//	}
	if (!node.pages){
		if(node.type=="video"){

			progress.syncKey(node.content,node.label).then(()=>{

					//if(defer)  defer.resolve("done");

					return	checkDone(node);
					})
		}
		else return checkDone(node);
	}
	else{
		progress.setKey(node.label,{"status":"menu"})
		var assumeTrue = true;
		var length = node.pages.length;
		 if (length>1){
		for (i = 0; i < length; i++) {
			assumeTrue = isChecked(node.pages[i],true) && assumeTrue;
		}
		 }
		if (assumeTrue) {
			$("#thumb_"+node.label).addClass("page_complete")
		}
		console.log(node.label,assumeTrue)
		return assumeTrue
	}
	//	if(defer) return defer.promise();
}



function checkDone(node)
{
	var isDone=progress.getKey(node.label).status=="done"||false;
	if(isDone){
		$("#thumb_"+node.label).addClass("page_complete")
	}
	return isDone;



}

function insertIDs(node, label) {
	if (label && !Array.isArray(node)) {
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
