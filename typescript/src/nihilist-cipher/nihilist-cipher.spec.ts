import { should } from 'chai';

import { NihilistCipher } from './nihilist-cipher';

should();

describe('Nihilist Cipher should', () => {

    const KEYWORD = 'keyword';

    it('be instantiable', () => {
        const nc = new NihilistCipher();
        nc.should.exist;
    });

    it('be instantiable, with a keyword parameter for polybe square', () => {
        const nc = new NihilistCipher(KEYWORD);
        nc.should.exist;
        nc.getKeyword().should.equal(KEYWORD);
    });
});
