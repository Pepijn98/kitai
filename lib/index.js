"use strict";
class IllegalArgumentException extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalArgumentException";
    }
}
module.exports = function (condition, lazyMessage) {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message);
    }
};
//# sourceMappingURL=index.js.map