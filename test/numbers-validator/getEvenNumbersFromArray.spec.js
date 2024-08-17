import NumbersValidator from "../../app/numbers-validator.js";
import { beforeEach, afterEach, describe, it } from "mocha";
import { expect } from "chai";

describe('getEvenNumbersFromArray positive tests', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator;
    });

    afterEach(function () {
        validator = null;
    });

    it('should exclude odds from an array with odds and evens', () => {
        expect(validator.getEvenNumbersFromArray([0, 1, -2, -3, 4])).to.deep.equal([0, -2, 4]);
    });

    it('an array of evens should remain the same', function () {
        expect(validator.getEvenNumbersFromArray([0, 6, -10])).to.deep.equal([0, 6, -10]);
    });

    it('should return an empty array if provided with an array of odds', () => {
        expect(validator.getEvenNumbersFromArray([-1, 3, 15])).to.deep.equal([]);
    });
});

describe('getEvenNumbersFromArray negative tests', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    });

    afterEach(function () {
        validator = null;
    });

    it('should throw an error if provided with an array containing a string', () => {
        expect(() => {
            validator.getEvenNumbersFromArray([1, "2", 3])
        }).to.throw('[1,2,3] is not an array of "Numbers"');
    });

    it('should throw an error if provided with an array containing undefined', () => {
        expect(function () {
            validator.getEvenNumbersFromArray([7, 2, undefined])
        }).to.throw('[7,2,] is not an array of "Numbers"');
    });

    it('should throw an erro if provided with an array containing an object', () => {
        expect(() => {
            validator.getEvenNumbersFromArray([3, {}, 8])
        }).to.throw('[3,[object Object],8] is not an array of "Numbers"');
    });
});