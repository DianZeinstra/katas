export class TooMuchLifeError extends Error {
  constructor(m?: string) {
    super(m || `Life cannot go above ${Character.MAX_HEALTH}`);
  }
}

export class CannotAutoAttackError extends Error {
  constructor(m?: string) {
    super(m || `Life cannot go above ${Character.MAX_HEALTH}`);
  }
}

export class CannotHealDeadCharacterError extends Error {
  constructor(m?: string) {
    super(m || `Life cannot go above ${Character.MAX_HEALTH}`);
  }
}

export class Character {
  static readonly MAX_HEALTH = 100;

  private _name: string;
  private _health: number;

  get name(): string {
    return this._name;
  }

  get health(): number {
    return this._health;
  }

  get alive(): boolean {
    return this._health > 0;
  }

  protected constructor(health: number) {
    this._name = '';
    this._health = health;
  }

  static new(health = Character.MAX_HEALTH): Character {
    if (health > Character.MAX_HEALTH) {
      throw new TooMuchLifeError();
    }
    return new Character(health);
  }

  attack(enemy: Character): void {
    if (enemy === this) {
      throw new CannotAutoAttackError();
    }
    if (enemy.alive) {
      enemy.damage(1);
    }
  }

  heal(ally: Character): void {
    if (!ally.alive) {
      throw new CannotHealDeadCharacterError();
    }
    ally.restore(1);
  }

  damage(quantity: number): void {
    this._health -= quantity;
  }

  restore(quantity: number): void {
    this._health += quantity;
  }
}
