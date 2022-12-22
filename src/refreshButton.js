// Import modules
import getScore from './getScore.js';
import { uiObject } from './formAdd.js';

const refreshButton = async () => {
  const resultArray = await getScore();
  uiObject.leadersArray = resultArray;
  uiObject.displayData();
};

export default refreshButton;