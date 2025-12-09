function isArmstrong(num) {
    let original = num;
    let sum = 0;
    let digits = 0;
    let temp = num;

    
    while (temp > 0) {
        digits++;
        temp = (temp - (temp % 10)) / 10;
    }

    temp = num;

    
    while (temp > 0) {
        let digit = temp % 10;
        let power = 1;

        for (let i = 0; i < digits; i++) {
            power *= digit;
        }

        sum += power;
        temp = (temp - digit) / 10;
    }

    return sum === original;
}

console.log(isArmstrong(153));  
console.log(isArmstrong(123));  
