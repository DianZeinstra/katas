import { should } from 'chai';
import { Character, CharacterBuilder } from './character';

should();

describe('Character should', () => {
  let character: Character;
  let other: Character;

  beforeEach(() => {
    character = new CharacterBuilder().withName('').build();
    other = new CharacterBuilder().withName('').build();
  });

  describe('when created', () => {
    it('be alive', () => {
      character.alive().should.be.true;
    });

    it('have 100 life', () => {
      character.health.should.exist;
      character.health.should.equal(Character.MAX_HEALTH);
    });

    it('have a name', () => {
      character.name.should.exist;
    });
  });
});
