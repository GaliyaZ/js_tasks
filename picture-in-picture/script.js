const videoElement = document.querySelector('.video');
const button = document.querySelector('.button'); 
//const button2 = document.querySelector('.button2');

//promt for selecting video
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

selectMediaStream();

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
  //button2.hidden = false;
})
/*
button2.addEventListener('click', async () => {
  selectMediaStream();
})*/
