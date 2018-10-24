// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';
import { Rack } from './sort-it-out';

should();

describe('SortingBalls Rack should', () => {

    let rack: Rack;

    before(() => {
        rack = new Rack();
    });

    it('be empty after instantiation', () => {
        rack.balls.should.exist;
        rack.balls.should.be.empty;
    });

    it('contain the element added when an element is added', () => {
        rack.balls.should.exist;

        rack.add(42);

        rack.balls.should.be.of.length(1);
        rack.balls.should.eql([ 42 ]);
    });


    it('contain both element ordered when a 2nd element is added', () => {
        rack.balls.should.exist;

        rack.add(7);

        rack.balls.should.be.of.length(2);
        rack.balls.should.eql([ 7, 42 ]);
    });

    it('contain all elements ordered when a 3rd element is added', () => {
        rack.balls.should.exist;

        rack.add(24);

        rack.balls.should.be.of.length(3);
        rack.balls.should.eql([ 7, 24, 42 ]);
    });

    it('contain all elements ordered when added three more elements', () => {
        rack.balls.should.exist;

        rack.add(100);
        rack.add(58);
        rack.add(1);

        rack.balls.should.be.of.length(6);
        rack.balls.should.eql([ 1, 7, 24, 42, 58, 100 ]);
    });
});
