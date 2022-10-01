
var count = 0;
var record = 0;
var normal = "./assets/normal.png";
var punched = "./assets/punched.png";


setInterval(() => {
  if (count > 820)
    normal = "./assets/red.png";
  record = 0;
}, 10000);

function punch() {
  ++count;
  ++record;
  const counter = document.getElementById('counter');
  counter.style.rotate = `${(Math.random() - 0.5)/10}turn`;
  counter.style.scale = "1.3";
  counter.innerHTML = count;
  document.getElementById('dan').src = punched;
  const audio = document.createElement("audio");
  audio.src = `./assets/sound/${Math.floor((Math.random()*11))}.mp3`;
  audio.play();
  setTimeout(() => {
    counter.style.rotate = '0turn';
    counter.style.scale = '1';
  }, 50);
}

function release() {
  document.getElementById('dan').src = normal;
}