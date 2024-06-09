const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('Not Rounded', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('Has .5 or more', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(3.7, 1.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('Has < .5', function() {
    assert.strictEqual(calculateNumber(1, 3.2), 4);
    assert.strictEqual(calculateNumber(3.2, 1), 4);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('NaN', function() {
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(1.2, NaN), NaN);
    assert.strictEqual(calculateNumber(1.2, 'string'), NaN);
  });
});
