import { should } from 'chai';

import { FizzBuzz } from './fizzbuzz';

should();

describe('FizzBuzz should', () => {

  let fizzbuzz: FizzBuzz;

  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  describe('without values for rules', () => {

    it('on range 3', () => {
      fizzbuzz.range(3).should.equal(
        '1 2 Fizz'
      );
    });

    it('on range 15', () => {
      fizzbuzz.range(15).should.equal(
        '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz'
      );
    });

    it('should throw with negative numbers', () => {
      (function () {
        fizzbuzz.range(-42);
      })
      .should.throw('Cannot fizzbuzz negative numbers');
    });
  });

  describe('when given values for rules', () => {

    it('should throw with same divisors', () => {
      (function () {
        fizzbuzz.withDivisors(2, 2).range(3);
      })
      .should.throw('Divisors must be distinct');
    });

    it('should throw with one', () => {
      (function () {
        fizzbuzz.withDivisors(1, 2).range(3);
      })
      .should.throw('Divisors cannot be 1');
    });

    it('should throw with negative divisor', () => {
      (function () {
        fizzbuzz.withDivisors(-2, 5).range(3);
      })
      .should.throw('Divisors cannot be negative');
    });

    it('should throw with not prime values', () => {
      (function () {
        fizzbuzz.withDivisors(2, 4).range(3);
      })
      .should.throw('Divisor must be a prime');
    });

    it('should work with 2 and 5', () => {
      fizzbuzz.withDivisors(2, 5).range(3).should.equal(
        '1 Fizz 3'
      );
    });

    it('should work with 5 and 2', () => {
      fizzbuzz.withDivisors(5, 2).range(3).should.equal(
        '1 Buzz 3'
      );
    });

    it('should work with 3 and 7', () => {
      fizzbuzz.withDivisors(3, 7).range(15).should.equal(
        '1 2 Fizz 4 5 Fizz Buzz 8 Fizz 10 11 Fizz 13 Buzz Fizz'
      );
    });
  });
});
