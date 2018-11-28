type PolybiusSquare = string[][];

class PolybiusSquareUtil {
    private static ALPHABET = 'ABCDEFGHIJKMLNOPQRSTUVWXYZ0123456789';
    private static SIZE = 6;

    static make(keyword: string): string[][] {
        const cipherAlphabet = PolybiusSquareUtil.makeCipherAlphabet(keyword);
        return PolybiusSquareUtil.stringToPolybiusSquare(cipherAlphabet);
    }

    private static makeCipherAlphabet(keyword: string) {
        let result = removeDuplicateLetters(keyword).toUpperCase();
        for (const letter of this.ALPHABET) {
            if (result.indexOf(letter) === -1) {
                result += letter;
            }
        }
        return result;

        function removeDuplicateLetters(str: string): string {
            return [ ...new Set([ ...str ]) ].join('');
        }
    }

    private static stringToPolybiusSquare(cipherAlphabet: string): PolybiusSquare {
        const result: string[][] = [];
        for (let step = 0; step < this.SIZE; step++) {
            result.push(
                cipherAlphabet
                    .substr(step * this.SIZE, this.SIZE)
                    .split('')
            );
        }
        return result;
    }

    static valueOf(letter: string, square: PolybiusSquare): number {
        for (let i = 0; i < this.SIZE; i++)
            for (let j = 0; j < this.SIZE; j++)
                if (square[ i ][ j ] === letter)
                    return ((i + 1) * 10) + (j + 1);

        return 0; // should handle exception
    }
}

export class NihilistCipher {

    private polybiusSquare: PolybiusSquare;

    constructor(private keyword: string = '') {
    }

    getKeyword(): string {
        return this.keyword;
    }

    cipher(plain: string, password: string): string {
        const polybiusPlain = this.plainToPolybius(plain);
        const key = this.generateKey(password, polybiusPlain.length);

        return add(polybiusPlain, key).join('');

        function add(left: number[], right: number[]): number[] {
            let result = [];
            for (let i = 0; i < left.length; i++)
                result.push((left[i] + right[i]) % 100);
            return result;
        }
    }

    private plainToPolybius(plain: string): number[] {
        this.buildPolybiusSquare();

        return plain
            .split('')
            .filter(l => l !== ' ')
            .map(l => PolybiusSquareUtil.valueOf(l, this.polybiusSquare))
            .filter(val => val !== 0);
    }

    private buildPolybiusSquare(): void {
        this.polybiusSquare = PolybiusSquareUtil.make(this.keyword);
    }

    private generateKey(password: string, length: number): number[] {
        const result: number[] = [];
        let index = 0;
        while (result.length !== length) {
            result.push(PolybiusSquareUtil.valueOf(password[index++], this.polybiusSquare));
            if (index === password.length) index = 0;
        }
        return result;
    }
}
