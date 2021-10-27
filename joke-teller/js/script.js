const audioElement = document.querySelector('.audio');
const button = document.querySelector('.button');
const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming,Pun,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit';
let jokeText = '';

function tellingJoke(jokeText) {
    console.log(jokeText);
    VoiceRSS.speech({
      key: '5161c540829f494ead7aa2ae14a1c86f',
      src: jokeText,
      hl: 'en-us',
      v: 'Linda',
      r: 0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
}

function toggleButton() {
    button.disabled = !button.disabled;
}

async function getJoke() {
 try {
    const response = await fetch(jokeUrl);
    console.log(response);
    const data = await response.json();
    //console.log(data.joke);
    if (data.joke) {
        jokeText = data.joke;
    } else {
        jokeText = `${data.setup} ... ${data.delivery}`;
    }
    //console.log(jokeText);
    tellingJoke(jokeText);
    toggleButton();
 } catch (error) {
     console.log('Oops, something went wrong!', error);
 }
}
//console.log('joke:::', jokeText);

button.addEventListener('click', getJoke);
audioElement.addEventListener('ended', toggleButton)