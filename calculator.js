function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = ",";
    let checkOtherDelimiter = "";
    // Check for personalize delimiter
    if (numbers.startsWith("//")) {
        // Get the new delimiter and delete it from the initial strings
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEnd);
        numbers = numbers.substring(delimiterEnd + 1);
        // To check for another delimiter we delete all the character that is either a numbers or the delimiter
        checkOtherDelimiter = numbers.replace(/\d/g, "")
        checkOtherDelimiter = checkOtherDelimiter.replace(new RegExp("[" + delimiter + "]", "g"), "")
    }

    // Check if there is invalid characters
    if (checkOtherDelimiter.length >= 1) {
        throw new Error("'" + delimiter + "' expected but '" + checkOtherDelimiter[0] + "' found at position " + numbers.indexOf(checkOtherDelimiter[0]) + ".");
    }

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
