//  1) Return true if the number is even, otherwise false.

// console.log(isEven());


// function isEven(number) {
//     return number%2==0 ? "Number is even" : "Number is odd";
// }

//  2) Return the sum of all integers from 1 to n.

// console.log(sumUpTo(6));


// function sumUpTo(number){
//     let sum = 0;
//     while(number){
//         sum+=number;
//         number--;
//     }
//     return sum;
// }


//  3) Return the minimum number in a non-empty array

// console.log(minInArray([7]));

// function minInArray(arr){
//     let minNum = arr[0];
//     arr.forEach(el => {
//         el < minNum ? minNum = el : "";
//     });
//     return minNum;
// }


//  4) Return the number of digits in a number

// countDigits(125);

// function countDigits(num) {
// return num.toString().split("").length;
// }


//  5) Return the sum of all numbers in an array.

// console.log(sumArray([1, -1]));

// function sumArray(arr){
//     let sum = 0;
//     arr.forEach(el => {
//         sum+=el;
//     });
// return sum;
// }


//  6) Return the average (mean) of numbers in a non-empty array.

// console.log(average([2, 4, 6, 12]));

// function average(arr){
//     let sum = 0;
//     arr.forEach(el => {
//         sum+=el;
//     });
// return sum/arr.length;
// }


//  7) Count how many times char appears in str.

// console.log(countChar("Hello", "l"));

// function countChar(str, char){
//     let count = 0;
//    for (let i = 0; i < str.length; i++) {
//     str[i] == char ? count++ : "";    
//    }
//     return count;
// }


//  8) Return the string without its first character.

// console.log(removeFirstChar("Hello"));

// function removeFirstChar(str){
//     let result = "";
//     for (let i = 1; i < str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

//  9) Return base raised to the power exp (integer exponent)

// console.log(power(10, 3));

// function power(base, exp){
//     return base**exp;
// }


//  10) Return true if the array contains the given value

// console.log(contains([1, 50, 25], 10));

// function contains(arr, value){
//     return arr.includes(value);
// }


//  11) Return a string repeated n times.

// console.log(repeatString("str", 3));


// function repeatString(str, n){
//     let res = "";
//     if (!n) {
//         res = '""'
//     }else{
//         while(n){
//             res+=str;
//             --n;
//         }
//     }
//     return res;
// }


//  12) Return an array containing the first and last elements.

console.log(firstAndLast([1,2,3,4]));

function handlerPush(arr, element, count){
    while(count){
        arr.push(element);
        --count;
    }
}

function firstAndLast(arr){
    let res = [];
    if (arr.length==1){
       handlerPush(res,arr[0], 1);
       handlerPush(res,arr[0], 1);
    }else if(arr.length>1){
        res.push(arr[0]);
        res.push(arr[arr.length-1]);
    }
    return res;
}
