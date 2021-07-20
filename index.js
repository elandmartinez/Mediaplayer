let video = document.querySelector("video")
let playButton = document.querySelector(".player__button");
let volumeHandler = document.querySelector(".volumeHandler");
let playbackHandler = document.querySelector(".playbackHandler");
let returnVideoButton = document.querySelector(".returnVideo__button");
let moveAlongVideoButton = document.querySelector(".moveAlong__button");
let progressBar = document.querySelector(".progress__filled")

let videoDuration = 26;
let growthBySecondRatio = 100 / videoDuration;
let videoProgress = 0;


video.onclick = () => togglePlay(video);
playButton.onclick = () => togglePlay(video);
returnVideoButton.onclick = () => video.currentTime -= 5;
moveAlongVideoButton.onclick = () => video.currentTime += 5;

playbackHandler.addEventListener("input", () => {
    video.playbackRate = playbackHandler.value;
})

volumeHandler.addEventListener("input", () => {
    video.volume = volumeHandler.value;
})
function togglePlay(player) {
    if(player.paused === false){
        player.pause();
    }
    else {
        player.play();
    }
}

setInterval(() => {
    videoProgress = video.currentTime * growthBySecondRatio;
    progressBar.style.width = `${videoProgress}%`;
}, 1000)

document.addEventListener("visibilitychange", () => {
    if(document.visibilityState == "hidden")  {
        video.pause();
    }
    if(document.visibilityState == "visible") {
        video.play();
    }
})
