import { BowlingGame, BowlingGameBuilder } from "./bowling-game";

export class BowlingGameFactory {

    classicalGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withFrames(10)
            .build();
    }

    martianGame(): BowlingGame {
        return new BowlingGameBuilder()
            .withFrames(12)
            .build();
    }
}
