const { sumMultiples, 
        areWeCovered, 
        createMatrix

    } = require("../challenges/week9")

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("arr is required");
    })
    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });
    test("it return 0 if there's no multiples of 3 or 5", () => {
        const result = sumMultiples([1, 2, 8, 13, 7]);
        const expected = 0;
        expect(result).toBe(expected);
    })
});

