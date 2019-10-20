// const video = document.querySelector(".player");
var video; // using video variable name to keep code similar to tutorial, even though a better name would be `source`
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function randImg() {
  return "https://source.unsplash.com/random";
}

function getVideo(stream) {
  video = document.querySelector(".player--video");
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function getImage() {
  video = document.querySelector(".player--image");
  video.src = randImg();
  video.crossOrigin = "anonymous";
  video.onload = function() {
    paintToCanvas();
  };
}

function getSource() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // IF VIDEO FOUND
      getVideo(localMediaStream);
    })
    .catch(error => {
      // IF NO VIDEO FOUND,
      console.error("MEDIA DEVICE INIT ERROR:", error);
      console.info("falling back to static image source");
      getImage();
    });
}

// TUTORIAL getVideo() CODE
// ----
// function getVideo() {
//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: false })
//     .then(localMediaStream => {
//       video.src = window.URL.createObjectURL(localMediaStream);
//       video.play();
//     })
//     .catch(error => {
//       console.error("MEDIA DEVICE INIT ERROR:", error);
//     });
// }

function paintToCanvas() {
  const width = video.videoWidth || video.naturalWidth;
  const height = video.videoHeight || video.naturalHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // get data from canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 100; // green
    pixels.data[i + 2] = pixels.data[i + 2] - 100; // blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  // 'VHS' style
  for (let i = 0; i < pixels.data.length; i += 4) {
    const r = i + 0;
    const g = i + 1;
    const b = i + 2;
    const shift = 50;

    // RED CHANNEL
    pixels.data[r - shift] = (pixels.data[r] + pixels.data[r - shift]) / 2;
    // GREEN CHANNEL
    pixels.data[g + shift / 2] =
      (pixels.data[g] + pixels.data[g + shift / 2]) / 2;
    // BLUE CHANNEL
    pixels.data[b + shift] = (pixels.data[b] + pixels.data[b + shift]) / 2;
  }
  return pixels;
}

// getVideo();
getSource();

if (video) {
  video.addEventListener("canplay", paintToCanvas);
}
