import { should } from 'chai';

import { Character } from './character';
import { Mage } from './mage';
import { MagesCannotAttackError } from './errors';

should();

describe('Mage should', () => {
  let mage: Mage;

  beforeEach(() => {
    mage = Mage.new();
  });

  it('not deal damage', () => {
    (function () {
      mage.attack(mage)
    })
    .should.throw(MagesCannotAttackError);
  });
});
