/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve
* function signatures and comments starting with 'Edge' to maintain the
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {

     Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
     setCompleted();
     Symbol.stop(0);
     Symbol.$("media1")[0].currentTime = 0;
   });

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'arrow'
   (function(symbolName) {

   })("arrow");
   //Edge symbol end:'arrow'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-40818876");
