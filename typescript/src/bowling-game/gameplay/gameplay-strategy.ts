export interface GameplayStrategy {
    roll(pins: number): void;
    score(): number;
}
