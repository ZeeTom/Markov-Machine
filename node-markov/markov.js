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
    console.log(words);
    let chains = new Map();
    for (let i = 1; i <= words.length; i++) {
      let prevWord = words[i - 1];
      // console.log(prevWord);
      let word = words[i];
      // console.log(chains.get(prevWord));
      // if (i === words.length) {
      //   chains.get(prevWord).push(null);
      // } else if (chains.has(prevWord)) {
      //   chains.get(prevWord).push(word);
      // } else {
      chains.set(prevWord, word);
      console.log("this is not working", chains.get(prevWord));
      //   }
    }
    this.chains = chains;
    return chains;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}

// [the, cat, yes, hat, dif, the]

// if hat in obj {
// obj[hat].push(dif)
// else
// obj[yes] = [hat]
