class HealthTooHighException extends Error {
  constructor(m: string) {
    super(m);
  }
}

export class CharacterBuilder implements CharacterBuilder {
  private health = Character.MAX_HEALTH;
  private name: string;

  withHealth(health: number) {
    if (health > Character.MAX_HEALTH) {
      throw new HealthTooHighException(`Health too high (max is ${Character.MAX_HEALTH})`);
    }

    this.health = health;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  build(): Character {
    return new Character(this);
  }

  getHealth(): number {
    return this.health;
  }

  getName(): string {
    return this.name;
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
