import { should } from 'chai';

import { BowlingGame } from '../bowling-game';

import { ClassicalGameplay } from './classical-gameplay';
import { GameplayStrategy } from './gameplay-strategy';

should();

describe('ClassicalGameplay should', () => {

    let gameplay: GameplayStrategy;
    let game: BowlingGame;

    beforeEach(() => {
        gameplay = new ClassicalGameplay();
        game = new BowlingGame(gameplay);
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
