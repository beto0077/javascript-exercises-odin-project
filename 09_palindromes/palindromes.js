const palindromes = function (text) {
    // Convert the text to lowercase and remove non-alphanumeric characters
    text = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Initialize two pointers, one at the beginning and the other at the end of the text
    let left = 0;
    let right = text.length - 1;
    
    // Compare characters from both ends
    while (left < right) {
        if (text.charCodeAt(left) !== text.charCodeAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};

module.exports = palindromes;
