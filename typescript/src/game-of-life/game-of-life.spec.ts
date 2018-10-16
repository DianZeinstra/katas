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

        const actual = JSON.stringify(sut.nextStepFor(current));
        const expected = JSON.stringify(next);

        actual.should.equal(expected);
    });

    it('compute next state on 2x2 grid', () => {
        const current = [
            [ '*', '*' ],
            [ '.', '*' ]
        ];

        const next = [
            [ '.', '*' ],
            [ '.', '.' ]
        ];

        const actual = JSON.stringify(sut.nextStepFor(current));
        const expected = JSON.stringify(next);

        actual.should.equal(expected);
    });
});
