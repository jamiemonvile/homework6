var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate /= 1.2;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	video.play();
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime == 0) {
		video.playbackRate = 1;
	}
} 

function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  		document.querySelector("#mute") .innerHTML = "Mute"
  	}
  	else{
      	console.log("Changing to Muted");
      	video.muted = true;
      	document.querySelector("#mute") .innerHTML = "Unmute"
  	}
}

function changeVolume(val) {
	let slider = document.querySelector('#volumeSlider');
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume *100);
	let newvol = document.querySelector("#volume")
	newvol.innerHTML=video.volume *100 + "%";
	// console.log(video.volume);
}
       

// function gray() { 

// 	console.log("In grayscale")
// }

// function color() {

// 	console.log("In color") 
// }
