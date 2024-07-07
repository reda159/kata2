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

    it('should handle multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
        expect(add("10,20,30")).toBe(60);
    });

    it('should handle newlines as separators', () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("2\n3\n4")).toBe(9);
    });

    it('should throw an error for delimiter at the end of string', () => {
        expect(() => add("1,2,")).toThrow("Invalid input: Separator found at the end");
        expect(() => add("1,2\n")).toThrow("Invalid input: Separator found at the end");
    });

    it('should handle different delimiters', () => {
        expect(add("//;\n1;2;3")).toBe(6);
        expect(add("//|\n1|2|3|4")).toBe(10);
        expect(add("//sep\n2sep3sep4")).toBe(9);
    });
});
