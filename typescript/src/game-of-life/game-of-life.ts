/**
 * 1. Any live cell with fewer than two live neighbours dies,
 *    as if caused by underpopulation.
 *
 * 2. Any live cell with more than three live neighbours dies,
 *    as if by overcrowding.
 *
 * 3. Any live cell with two or three live neighbours lives on.
 *
 * 4. Any dead cell with exactly three live neighbours becomes
 *    a live cell.
 */
export enum States {
    ALIVE = '*',
    DEAD = '.'
}

export class GameOfLife {

    constructor() {}

    nextStepFor(currentGame: string[][]) {
        const nextGame: string[][] = [];

        for (let line = 0; line < currentGame.length; line++)
            nextGame.push(this.getNextStepForLine(currentGame, line))

        return nextGame;
    }

    private getNextStepForLine(game: string[][], line: number) {
        const nextLine: string[] = [];

        for (let column = 0; column < game[line].length; column++)
            nextLine.push(this.getNextState(game, line, column));

        return nextLine;
    }

    private getNextState(game: string[][], line: number, column: number): string {
        const isAlive = game[line][column] === States.ALIVE;
        const aliveNeighbors = this.getAliveNeighborsOf(game, line, column);

        const aliveAndTwoOrThreeNeighbors = () => isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3);
        const deadAndExactlyThreeNeighbors = () => !isAlive && aliveNeighbors === 3;

        return aliveAndTwoOrThreeNeighbors() || deadAndExactlyThreeNeighbors()
            ? States.ALIVE
            : States.DEAD;
    }

    private getAliveNeighborsOf(game: string[][], line: number, column: number): number {
        let aliveNeighbors = 0;

        const topCellAlive = () => line > 0 && game[line - 1][column] === States.ALIVE;
        const bottomCellAlive = () => line < game.length - 1 && game[line + 1][column] === States.ALIVE;
        const leftCellAlive = () => column > 0 && game[line][column - 1] === States.ALIVE;
        const rightCellAlive = () => column < game[line].length - 1 && game[line][column + 1] === States.ALIVE;

        if (topCellAlive()) aliveNeighbors++;
        if (bottomCellAlive()) aliveNeighbors++;
        if (leftCellAlive()) aliveNeighbors++;
        if (rightCellAlive()) aliveNeighbors++;

        return aliveNeighbors;
    }
}
