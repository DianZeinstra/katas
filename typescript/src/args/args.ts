// Schema explanations:
// -> char     - Boolean arg
// -> char#    - Number arg
// -> char*    - String arg

interface GetterSetter<T> {
  value: T;
  get(): T;
  set(t: T): void;
}

class BooleanGetterSetter implements GetterSetter<boolean> {
    value = false;
    get(): boolean {
        return this.value;
    }
    set(t: boolean): void {
        this.value = t;
    }
}

export class Args {

    constructor(schema: string) {
        this.schema = schema;
    }

    // parse(commands: string) {
    //     console.warn(commands);
    //     console.warn('parsing');
    //     commands.split('-').forEach(command => {
    //         console.warn(command);
    //         this.parseCommand(command.trim());
    //     });
    // }

    // getBoolean(letter: string): boolean {
    //     console.warn('gettingbool');
    //     return this.marshalers[letter].get();
    // }

    // private loadSchema(schema: string) {
    //     schema.split(',').forEach(this.loadPattern);
    // }

    // private loadPattern(pattern: string) {
    //     const letter = pattern[0];
    //     const varType = pattern.substring(1) || '';
    //     console.warn(letter);
    //     console.warn(varType);
    //     this.newPattern(letter, varType);
    //     console.warn('after');
    // }

    // private newPattern(letter: string, varType: string | null) {
    //     console.warn('new pattern');
    //     if (!varType) {
    //         this.marshalers[letter] = new BooleanGetterSetter();
    //     }
    //     console.warn(this.marshalers);
    // }

    // private parseCommand(command: string) {
    //     console.warn('command: ', command);
    //     const parts = command.split(' ');
    //     const letter = parts[0];
    //     const value = parts[1];
    //     this.marshalers[letter].set(value);
    // }
}
