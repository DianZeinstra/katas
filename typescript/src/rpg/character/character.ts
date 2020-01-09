export class CharacterBuilder implements CharacterBuilder {
  private health = Character.MAX_HEALTH;
  private name: string;

  getHealth(): number {
    return this.health;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }
  getName(): string {
    return this.name;
  }

  build(): Character {
    return new Character(this);
  }
}

export class Character {
  static readonly MAX_HEALTH = 100;

  private readonly _health: number;
  private readonly _name: string;

  get health(): number {
    return this._health;
  }

  get name(): string {
    return this._name;
  }

  constructor(builder: CharacterBuilder) {
    this._health = builder.getHealth();
    this._name = builder.getName();
  }

  alive(): boolean {
    return this._health > 0;
  }
}
