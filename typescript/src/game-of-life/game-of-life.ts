export enum States {
    ALIVE = '*',
    DEAD = '.'
}

/**
 * 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
 * 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
 * 3. Any live cell with two or three live neighbours lives on to the next generation.
 * 4. Any dead cell with exactly three live neighbours becomes a live cell.
 */

export class GameOfLife {

    constructor() {}

    nextStepFor(currentGame: string[][]) {
        for (let line = 0; line < currentGame.length; line++) {
            for (let column = 0; column < currentGame.length; column++) {
                const neighbors = this.getNeighbors(currentGame, line, column);
                const aliveNeighbors = neighbors.filter(s => s === States.ALIVE).length;
            }
        }

        return currentGame;
    }

    getNeighbors(game: string[][], line: number, column: number): string[] {
        return [];
    }
}
