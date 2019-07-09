import { Mapper } from './ocr-file-parser';

export interface FileParser {
    foreachLines(mapper: Mapper<string[]>): void;
}
