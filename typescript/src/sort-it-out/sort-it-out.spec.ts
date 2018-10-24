// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';
import { Rack } from './sort-it-out';

should();

describe('SortingBalls Rack should', () => {

    let rack: Rack;

    beforeEach(() => {
        rack = new Rack();
    });

    it('be empty after instantiation', () => {
        rack.balls.should.exist;
        rack.balls.should.be.empty;
    });
});
