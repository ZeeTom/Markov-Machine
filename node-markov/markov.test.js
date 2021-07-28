"use strict"

/** Tests for Markov Machine Class */

const { MarkovMachine } = require("./markov.js");

describe("Tests MarkovMachine methods", function () {
  let ted;

  beforeEach(function () {
    ted = new MarkovMachine("the cat in the hat");
  });

  afterEach(function () {
    console.log("THIS TEST IS COMPLETE");
  });

  test("Instance of Markov machine returns true", function () {
    expect(ted instanceof MarkovMachine).toEqual(true);
  });

  test("random texts", function () {
    let text = ted.getText();
    expect(text).toEqual(ted.text);
  })
});
