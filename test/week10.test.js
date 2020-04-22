const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner

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
        });
});
describe("getScreentimeAlertList", () => {
    test("It returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
    test("It returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-06-14", usage: { twitter: 34, instagram: 2, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 2, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 10, whatsApp: 20, facebook: 10, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 42, whatsApp: 20, facebook: 40, safari: 31 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["sam_j_1989"])
    });
    test("It returns empty array if nobody spent over 100 minutes", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-06-14", usage: { twitter: 34, instagram: 2, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 2, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 10, whatsApp: 20, facebook: 10, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 42, whatsApp: 20, facebook: 40, safari: 31 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([])
    })
    test("It returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-06-14", usage: { twitter: 34, instagram: 2, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-10", usage: { twitter: 34, instagram: 40, facebook: 40 } },

                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 2, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 10, whatsApp: 20, facebook: 10, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 42, whatsApp: 20, facebook: 40, safari: 31 } },
                    { date: "2019-06-10", usage: { mapMyRun: 42, whatsApp: 20, facebook: 40, safari: 31 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-06-10")).toEqual(["beth_1234", "sam_j_1989"])
    })
});
describe("hexToRGB", () => {
    test("It returns the equivalent color in RGB format", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)"),
            expect(hexToRGB("#47ff11")).toBe("rgb(71,255,17)"),
            expect(hexToRGB("#ffd9a6")).toBe("rgb(255,217,166)"),
            expect(hexToRGB("#34FE34")).toBe("rgb(52,254,52)"),
            expect(hexToRGB("#2200FF")).toBe("rgb(34,0,255)"),
            expect(hexToRGB("#112233")).toBe("rgb(17,34,51)")
    });
});

describe("findWinner", () => {
    test("It returns 'X' if player X has won", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe("X");
    });
    test("It returns '0' if player 0 has won", () => {
        expect(findWinner([
            ["0", "0", null],
            ["0", null, "0"],
            ["0", null, "0"]
        ])).toBe("0")
    });
    test("It returns null if player 0 has won", () => {
        expect(findWinner([
            ["X", "0", null],
            ["0", null, "0"],
            ["0", null, "0"]
        ])).toBe(null)
    });
});