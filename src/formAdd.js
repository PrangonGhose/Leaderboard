// Import modules
import postScore from './postScore.js';
import UI from './domObject.js';

// Grab necessary elements from HTML
const leaderName = document.querySelector('.leader-name');
const leaderScore = document.querySelector('.leader-score');

const uiObject = new UI(); // declare new DOM object

const addToForm = async () => {
  await postScore(leaderName.value, leaderScore.value); // wait until input is recorded
  uiObject.clearInput();
};

export { addToForm, uiObject };