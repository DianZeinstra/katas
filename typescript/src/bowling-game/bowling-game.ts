export class BowlingGameFactory {

    makeWiiGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withPinsPerFrame(10)
    }

    makeOrdinaryGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withPinsPerFrame(2)
            .withFrames(10)
            .build();
    }

    makeMartianGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withPinsPerFrame(3)
            .withFrames(12)
            .build();
    }
}

export class BowlingGameBuilder {
    private frames: number;
    private rollsPerFrame: number;

    get RollsPerFrame(): number {
        return this.rollsPerFrame;
    }
    W(quantity: number) {
        this.rollsPerFrame = quantity;
        return this;
    }

    get Frames(): number {
        return this.frames;
    }
    withFrames(quantity: number) {
        this.frames = quantity;
        return this;
    }

    build() {
        return new BowlingGame(this);
    }
}

export class BowlingGame {
    private pins: number[] = [];

    private readonly rollsPerFrame: number;
    private readonly frames: number;

    constructor(private builder: BowlingGameBuilder) {
        this.rollsPerFrame = builder.RollsPerFrame;
        this.frames = builder.Frames;
    }

    roll(pins: number) {
        this.pins.push(pins);
    }

    score(): number {
        let score = 0;
        let currentRoll = 0;

        function sum(total: number, value: number) {
            total += value;
            return total;
        }

        for (let frame = 0; frame < this.frames; frame++) {
            if (this.isStrike(currentRoll)) {
                score += 10 + this.nextTwoPinsForStrike(currentRoll);
                currentRoll++;
            } else if (this.isSpare(currentRoll)) {
                score += 10 + this.nextPinForSpare(currentRoll);
                currentRoll += 2;
            } else {
                score += this.pins
                    .slice(currentRoll, currentRoll + this.rollsPerFrame)
                    .reduce(sum, 0);
                currentRoll += this.rollsPerFrame;
            }
        }

        return score;
    }

    private nextPinForSpare(currentRoll: number) {
        return this.pins[ currentRoll + 2 ];
    }

    private nextTwoPinsForStrike(currentRoll: number) {
        return this.pins[ currentRoll + 1 ] + this.pins[ currentRoll + 2 ];
    }

    private isStrike(currentRoll: number) {
        return this.pins[ currentRoll ] === 10;
    }

    private isSpare(currentRoll: number) {
        return this.pins[ currentRoll ] + this.pins[ currentRoll + 1 ] === 10;
    }
}
