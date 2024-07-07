const add = require('./calculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    it('should handle single numbers', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });
});
