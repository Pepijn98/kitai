class IllegalArgumentException extends Error {
    constructor(message?: string) {
        super(message);
        this.name = "IllegalArgumentException";
    }
}

function expect(condition: boolean, lazyMessage: () => any): void {
    if (!condition) {
        const message = lazyMessage();
        throw new IllegalArgumentException(message.toString());
    }
};

export = expect;
