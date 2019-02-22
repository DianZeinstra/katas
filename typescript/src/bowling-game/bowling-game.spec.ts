import { should } from 'chai';
import { BowlingGame, BowlingGameFactory } from './bowling-game';

should();

describe('BowlingGame', () => {

    let game: BowlingGame;

    describe('ordinary game should', () => {

        beforeEach(() => {
            game = new BowlingGameFactory().makeOrdinaryGame();
        });

        it('gutter game', () => {
            rollMany(20, 0);
            game.score().should.equal(0);
        });

        it('all ones', () => {
            rollMany(20, 1);
            game.score().should.equal(20);
        });

        it('one spare', () => {
            rollSpare();
            game.roll(2);
            rollMany(17, 0);
            game.score().should.equal(14);
        });

        it('one strike', () => {
           rollStrike();
           game.roll(3);
           game.roll(3);
           rollMany(16, 0);
           game.score().should.equal(22);
        });
    });

    describe('martian game should', () => {

        beforeEach(() => {
            game = new BowlingGameFactory().makeMartianGame();
        });

        it('martian all ones on 12 frames', () => {
           rollMany(35, 1);
           game.score().should.equal(35);
        });
    });

    function rollMany(rolls: number, pins: number) {
        for (let i = 0; i < rolls; i++)
            game.roll(pins);
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
    }
});
