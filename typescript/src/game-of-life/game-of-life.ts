export enum States {
    ALIVE = '*',
    DEAD = '.'
}

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
