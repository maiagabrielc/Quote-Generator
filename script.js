let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    console.log(response[0]);
  } catch (error) {
    console.log('whops, something is wrong here', error)
  }
}

// On Load
getQuotes();