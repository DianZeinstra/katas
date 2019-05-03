import { should } from 'chai';

import { NihilistCipher } from './nihilist-cipher';

should();

describe('Nihilist Cipher should', () => {

    let KEYWORD = '';

    it('be instantiable', () => {
        const nc = new NihilistCipher();
        nc.should.exist;
    });

    it('be instantiable, with a keyword parameter for polybius square', () => {
        const nc = new NihilistCipher(KEYWORD);
        nc.getKeyword().should.equal(KEYWORD);
    });

    describe('be able to cipher a string with a password and no keyword', () => {

        it('HELLO WORLD and TEST should return 64307273756074787329', () => {
            const nc = new NihilistCipher(KEYWORD);
            nc.cipher('HELLO WORLD', 'TEST').should.equal('64307273756074787329');
        });
    });
});
