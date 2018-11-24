import { should } from 'chai';

import { chop } from './karate-chop';

should();

describe('(Day 2) Karate Chop should', () => {

    it('be -1 when array is empty', () => {
        chop(42, []).should.equal(-1);
    });

    it('be middle when value is in middle', () => {
       chop(1, [1]).should.equal(0);
    });
    
    const ODD = [ 1, 3, 5, 7, 9 ];

    describe('in an odd length array', () => {

        it('be ok when value is first', () => {
            chop(1, ODD).should.equal(0);
        });

        it('be ok when value is last', () => {
            chop(9, ODD).should.equal(4);
        });

        it('be ok when value is inside on left', () => {
            chop(3, ODD).should.equal(1);
        });

        it('be ok when value is inside on right', () => {
            chop(7, ODD).should.equal(3);
        });

        it('be ok when value is lower than left', () => {
            chop(0, ODD).should.equal(-1);
        });

        it('be ok when value is greater than right', () => {
            chop(10, ODD).should.equal(-1);
        });

        it('be ok when value is not in here', () => {
            chop(6, ODD).should.equal(-1);
        });
    });

    const EVEN = [1, 3, 5, 7];
    
    describe('in an even length array', () => {

        it('be ok when value is first', () => {
            chop(1, EVEN).should.equal(0);
        });

        it('be ok when value is last', () => {
            chop(7, EVEN).should.equal(3);
        });

        it('be ok when value is inside on left', () => {
            chop(3, EVEN).should.equal(1);
        });

        it('be ok when value is inside on right', () => {
            chop(5, EVEN).should.equal(2);
        });

        it('be ok when value is lower than left', () => {
            chop(0, EVEN).should.equal(-1);
        });

        it('be ok when value is greater than right', () => {
            chop(8, EVEN).should.equal(-1);
        });

        it('be ok when value is not in here', () => {
            chop(4, EVEN).should.equal(-1);
        });
    });
});
