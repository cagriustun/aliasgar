

// create PanoViewer with option
var PanoViewer = eg.view360.PanoViewer;
var container = document.getElementById("myPanoViewer");
var panoViewer = new PanoViewer(container, {
  image: "aa.png",
        yawRange: [-135, 135], 
        pitchRange: [-35, 35], 
        fovRange: [30, 70] 
       });


var panoviewerSet = document.getElementById("panoSet");
PanoControls.init(panoviewerSet, panoViewer, {
  //enableGyroOption: true,
  //enableTouchOption: true
});
PanoControls.showLoading();