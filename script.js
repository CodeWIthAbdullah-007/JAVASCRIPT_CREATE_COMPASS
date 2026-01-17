const needle = document.getElementById("needle");
const degreeText = document.getElementById("degree");

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", e => {
    if (e.alpha !== null) rotateCompass(e.alpha);
  });
}

document.addEventListener("mousemove", e => {
  const x = e.clientX - window.innerWidth / 2;
  const y = e.clientY - window.innerHeight / 2;
  const angle = Math.atan2(x, -y) * (180 / Math.PI);
  rotateCompass((angle + 360) % 360);
});

function rotateCompass(deg){
  needle.style.transform =
    `translate(-50%,-100%) rotate(${deg}deg)`;
  degreeText.innerText = Math.round(deg) + "°";
}
