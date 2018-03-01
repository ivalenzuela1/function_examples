/*
    Write a function called "addTwoNumbers".

    Given two numbers, it should return the sum.
    Example: add(2, 2) --> 4
**/

function addTwoNumbers(number1, number2) {
    // your code here
    return number1 + number2;
}

/*
    Write a function called "multiplyTwoNumbers".

    Given two numbers, it should return them multiplied.
    Example: add(3, 2) --> 6
**/

function multiplyTwoNumbers(number1, number2) {
    // your code here
    return number1 * number2;
}

/*
    Write a function called "isOldEnoughToDrink".

    Given a number, in this case an age, "isOldEnoughToDrink" returns whether
    a person of this given age is old enough to legally drink in the United States.

    Note: The legal drinking age in the United States is 21.
    Example: isOldEnoughToDrink(10) --> false
**/

function isOldEnoughToDrink(age) {
    // your code here
    if(age < 21){return false;} else {return true;}
}

/*
    Write a function called "isOldEnoughToDrive".

    Given a number, in this case an age, "isOldEnoughToDrive" returns
    whether a person of this given age is old enough to legally drive in the United States.

    Note: The legal driving age in the United States is 16.
**/

function isOldEnoughToDrive(age) {
    // your code here
    if(age < 16){return false;} else {return true;}

}

/*
    Write a function called "getFirstElement".

    Return the first element in any array that is passed in.

    Example: getFirstElement([4, 5, 6]) --> 4
**/

function getFirstElement(collection) {
    // your code here
    return collection[0];
}

/*
    Write a function called "getLastElement".

    Return the last element in any array that is passed in.

    Example: getLastElement([4, 5, 6]) --> 6
**/

function getLastElement(collection) {
    // your code here
    var lastElement = collection.pop();
    return lastElement;

}

/*
    Write a function called "getNthElement".

    Return the nth element in any array that is passed in.

    Example: getNthElement([4, 5, 6], 1) --> 5
**/

function getNthElement(collection, n) {
    // your code here
    return collection[n];



}

/*
    Write a function called "addToFront".

    It should add the item to the front of the array and return that array.

    Example: addToFront([4, 5, 6], 1) --> [1, 4, 5, 6]
**/

function addToFront(collection, item) {
    // your code here
    collection.unshift(item);
    return collection;
}

/*
    Write a function called "addToBack".

    It should add the item to the back of the array and return that array.

    Example: addToFront([4, 5, 6], 1) --> [4, 5, 6, 1]
**/

function addToBack(collection, item) {
    // your code here
    collection.push(item);
    return collection;
}

/*
    Write a function called "computeAreaOfARectangle".

    It should compute the area of a rectangle.

    Example: computeAreaOfARectange(7, 3) --> 21
**/

function computeAreaOfARectangle(length, width) {
    // your code here
    return length * width;
}

/*
    Write a function called "addAny".

    Return the sum of any numbers inputted

    Example: addAny(3, 5, 6, 10, 100) --> returns 124
    Hint: Use the arguments array
**/
function addAny() {
    // your code here
    return 

}

/*
    Write a function called "getFullName".

    Return the full name from the first name and last name

    Example: getFullName('Lebron', 'James) --> 'Lebron James'
    Hint: don't forget the space!
**/

function getFullName(firstName, lastName) {
    // your code here

    return firstName + " " + lastName;
}

/*
    Write a function called "getLengthOfWord".

    Return the length of any word passed in.

    Example: getLengthOfWord('practice') --> 8
**/

function getLengthOfWord(word) {
    // your code here
    return word.length;
}

/*
    Write a function called "indexOfElement".

    Given an array and an element, return the index of the element in that array (or -1 if it isn't there)

    Example: indexOfElement([1, 2, 3], 3) --> 2
**/

function indexOfElement(collection, element) {
    // your code here
    return collection.indexOf(element);

}

/*
    Write a function called "getAllElementsButFirst".

    Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

    var input = [1, 2, 3, 4];
    var output = getAllElementsButFirst(input);
    console.log(output); // --> [2, 3, 4]

    Hint: be familiar with slice and splice
*/

function getAllElementsButFirst(array) {
    // your code goes here
    array.shift();
    return array;
}

/*
    Write a function called "getAllElementsButLast".

    Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

    var input = [1, 2, 3, 4];
    var output = getAllElementsButLast(input);
    console.log(output); // --> [1, 2, 3]
*/

function getAllElementsButLast(array) {
    // your code here
    array.pop();
    return array;
}

/*
    Write a function called "areValidCredentials".

    Given a username and a password, "areValidCredentials", returns true if the name is longer than 3 characters,
    AND, the password is at least 8 characters long. Otherwise it returns false.

    areValidCredentials('Craig', 'mysecurepassword12345') --> true
*/

function areValidCredentials(username, password) {
    // your code here
    if (username.length > 3 && password.length >= 8){ return true;} else {return false;}
}

/*
    Write a function called "removeAllEvenNumbers".

    Given an array of numbers, return an array that has all of the even numbers removed

    removeAllEvenNumbers([1, 2, 3, 4]) --> [1, 3]
*/

