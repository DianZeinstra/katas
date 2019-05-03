import { should } from 'chai';
import { Wrapper } from './wrapper';

should();

describe('WordWrap should', () => {

    const Alphabet = 'ABCDEFGHIJKMLNOPQRSTUVWXYZ';
    const LoremIpsum = '';

    it('return empty when input is empty', () => {
        Wrapper.wrap('', 1).should.equal('');
    });

    it('return input when threshold is 0', () => {
        Wrapper.wrap(LoremIpsum, 0).should.equal(LoremIpsum);
    });

    it('return input when threshold is equal to input size', () => {
        Wrapper.wrap('A', 1).should.equal('A');
        Wrapper.wrap(Alphabet, 26).should.equal(Alphabet);
    });
});
