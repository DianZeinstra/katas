export class BowlingGameBuilder {
    private frames: number;

    withFrames(quantity: number) {
        this.frames = quantity;
        return this;
    }
    get Frames(): number {
        return this.frames;
    }

    build(): BowlingGame {
        return new BowlingGame(this);
    }
}

export class BowlingGame {

    private rolls: number[] = [];

    private frames: number;

    constructor(builder: BowlingGameBuilder) {
        this.frames = builder.Frames;
    }

    private nextBallForSpare(currentRoll: number) {
        return this.rolls[ currentRoll + 2 ];
    }

    private nextTwoBallsForStrike(currentRoll: number) {
        return this.rolls[ currentRoll + 1 ] + this.rolls[ currentRoll + 2 ];
    }

    private isStrike(currentRoll: number) {
        return this.rolls[ currentRoll ] == 10;
    }

    private isSpare(currentRoll: number) {
        return this.rolls[ currentRoll ] + this.rolls[ currentRoll + 1 ] == 10;
    }

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        let currentRoll = 0;
        for (let frame = 0; frame < this.frames; frame++) {
            if (this.isStrike(currentRoll)) {
                score += 10 + this.nextTwoBallsForStrike(currentRoll);
                currentRoll++;
            }
            else if (this.isSpare(currentRoll)) {
                score += 10 + this.nextBallForSpare(currentRoll);
                currentRoll += 2;
            }
            else {
                score += this.rolls[currentRoll] + this.rolls[currentRoll+1];
                currentRoll += 2;
            }
        }
        return score;
    }
}
