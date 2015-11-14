var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');

describe('Generator', function () {
  it('should be a function', function () {
    expect(generator).to.exist;
    expect(generator).to.be.a('function');
  });

  it('must accept a number', function () {
    expect(generator()).to.deep.equal([], 'should have a parameter');
    expect(generator(3)).to.not.deep.equal([], 'parameter should be a number');
  });

  describe('the result', function() {   

    it('should return an array', function () {
      expect(generator).to.be.a('array');
    });
    
    it('should be in a random order');
    
    it('should be unique');
    
    it('the numbers should not exceed the length value');
    
    it('the length should equal the number passed in');
  
  });

});