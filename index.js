function capitalize(text) {
    if (text.length >= 1 && text.charAt(0).match(/[a-z]/i)) {
        return text.charAt(0).toUpperCase() + text.substring(1, text.length);
    } else {
        return "error";
    }
}

function reverseString(text) {
    if (text.length < 1) return "error";
    let arr = [...text];
    return arr.reverse().join("");
}

const calculator = {
    add: function (n1, n2) {
        return n1 + n2;
    },
    subtract: function (n1, n2) {
        return n1 - n2;
    },
    divide: function (n1, n2) {
        return n1 / n2;
    },
    multiply: function (n1, n2) {
        return n1 * n2;
    },
};

function caesarCipher(str) {
    let strArr = [...str];
    let newArr = [];

    for (let char of strArr) {
        if (char.match(/[a-z]/i)) {
            if (char === "Z") {
                newArr.push("A");
            } else if (char === "z") {
                newArr.push("a");
            } else {
                const charCode = char.charCodeAt(0);
                const newChar = String.fromCharCode(charCode + 1);
                newArr.push(newChar);
            }
        } else {
            newArr.push(char);
        }
    }
    return newArr.join("");
}

function analyzeArray(arr) {
    function average() {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    function length() {
        return arr.length;
    }
    function max() {
        return Math.max(...arr);
    }
    function min() {
        return Math.min(...arr);
    }
    const object = {
        average: average(),
        length: length(),
        max: max(),
        min: min(),
    };

    return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
