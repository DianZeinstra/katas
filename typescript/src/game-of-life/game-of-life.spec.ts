// Using Chai BDD/Should style: http://chaijs.com/api/bdd/
import { should } from 'chai';

import { GameOfLife } from './game-of-life';

should();

describe('Game of Life should', () => {

    const sut: GameOfLife = new GameOfLife();

    it('compute next state on empty 2x2 grid', () => {
        const current = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell with zero alive neighbor', () => {
        const current = [
            [ '*', '.' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell with one alive neighbors', () => {
        const current = [
            [ '*', '*' ],
            [ '.', '.' ]
        ];

        const next = [
            [ '.', '.' ],
            [ '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('kill an alive cell with four alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '*', '*' ],
            [ '.', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '.', '.', '.' ],
            [ '.', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('keep an alive cell with two or three alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '*', '.' ],
            [ '*', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '*', '*', '.' ],
            [ '*', '*', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('revive a dead cell with exactly three alive neighbors', () => {
        const current = [
            [ '.', '*', '.' ],
            [ '*', '.', '.' ],
            [ '.', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.' ],
            [ '.', '*', '.' ],
            [ '.', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });

    it('correctly compute next state following all rules', () => {
        const current = [
            [ '.', '.', '*', '.' ],
            [ '.', '*', '.', '*' ],
            [ '*', '*', '.', '*' ],
            [ '.', '*', '*', '.' ]
        ];

        const next = [
            [ '.', '.', '.', '.' ],
            [ '.', '.', '*', '.' ],
            [ '.', '*', '*', '.' ],
            [ '.', '*', '.', '.' ]
        ];

        sut.nextStepFor(current).should.eql(next);
    });
});
