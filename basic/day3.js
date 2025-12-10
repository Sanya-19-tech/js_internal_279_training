function Day(n){
    return n*2;
}
let ch=81
console.log(Day(ch));

let fruits=["apple","mango","kiwi","watermelon","orange"]
for(let temp of fruits){
    console.log(temp);
}
fruits.push("Papaya");
fruits.pop("apple");
fruits.unshift("kiwi");
fruits.shift();
console.log(fruits);



let arr=[2,4,6,8]
let doubled= arr.map(n=>n*2);
console.log(doubled);

let aar=[10,25,30,5,60];
let result=aar.filter(n=>n>20);
console.log(result);

let sum=[1,2,3,4,5];
let total=sum.reduce((acc,val)=>acc+val,0);
console.log(total);


