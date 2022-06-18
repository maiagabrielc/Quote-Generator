let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    newQuote();
  } catch (error) {
    apiQuotes = localQuotes;
    newQuote();
    console.log('whops, something is wrong here', error)
  }
}

// On Load
getQuotes();