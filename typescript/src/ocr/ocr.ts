import { Checksum } from './domain/checksum';
import { Code } from './domain/code';
import { OCRAsciiParser } from './domain/ascii/ocr-ascii-parser';

import { FileReader } from './file/read/file-reader';
import { OcrFileReader } from './file/read/ocr-file-reader';
import { FileWriter } from './file/write/file-writer';
import { OcrFileWriter } from './file/write/ocr-file-writer';

export class OCR {
    private readonly _reader: FileReader;
    private readonly _writer: FileWriter<Code[]>;
    private readonly _codes: Code[] = [];

    private constructor(reader: FileReader, writer: FileWriter<Code[]>) {
        this._reader = reader;
        this._writer = writer;
    }

    static forFile(readPath: string, writePath: string) {
        const reader = new OcrFileReader(readPath);
        const writer = new OcrFileWriter(writePath);
        return new OCR(reader, writer);
    }

    get codes(): Code[] {
        return this._codes;
    }

    parse(): void {
        const mapToCodes = OCRAsciiParser.asciiNumbersToCodes(this._codes);
        this._reader.foreachLines(mapToCodes);
    }

    checkStatuses(): void {
        this.codes.forEach(code => {
            code.status = Checksum.valueOf(code.value);
        });
    }

    writeReport(): void {
        this._writer.write(this._codes);
    }
}

