function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";

    // Replace newlines with the delimiter
    numbers = numbers.replace(/\n/g, delimiter);

    // Validate if there's a delimiter ath the end
    if (numbers.endsWith(delimiter)) {
        throw new Error("Invalid input: Separator found at the end");
    }

    // Split numbers by delimiter
    const nums = numbers.split(delimiter).map(num => parseInt(num));

    // Sum the numbers
    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
