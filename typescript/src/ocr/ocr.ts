import { Code } from './code';
import { FileParser } from './file/file-parser';
import { OCRFileParser } from './file/ocr-file-parser';
import { OCRAsciiParser } from './ascii/ocr-ascii-parser';

export class OCR {
    private readonly parser: FileParser;
    private readonly codes: Code[] = [];

    private constructor(parser: FileParser) {
        this.parser = parser;
    }

    static forFile(path: string) {
        const parser = new OCRFileParser(path);
        return new OCR(parser);
    }

    parse(): any {
        const mapToCodes = OCRAsciiParser.asciiNumbersToCodes(this.codes);
        this.parser.foreachLines(mapToCodes);
        return this.codes;
    }
}

