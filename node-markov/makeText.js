"use strict"

/** Command-line tool to generate Markov text. */

const { cat, webCat, generateMarkov } = require('./generate');
const { MarkovMachine } = require('./markov');

generateMarkov(process.argv[2], process.argv[3]);
