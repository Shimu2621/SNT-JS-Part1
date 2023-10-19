//function declaration
function myTwoNumbers(num1, num2) {
    return num1 + num2;
}

const num1 = 30;
const num2 = 20;

//function calling/invoking
myTwoNumbers(num1, num2)
console.log("The total addition is:", myTwoNumbers(num1, num2));

//function expression
const mythreeNumbers = function(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log("The calculation is:", mythreeNumbers(30, 20, 10));
