function Progress(dictName) {
this.dictName = dictName;
this.progressDict={}
var bookRoot=window.location.href.split("index.html")[0].split("#")[0].split("localData")[0];
this.setKey = (key,val)=> {
if(val=="done")
{
val={status:"done"}

}
  var defer =$.Deferred();
var sendDict= {}
sendDict[key]=val;
    $.post({
  type: "POST",
  url: `${bookRoot}sourceFiles/progress.php`,
  data: sendDict,
  success: (data) =>{
  defer.resolve("done")
  this.progressDict[key] = val;
  },
  error: (data) =>{
 defer.resolve("done")


  },
  dataType: "JSON"
});

this.syncKey = (ivq,key)=> {
 data={ivq,key} 
var defer =$.Deferred();
    $.post({
  type: "POST",
  url: `${bookRoot}sourceFiles/syncIVQ.php`,
  data: data,
  success: (data) =>{
console.log(key,{status:data.status,grade:data.grade});
this.setKey(key,{status:data.status,grade:data.grade}).then(()=>defer.resolve("done"))
  },
  error: (data) =>{
 defer.resolve("done")
console.log("Can't sync "+key);

  },
  dataType: "JSON"
});
return defer.promise();
}




return defer.promise();
};

  this.load =()=>{
var defer =$.Deferred();
var url = `${bookRoot}sourceFiles/progress.php`;  
$.get(`${bookRoot}sourceFiles/progress.php`,(data)=>{
//this.progressDict=data
  defer.resolve(data);
  })

return defer.promise();

  }

this.getDict=()=>{
return this.progressDict
}

  this.getKey = (key)=> {
    return this.progressDict[key]||false;


  }
this.getTotalTime=()=>{

return module.chapters.reduce((acc2,chapter)=>acc2+chapter.pages.reduce((acc,val)=>acc+val.duration, 0),0);



}







this.calculateGrade =()=>{
var totalGrade=0;
var totalTime=this.getTotalTime();
for(i in module.chapters){
  for(j in module.chapters[i].pages){
        // var page = i+1+"_"+j+1
    //    console.log(module.chapters[i].pages[j].duration)
   var page = `${parseInt(i)+1}_${parseInt(j)+1}`
  var currentGrade=(this.getKey(page).grade||0)
  var currentTime=module.chapters[i].pages[j].duration
  var weight=currentTime/totalTime;
  totalGrade=totalGrade+ weight*currentGrade


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

