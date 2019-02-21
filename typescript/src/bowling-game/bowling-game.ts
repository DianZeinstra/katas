import { GameplayStrategy } from './gameplay/gameplay-strategy';

export class BowlingGame {

    readonly gameplay: GameplayStrategy;

    constructor(gameplayStrategy: GameplayStrategy) {
        this.gameplay = gameplayStrategy;
    }

    roll(pins: number) {
        this.gameplay.roll(pins);
    }

    score(): number {
        return this.gameplay.score();
    }
}
