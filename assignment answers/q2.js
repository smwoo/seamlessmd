var fizzBuzz = function( test ){
  if ( test % 3 === 0 ){
    return 'Fizz';
  } else if (test % 5 === 0 ){
    return 'Buzz';
  }
  return '';
}

var assert = require('assert');

describe('FizzBuzz', function() {
  it('should output Fizz on a multiple of 3', function() {
    const rtn = fizzBuzz(3);
    assert.equal('Fizz', rtn);
  });

  it('should output Buzz on a multiple of 5', function() {
    const rtn = fizzBuzz(5);
    assert.equal('Buzz', rtn);
  });

  it('should output Fizz on a multiple of 3 and 5', function() {
    const rtn = fizzBuzz(15);
    assert.equal('Fizz', rtn);
  });

  it('should output nothing if not a multiple of 3 and 5', function() {
    const rtn = fizzBuzz(3);
    assert.equal('', rtn);
  });

  it('should output nothing if NaN', function() {
    const rtn = fizzBuzz(NaN);
    assert.equal('', rtn);
  });

  it('should output nothing if string', function() {
    const rtn = fizzBuzz("hello world");
    assert.equal('', rtn);
  });
});