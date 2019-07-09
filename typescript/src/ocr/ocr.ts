import { Code, CodeStatus } from './code';
import { FileParser } from './file/file-parser';
import { OCRFileParser } from './file/ocr-file-parser';
import { NotReadableChar, OCRAsciiParser } from './ascii/ocr-ascii-parser';

export class OCR {
    private readonly parser: FileParser;
    private readonly _codes: Code[] = [];

    private constructor(parser: FileParser) {
        this.parser = parser;
    }

    static forFile(path: string) {
        const parser = new OCRFileParser(path);
        return new OCR(parser);
    }

    get codes(): Code[] {
        return this._codes;
    }

    parse(): void {
        const mapToCodes = OCRAsciiParser.asciiNumbersToCodes(this._codes);
        this.parser.foreachLines(mapToCodes);
    }

    checkStatuses(): void {
        this.codes.forEach(code => {
            code.status = OCR.getStatus(code.value);
        });
    }

    private static getStatus(code: string): CodeStatus {
        const isReadable = (text: string) => text.indexOf(NotReadableChar) === -1;
        const isDivisibleBy11 = (value: number) => value % 11 === 0;

        const checksumValue = code.split('')
            .map(Number)
            .reduce((acc, value, index) => {
                acc += value * (9 - index);
                return acc;
            }, 0);

        return isReadable(code)
            ? isDivisibleBy11(checksumValue)
                ? CodeStatus.OK
                : CodeStatus.ERR
            : CodeStatus.ILL;
    }
}

