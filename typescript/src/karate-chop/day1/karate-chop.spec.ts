import { should } from 'chai';

import { chop } from './karate-chop';

should();

describe('(Day 1) Karate Chop should', () => {

    it('be -1 when array is empty', () => {
        chop(42, []).should.equal(-1);
    });

    it('be 0 when array has only the value', () => {
        chop(1, [1]).should.equal(0);
    });

    describe('in an odd length array', () => {

        it('be ok when value is first', () => {
            chop(1, [1, 3, 5]).should.equal(0);
        });

        it('be ok when value is last', () => {
            chop(5, [1, 3, 5]).should.equal(2);
        });

        it('be ok when value is inside', () => {
            chop(3, [1, 3, 5, 7, 9]).should.equal(1);
        });

        it('be -1 when value is lower than left', () => {
            chop(0, [1, 3, 5]).should.equal(-1);
        });

        it('be -1 when value is greater than right', () => {
            chop(6, [1, 3, 5]).should.equal(-1);
        });

        it('be -1 when value not in here', () => {
            chop(2, [1, 3, 5]).should.equal(-1);
        });
    });

    describe('in an even length array', () => {

        it('be ok when value is first', () => {
            chop(1, [1, 3, 5, 7]).should.equal(0);
        });

        it('be ok when value is last', () => {
            chop(7, [1, 3, 5, 7]).should.equal(3);
        });

        it('be ok when value is inside on left', () => {
            chop(3, [1, 3, 5, 7]).should.equal(1);
        });

        it('be ok when value is inside on right', () => {
            chop(5, [1, 3, 5, 7]).should.equal(2);
        });

        it('be -1 when value is lower than left', () => {
            chop(0, [1, 3, 5, 7]).should.equal(-1);
        });

        it('be -1 when value is greater than right', () => {
            chop(8, [1, 3, 5, 7]).should.equal(-1);
        });

        it('be -1 when value not in here', () => {
            chop(4, [1, 3, 5, 7]).should.equal(-1);
        });
    });
});
