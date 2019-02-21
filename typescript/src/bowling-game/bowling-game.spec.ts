import { should } from 'chai';

import { BowlingGame } from './bowling-game';
import { BowlingGameFactory } from "./bowling-game.factory";

should();

describe('BowlingGame', () => {

    let game: BowlingGame;

    describe('Classical game style should', () => {

        beforeEach(() => {
            game = new BowlingGameFactory().classicalGame();
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
            game.roll(7);
            rollMany(17, 0);
            game.score().should.equal(24);
        });

        it('one strike', () => {
            rollStrike();
            game.roll(3);
            game.roll(5);
            rollMany(17, 0);
            game.score().should.equal(26);
        });
    });

    it('12 frames all ones game', () => {
        const frames = 12;
        game = new BowlingGameFactory().martianGame();
        rollMany(24, 1);
        game.score().should.equal(24);
    });

    function rollMany(steps: number, pins: number) {
        for (let i = 0; i < steps; i++)
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
