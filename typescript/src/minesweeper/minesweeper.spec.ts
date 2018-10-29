import { should } from 'chai';

should();

import { minesweeper } from './minesweeper';

describe('Minesweeper should', () => {

    it('exist', () => {
        minesweeper.should.exist;
    });
});
