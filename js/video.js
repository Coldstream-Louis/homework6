var video;
var muted = false;
var currentSpeed = 1;
var volumePercent = 100;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	console.log("Play Video");
    document.querySelector("#volume").innerHTML = volumePercent + "%";
} 

function pauseVid() {
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	currentSpeed = currentSpeed * 0.8;
	video.playbackRate = currentSpeed;
  	console.log("Speed is "+ currentSpeed);
} 

function increaseSpeed() {
    currentSpeed = currentSpeed * 1.25;
    video.playbackRate = currentSpeed;
	console.log("Speed is "+ currentSpeed);
} 

function skipAhead() {
	let newTime = video.currentTime + 60;
	if(newTime > video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	else{
        video.currentTime = newTime;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	let muteButton = document.querySelector("#mute");
	if (muted == true){
  		muted = false;
  		video.muted = false;
  		muteButton.innerHTML = "Mute";
        console.log("Unmuted");
    }
  	else
    {
        muted = true;
        video.muted = true;
        muteButton.innerHTML = "Unmute";
        console.log("Muted");
    }
}

function changeVolume() {
	volumePercent = document.querySelector("#volumeSlider").value;
	video.volume = 0.01 * volumePercent;
    document.querySelector("#volume").innerHTML = volumePercent + "%";
	console.log("Volume is " + volumePercent);
}
       

function gray() {
	console.log(video.classList);
	video.classList += "grayscale";

	console.log("In grayscale")
}

function color() {
    console.log(video.classList);
    video.classList.remove("grayscale");

	console.log("In color") 
}
