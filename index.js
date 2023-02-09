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

function caesarCipher() {
    // TODO: Finish the project
    return 1;
}

export { capitalize, reverseString, calculator, caesarCipher };
