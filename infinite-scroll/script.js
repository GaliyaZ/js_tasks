const photoCount = 10;
const accessKey = 'RSpnlTku7zFKccOGMhZuPAkNmI_7EqHuRpN0ertPN3o';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${photoCount}`;
const loading = document.querySelector('.loader');
const imageContainer = document.querySelector('.image-container');
let photoArray = [];
let allImagesLoaded = false;
let loadedImages = 0;
let totalImages = 0;

function setAttributes(element, attributeName) {
  for (let key in attributeName) {
    //console.log(key, 'key from function');
    element.setAttribute(key, attributeName[key]);
  }
}

function imageLoaded() {
  loadedImages++;
  console.log(loadedImages);
  if (loadedImages === totalImages) {
    allImagesLoaded = true;
    loading.hidden = true;
  }
}

function displayPhoto() {
  loadedImages = 0;
  //totalImages += photoArray.length;
  totalImages = photoArray.length;
  console.log('totalImages: ', totalImages)
  photoArray.forEach((photo) => {
    //create <a>
    const linkItem = document.createElement('a');
    setAttributes(linkItem, {
      href: photo.links.html,
      target: '_blank'
    })
    //create <img>
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description
      //title: photo.alt_description
    })
    //img.setAttribute('title', photo.alt_description); //No description for most photos
    img.addEventListener('load', imageLoaded);
    //make structure container-a-img
    linkItem.appendChild(img);
    imageContainer.appendChild(linkItem);
  })
}

async function getPhoto() {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    //console.log(photoArray);
    displayPhoto();
  } catch (error) {
    console.log('I caught error')
  }
}

window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY >= window.document.body.offsetHeight - window.innerHeight + 200) && (allImagesLoaded)) {
    getPhoto();
    allImagesLoaded = false;
    console.log('scroll event');
  }
  //console.log('window.innerHeight: ', window.innerHeight);
  //console.log('document.bady.offsetHeight: ', document.body.offsetHeight);
});

getPhoto();
