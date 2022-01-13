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
// var aset = setInterval(() => {
//     if(viewer.DeviceOrientationControls.enabled){
//         console.log("mobile");
//         DeviceMotionEvent.requestPermission();
//         clearInterval(aset);
//     }
// }, 500);
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    document.body.addEventListener('click', function () {
    DeviceOrientationEvent.requestPermission()
    .then(function() {
    console.log('DeviceOrientationEvent, DeviceMotionEvent enabled');
    alert('DeviceOrientationEvent, DeviceMotionEvent enabled');
    })
    .catch(function (error) {
    console.warn('DeviceOrientationEvent, DeviceMotionEvent not enabled', error);
    alert('DeviceOrientationEvent, DeviceMotionEvent not enabled', error);
    })
    });
    }
viewer.add(panorama);
viewer.addUpdateCallback(function () {

});