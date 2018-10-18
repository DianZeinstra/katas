import { should } from 'chai';
import { RomanNumerals } from './roman-numerals';

should();

describe('RomanNumerals should', () => {

    it('return I when given 1', () => {
        RomanNumerals.Of(1).should.equal('I');
    });

    it('return II when given 2', () => {
        RomanNumerals.Of(2).should.equal('II');
    });

    it('return V when given 5', () => {
        RomanNumerals.Of(5).should.equal('V');
    });

    it('return VI when given 6', () => {
        RomanNumerals.Of(6).should.equal('VI');
    });

    it('return X when given 10', () => {
        RomanNumerals.Of(10).should.equal('X');
    });

    it('return XI when given 11', () => {
        RomanNumerals.Of(11).should.equal('XI');
    });

    /* Testing the remaining use-cases */

    it('return IV when given 4', () => {
        RomanNumerals.Of(4).should.equal('IV');
    });

    it('return IX when given 9', () => {
        RomanNumerals.Of(9).should.equal('IX');
    });

    it('return XL when given 40', () => {
        RomanNumerals.Of(40).should.equal('XL');
    });

    it('return L when given 50', () => {
        RomanNumerals.Of(50).should.equal('L');
    });

    it('return XC when given 90', () => {
        RomanNumerals.Of(90).should.equal('XC');
    });

    it('return C when given 100', () => {
        RomanNumerals.Of(100).should.equal('C');
    });

    it('return CD when given 400', () => {
        RomanNumerals.Of(400).should.equal('CD');
    });

    it('return D when given 500', () => {
        RomanNumerals.Of(500).should.equal('D');
    });

    it('return CM when given 900', () => {
        RomanNumerals.Of(900).should.equal('CM');
    });

    it('return M when given 1000', () => {
        RomanNumerals.Of(1000).should.equal('M');
    });

    it('return MCMXCIX when given 1999', () => {
        RomanNumerals.Of(1999).should.equal('MCMXCIX');
    });
});
