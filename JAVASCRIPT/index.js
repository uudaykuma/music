var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 400;
canvas.height = 100;
// console.log(canvas.width);
// console.log(canvas.height);

let ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

  for (let i = 0; i < canvas.width; i += 5) {
    let ran = getRandomArbitrary(40, 60);
    ctx.fillRect(i, ran, 1, ran);
  }

function dynamicProgressBar() {
  var audioDemo = document.getElementById('player');
  var elapsedTime = Math.round(audioDemo.currentTime);
  ctx.fillStyle = "red"
  var fWidth = (elapsedTime / audioDemo.duration) * (canvas.clientWidth);
  console.log(fWidth)
  let ran = getRandomArbitrary(40, 60);
  if (fWidth > 0) {
    ctx.fillRect(fWidth, 0, 1, ran);
  }
}


function initEvents() {
  var audioDemo = document.getElementById('player');

  //set up event to update the progress bar
  audioDemo.addEventListener("timeupdate", dynamicProgressBar, true);
  //set up mouse click to control position of audio
  canvas.addEventListener("click", function(e) {
    //this might seem redundant, but this these are needed later - make global to remove these
    

    if (!e) {
      e = window.event;
    } //get the latest windows event if it isn't set
    try {
      //calculate the current time based on position of mouse cursor in canvas box
      audioDemo.currentTime = audioDemo.duration * (e.offsetX / canvas.clientWidth);
    } catch (err) {
      // Fail silently but show in F12 developer tools console
      if (window.console && console.error("Error:" + err));
    }
  }, true);
}
//this event gets fired when a page has loaded
window.addEventListener("DOMContentLoaded", initEvents, false);




// toggling play and pause button;

function handlePlayandPause() {
  try {
    let audioPlayer = document.getElementById("player");
    let btn = document.getElementById("togglePlay");

    if (audioPlayer.paused) {
      audioPlayer.play();

      btn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      audioPlayer.pause();
      btn.innerHTML = `<i class="fas fa-play"></i>`;
    }
  } catch (error) {
    alert("Something went wrong while playing");
  }
}
