var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');
var newArray = require('../js/generator.js');

describe('Generator', function () {
  it('should be a function', function () {
    expect(generator).to.exist;
    expect(generator).to.be.a('function');
  });

  it('should only accept a number', function () {
    expect(generator()).to.deep.equal([], 'should have a parameter');
    expect(generator(3)).to.not.deep.equal([], 'parameter should be a number');
    // expect(generator()).to.be.a('number');
  });

  describe('the result', function() {   

    it('should return an array', function () {
      expect(generator()).to.be.a('array');
    });
    
    it('the length should equal the number passed in', function () {
      expect(generator(5).length).to.equal(5);
    });

    it('the numbers should not exceed the length value');

    it('should be in a random order');
    
    it('should be unique');
    
    
  
  });

});