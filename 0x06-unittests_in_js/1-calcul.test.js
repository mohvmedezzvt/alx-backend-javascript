const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('Not Rounded', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('Has .5 or more', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 3.7, 1.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
    });

    it('Has < .5', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.2), 4);
      assert.strictEqual(calculateNumber('SUM', 3.2, 1), 4);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('NaN', function() {
      assert.strictEqual(calculateNumber('SUM'), NaN);
      assert.strictEqual(calculateNumber('SUM', 1.2, NaN), NaN);
      assert.strictEqual(calculateNumber('SUM', 1.2, 'string'), NaN);
    });
  });

  describe('SUBTRACT', function() {
    it('Not Rounded', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('Has .5 or more', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });

    it('Has < .5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.2), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('NaN', function() {
      assert.strictEqual(calculateNumber('SUBTRACT'), NaN);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, NaN), NaN);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 'string'), NaN);
    });
  });

  describe('DIVIDE', function() {
    it('Not Rounded', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('Has .5 or more', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.5), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1), 4);
    });

    it('Has < .5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 3.2, 1), 3);
    });

    it('NaN', function() {
      assert.strictEqual(calculateNumber('DIVIDE'), NaN);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, NaN), NaN);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 'string'), NaN);
    });
  });

  describe('Error', function() {
    it('Error', function() {
      assert.strictEqual(calculateNumber('string', 1, 3), 'Error');
    });
  });
});
