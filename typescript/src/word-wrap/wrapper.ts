export class Wrapper {

    static wrap(line: string, threshold: number) {
        if (threshold <= 0 || line.length <= threshold) {
            return line;
        }

        return '';
    }
}
