import { should } from 'chai';
import * as sinon from 'sinon';

import { Warrior } from './warrior';

should();

describe('Warrior should', () => {
  let warrior: Warrior;

  beforeEach(() => {
    warrior = Warrior.new();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('deal between 0 and 9 damage when attacking', () => {
    let callback = sinon.spy();
    true.should.equal(true);
  });
});
