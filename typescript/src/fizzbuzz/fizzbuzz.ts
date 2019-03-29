export class FizzBuzz {

    readonly predicatesMap: any;

    constructor(predicates: any) {
        this.predicatesMap = predicates;
    }

    For(value: number): number | string {
        return Object.keys(this.predicatesMap).map(key => {
            if (this.predicatesMap[key](value)) return key;
            return value;
        })[0];
    }

    Range(range: number) {
        const tableau = [];
        for (let i = 1; i <= range; i++) {
            tableau.push(this.For(i));
        }
        return tableau;
    }
}
