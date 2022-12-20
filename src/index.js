// Import modules
import Storage from './localStorage.js';
import addToForm, { uiObject } from './formAdd.js';
import './style.css';

// Grab all elements
const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');
let leadersArray = Storage.getStorage();

// form part
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToForm();
});

// page refresh
refresh.addEventListener('click', () => {
  window.location.reload();
});

// once the browser is loaded
window.addEventListener('DOMContentLoaded', () => {
  uiObject.leadersArray = leadersArray;
  if (leadersArray.length === 0) {
    uiObject.displayNothing();
  } else {
    uiObject.displayData(leadersArray);
  }
});