const repeatString = function (word, number) {
    let newString = ``;
    if (number >= 0) {
        for (let index = 0; index < number; index++) {
            newString = newString.concat(word);
        }
    } else {
        newString = `ERROR`;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
