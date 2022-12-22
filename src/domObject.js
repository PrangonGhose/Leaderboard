// grab all elements
export const leadersList = document.querySelector('.leaders-list');
export const leaderName = document.querySelector('.leader-name');
export const leaderScore = document.querySelector('.leader-score');

// empty array
export let array; // eslint-disable-line

export default class UI {
  constructor(leadersArray) {
    this.leadersArray = leadersArray;
    array = leadersArray;
  }

  arrayChanger() {
    if (this.leadersArray !== array) {
      array = this.leadersArray;
    }
  }

  displayData(leadersArray = this.leadersArray) {
    const leadersList = document.querySelector('.leaders-list');
    const displayData = [];
    for (let i = leadersArray.length - 1; i >= 0; i -= 1) { // recent score at top
      const displayDataItem = UI.displayOnDom(leadersArray[i]);
      displayData.push(displayDataItem);
    }
    leadersList.innerHTML = (displayData).join(' ');
  }

  static displayOnDom(item) {
    const displayHTML = `
    <p><strong>${item.user}</strong>: ${item.score}</p>
    `;
    return displayHTML;
  }

  displayNothing = () => {
    const leadersList = document.querySelector('.leaders-list');
    const displayData = '<h3 class="display-nothing">Press Refresh to show all scores.</h2>';
    leadersList.innerHTML = displayData;
  }

  clearInput = () => {
    leaderName.value = '';
    leaderScore.value = '';
  }
}