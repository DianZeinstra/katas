import { readFileSync } from 'fs';

import { FileParser } from './file-parser';

export type Mapper<T> = (arg: T) => any;

export class OCRFileParser implements FileParser {
    private readonly LinesForOCR = 4;
    private readonly FilePath: string;

    constructor(path: string) {
        this.FilePath = path;
    }

    foreachLines(mapper: Mapper<string[]>): void {
        const lines = readFileSync(this.FilePath)
            .toString()
            .split('\n');

        for (
            let currentLine = 0;
            currentLine <= lines.length - this.LinesForOCR;
            currentLine += this.LinesForOCR
        ) {
            const nextLines = lines.slice(currentLine, currentLine + this.LinesForOCR);
            mapper(nextLines);
        }
    }
}
