export class Wrapper {

    static wrap(line: string, threshold: number) {
        if (threshold <= 0 || line.length <= threshold) {
            return line;
        }

        const re = new RegExp('[\\s\\S]{1,' + threshold + '}', 'g');
        const parts = line.match(re) || [];

        return parts.join('\n');
    }
}
