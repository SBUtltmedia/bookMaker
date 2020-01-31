function Progress(dictName) {
this.dictName = dictName;
var progressDict = JSON.parse(localStorage.getItem(dictName)) || {};
var bookRoot=window.location.href.split("index.html")[0].split("#")[0].split("localData")[0];



this.setKey = (key,val)=> {

if(val=="done"){

val={status:"done"}

}
  var defer =$.Deferred();
    progressDict[key] = val;
    console.log(key,val,dictName,progressDict)
    if(key)localStorage.setItem(dictName, JSON.stringify(progressDict))
    $.post({
  type: "POST",
  url: `${bookRoot}sourceFiles/progress.php`,
  data: progressDict,
  success: (data) =>{
 defer.resolve("done")
 console.log("done")
  },
  error: (data) =>{
    console.log(progressDict)
 defer.resolve("done")


  },
  dataType: "JSON"
});

//this.calculateGrade();

return defer.promise();
};

  this.load =()=>{
var defer =$.Deferred();
  $.get(`${bookRoot}sourceFiles/progress.php`,(data)=>{

localStorage.setItem(this.dictName,  JSON.stringify(data));

  defer.resolve("done");
  })

return defer.promise();

  }



  this.getKey = (key)=> {
    progressDict = JSON.parse(localStorage.getItem(this.dictName)) || {};
    return progressDict[key]||false;


  }
this.getTotalTime=()=>{

return module.chapters.reduce((acc2,chapter)=>acc2+chapter.pages.reduce((acc,val)=>acc+val.duration, 0),0);



}







this.calculateGrade =()=>{
var totalGrade=0;
for(i in module.chapters){

  for(j in module.chapters[i].pages){
        // var page = i+1+"_"+j+1
    //    console.log(module.chapters[i].pages[j].duration)
   var page = `${parseInt(i)+1}_${parseInt(j)+1}`
  var currentGrade=(this.getKey(page).grade||0)
  var currentTime=module.chapters[i].pages[j].duration
  var weight=currentTime/this.getTotalTime()
  totalGrade=totalGrade+ weight*currentGrade
   // console.log((/this.getTotalTime()))
  //  console.log(page)
   //console.log(this.getKey(page).grade||0)


  }
}

return totalGrade

}


}

function getUrlVars() {
  var vars = [],hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');

    if ($.inArray(hash[0], vars) > -1) {
      vars[hash[0]] += "," + hash[1];
    } else {
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
  }

  return vars;
}

function clearStorage(){
  localStorage.clear();
}
