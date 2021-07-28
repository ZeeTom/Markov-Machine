"use strict";

/** Generates text from the given file or URL. */

const fsp = require("fs/promises");
const axios = require("axios");

/** Reads file at the given path and
 * prints the contents of the file
 * */

async function cat(path) {
  try {
    let contents = await fsp.readFile(path, "utf8");
    console.log(contents);
  } catch (error) {
    console.log(`Error reading ${path}: ${error}`);
    process.exit(1);
  }
}

/** Reads the contents at the given URL and
 * prints the contents to the console.
 * */

async function webCat(URL) {
  try {
    let contents = await axios.get(`${URL}`);
    console.log(contents.data);
  } catch (error) {
    console.log(`Error fetching ${URL}: ${error}`);
    process.exit(1);
  }
}

async function catOrWebWrite(outputPath, fileOrUrl) {
  if (fileOrUrl.includes("http")) {
    let contents = await webCat(fileOrUrl);
    await fsp.writeFile(outputPath, contents.data, "utf8");
  } else {
    let contents = await cat(fileOrUrl);
    await fsp.writeFile(outputPath, contents, "utf8");
  }
 } 

async function readOrWrite(fileOrUrl, outputPath) {
  if (process.argv[2] === "--out") {
    catOrWebWrite(process.argv[3], process.argv[4]);
  } else if (process.argv[2].includes("http")) {
    webCat(process.argv[2]);
  } else {
    cat(process.argv[2]);
  }
}


module.exports = {
  cat,
  webCat,
  catOrWebWrite,
  readOrWrite,
};