"use strict";
class IllegalArgumentException extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalArgumentException";
    }
}
function expect(condition, lazyMessage) {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message.toString());
    }
}
;
module.exports = expect;
//# sourceMappingURL=index.js.map