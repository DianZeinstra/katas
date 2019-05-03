import { should } from 'chai';
import { Wrapper } from './wrapper';

should();

describe('WordWrap should', () => {

    const Abc = 'ABC';
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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

    describe('when input contains no space or new line', () => {

        it('split every threshold characters', () => {
            Wrapper.wrap(Abc, 1).should.equal('A\nB\nC');
            Wrapper.wrap(Abc, 2).should.equal('AB\nC');

            Wrapper.wrap(Alphabet, 20).should.equal('ABCDEFGHIJKLMNOPQRST\nUVWXYZ');
            Wrapper.wrap(Alphabet, 16).should.equal('ABCDEFGHIJKLMNOP\nQRSTUVWXYZ');
            Wrapper.wrap(Alphabet, 12).should.equal('ABCDEFGHIJKL\nMNOPQRSTUVWX\nYZ');
            Wrapper.wrap(Alphabet, 8).should.equal('ABCDEFGH\nIJKLMNOP\nQRSTUVWX\nYZ');
        });
    });
});
