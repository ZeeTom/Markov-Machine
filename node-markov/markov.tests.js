const { MarkovMachine } = require("./markov.js");

describe("Tests MarkovMachine methods", function () {
  beforeEach(function () {
    let ted = new MarkovMachine("the cat in the hat");
  });

  afterEach(function () {
    console.log("THIS TEST IS COMPLETE");
  });

  test("Instance of Markov machine returns true", function () {
    expect(ted instanceof MarkovMachine).toEqual(true);
  });
});
