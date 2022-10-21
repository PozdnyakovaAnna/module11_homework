const getPercents = require('./percent.js');

describe("test getPercents", () => {
	it ( "getPercents with number", () => {
		const result = getPercents(30, 200);
		expect(result).toBe(60);
	}),
	it ( "getPercents with 0", () => {
		const result = getPercents(0, 0);
		expect(result).toBe(0);
	}),
	it ( "getPercents with fractional", () => {
		const result = getPercents(0.5, 1);
		expect(result).toBe(50);
	}),
	it ( "getPercents with fractional", () => {
		const result = getPercents("a", "b");
		expect(result).toBe("NaN");
	})
});