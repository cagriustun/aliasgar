var panorama, viewer, container, infospot;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('a.jpg');

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);

panorama.add(infospot);

viewer = new PANOLENS.Viewer({ container: container });
// setInterval(() => {
//     console.log(infospot);
// }, 1000);
// container.addEventListener("click", function() { DeviceMotionEvent.requestPermission(); });
var aset = setInterval(() => {
    if(viewer.DeviceOrientationControls.enabled){
        console.log("mobile");
        DeviceMotionEvent.requestPermission();
        clearInterval(aset);
    }
}, 500);

viewer.add(panorama);
viewer.addUpdateCallback(function () {

});