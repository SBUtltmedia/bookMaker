# Book Maker
This project is an online book viewer made by TLL for easier distribution of online books to the public. The program is to help support the distrubtion of E-books to the public.

## Setting up Book

### How to upload new books to this framework
Upload all your desired pages into the localData folder and just link the index.html of each page properly in the module.json. There is no limit on the amount of chapters and pages you can have. JQuery is necessary for this program to work properly.

### Setting up Book Title in index.html
In index.html look for the div with the id "moduleTitle". Whatever text that is placed in this div will be the title on top for book.

### Setting up module.json
Create Json file with name "module". Start Json file for questions like this:

```JS

{
  "chapters": [
    (chapters)
  ],
  
  "overlayURLs": {
    "calipers": "https://example.com/link/to/ekg-slider/"
   },
    "localStorageKey":"[Insert your Storage Key Name]"
  
}

```

### Setting up Chapters
Inside "chapters" insert this snippet of code for adding chapters to the book (chapters are seperated by commas inside the brackets of "chapters"):

```JS

{
  "title": "[Insert Chapter Title]",
  "pages": [
    (pages for this chapter)
  ]
}

```

### Setting up Pages
Inside "pages" insert this snippet of code for adding pages to the chapter (pages are seperated by commas inside the curly brackets of "pages"):

```JS

{
  "type": "[Insert Page Type]",
  "title": "[Insert Page Title]",
  "content": "localData/link/to/wantedPage/index.html"
}

```

## Setting up Page htmls to work properly with book
The point of this is so the completion of page triggers the completion of page in the book.

### HTML Changes
Add this to the html of the page to link it to the javascript file that deals with page completion in the book.

```HTML

<head>
  <script src="link/to/sourceFile/js/progress.js"></script>
</head>

```

### Javascript Changes
Add this to the script of the page to properly setup the resizing of page in the book and adding a function in script for setting completion of page ( setCompleted() ).

```JS

$(function() {
  resize();
  $(window).resize(resize);

  function resize() {
    $('html').css('fontSize', $('body').width() / 50 + "px")
  }
});

var urlVars = getUrlVars();
var progress = new Progress(urlVars["local"]);

function setCompleted() {
  progress.setKey(urlVars["key"], "done");

  if (urlVars["testing"] == "true") {
    console.log('\n' + "----------Key----------")
    console.log(progress.getKey(urlVars["key"]), urlVars["key"]);
    console.log("----------Key----------" + '\n')
  }

  window.parent.updateCompletion();
}

```

## Special Mentions:
Special mentions to the creators (Jamie Greco & Joanne Cesiro) of PTP Book the first book made for this program and example included in this repo for the book.

## Author:
Created by [Rahul Sondhi](https://github.com/RahulSondhi) & [Jim Palmeri](https://github.com/SBUtltmedia) at TLL(Teaching Learning Lab) in Stony Brook University
