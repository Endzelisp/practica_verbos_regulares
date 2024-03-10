import { regularVerbs, verbsEndings, pronouns } from './constants.js';

const currentVerbEl = document.querySelector('#current-verb');
const currentPronounEl = document.querySelector('#current-pronoun');
const userInputReplyEl = document.querySelector('#user-reply');
const replyIconResponse = document.querySelector('#icon-response');
const verifyBtn = document.querySelector('#button-verify');
const nextBtn = document.querySelector('#button-next');

/**
 * return a random number between zero and a max number
 * not inclusive
 * @param {[]} arr 
 * @returns {string}
 */
export function getRandomNum(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

let currentVerb, verbWithoutEnding, infinitiveVerbEnding, arrayOfVerbEndinds;
let selectedIndex;
let pronoun, correntVerbEnding, validConjugation;


function updateVerb() {
  // pick a random verb from the array
  currentVerb = regularVerbs[getRandomNum(regularVerbs.length)]

  // get the verb without the ending ar | er | ir
  verbWithoutEnding = currentVerb.slice(0, -2);

  // get the verb the ending ar | er | ir
  infinitiveVerbEnding = currentVerb.slice(-2);
  
  // get an array verb endings from the verbEndings object
  // based on the ending of the current verb
  arrayOfVerbEndinds = verbsEndings[infinitiveVerbEnding];
  
  // get a random number that will be used to pick the pronoun
  // and the corresponding conjugation ending of that verb
  selectedIndex = getRandomNum(pronouns.length);

  pronoun = pronouns[selectedIndex];
  correntVerbEnding = arrayOfVerbEndinds[selectedIndex];
  validConjugation = verbWithoutEnding + correntVerbEnding;
}

function render() {
  currentVerbEl.textContent = currentVerb;
  currentPronounEl.textContent = pronoun;
}

updateVerb()
render()

verifyBtn.addEventListener('click', () => {
  const userReply = userInputReplyEl.value;
  let validReply = false;

  if (userReply !== '') {
    validReply = userReply === validConjugation;
  }

  if (validReply) {
    userInputReplyEl.dataset.valid = 'true'
    replyIconResponse.src = './assets/valid.png'
  } else {
    userInputReplyEl.dataset.valid = 'false'
    replyIconResponse.src = './assets/invalid.png'
  }
  
})

nextBtn.addEventListener('click', () => {
  userInputReplyEl.value = '';
  userInputReplyEl.dataset.valid = '';
  replyIconResponse.src = '';
  userInputReplyEl.focus()
  updateVerb()
  render()
})