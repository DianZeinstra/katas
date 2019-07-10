import { Checksum } from './domain/checksum';
import { Code } from './domain/code';
import { OCRAsciiParser } from './domain/ascii/ocr-ascii-parser';

import { FileParser } from './file/file-parser';
import { OCRFileParser } from './file/ocr-file-parser';

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
            code.status = Checksum.valueOf(code.value);
        });
    }
}

