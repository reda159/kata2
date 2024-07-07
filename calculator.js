function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    if (numbers.includes(",")) {
        const index = numbers.indexOf(",");
        const num1 = parseInt(numbers.substring(0, index));
        const num2 = parseInt(numbers.substring(index + 1));
        return num1 + num2;
    }

    return parseInt(numbers);
}

module.exports = add;
