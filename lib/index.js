"use strict";
class IllegalArgumentException extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalArgumentException";
    }
}
/**
 * Validates the condition, if false will throw an IllegalArgumentException just like kotlin's require function
 *
 * @param condition
 * @param lazyMessage
 */
function expect(condition, lazyMessage) {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message.toString());
    }
}
;
module.exports = expect;
//# sourceMappingURL=index.js.map