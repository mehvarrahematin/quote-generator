const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQouteBtn = document.querySelector(".new-quote");
let apiQuotes = [];

// Show New Qoute
function newQuotes() {
  // Pick a random quote from apiQuotes array
  const qoute = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Cheak if Author field is blank and replace it with 'Unknown'
  if (!qoute.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = qoute.author;
  }
  //  Check Qoute length to determine styling
  if (quoteText.innerText.length > 50) {
    quoteText.classList.add("lonq-quote");
  } else {
    quoteText.classList.remove("lonq-quote");
  }
  quoteText.textContent = qoute.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
  } catch (error) {
    // Catch Error Here
  }
}

//twett Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// On Load
getQuotes();

// Add Event Listeners
newQouteBtn.addEventListener("click", newQuotes);
twitterBtn.addEventListener("click", tweetQuote);