function removeAllEvenNumbers(array) {
    // your code here
    newArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            newArray.push(array[i])
        }
    }

    return newArray;
}

/*
    Write a function called "removeAllOddNumbers".

    Given an array of numbers, return an array that has all of the odd numbers removed

    removeAllOddNumbers([1, 2, 3, 4]) --> [2, 4]
*/

function removeAllOddNumbers(array) {
    // your code here
    newArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            newArray.push(array[i])
        }
    }

    return newArray;
}

/*
    Modify the given for loop to push i into the numbers array. If done correctly numbers should equal:

    var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
*/

function putNumbersInArray() {
    var results = [];

    for (var i = 0; i <= 25; i++) {
        // your code here
        results.push(i);
    }

    return results;
}

/*
    Make a function called "isInArray" that is given an array and an item.

    It should return true if the item is in the array, or false if it is not.
*/

function isInArray(array, item) {
    // your code here
    if(array.indexOf(item) !== -1){return true;} else {return false;}
}

/*
    Make a function called "addTenToEach" that is given an array of numbers

    It should return an array with 10 added to each number.

    Example: addTenToEach([1, 2, 3]) --> [11, 12, 13]
*/

function addTenToEach(array) {
    // your code here
    for (var i = 0; i < array.length; i++){
        array[i] = array[i] + 10;
    }

    return array;
}

/* 
    Use dot notation to return the firstname.
*/
function personName() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    };

    // your code here
    return person.firstname;
}

/* 
    Use bracket notation to return the city of birth.
*/
function cityOfBirth() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        'city of birth': 'Orem, UT'
    };

    // your code here
    return person['city of birth'];
}

/* 
    Use dot notation to add a new property to the object called frontpocket with the value equal to "iPhone".
*/
function addPhoneToPocket(object) {
    // your code here
    object.frontpocket = "iPhone";

    return object;
}

/*
    Use dot notation to access the frontpocket property on the backpack object
    and assign it's value to the backpack's backpocket.

    Example:
    var output = movePhoneToBackpocket();
    output.backpocket = 'iphone';
*/
function movePhoneToBackpocket() {
    var backpack = {
        frontpocket: 'iPhone'
    };

    // your code here
    backpack.backpocket = backpack.frontpocket;
    return backpack;
}

/*

    Here we have a function called statsLooper that will take a stats object and loop over it.
    Inside this loop, change the value of each property to 0.
*/

function statsLooper() {
    var stats = {
        age: 30,
        score: 100,
        length: 12,
        year: 2018
    };

    for (var key in stats) {
        // your code here
        stats[key] = 0;
    }

    return stats;
}

/* 
    Check each value inside the prewritten for-in loop. If a value is greater than 3,000,000 set it to 0.
    If a value is greater than 3,000,000 set it to 0.
    */

function statePopulationLooper() {
    var statePopulation = {
        utah: 2942902,
        texas: 26956958,
        california: 38802500
    };

    for (var key in statePopulation) {
        // your code here
        if (statePopulation[key] > 3000000){
            statePopulation[key] = 0;
        }
    }

    return statePopulation;
}

/*
    Write a function called "cleanUser"

    Inside of this function, loop over the object so that every property with a FALSY value is removed.
    Once all falsy values and their properties are removed, return the object.

    Hint: To remove a property use "delete"

    example:
    var user = {
        name: 'Craig',
        password: '',
        age: 34,
        admin: false
    }
    cleanUser(user) --> { user: 'Craig', age: 34 }
*/

function cleanUser(userObject) {
    
    // your code here
    for (var key in userObject){
        if(!(userObject[key])){
            delete userObject[key];
        }
   }

    return userObject;
}

/*

Write a function called "getAllKeys" which returns an array of all the input object's keys.

Example input: 
    {
        name : 'Sam',
        age : 25,
        hasPets : true
    }

Function's return value (output) :
    ['name', 'age', 'hasPets']

Do not use "Object.keys" to solve this prompt.
Note that your function should be able to handle any object passed in it.

Example: it should also handle an input like:
    {
        a : 'a',
        number : 11,
        hungry : true,
        grammyWins : 1
    }

Function's return value (output):
    ['a', 'number', 'hungry', 'grammyWins']

*/

function getAllKeys(obj) {
    // your code here
    var keyArr = [];
    for (var key in obj){
         keyArr.push(key);
    }

    return keyArr;
}

// do not edit any of the code below
module.exports = {
    addTwoNumbers,
    multiplyTwoNumbers,
    isOldEnoughToDrink,
    isOldEnoughToDrive,
    getFirstElement,
    getLastElement,
    getNthElement,
    addToFront,
    addToBack,
    computeAreaOfARectangle,
    addAny,
    getFullName,
    getLengthOfWord,
    indexOfElement,
    getAllElementsButFirst,
    getAllElementsButLast,
    areValidCredentials,
    removeAllEvenNumbers,
    removeAllOddNumbers,
    putNumbersInArray,
    isInArray,
    addTenToEach,
    personName,
    cityOfBirth,
    addPhoneToPocket,
    movePhoneToBackpocket,
    statsLooper,
    statePopulationLooper,
    cleanUser,
    getAllKeys
};
