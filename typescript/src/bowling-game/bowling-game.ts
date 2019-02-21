export class BowlingGameBuilder {
    private frames: number;
    private rollsPerFrame: number;
    private pins: number;

    withFrames(quantity: number) {
        this.frames = quantity;
        return this;
    }
    get Frames(): number {
        return this.frames;
    }

    withRollsPerFrame(quantity: number) {
        this.rollsPerFrame = quantity;
        return this;
    }
    get RollsPerFrame(): number {
        return this.rollsPerFrame;
    }

    withPins(quantity: number) {
        this.pins = quantity;
        return this;
    }
    get Pins(): number {
        return this.pins;
    }

    build(): BowlingGame {
        return new BowlingGame(this);
    }
}

export class BowlingGame {
    private readonly frames: number;
    private readonly rollsPerFrame: number;
    private readonly pins: number;

    private rolls: number[] = [];

    constructor(builder: BowlingGameBuilder) {
        this.frames = builder.Frames;
        this.rollsPerFrame = builder.RollsPerFrame;
        this.pins = builder.Pins;
    }

    private nextBallForSpare(currentRoll: number) {
        return this.rolls[ currentRoll + 2 ];
    }

    private nextTwoBallsForStrike(currentRoll: number) {
        return this.rolls[ currentRoll + 1 ] + this.rolls[ currentRoll + 2 ];
    }

    private isStrike(currentRoll: number) {
        return this.rolls[ currentRoll ] == this.pins;
    }

    private isSpare(currentRoll: number) {
        return this.rolls[ currentRoll ] + this.rolls[ currentRoll + 1 ] == this.pins;
    }

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        let currentRoll = 0;

        for (let frame = 0; frame < this.frames; frame++) {
            if (this.isStrike(currentRoll)) {
                score += this.pins + this.nextTwoBallsForStrike(currentRoll);
                currentRoll++;
            }
            else if (this.isSpare(currentRoll)) {
                score += this.pins + this.nextBallForSpare(currentRoll);
                currentRoll += 2;
            }
            else {
                score += this.rolls
                    .slice(currentRoll, currentRoll + this.rollsPerFrame)
                    .reduce(sum, 0);
                currentRoll += this.rollsPerFrame;
            }
        }

        return score;

        function sum(total: number, value: number) {
            total += value;
            return total;
        }
    }
}
