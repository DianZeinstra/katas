export class Rack {
    balls: number[] = [];

    add(value: number) {
        const size = this.balls.length;

        if (size === 0)
            this.balls.push(value);
        else if (value < this.balls[ 0 ])
            this.balls = [ value, ...this.balls ];
        else if (value > this.balls[ size - 1 ])
            this.balls.push(value);
        else {
            for (let i = 1; i < size; i++) {
                if (value < this.balls[ i ]) {
                    this.balls = [
                        ...this.balls.slice(0, i),
                        value,
                        ...this.balls.slice(i, size)
                    ];
                }
            }
        }
    }
}
