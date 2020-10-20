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
export = function (condition: boolean, lazyMessage: () => string): void {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message);
    }
};
