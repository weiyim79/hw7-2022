var video = document.getElementById("player1");
var play = document.getElementById("play");
var pause = document.getElementById("pause")
var slowDown = document.getElementById("slower");
var speedUp = document.getElementById("faster");
var skipAhead = document.getElementById("skip");
var mute = document.getElementById("mute");
var volumeNum = document.querySelector("#volume");
var slider = document.getElementById("slider");

//load video
video.autoplay = false;
video.loop = false;
video.preload = true;

//play button
play.addEventListener("click", function(){
	video.play();
	volumeNum.innerHTML = video.volume*100 +'%';
})

//pause button
pause.addEventListener("click", function(){
	video.pause();
})

//slow down
slowDown.addEventListener("click", function(){
	if(video.playbackRate >= 0.11){
		video.playbackRate -= 0.1;
		console.log('Playback rate is slow down to',Math.round(video.playbackRate * 100),'%' );
	}
	else{
		alert("Video is at slowest speed!")
	}
})

//speed up
speedUp.addEventListener("click", function(){
	if (video.playbackRate <= 2){
		video.playbackRate += 0.1;
		console.log('Playback rate is speed up to',Math.round(video.playbackRate * 100),'%' );
	}
	else{
		alert("Video is at fastest speed!")
	}
})

//skip ahead
skipAhead.addEventListener ("click",function(){
	let newTime = video.currentTime + 10;
	if (newTime >= video.duration) {
		newTime = 0;
	}
	video.currentTime = newTime;
	console.log('Current location is at', newTime);
})

//mute and unmute
mute.addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false;
		mute.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		mute.innerHTML = "Unmute";
	}

})

//slider
slider.addEventListener("input",function(){
	video.volume = slider.value/100;
	volume.innerHTML = slider.value +'%';
})

//styled
document.getElementById("vintage").addEventListener("click",function(){
	video.classList.add('oldSchool');
})

document.getElementById("orig").addEventListener("click",function(){
	video.classList.remove('oldSchool');

})

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

