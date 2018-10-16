// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';

import {
    Combinations,
    YamsCombinationCalculator
} from './yams';

should();

describe('YamsCombinationCalculator should', () => {

    describe('on same dice combinations', () => {

        it('return one when doing one one on "Ones"', () => {
            const roll = [ 1, 0, 0, 0, 0 ];
            const expected = 1;

            YamsCombinationCalculator(roll, Combinations.Ones)
                .should.equal(expected);
        });

        it('return two when doing two one on "Ones"', () => {
            const roll = [ 1, 1, 0, 0, 0 ];
            const expected = 2;

            YamsCombinationCalculator(roll, Combinations.Ones)
                .should.equal(expected);
        });

        it('return five when doing five one on "Ones"', () => {
            const roll = [ 1, 1, 1, 1, 1 ];
            const expected = 5;

            YamsCombinationCalculator(roll, Combinations.Ones)
                .should.equal(expected);
        });

        it('return two when doing one two on "Twos"', () => {
            const roll = [ 2, 0, 0, 0, 0 ];
            const expected = 2;

            YamsCombinationCalculator(roll, Combinations.Twos)
                .should.equal(expected);
        });

        it('return four when doing two two on "Twos"', () => {
            const roll = [ 2, 2, 0, 0, 0 ];
            const expected = 4;

            YamsCombinationCalculator(roll, Combinations.Twos)
                .should.equal(expected);
        });

        it('return three when doing one three on "Threes"', () => {
            const roll = [ 3, 0, 0, 0, 0 ];
            const expected = 3;

            YamsCombinationCalculator(roll, Combinations.Threes)
                .should.equal(expected);
        });
    });

    describe('on specific combinations', () => {

        it('return 3 when doing a "ThreeOfAKind" with three ones', () => {
            const roll = [ 1, 1, 1, 0, 0 ];
            const expected = 3;

            YamsCombinationCalculator(roll, Combinations.ThreeOfAKind)
                .should.equal(expected);
        });

        it('return 6 when doing a "ThreeOfAKind" with three twos', () => {
            const roll = [ 2, 2, 2, 0, 0 ];
            const expected = 6;

            YamsCombinationCalculator(roll, Combinations.ThreeOfAKind)
                .should.equal(expected);
        });

        it('return 6 when doing a "ThreeOfAKind" with more than three twos', () => {
            const roll = [ 2, 2, 2, 2, 2 ];
            const expected = 6;

            YamsCombinationCalculator(roll, Combinations.ThreeOfAKind)
                .should.equal(expected);
        });

        it('return 4 when doing a "FourOfAKind" with four ones', () => {
            const roll = [ 1, 1, 1, 1, 0 ];
            const expected = 4;

            YamsCombinationCalculator(roll, Combinations.FourOfAKind)
                .should.equal(expected);
        });

        it('return 4 when doing a "FourOfAKind" with more than four ones', () => {
            const roll = [ 1, 1, 1, 1, 1 ];
            const expected = 4;

            YamsCombinationCalculator(roll, Combinations.FourOfAKind)
                .should.equal(expected);
        });
    });
});
