import NumbersValidator from "../../app/numbers-validator.js";
import { describe, beforeEach, afterEach, it } from "mocha";
import { expect } from "chai";

describe('isInteger positive tests', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator;
    });

    afterEach(function () {
        validator = null;
    });

    it('should return true if provided with an integer', () => {
        expect(validator.isInteger(5)).to.be.equal(true);
    });

    it('should return false if provided with a float', () => {
        expect(validator.isInteger(-0.1)).to.be.equal(false);
    });
});

describe('isInteger negative tests', function () {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator;
    });

    afterEach(function () {
        validator = null;
    });

    it('should return an error if provided with a string', () => {
        expect(function () {
            validator.isInteger('25')
        }).to.throw('[25] is not a number');
    });

    it('should return an error if provided with a boolean', () => {
        expect(function () {
            validator.isInteger(false)
        }).to.throw('[false] is not a number');
    });

    it('should return an error if provided with an array', () => {
        expect(function () {
            validator.isInteger([-6])
        }).to.throw('[-6] is not a number');
    });

    it('should return an error if provided with an object', () => {
        expect(function () {
            validator.isInteger({0: -2})
        }).to.throw('[[object Object]] is not a number');
    });

    it('should return an error if provided with a null', () => {
        expect(function () {
            validator.isInteger(false)
        }).to.throw('[false] is not a number');
    });

    it('should return an error if provided with an undefined', () => {
        expect(function () {
            validator.isInteger(undefined)
        }).to.throw('[undefined] is not a number');
    });
});