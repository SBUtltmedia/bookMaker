var drag = {
    "id": ""
}

var leftPos = .25;
var rightPos = .75;
var diff = .5;
var lastMousePos = 0;

$(function () {
    $('html, body').on('touchstart touchmove', function (e) {
        e.preventDefault();
    });

    $("body").mousedown(function (e) {
        var mousePos = (e.pageX - stageLeft) / stageWidth;
        startDrag(mousePos);
    });
    $(window).mousemove(function (e) {
        var mousePos = (e.pageX - stageLeft) / stageWidth;
        duringDrag(mousePos);
    });
    $(window).mouseup(function (e) {
        endDrag();
    });

    $("body").on('touchstart', function (e) {
        var mousePos = (e.originalEvent.touches[0].pageX - stageLeft) / stageWidth;
        startDrag(mousePos);
    });

    $(window).on('touchmove', function (e) {
        var mousePos = (e.originalEvent.touches[0].pageX - stageLeft) / stageWidth;
        duringDrag(mousePos);
    });

    $(window).on('touchend', function (e) {
        endDrag();
    });
    updatePositions();
});

function startDrag(mousePos) {
    lastMousePos = mousePos;
    var mouseLeftDiff = Math.abs(mousePos - leftPos);
    var mouseRightDiff = Math.abs(mousePos - rightPos);
    if (mouseLeftDiff < .375 && mouseLeftDiff < mouseRightDiff) {
        drag.id = "left";
        leftPos = Math.min(mousePos, 1 - diff);
        leftPos = Math.max(0, leftPos);
        rightPos = leftPos + diff;
        updatePositions();
    } else if (Math.abs(mousePos - rightPos) < .375 && mouseRightDiff <= mouseLeftDiff) {
        drag.id = "right";
        rightPos = Math.max(leftPos, mousePos);
        rightPos = Math.min(rightPos, 1);
        diff = rightPos - leftPos;
        updatePositions();
    }
}

function duringDrag(mousePos) {
    lastMousePos = mousePos;
    if (drag.id == "left") {
        leftPos = Math.min(mousePos, 1 - diff);
        leftPos = Math.max(0, leftPos);
        rightPos = leftPos + diff;
        updatePositions();
    } else if (drag.id == "right") {
        rightPos = Math.max(leftPos, mousePos);
        rightPos = Math.min(rightPos, 1);
        diff = rightPos - leftPos;
    }
    updatePositions();
}

function endDrag() {
    drag.id = "";
    updatePositions();
}

function updatePositions() {
    $("#sliderLeft").css("left", (leftPos * 100 - .375) + "%");
    $("#sliderRight").css("left", (rightPos * 100 - .375) + "%");
    $("#sliderHitboxLeft").css("left", (leftPos * 100 - 1) + "%");
    $("#sliderHitboxRight").css("left", (rightPos * 100 - 1) + "%");
}
