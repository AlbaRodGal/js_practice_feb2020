const {
    sumDigits,
    createRange,
    
} = require("../challenges/week10")

describe("sumDigits", () => {
    test("it returns the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6),
        expect(sumDigits(23456)).toBe(20),
        expect(sumDigits(34)).toBe(7)
    })
    test("it returns 0 if digit if 0", () => {
        expect(sumDigits(0)).toBe(0)
    });
});

describe("createRange", () => {
    test("It returns an array that starts with 3 and ends with 15. The step is 5", () => {
        expect(createRange(3, 23, 5)).toEqual([3, 8, 13, 18, 23])
    }),
    test("It returns an array that starts with 4 and ends with 20. Step is not provided", () => {
        expect(createRange(4, 10)).toEqual([4, 5, 6, 7, 8, 9, 10])
    })
})
