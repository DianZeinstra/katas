export enum CodeStatus {
    OK = '',
    ERR = 'ERR',
    ILL = 'ILL',
}

export class Code {
    private readonly _value: string;
    private _status: CodeStatus;

    constructor(value: string, status?: CodeStatus) {
        this._value = value;
        this._status = status || CodeStatus.OK;
    }

    get value(): string {
        return this._value;
    }

    set status(s: CodeStatus) {
        this._status = s;
    }
}
