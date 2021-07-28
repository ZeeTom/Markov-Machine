"use strict"

/** Command-line tool to generate Markov text. */

const { cat, webCat, read } = require('./generate');
const { MarkovMachine } = require('./markov');

read(process.argv[2], process.argv[3]);
