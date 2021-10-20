
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const quoteContainer = document.querySelector('.quote-container');
const loader = document.querySelector('.loader');
let counter = 0;

function showLoader () {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoader () {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

//get quote from api
async function getQuote() {
  showLoader();
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    //if author is blank
    if (data.quoteAuthor === '') {
      quoteAuthor.innerText = 'Unknown';
    } else {
      quoteAuthor.innerText = data.quoteAuthor;
    }
    //if quote is too long
    if (data.quoteText.length > 100) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote')
    }
    quoteText.innerText = data.quoteText;
    hideLoader();
  } catch (error) {
    counter += 1;
      if (counter <= 10) {
        console.log(error);
        getQuote();
    } else {
        console.log('Service is unavailable')
    }
  }
}

function twittQuote () {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl)
}

//get first quote
getQuote();
//loading();

twitterBtn.addEventListener('click', twittQuote);
newQuoteBtn.addEventListener('click', getQuote);
