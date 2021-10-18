
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
//get quote from api
async function getQuote() {
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
  } catch (error) {
    getQuote();
  }
}


getQuote();