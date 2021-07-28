"use strict"

/** Command-line tool to generate Markov text. */

const { cat, webCat, catOrWebWrite, readOrWrite } = require('./generate');
const { MarkovMachine } = require('./markov');

readOrWrite(process.argv[2], process.argv[3]);
