//  Write a function that takes a string as an argument and returns the number of characters in the string.

// let str = "Hello, World!";
// console.log(foo(str));

// function foo(testString){
//     return testString.length;
// };


//  Create a function that converts a given string to uppercase.


// console.log(toUpperCase());

// function toUpperCase(){
//     let str = "hello, world!";
//     return str.toUpperCase();
// };


//  Write a function that accepts two numbers and returns their sum.

// console.log(sum(152,28));

// function sum(num1, num2){
//     return num1 + num2;
// };


//Reverse the string "hello" without using a built-in function.

// let str = "hello";
// let reversed = "";

//     for(let i=str.length-1; i>=0; i--){
//         reversed+= str[i];
//     };

// console.log(reversed);


//  Check if the string "Learning JavaScript" contains the substring "Java".

// let str = "Learning JavaScript";
// let checkingWord = "Java";
// let count = 0;

// for (let i=0; i<str.length; i++) {
//     if (str[i]==checkingWord[0]) {
//         for (let j=1; j<checkingWord.length; j++) {
//             i++;
//             if (str[i]==checkingWord[j]) {
//                 count++;
//             }else break;
//         }
//     }
// }

// count == chekingWord.length-1 ? console.log("Substring is contains"): console.log("Substring is not contains");


//  Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.

// let numList = [3, 6, 9, 12];

// console.log(numList.indexOf(9));


//  Compute the sum of all elements in the array let expenses = [50, 75, 100];

// let expenses = [50, 75, 100];

// let sum = 0;

// expenses.forEach(element => {
//     sum+=element;
// });

// console.log(sum);


//  Write a function to check if a given string contains another substring.


// function isContains(subString){
    
// let str = "Learning JavaScript";
// let count = 0;

// for (let i=0; i<str.length; i++) {
//     if (str[i]==subString[0]) {
//         for (let j=1; j<subString.length; j++) {
//             i++;
//             if (str[i]==subString[j]) {
//                 count++;
//             }else break;
//         }
//     }
// }

// return count == subString.length-1 ? "Substring is contains": "Substring is not contains";
// }


//  Write a function that returns the sum of all elements in an array of numbers.

// function sum(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum+=element;
//     });
//     return sum;
// };


//  Create a function that accepts a number and returns whether it is even or odd.


// function isEven(num){
//    return num%2==0 ? "Even": "Odd";
// };


//   Write a function that returns the exact type of a given value and correctly handles null, arrays, objects, and functions (typeof alone is not sufficient).


//  ?????????


//  Write a function that returns true if a given value is falsy and false otherwise; test it with 0, "", null, undefined, NaN, and false.

// function reversed(value){
//     return !value;
// };


//  Write a function that compares two values and returns an object containing the results of both loose (==) and strict (===) comparison.


function isEquall(fisrtValue, secondValue){
  return  {
        "loose": fisrtValue == secondValue,
        "stric": fisrtValue === secondValue,
    };
};

