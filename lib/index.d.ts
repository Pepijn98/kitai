/**
 * Validates the condition, if false will throw an IllegalArgumentException just like kotlin's require function
 *
 * @param condition
 * @param lazyMessage
 */
declare function expect(condition: boolean, lazyMessage: () => any): void;
export = expect;
