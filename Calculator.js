//Calculator program

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");
console.log(operator);

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
        break;
    default:
        result = "Error: Invalid operator.";
}

alert("The result is: " + result);