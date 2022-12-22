// Import modules
import { addToForm, uiObject } from './formAdd.js';
import refreshButton from './refreshButton.js';
import './style.css';

// Grab all elements
const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

// form part
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToForm();
});

// page refresh
refresh.addEventListener('click', () => {
  refreshButton();
});

// once the browser is loaded
window.addEventListener('DOMContentLoaded', () => {
  uiObject.displayNothing();
});