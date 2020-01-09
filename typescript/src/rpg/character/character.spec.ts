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

  it('not create with more than 100 life', () => {
    try {
      new CharacterBuilder().withHealth(101).withName('').build()
    }
    catch (e) {
      e.should.exist;
    }
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
