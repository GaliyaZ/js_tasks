const music = document.querySelector('audio');
const prevBtn =document.getElementById('prev');
const playBtn =document.getElementById('play');
const nextBtn =document.getElementById('next');
let isPlaying = false;
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
let songIndex = 0;
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design'
  }, 
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design'
  },
  {
    name: 'metric-1',
    displayName: 'Front Row',
    artist: 'Jacinto Design'
  }
];

music.volume = 0.2;

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`; 
}

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  //console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  //console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

function timeFormat(time) {
  let Min = Math.floor(time / 60);
  let Sec = Math.floor(time % 60);
  if (Sec < 10) {
    Sec = `0${Sec}`;
  }
  return [Min, Sec];
}

function updateProgressBar(e) {
  if (isPlaying) {
    const {duration, currentTime} = e.srcElement;
    //console.log(duration, currentTime);
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    /* duraton time */
    const durationTime = timeFormat(duration);
    let currentTimeFormat = timeFormat(currentTime);
    //console.log(durationMin, durationSec);
    if (durationTime[1]) {
      durationElem.textContent = `${durationTime[0]}:${durationTime[1]}`;
    }
    currentTimeElem.textContent = `${currentTimeFormat[0]}:${currentTimeFormat[1]}`;
  }
}

function setProgressBar(e) {
  //console.log(e);
  const width = this.clientWidth;
  const clickX = e.offsetX;
  //console.log('clickX: ', clickX);
  const {duration} = music;
  //console.log('duration: ', duration);
  //console.log('clickX/width: ', duration / width * clickX);
  music.currentTime = (duration / width * clickX);
}

music.addEventListener('timeupdate', updateProgressBar);

playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

loadSong(songs[songIndex]);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

progressContainer.addEventListener('click', setProgressBar);

music.addEventListener('ended', nextSong);