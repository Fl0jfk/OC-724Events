import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return mars for 2023-03-01 as date", () => {
            const date = new Date("2023-03-01");
            const month = getMonth(date);
            expect(month).toBe("mars");
        });
        it("the function return septembre for 1993-09-08 as date", () => {
            const date = new Date("1993-09-08");
            const month = getMonth(date);
            expect(month).toBe("septembre");
        });
    });
});

