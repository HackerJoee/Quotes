// let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine sytling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  complete();

  quoteText.textContent = quote.text;
}

// Tweet Quote
function tweetQuote() {
  let hashtag = 'quotes,quoteoftheday,Mindset,quote,Motivation';
  let text = quoteText.textContent;
  let author = authorText.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
  window.open(twitterUrl, '_blank');
  newQuote();
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Get Quotes From API
// async function getQuotes() {
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     //Catch Error Here
//   }
// }

// On Load
// getQuotes();
newQuote();
