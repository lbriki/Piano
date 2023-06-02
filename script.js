const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");
const WHITE_KEYS = ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"];
const BLACK_KEYS = ["z", "e", "r", "t", "y", "o", "p"];
keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    return playNote(key);
  });
});
document.addEventListener("keydown", (e) => {
  // if (e.repeat) return;
  const key = e.key;
  //console.log(e.key);
  const whiteKeyIndex = WHITE_KEYS.indexOf(key.toLowerCase());
  console.log( whiteKeyIndex);
  const blackKeyIndex = BLACK_KEYS.indexOf(key.toLowerCase());
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  const clone = noteAudio.cloneNode();
    clone.play();
  key.classList.add("active");
  setTimeout(() => key.classList.remove("active"), 500);
}
