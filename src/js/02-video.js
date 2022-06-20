import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

function callback(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
}

player.on('timeupdate', throttle(callback, 1000));

const currtime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currtime)

