import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index";

test("Capitalize simple", () => {
    expect(capitalize("test")).toBe("Test");
});
test("Capitalize diff char", () => {
    expect(capitalize("2aramele")).toBe("error");
});
test("Capitalize upper", () => {
    expect(capitalize("Telecom")).toBe("Telecom");
});
test("Capitalize empty", () => {
    expect(capitalize("")).toBe("error");
});

test("Reverse simple", () => {
    expect(reverseString("test")).toBe("tset");
});
test("Reverse empty", () => {
    expect(reverseString("")).toBe("error");
});
test("Reverse single", () => {
    expect(reverseString("s")).toBe("s");
});

test("Add simple", () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test("Subtract simple", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});
test("Divide simple", () => {
    expect(calculator.divide(100, 200)).toBe(0.5);
});
test("Multiply simple", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test("caesarCipher", () => {
    expect(caesarCipher("abcd")).toBe("bcde");
});
test("caesarCipher2", () => {
    expect(caesarCipher("Acesta este un test")).toBe("Bdftub ftuf vo uftu");
});
test("caesarCipher3", () => {
    expect(caesarCipher("zzzz !@# test")).toBe("aaaa !@# uftu");
});
test("caesarCipher4", () => {
    expect(caesarCipher("CAPS")).toBe("DBQT");
});

test("analyzeArray", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
