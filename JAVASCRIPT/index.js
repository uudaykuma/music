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
let count = 0

function dynamicProgressBar() {
  var audioDemo = document.getElementById('player');
  var elapsedTime = Math.round(audioDemo.currentTime);
  ctx.fillStyle = "#02B290"
  var fWidth = (elapsedTime / audioDemo.duration) * (canvas.clientWidth );
  console.log(fWidth)
  count+= 5
  let ran = getRandomArbitrary(40, 60);
  if (fWidth > 0) {
    ctx.fillRect(fWidth-10, ran, 1, ran);
  }
}


function initEvents() {
  var audioDemo = document.getElementById('player');


  audioDemo.addEventListener("timeupdate", dynamicProgressBar);
  canvas.addEventListener("click", function(e) {
    

      audioDemo.currentTime = audioDemo.duration * (e.offsetX / canvas.clientWidth);
    
  });
}
initEvents()




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
