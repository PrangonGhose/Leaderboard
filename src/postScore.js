const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nbZrh2raj2305opaXN7n/scores/';

const postScore = async (playerName, playerScore) => {
  const data = {
    'user': playerName,
    'score': playerScore,
  }
  const params = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, params);
  const responseJSON = await response.json();
  return responseJSON.result;
}

export default postScore;