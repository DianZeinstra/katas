import { should } from 'chai';

should();

import { minesweeper } from './minesweeper';

describe('Minesweeper should', () => {

    it('exist', () => {
        minesweeper.should.exist;
    });

    it('return empty string when given 0 rows and columns', () => {
        const input = [
            '0 0'
        ];

        minesweeper(input).should.equal('');
    });

    it('return an array of zeros when no mines given', () => {
        const input = [
            '2 2',
            '..',
            '..'
        ];

        const expected = [
            '00',
            '00'
        ].toString();

        minesweeper(input).should.equal(expected);
    });

    it('return an array with stars when only mines given', () => {
        const input = [
            '2 2',
            '**',
            '**'
        ];

        const expected = [
            '**',
            '**'
        ].toString();

        minesweeper(input).should.equal(expected);
    });
});
