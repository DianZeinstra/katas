import { should } from 'chai';

import { BowlingGame } from './bowling-game';
import { BowlingGameFactory } from "./bowling-game.factory";

should();

describe('BowlingGame', () => {

    let game: BowlingGame;

    describe('Classical game style should', () => {

        beforeEach(() => {
            game = new BowlingGameFactory().ClassicalGame();
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

    describe('Martian game style should', () => {

        beforeEach(() => {
            game = new BowlingGameFactory().MartianGame();
        });

        it('3 rolls on 12 frames all ones game', () => {
            rollMany(36, 1);
            game.score().should.equal(36);
        });

        it('roll a spare in three rolls', () => {
            rollMartianSpare(); // spare !
            game.roll(4);
            game.score().should.equal(18);
        });
    });

    describe('Wii game style should', () => {
        
        beforeEach(() => {
            game = new BowlingGameFactory().WiiGame();
        });

        it('have a 100-pins game with one strike', () => {
            rollWiiStrike();
            game.roll(11);
            game.roll(1);
            game.score().should.equal(124);
        });
    });

    function rollMany(steps: number, pins: number) {
        for (let i = 0; i < steps; i++)
            game.roll(pins);
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollMartianSpare() {
        game.roll(3);
        game.roll(3);
        game.roll(4);
    }

    function rollStrike() {
        game.roll(10);
    }

    function rollWiiStrike() {
        game.roll(100);
    }
});
