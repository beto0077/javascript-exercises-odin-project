//Version #1
/*const removeFromArray = function (listWN, ...extras) {
    const altArray = listWN;
    console.log(extras);
    console.log(listWN);
    console.log("NEW conut");

    for (let index = 0; index < altArray.length; index++) {
        const element = altArray[index];
        console.log("Element " + element);
        for (let count = 0; count < extras.length; count++) {
            let twoCups = element + " " + extras[count];
            console.log(twoCups);
            if (element === extras[count]) {
                let position = listWN.lastIndexOf(extras[count]);
                listWN.splice(position, 1);
            }
        }
    }
    console.log(altArray);
};*/

//Version #2 (I decided to rewrite the code after finding some problems with the first version.)
const removeFromArray = function (array, ...elementsToRemove) {
    const newArray = [...array]; // Create a shallow copy of the original array

    for (let i = newArray.length - 1; i >= 0; i--) {
        const currentElement = newArray[i];

        for (let j = 0; j < elementsToRemove.length; j++) {
            if (currentElement === elementsToRemove[j]) {
                newArray.splice(i, 1); // Remove the element at the current index
                break; // Exit the loop after removing the element
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
