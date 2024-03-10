import { regularVerbs } from './constants.js';

const currentVerbEl = document.querySelector('#current-verb');

/**
 * return a random number between zero and a max number
 * not inclusive
 * @param {[]} arr 
 * @returns {string}
 */
export function getRandomNum(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

currentVerbEl.textContent = regularVerbs[getRandomNum(regularVerbs.length)];