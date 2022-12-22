// This module has been run by the developer and a game is added.
// This module is added to the repository only for learning purpose.
// Running it again will only create a new game with a new unique ID.

// The unique ID for the game is nbZrh2raj2305opaXN7n. This ID is used in the URL for posting and getting scores.

const postData = () => {
  const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
  const data = {"name": "Game of thrones"};
  const params = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(url, params).then(response => response.json()).then((data) => {
    const gameID = data;
    console.log(gameID);
  })
}

postData();