"use strict";

/** Generates Markov Machine text from the given file or URL. */

const fsp = require("fs/promises");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

/** Reads file at the given path and
 *  returns the contents of the file
 * */

async function cat(path) {
  try {
    let contents = await fsp.readFile(path, "utf8");
    return contents; 
    // if i typo contents to content => error reading file
    // but that's not a problem with my request
    // try to keep try block as small as possible
  } catch (error) {
    console.log(`Error reading ${path}: ${error}`);
    process.exit(1);
  }
  // return outside of the try block
}

/** Reads the contents at the given URL and
 *  returns the contents to the console.
 * */

async function webCat(URL) {
  try {
    let contents = await axios.get(`${URL}`);
    return contents.data;
  } catch (error) {
    console.log(`Error fetching ${URL}: ${error}`);
    process.exit(1);
  }
}

// async function catOrWebWrite(outputPath, fileOrUrl) {
//   if (fileOrUrl.includes("http")) {
//     let contents = await webCat(fileOrUrl);
//     await fsp.writeFile(outputPath, contents.data, "utf8");
//   } else {
//     let contents = await cat(fileOrUrl);
//     await fsp.writeFile(outputPath, contents, "utf8");
//   }
//  } 

/** Need doc string */

async function generateMarkov(type, fileOrUrl) {
  let contents;

  if (type === "file") {
    contents = await cat(fileOrUrl);
  } else if (type === "url") {
    contents = await webCat(fileOrUrl);
  } else {
    console.log('Error: incorrect input. Must be file or url.');
    process.exit(1)
  }

  let ted = new MarkovMachine(contents);
  console.log(ted.getText());
}


module.exports = {
  cat,
  webCat,
  generateMarkov,
};