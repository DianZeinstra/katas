import { should } from 'chai';

should();

import { minesweeper } from './minesweeper';

describe('Minesweeper should', () => {

    it('exist', () => {
        minesweeper.should.exist;
    });

    it('return empty string when given 0 rows and columns', () => {
        const entry = [
            '0 0'
        ];

        minesweeper(entry).should.equal('');
    });

    it('resolve successfully an 1x1 array with a mine', () => {
        const entry = [
            '1 1',
            '*',
            '0 0'
        ];

        const expected = 'Field #1:'
                       + '*';

        minesweeper(entry).should.equal(expected);
    });
});
