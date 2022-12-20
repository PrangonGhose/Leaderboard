// Import modules
import Leader from './leaderObject.js';
import Storage from './localStorage.js';
import UI, { array } from './domObject.js';

// Grab necessary elements from HTML
const leaderName = document.querySelector('.leader-name');
const leaderScore = document.querySelector('.leader-score');
export const uiObject = new UI(); // object to be displayed in the DOM
let leadersArray = Storage.getStorage();
// object to be displayed in the DOM
let index; // index of the leader
if (leadersArray.length !== 0) {
  for (let i = 0; i < leadersArray.length; i += 1) {
    index = leadersArray[i].index;
  }
  index += 1;
} else {
  index = 1;
}

export default function addToForm(playerName = leaderName, playerScore = leaderScore) {
  if (array !== leadersArray) {
    leadersArray = array;
  }
  if (leadersArray.length !== 0) {
    for (let i = 0; i < leadersArray.length; i += 1) {
      index = leadersArray[i].index;
    }
    index += 1;
  } else {
    index = 1;
  }
  // new task object instance
  const newLeader = new Leader(playerName.value, playerScore.value, index);
  leadersArray = [...leadersArray, newLeader]; // push to array
  uiObject.leadersArray = leadersArray; // passing updated array value to DOM object
  uiObject.arrayChanger();
  uiObject.displayData(); // displaying new data in the DOM
  uiObject.clearInput();
  Storage.addToStorage(leadersArray); // add to storage
  index += 1;
  return leadersArray;
}