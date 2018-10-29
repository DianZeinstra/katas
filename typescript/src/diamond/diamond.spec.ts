import { should } from 'chai';
import { Diamond } from './diamond';

should();

describe('Diamond should', () => {

    it('return the expected pattern for "C"', () => {
        const expectedDiamond = "__A__"
                              + "_B_B_"
                              + "C___C"
                              + "_B_B_"
                              + "__A__";

        Diamond.Of('C').should.equal(expectedDiamond);
    });

    it('return the expected pattern for "B"', () => {
        const expectedDiamond = "_A_"
                              + "B_B"
                              + "_A_";

        Diamond.Of('B').should.equal(expectedDiamond);
    });

    it('return the expected pattern for "E"', () => {
        const expectedDiamond = "____A____"
                              + "___B_B___"
                              + "__C___C__"
                              + "_D_____D_"
                              + "E_______E"
                              + "_D_____D_"
                              + "__C___C__"
                              + "___B_B___"
                              + "____A____";

        Diamond.Of('E').should.equal(expectedDiamond);
    });
});
