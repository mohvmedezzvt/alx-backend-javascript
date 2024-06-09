const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('Not Rounded', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('Has .5 or more', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 3.7, 1.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
    });

    it('Has < .5', function() {
      expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
      expect(calculateNumber('SUM', 3.2, 1)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('NaN', function() {
      expect(calculateNumber('SUM')).to.equal(NaN);
      expect(calculateNumber('SUM', 1.2, NaN)).to.equal(NaN);
      expect(calculateNumber('SUM', 1.2, 'string')).to.equal(NaN);
    });
  });

  describe('SUBTRACT', function() {
    it('Not Rounded', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('Has .5 or more', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });

    it('Has < .5', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.2)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3.2, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('NaN', function() {
      expect(calculateNumber('SUBTRACT')).to.equal(NaN);
      expect(calculateNumber('SUBTRACT', 1.2, NaN)).to.equal(NaN);
      expect(calculateNumber('SUBTRACT', 1.2, 'string')).to.equal(NaN);
    });
  });

  describe('DIVIDE', function() {
    it('Not Rounded', function() {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('Has .5 or more', function() {
      expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
    });

    it('Has < .5', function() {
      expect(calculateNumber('DIVIDE', 3.2, 1)).to.equal(3);
    });

    it('NaN', function() {
      expect(calculateNumber('DIVIDE')).to.equal(NaN);
      expect(calculateNumber('DIVIDE', 1.2, NaN)).to.equal(NaN);
      expect(calculateNumber('DIVIDE', 1.2, 'string')).to.equal(NaN);
    });
  });

  describe('Error', function() {
    it('Error', function() {
      expect(() => calculateNumber('string', 1, 3)).to.throw('Invalid type');
    });
  });
});
