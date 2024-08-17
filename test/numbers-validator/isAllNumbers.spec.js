import NumbersValidator from "../../app/numbers-validator.js";
import { beforeEach, afterEach, describe, it } from "mocha";
import { expect } from "chai";

describe('isAllNumbers positive tests', function () {
    let validator;
    
    beforeEach(function () {
        validator = new NumbersValidator;
    });

    afterEach(function () {
        validator = null;
    });

    it('should return true if provided with an array of numbers', () => {
        expect(validator.isAllNumbers([7, -8, 0, 4, -10])).to.be.equal(true);
    });

    it('should return false if provided with an array containing a string', () => {
        expect(validator.isAllNumbers([5, 2, '8'])).to.be.equal(false);
    });

    it('should return false if provided with an array containing an object', () => {
        expect(validator.isAllNumbers([9, {}, 10])).to.be.equal(false);
    });
        
    it('should return false if provided with an array containing boolean', () => {
        expect(validator.isAllNumbers([true, 12])).to.be.equal(false);
    }); 

    it('should return false if provided with an array containing undefined', () => {
        expect(validator.isAllNumbers([-4, undefined, 0])).to.be.equal(false);
    });

    it('should return false if provided with an array containing null', () => {
        expect(validator.isAllNumbers([25, null, -16])).to.be.equal(false);
    });
});

describe('isAllNumbers negative tests', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator;
    });

    afterEach(function () {
        validator = null;
    });

    it('should return an error if provided with an object', () => {
        expect(function () {
            validator.isAllNumbers({0: -2, 10: -5})
        }).to.throw('[[object Object]] is not an array');
    });

    it('should return an error if provided with a string', () => {
        expect(function () {
            validator.isAllNumbers('0')
        }).to.throw('[0] is not an array');
    });

    it('should return an error if provided with a number', () => {
        expect(function () {
            validator.isAllNumbers(38)
        }).to.throw('[38] is not an array');
    });

    it('should return an error if provided with a boolean', () => {
        expect(function () {
            validator.isAllNumbers(true)
        }).to.throw('[true] is not an array');
    });

    it('should return an error if provided with a null', () => {
        expect(function () {
            validator.isAllNumbers(null)
        }).to.throw('[null] is not an array');
    });

    it('should return an error if provided with an undefined', () => {
        expect(function () {
            validator.isAllNumbers(undefined)
        }).to.throw('[undefined] is not an array');
    });
});