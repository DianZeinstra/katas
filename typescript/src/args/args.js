// Schema explanations:
// -> char     - Boolean arg
// -> char#    - Number arg
// -> char*    - String arg
var BooleanGetterSetter = /** @class */ (function () {
    function BooleanGetterSetter() {
        this.value = false;
    }
    BooleanGetterSetter.prototype.get = function () {
        return this.value;
    };
    BooleanGetterSetter.prototype.set = function (t) {
        this.value = t;
    };
    return BooleanGetterSetter;
}());
var Args = /** @class */ (function () {
    function Args(schema) {
        this.marshalers = {};
        this.loadSchema(schema);
    }
    Args.prototype.parse = function (commands) {
        var _this = this;
        console.warn(commands);
        console.warn('parsing');
        commands.split('-').forEach(function (command) {
            console.warn(command);
            _this.parseCommand(command.trim());
        });
    };
    Args.prototype.getBoolean = function (letter) {
        console.warn('gettingbool');
        return this.marshalers[letter].get();
    };
    Args.prototype.loadSchema = function (schema) {
        schema.split(',').forEach(this.loadPattern);
    };
    Args.prototype.loadPattern = function (pattern) {
        var letter = pattern[0];
        var varType = pattern.substring(1) || '';
        console.warn(letter);
        console.warn(varType);
        this.newPattern(letter, varType);
        console.warn('after');
    };
    Args.prototype.newPattern = function (letter, varType) {
        console.warn('new pattern');
        if (!varType) {
            this.marshalers[letter] = new BooleanGetterSetter();
        }
        console.warn(this.marshalers);
    };
    Args.prototype.parseCommand = function (command) {
        console.warn('command: ', command);
        var parts = command.split(' ');
        var letter = parts[0];
        var value = parts[1];
        this.marshalers[letter].set(value);
    };
    return Args;
}());
var schema = 'd';
try {
    var args = new Args(schema);
    args.parse("-d");
    var detach = args.getBoolean('d');
    console.warn('detach: ', detach);
    // const port = args.getNumber('p');
    // const hero = args.getString('h');
    // executeApplication(detach, port, hero);
}
catch (e) {
    // console.error(`Parse error: ${e.message}`);
}
var executeApplication = function (d, p, h) {
    console.log("Application running - detached (" + d + "), port: (" + p + "), hero is (" + h + ")");
};
