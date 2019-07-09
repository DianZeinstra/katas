import { should } from 'chai';
import { join } from 'path';

import { OCR } from './ocr';
import { Code, CodeStatus } from './code';

should();

describe('OCR should', () => {
    const emptyFileName = 'empty.txt';
    const emptyFilePath = join(__dirname, emptyFileName);

    const testFileName = 'codes.txt';
    const testFilePath = join(__dirname, testFileName);

    let ocr: OCR;

    it('parse empty files', () => {
        ocr = OCR.forFile(emptyFilePath);

        ocr.parse();
        ocr.checkStatuses();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(0);
    });

    it('parse fetched files', () => {
        ocr = OCR.forFile(testFilePath);

        const expected: Code[] = [
            new Code('123456789', CodeStatus.OK),
            new Code('071717170', CodeStatus.ERR),
            new Code('?117?7170', CodeStatus.ILL),
        ];

        ocr.parse();
        ocr.checkStatuses();
        const result = ocr.codes;

        result.should.exist;
        result.length.should.equal(3);
        result.should.eql(expected);
    });
});
