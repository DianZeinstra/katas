export class Diamond {

    static readonly ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    static Of(letter: string) {
        const lastIndex = Diamond.ALPHABET.indexOf(letter);

        let result = '';

        result += underscores(lastIndex);
        result += 'A';
        result += underscores(lastIndex);

        const tableau = generateMiddleSequence(lastIndex);

        tableau.forEach((value: number) => {
            result += drawLine(value, lastIndex);
        });

        result += underscores(lastIndex);
        result += 'A';
        result += underscores(lastIndex);

        return result;

        function generateMiddleSequence(value: number): number[] {
            let result = Array.of(value);

            if (value === 1)
                return result;

            while (value !== 1) {
                value--;
                result = [ value, ...result, value ];
            }
            return result;
        }

        function drawLine(value: number, lastIndex: number): string {
            let result = '';
            result += underscores(lastIndex - value);

            result += Diamond.ALPHABET[value];
            result += underscores(2 * value - 1);
            result += Diamond.ALPHABET[value];

            result += underscores(lastIndex - value);
            return result;
        }

        function underscores(count: number): string {
            let result = '';
            while (count--) {
                result += '_';
            }
            return result;
        }
    }
}
