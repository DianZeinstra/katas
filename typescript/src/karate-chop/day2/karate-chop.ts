export function chop(searched: number, array: number[]): number {
    return chopActual(searched, array, 0);

    function chopActual(searched: number, array: number[], actual: number): number {
        if (arrayEmpty() || greaterThanRight())
            return -1;

        const middle = Math.floor(array.length / 2);

        if (array[ middle ] === searched)
            return actual + middle;
        else if (array[ middle ] > searched)
            return chopActual(searched, array.slice(0, middle), actual);
        else
            return chopActual(searched, array.slice(middle), actual + middle);

        function arrayEmpty() {
            return array.length === 0;
        }

        function greaterThanRight() {
            return searched > array[ array.length - 1 ];
        }
    }
}
