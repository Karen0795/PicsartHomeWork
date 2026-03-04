//  1)Write a function that returns true if a number is prime, otherwise false.

// console.log(isPrime(25));

// function isPrime(num){
//     if(num==2 || num==3 || num==5){
//         return true;
//     }
//     else if(num%2==0 || num%3==0 || num%5==0){
//         return false;
//     }
//     else return true;
// }

//  2) Return true if a string reads the same forward and backward

// console.log(isPalindrome(""));

// function isPalindrome(str){
//     let checkingString = "";
//         if (str == "") {
//             return true;
//         }
//         else {
//             for(let i=str.length-1; i>=0; i--){
//         checkingString+=str[i];
//     }
//         }
 
//    return checkingString==str ? true : false;
// }


//  3) Return the factorial of a non-negative integer n.

// console.log(factorial(25));


// function factorial(n){
//     let result = 1;
//     if (n>0) {
//         if (n==1) {
//             return 1;
//         }else if (n==2) {
//             return 2;
//         }
//         else {
//             for(let i=n; i>1; i--){
//                 result*=i;
//             }
//         }
//     }
//     return result;
// }


//  4) Return the maximum number in a non-empty array

// console.log(maxInArray([1, 2, 3, 4, 5, 25, 6, 7, 8, 9, 10]));

// function maxInArray(arr){
//     let maxValue = 0;
//     arr.forEach(el => {
//         if (el>maxValue) {
//             maxValue = el;
//         }
//     });
//     return maxValue;
// }

//  5) Return the sum of all digits of a number (negative numbers included).

// console.log(sumDigits(156));


// function sumDigits(num){
//     let result =0;
//     let midRes = num.toString().split("");
//     if(num==0){
//         return 0;
//     }
//     else if(midRes[0]!="-"){
//         midRes.forEach(el => {
//             result+= +el;
//         });
//     }else {
//         for(let i=1; i<midRes.length; i++){
//             result+= +midRes[i];
//         }
//     }
//     return result;
// }


//  6) Reverse the digits of a number while preserving the sign.

// console.log(reverseNumber(1002));


// function reverseNumber(num){
//     let result = "";
//     let midRes = num.toString().split("");
//     if(midRes[0]=="-"){
//         result+="-";
//         for(let i=midRes.length-1; i>0; i--){
//             result+= midRes[i];
//         }
//     }else{
//         for(let i = midRes.length-1; i>=0; i--){
//             result+= midRes[i];
//         }
//     }
//     return +result;
// }


//  7) Count the vowels (a, e, i, o, u) in a string. Case-insensitive.

// console.log(countVowels("aabiioebrr"));

// function countVowels(str){
//     let vowels = ["a", "e", "i", "o", "u"];
//     let result = 0;
//     let midResult = str.toLowerCase().split("");
//     midResult.forEach(el => {
//         if (vowels.includes(el)) {
//             result++;
//         }
//     })
//     return result;
// }


//  8) Return the n-th Fibonacci number using an iterative approach.

    // console.log(fibonacci(70));
    

    // function fibonacci(n){
    //     let a = 0;
    //     let b =1;
    //     let result = a+b;

    //     if (n==0) {
    //         return 0;
    //     }
    //     else if (n==1) {
    //         return 1;
    //     }
    //     else {
            
    //         while(n){
    //             a=b;
    //             b=result;
    //             result = a+b;
    //             n--;
    //         }
    //     }
    //     return result;
    // }
    
    //  9) Compare two numbers using a tolerance (epsilon).


    function almostEqual(a, b){
        Math.abs(a+b)
    }
    console.log(Math.abs(0.1+0.2) < Number.EPSILON);
    