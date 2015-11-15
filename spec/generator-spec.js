var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');

describe('Generator', function () {
  it('should be a function', function () {
    expect(generator).to.exist;
    expect(generator).to.be.a('function');
  });

  it('should only accept a number', function () {
    expect(generator()).to.deep.equal([], 'should have a parameter');
    expect(generator(3)).to.not.deep.equal([], 'parameter should be a number');
    // expect(generator(10)).to.equal('number');
  });

  describe('the result', function() {   

    it('should return an array', function () {
      expect(generator()).to.be.a('array');
    });
    
    it('the length should equal the number passed in', function () {
      expect(generator(5).length).to.equal(5);
    });

    it('the numbers should not exceed the length value', function () {
      expect(generator(10)).to.not.be.above(10);
    });

    it('should be in a random order');
    
    it('the array values should be unique', function () {
      var arr = generator(10);
      for(var i = 0; i < arr.length; i++) {
        expect(i).to.equal(arr.indexOf(arr[i]));
      }
    });
    
    
  
  });

});