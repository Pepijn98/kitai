class IllegalArgumentException extends Error {
    constructor(message?: string) {
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
function expect(condition: boolean, lazyMessage: () => any): void {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message.toString());
    }
};

export = expect;
