var volume_val =document.getElementById("volume_val")
var time_val =document.getElementById("time_val")
var speed_val =document.getElementById("speed_val")
var state =document.getElementById("state")
var audio = document.querySelector("audio");
var volumeInp = document.getElementById("volumeInp")
var timeInp = document.getElementById("timeInp")
var speed = document.getElementById("speed")
volume_val.innerHTML = volumeInp.value*100 +"%";
speed_val.innerHTML = audio.playbackRate;
var firstPart = audio.src.slice(0,28);
var lastPart = audio.src.slice(31);
var numberOfAudio = audio.src.slice(28,31);
var num_min_dur;
var num_scn_dur;
var val_dur;
var num_min_timeNew ;
var num_scn_timeNew ;
var val_timeNew;
function set_Duration (_duration){
  num_min_dur = Math.floor(_duration / 60);
  num_scn_dur = Math.floor(_duration % 60).toString().padStart(2, '0');
  val_dur = num_min_dur +":"+(num_scn_dur)
}
function set_TimeNew (time){
  num_min_timeNew = Math.floor(time / 60);
  num_scn_timeNew = Math.floor(time % 60).toString().padStart(2, '0');
  val_timeNew = num_min_timeNew +":"+(num_scn_timeNew)
}
set_Duration (audio.duration)
var min ;
var scn ;
function playAndPauseAud (){
    if(audio.paused){
    audio.play();
    state.innerText = "Pause"
    }else if (!audio.paused){
    state.innerText = "Play"
    audio.pause();
    }
}
function stopAud() {
    audio.currentTime = 0
    audio.pause();
}
function muteAud() {
  audio.muted = !audio.muted;
}

function test() {
  console.log(audio.duration);
}

volumeInp.addEventListener("input", function () {
  audio.volume = volumeInp.value;
  volume_val.innerHTML = volumeInp.value*100 +"%";

})

window.onload = function () {
  set_Duration (audio.duration);
  time_val.innerHTML = set_TimeNew (audio.currentTime);
  timeInp.max = audio.duration
  updateTime ()
}

timeInp.addEventListener("input", function () {
  updateTime ()
  audio.currentTime = timeInp.value;
})
function updateTime (){
  set_TimeNew (audio.currentTime)
  if(num_min_timeNew != 0){
    time_val.innerHTML = val_timeNew+ " / "+val_dur
  }else{
  time_val.innerHTML = "0" +":"+num_scn_timeNew+ " / "+val_dur
  }
}
audio.addEventListener("timeupdate", function () {
  updateTime ();
  timeInp.value = audio.currentTime;
}
)




speed.addEventListener("change", function () {
  audio.playbackRate = speed.value;
  speed_val.innerHTML = audio.playbackRate
})
function previous(){
    if (numberOfAudio == 100) {
        numberOfAudio = 114
    }else {
        numberOfAudio--
    }
    time_val.innerHTML ="0.00 / 0.00"
    audio.src = firstPart+numberOfAudio+lastPart
    timeInp.max = audio.duration
    setTimeout(function(){
      updateTime ();
      set_Duration (audio.duration);
        timeInp.max = audio.duration
    },300)
}
function next(){
    if (numberOfAudio == 144) {
        numberOfAudio = 100
    }else {
        numberOfAudio++
    }
    audio.src = firstPart+numberOfAudio+lastPart
    setTimeout(function(){
      timeInp.max = audio.duration
      set_Duration (audio.duration);
      updateTime ();
    },300)
}
audio.addEventListener("ended", function() {
  next();
  audio.play();
});