const video = document.getElementById('video');

const btn = document.getElementById('btn-video');
const btnRestart = document.getElementById('btn-restart');

let width = 0;


function videoStatus () {
    let duration = ((video.duration / 60) * 100).toFixed(0);
    if(video.paused) {
        video.play();
        btn.innerHTML = '||';
        if(width == 0){
            document.documentElement.style.setProperty('--animation-status', "running");
            document.documentElement.style.setProperty('--video-duration', duration + 's');
        }
    } else {
        video.pause();
        btn.innerHTML = '>';
        document.documentElement.style.setProperty('--animation-status', "paused");
    }
}

function restartVideo() {
    video.load()
}

video.addEventListener('ended', () => {
    btn.style.display = 'none'
    btnRestart.style.display = 'unset'
})