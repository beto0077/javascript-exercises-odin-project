const reverseString = function(word) {
    let reversedWord = ``;
    const myArr = word.split("");
    for (let index = myArr.length - 1; index >= 0; index--) {
        reversedWord = reversedWord + myArr[index];
        
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
