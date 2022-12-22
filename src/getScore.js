// Declare URL with unique game ID
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nbZrh2raj2305opaXN7n/scores/';

// Async funtion for getting scores
const getScore = async () => {
  const response = await fetch(url); // wait until response is recorded from the URL
  const data = await response.json(); // wait until response is parsed as JSON
  return data.result; // return result to show on DOM
}

export default getScore;