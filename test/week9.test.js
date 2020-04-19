const { sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
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
    });
});

describe("isValidDNA", () => {
    test("it returns false if string contains other than C, G, T or A", () => {
        const result = isValidDNA("BCTV");
        const expected = false;
        expect(result).toBe(expected);
    });
    test("it returns true if string contains C, G, T or A only", () => {
        const result = isValidDNA("CGATCATGC");
        const expected = true;
        expect(result).toBe(expected);
    });
    test("it shouldn't be case sensitive", () => {
        const result = isValidDNA("cagGTGaagtc");
        const expected = true;
        expect(result).toBe(expected);
    });
});

describe("getComplementaryDNA", () => {
    test("it returns GACT when passed CTGA", () => {
        const result = getComplementaryDNA("CTGA");
        const expected = "GACT";
        expect(result).toEqual(expected)
    });
    test("it returns AGTC when passed TCAG", () => {
        const result = getComplementaryDNA("TCAG");
        const expected = "AGTC";
        expect(result).toEqual(expected)
    });
    test("it shouldn't be case sensitive", () => {
        const result = getComplementaryDNA("agtc");
        const expected = "TCAG"
        expect(result).toEqual(expected)
    });
});
describe("isItPrime", () => {
    test("it returns true if n is prime", () => {
        expect(isItPrime(7)).toBe(true)
        expect(isItPrime(499)).toBe(true)
        expect(isItPrime(601)).toBe(true)
    });
    test("it returns false if n is not prime", () => {
        expect(isItPrime(9)).toBe(false)
        expect(isItPrime(345)).toBe(false)
        expect(isItPrime(100)).toBe(false)
    });
});
describe("createMatrix", () => {
    test("it returns an empty array when passed 0", () => {
        const result = createMatrix(0, "hi");
        const expected = [];
        expect(result).toEqual([])
    });
    test("it returns an array of n arrays, each filled with n items", () => {
        expect(createMatrix(2, "hello")).toEqual([["hello", "hello"], ["hello", "hello"]]);
        expect(createMatrix(3, "Why not?")).toEqual([["Why not?", "Why not?", "Why not?"], ["Why not?", "Why not?", "Why not?"], ["Why not?", "Why not?", "Why not?"]]);
        expect(createMatrix(4, "yummy!")).toEqual([["yummy!", "yummy!", "yummy!", "yummy!"], ["yummy!", "yummy!", "yummy!", "yummy!"], ["yummy!", "yummy!", "yummy!", "yummy!"], ["yummy!", "yummy!", "yummy!", "yummy!"]]);

    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thrusday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    test("it returns false is there are staff but < 3 not scheduled to work", () => {
        const staff = [
            { name: "peter", rota: ["Monday", "Tuesday"] },
            { name: "mary", rota: ["Monday", "Tuesday"] },
            { name: "john", rota: ["Monday", "Tuesday"] },
            { name: "julie", rota: ["Monday", "Tuesday"] }
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    });
});