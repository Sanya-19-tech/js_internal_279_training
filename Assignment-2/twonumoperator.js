function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } 
    else if (operator === "-") {
        return num1 - num2;
    } 
    else if (operator === "*") {
        return num1 * num2;
    } 
    else if (operator === "/") {
        if (num2 === 0) {
            return "Division by zero is not allowed";
        }
        return num1 / num2;
    } 
    else {
        return "Invalid Operator";
    }
}

console.log(calculate(10, 5, "+"));  
console.log(calculate(10, 5, "-"));  
console.log(calculate(10, 5, "*"));  
console.log(calculate(10, 5, "/"));  

