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
          chains.set(prevWord, [null])
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
    wordsArr = this.chains.keys();
    let text = [];

    let randomWord = wordsArr[randomIdx(wordsArr.length)];

    while (text.length < numWords && randomWord !== null) {
      text.push(randomWord);
      randomWords = this.chains.get(randomWord); // array of possible word values from randomWord key

      randomWord = randomWords[randomIdx(randomWords.length)]; // get random word value from array
    }
    return text.join(' ');
  }

  static randomIdx(length) {
    return Math.floor(Math.random() * length);
  }
}

