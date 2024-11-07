const d = new Date();
let actualYear = d.getFullYear();
let olderPerson;

const findTheOldest = function(people) {
    olderPerson = people[people.length-1];
    people.map(person => comparePeople(person));
    return olderPerson;
};

function comparePeople(tempPerson){
    if (calculateAge(olderPerson) <= calculateAge(tempPerson)) {
        olderPerson = tempPerson;
    }
};

function calculateAge(person){
    return verifyDeathYear(person.yearOfDeath)-person.yearOfBirth;
};

function verifyDeathYear(deathYear) {
    return !deathYear ? actualYear : deathYear;
};

//This is an improved version 2.0 with help from Jarvis, just for the fun of making it better.
/*
const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath, currentYear);
        const personAge = calculateAge(person.yearOfBirth, person.yearOfDeath, currentYear);
        return personAge > oldestAge ? person : oldest;
    });
};

function calculateAge(birthYear, deathYear, currentYear) {
    return (deathYear || currentYear) - birthYear;
}

module.exports = findTheOldest;
*/

// Do not edit below this line
module.exports = findTheOldest;
