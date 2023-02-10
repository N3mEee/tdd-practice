import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
  } from "./index";
  
  describe("capitalize", () => {
    test("simple string", () => {
      expect(capitalize("test")).toBe("Test");
    });
  
    test("string with different characters", () => {
      expect(capitalize("2aramele")).toBe("error");
    });
  
    test("already uppercase string", () => {
      expect(capitalize("TELECOM")).toBe("TELECOM");
    });
  
    test("empty string", () => {
      expect(capitalize("")).toBe("error");
    });
  });
  
  describe("reverseString", () => {
    test("simple string", () => {
      expect(reverseString("test")).toBe("tset");
    });
  
    test("empty string", () => {
      expect(reverseString("")).toBe("error");
    });
  
    test("single character string", () => {
      expect(reverseString("s")).toBe("s");
    });
  });
  
  describe("calculator", () => {
    describe("add", () => {
      test("simple addition", () => {
        expect(calculator.add(1, 2)).toBe(3);
      });
    });
  
    describe("subtract", () => {
      test("simple subtraction", () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
      });
    });
  
    describe("divide", () => {
      test("simple division", () => {
        expect(calculator.divide(100, 200)).toBe(0.5);
      });
    });
  
    describe("multiply", () => {
      test("simple multiplication", () => {
        expect(calculator.multiply(1, 2)).toBe(2);
      });
    });
  });
  
  describe("caesarCipher", () => {
    test("simple cipher", () => {
      expect(caesarCipher("abcd")).toBe("bcde");
    });
  
    test("cipher with spaces", () => {
      expect(caesarCipher("Acesta este un test")).toBe("Bdftub ftuf vo uftu");
    });
  
    test("cipher with special characters", () => {
      expect(caesarCipher("zzzz !@# test")).toBe("aaaa !@# uftu");
    });
  
    test("cipher with uppercase characters", () => {
      expect(caesarCipher("CAPS")).toBe("DBQT");
    });
  });
  
  describe("analyzeArray", () => {
    test("simple array analysis", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
    });
  });
  