import { should } from 'chai';

should();

describe('Test', () => {

    it('should fail', () => {
        ({'nope': 1}).should.have.all.keys('key');
    });
});
