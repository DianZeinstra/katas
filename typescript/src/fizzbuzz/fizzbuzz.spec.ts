// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';

import { FizzBuzz } from "./fizzbuzz";

should();

describe('FizzBuzz should', () => {
    const FIZZ = 'Fizz';
    const BUZZ = 'Buzz';
    const FIZZBUZZ = 'FizzBuzz';

    const predicates = {
        [FIZZBUZZ]: (x: number) => x % 15 === 0,
        [FIZZ]: (x: number) => x % 3 === 0,
        [BUZZ]: (x: number) => x % 5 === 0,
    };
    const sut = new FizzBuzz(predicates);

    it('return 1 when 1', () => {
        sut.For(1).should.equal(1);
    });

    it('return Fizz when 3', () => {
        sut.For(3).should.equal(FIZZ);
    });

    it('return Buzz when 5', () => {
        sut.For(5).should.equal(BUZZ);
    });

    it('return Fizz when 6', () => {
        sut.For(6).should.equal(FIZZ);
    });

    it('return Buzz when 10', () => {
        sut.For(10).should.equal(BUZZ);
    });

    it('return FizzBuzz when 15', () => {
        sut.For(15).should.equal(FIZZBUZZ);
    });

    it('return the whole sequence until 15', () => {
        const expected = [
            1, 2, FIZZ,
            4, BUZZ, FIZZ,
            7, 8, FIZZ,
            BUZZ, 11, FIZZ,
            13, 14, FIZZBUZZ
        ];
        sut.Range(15).should.eql(expected);
    });

    //it('return 105 when 105', () => {
    //   FizzBuzz.For(105).should.equal(105);
    //});
});
