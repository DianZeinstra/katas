import { BowlingGame, BowlingGameBuilder } from "./bowling-game";

export class BowlingGameFactory {

    ClassicalGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withFrames(10)
            .withRollsPerFrame(2)
            .withPins(10)
            .build();
    }

    MartianGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withFrames(12)
            .withRollsPerFrame(3)
            .withPins(10)
            .build();
    }

    WiiGame() {
        return new BowlingGameBuilder()
            .withFrames(10)
            .withRollsPerFrame(2)
            .withPins(100)
            .build();
    }
}
