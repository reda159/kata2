const add = require('./calculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    it('should handle single numbers', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    it('should handle two numbers separated by comma', () => {
        expect(add("1,2")).toBe(3);
        expect(add("3,5")).toBe(8);
    });
});
