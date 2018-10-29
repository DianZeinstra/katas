export function minesweeper(lines: string[]) {
    const dimensions = lines[0]
        .split(' ')
        .map(p => +p);

    if (dimensions.find(val => val === 0))
        return '';

    const grid = lines.slice(1);
    const resultingGrid = minesweeperFor(grid, dimensions);

    return resultingGrid.toString();
}

function minesweeperFor(grid: string[], dimensions: number[]): string[] {
    const rows = dimensions[0];
    const cols = dimensions[1];

    const result = [];

    for (let row = 0; row < rows; row++) {
        let line = '';
        for (let col = 0; col < cols; col++) {
            if (grid[row].charAt(col) === '*')
                line += '*';
            else
                line += '0';
        }
        result.push(line);
    }

    return result;
}
