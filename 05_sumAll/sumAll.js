//Version #1
/*const sumAll = function (element1, element2) {
    let index = 0;
    let maxLength = 0;
    let totalSum = 0;
    if (typeof element1 === 'number' && typeof element2 === 'number') {
        console.log('They are both numbers');
        if (element1 > 0 && element2 > 0) {
            console.log('They are both positive numbers');
            if (element1 > element2) {
                index = element2;
                maxLength = element1;
            } else {
                index = element1;
                maxLength = element2;
            }
            for (index; index <= maxLength; index++) {
                totalSum += index;
            }
        } else {
            console.log(
                'Error, at least one of the elements in the arguments is not a positive number. / Number1 ' +
                (element1 >
                    0) + '/ Number2 ' + (element2 >
                        0)
            );
            return "ERROR";
        }
    } else {
        console.log(
            'Error, at least one of the elements in the arguments is not a number. / Number1 ' +
            typeof element1 +
            '/ Number2 ' +
            typeof element2
        );
        return "ERROR";
    }

    return totalSum;
};*/

//Version #2 (Debugged version of the code above.)
const sumAll = function (element1, element2) {
    let index = 0;
    let maxLength = 0;
    let totalSum = 0;
    if (typeof element1 === 'number' && typeof element2 === 'number') {
        if (element1 > 0 && element2 > 0) {
            if (element1 > element2) {
                index = element2;
                maxLength = element1;
            } else {
                index = element1;
                maxLength = element2;
            }
            for (index; index <= maxLength; index++) {
                totalSum += index;
            }
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
