const capitalize = (text) => {
    if (!text.charAt(0).match(/[a-z]/i) || text.length < 1) return "error";
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const reverseString = (text) => text.split("").reverse().join("") || "error";

const calculator = {
    add: (n1, n2) => n1 + n2,
    subtract: (n1, n2) => n1 - n2,
    divide: (n1, n2) => n1 / n2,
    multiply: (n1, n2) => n1 * n2,
};

const caesarCipher = (str) => {
    return str
        .split("")
        .map((char) => {
            if (!/[a-z]/i.test(char)) return char;
            if (char === "Z") return "A";
            if (char === "z") return "a";
            return String.fromCharCode(char.charCodeAt(0) + 1);
        })
        .join("");
};

const analyzeArray = (arr) => {
    const average = () => arr.reduce((a, b) => a + b, 0) / arr.length;
    const length = () => arr.length;
    const max = () => Math.max(...arr);
    const min = () => Math.min(...arr);
    return {
        average: average(),
        length: length(),
        max: max(),
        min: min(),
    };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
