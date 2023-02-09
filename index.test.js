import { capitalize, reverseString, calculator, caesarCipher } from "./index";

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
    expect(caesarCipher(1)).toBe(1);
});
