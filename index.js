import {regularVerbs} from './constants.js';

const currentVerbEl = document.querySelector('#current-verb');

currentVerbEl.textContent = regularVerbs[0];