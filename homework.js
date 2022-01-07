console.log("homework.js is Linked with html");

/** pre requirements */
// 1 create a variable called 'firstName' give it a value of your first name
var firstName = "Mohammed"
// 2 create a variable called 'lastName' give it a value of your last name
var lastName = "Algzeri"
// 3 create a variable called 'fullName' give it a value of firstName & lastName variables.
// HINT: add space between them
var fullName = firstName +" "+ lastName;
/** Intermediate */
// 4 create a variable called 'counter' give it a value of 0
var counter = 0
// add variable counter by one 3 times, and subtracting by one 2 times, using the Arithmetics operators eg(++, +=, --, /=, *=, -=)
// HINT: it's value should be 1 at the end
var counter = ++counter;
counter += counter;
counter = --counter;
counter += ++counter;
counter /= 3;

console.log(counter);
/** Advanced */

// 5 you have 2 variables 'a' has value 3 & 'b' has value 7, I want you to assign the value of b to a & the value of a to b
// HINT: you can create a new variable to help you out
var a = 3
var b = 7
var c
c = a;

b = c