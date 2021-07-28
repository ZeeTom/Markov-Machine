"use strict"

/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.makeChains(words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(words) {
    // console.log(words);
    let chains = new Map();

    for (let i = 1; i <= words.length; i++) {
      let prevWord = words[i - 1];
      let word = words[i];

      if (i === words.length) {
        if (chains.has(prevWord)) {
          chains.get(prevWord).push(null);
        } else {
          chains.set(prevWord, [null]);
        }
      } else if (chains.has(prevWord)) {
        chains.get(prevWord).push(word);
      } else {
        chains.set(prevWord, [word]);
      }
    }
    this.chains = chains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    // this.chains is Map
    let wordsArr = [...this.chains.keys()];
    let texts = [];

    let randomWord = this.choice(wordsArr);
    // possibleVocab, think of a better variable name

    while (texts.length < numWords && randomWord !== null) {
      texts.push(randomWord);
      let randomWords = this.chains.get(randomWord); // array of possible word values from randomWord key

      randomWord = this.choice(randomWords); // get random word value from array
    }
    this.texts = texts.join(" ");
    // not a fact about the machine

    return texts.join(" ");
  }

  choice(arr) {
    // console.log(arr);
    let word = arr[Math.floor(Math.random() * arr.length)];
    return word;
  }
}

module.exports = {
  MarkovMachine,
};