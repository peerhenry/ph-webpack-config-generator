import generateConfig from "./ConfigGenerator";
import store from "./ConfigStore";
const assert = require("assert");

describe("ConfigGenerator", ()=>{

  describe("generateConfig with defaults", () => {

    it("should have equal number of opening and closing curly braces", ()=>{
      // arrange
      store.loaders.forEach(l => l.active = false);
      // act
      const config = generateConfig(store);
      // assert
      const bracketOpenCount = (config.match(/{/g) || []).length;
      const bracketCloseCount = (config.match(/}/g) || []).length;
      assert.equal(bracketOpenCount, bracketCloseCount, "Curly brace counts do not match! opening: " + bracketOpenCount + " closing: " + bracketCloseCount);
    });

    it("should have two things in brackets by default", () => {
      store.loaders.forEach(l => l.active = false);
      const config = generateConfig(store);
      const bracketCloseCount = (config.match(/}/g) || []).length;
      assert.equal(2, bracketCloseCount, "Number of bracketed things did not equal 2, actual " + bracketCloseCount);
    });
  });

  describe("generateConfig with Babel loader", () => {

    it("should have equal number of opening and closing curly braces", ()=>{
      // arrange
      store.loaders[0].active = true; // set first loader (Babel) to active
      // act
      const config = generateConfig(store);
      // assert
      const bracketOpenCount = (config.match(/{/g) || []).length;
      const bracketCloseCount = (config.match(/}/g) || []).length;
      assert.equal(bracketOpenCount, bracketCloseCount, "Curly brace counts do not match! opening: " + bracketOpenCount + " closing: " + bracketCloseCount);
    });

    it("should have equal number of opening and closing brackets", ()=>{
      // arrange
      store.loaders[0].active = true; // set first loader (Babel) to active
      // act
      const config = generateConfig(store);
      // assert
      const bracketOpenCount = (config.match(/\(/g) || []).length;
      const bracketCloseCount = (config.match(/\(/g) || []).length;
      assert.equal(bracketOpenCount, bracketCloseCount, "Bracket counts do not match! opening: " + bracketOpenCount + " closing: " + bracketCloseCount);
    });

    it("should have equal number of opening and closing square brackets", ()=>{
      // arrange
      store.loaders[0].active = true; // set first loader (Babel) to active
      // act
      const config = generateConfig(store);
      // assert
      const bracketOpenCount = (config.match(/\[/g) || []).length;
      const bracketCloseCount = (config.match(/\]/g) || []).length;
      assert.equal(bracketOpenCount, bracketCloseCount, "Square bracket counts do not match! opening: " + bracketOpenCount + " closing: " + bracketCloseCount);
    });

  });

})