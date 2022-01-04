console.log("homework.js is Linked with html");

/** pre requirements */
// 1 create a variable called 'firstName' give it a value of your first name
var firstName = "aisha";
console.log(firstName);
// 2 create a variable called 'lastName' give it a value of your last name
var lastName = "galmouz";
console.log(lastName);
// 3 create a variable called 'fullName' give it a value of firstName & lastName variables.
// HINT: add space between them
var space = " ";
var fullName = firstName + space + lastName;
console.log(firstName + space + lastName);
/** Intermediate */
// 4 create a variable called 'counter' give it a value of 0
var counter = 0;
// add variable counter by one 3 times, and subtracting by one 2 times, using the Arithmetics operators eg(++, +=, --, /=, *=, -=)
// HINT: it's value should be 1 at the end
counter = counter *3 ;
console.log("Number"+space + counter);
counter --;


/** Advanced */

// 5 you have 2 variables 'a' has value 3 & 'b' has value 7, I want you to assign the value of b to a & the value of a to b
// HINT: you can create a new variable to help you out
var a = 3;
var b = 7;
console.log(a=b);
console.log(b=a);
// OR
var c = a=b;
var d = b=a;
console.log("value of b to a:" + space + c);
console.log("value of a to b:" + space + d);