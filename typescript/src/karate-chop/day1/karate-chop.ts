export function chop(searched: number, array: any[]): number {
    if (array.length === 0)
        return -1;

    let middle = getMiddleOf(array.length);
    let newMiddle = 0;

    let steps = 0;
    let limit = array.length / 2;

    while (array[ middle ] !== searched) {
        steps++;

        if (array[ middle ] > searched)
            newMiddle = getMiddleOf(middle);
        else if (isPair(middle))
            newMiddle = getMiddleOf(3 * middle);
        else
            newMiddle = getMiddleOf(3 * middle) + 1;

        if (outOfBounds(newMiddle, array.length)
            || newMiddle === middle
            || steps > limit) {
            return -1;
        }

        middle = newMiddle;
    }

    return middle;

    function getMiddleOf(value: number) {
        return Math.floor(value / 2);
    }

    function isPair(value: number) {
        return value % 2 === 0;
    }

    function outOfBounds(value: number, arraySize: number) {
        return value < 0 || arraySize <= value;
    }
}
