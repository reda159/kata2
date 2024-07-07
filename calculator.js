function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";

    // Replace newlines with the delimiter
    numbers = numbers.replace(/\n/g, delimiter);

    // Split numbers by delimiter
    const nums = numbers.split(delimiter).map(num => parseInt(num));

    // Sum the numbers
    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
