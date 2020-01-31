
  if (pg.overlays != null && pg.overlays != undefined) {
    if (pg.overlays.length > 0) {
      $("#overlayButton1").addClass("btn");

      if (pg.overlays.length == 1) {
        var overlay = pg.overlays[0];
        if (overlay == "calipers") {
          $("#overlayButton1").addClass("caliperButton");
        }
        $("#overlay").append('<iframe id="overlayFrame" ALLOWTRANSPARENCY="true"></iframe>');
        $("#overlayFrame").attr("src", module.overlayURLs[overlay]);
        canShowOverlay = true;

        $("#overlayButton1").click(function() {
          if (canShowOverlay) {
            if (!showingOverlay) {
              showOverlay(true);
            } else {
              showOverlay(false);
            }
          }
          resizeWindow();
        });

      } else {
        for (var i = 0; i < pg.overlays.length; i++) {
          linkOverlay(pg.overlays[i]);
        }
        $("#overlayButton1").off("click");
        $("#overlayButton1").on("click",
          function() {
            if ($("#overlayMenu").hasClass("hidden")) {
              $("#overlayMenu").removeClass("hidden");
            } else {
              $("#overlayMenu").addClass("hidden");
            }
          }
        );
        canShowOverlay = true;
      }

    }
  } else {
    $(".overlayButton").addClass("hidden");
  }
