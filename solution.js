// Spread the Word
// 1. Combining Arrays
//     Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
let asianCountries = ['Lebanon', 'Syria', 'Tibet', 'Taiwan'];
let euroCountries = ['Germany', 'France', 'Italy', ...asianCountries];

console.log(euroCountries);
//     Once again create two arrays. Save all elements of both arrays to another variable.
let asianCountries2 = ['Lebanon', 'Syria', 'Tibet', 'Taiwan', '...'];
let euroCountries2 = ['Germany', 'France', 'Italy'];
let eurasianCountries = [...euroCountries2, ...asianCountries2];

console.log(eurasianCountries);
// 2. Copying Arrays

//     Copy an array using the spread operator. Store the copied array in another variable.
eurasianCountriesCopy = [...eurasianCountries];
console.log(eurasianCountriesCopy);
// 3. Find the Largest...
// Create a function to find the largest number in an array.
function largest(array) {
    return Math.max(...array);
}

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
function smallest(array) {
    return Math.min(...array);
}
// 5. Clone and Merge

// Given two objects:
const person = { name: "John" }
const job = { role: "Teacher" }

//     5.1 Clone the person object.
let person2 = { ...person }
console.log(person2);

//     5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
employee = { ...person, ...job };
console.log(employee);

//     5.3 Then change the values of the properties in the employee object.
employee.name = 'name2';
console.log(employee);

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
//     Examples
//     isWhole(1, 2, 3, 4) ➞ false
// 10/4 = 2.5
//     isWhole(9, 2, 2, 5) ➞ false
//     Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
// NO!

function isWhole(int1, int2, int3, int4) {
    avg = (int1 + int2 + int3 + int4) / 4;
    console.log(avg);
    return Math.round(avg) === avg;
}

console.log(isWhole(1, 2, 3, 4), isWhole(9, 2, 2, 5))


function isWhole2(...integers) {
    avg = 0;
    for (int of integers) {
        avg += int;
    }
    avg = avg / integers.length;
    console.log(avg);
    return Math.round(avg) === avg;
}
console.log(isWhole2(1, 2, 3, 4), isWhole2(9, 2, 2, 5))
