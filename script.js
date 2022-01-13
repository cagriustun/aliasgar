

// create PanoViewer with option
var PanoViewer = eg.view360.PanoViewer;
var container = document.getElementById("myPanoViewer");
var panoViewer = new PanoViewer(container, {
  image: "a.jpg",
  projectionType: "equirectangular" });


var panoviewerSet = document.getElementById("panoSet");
PanoControls.init(panoviewerSet, panoViewer, {
  //enableGyroOption: true,
  //enableTouchOption: true
});
PanoControls.showLoading();