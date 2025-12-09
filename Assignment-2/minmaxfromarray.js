function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min: min, max: max };
}

let numbers = [12, 5, 20, 8, 3];
let result = findMinMax(numbers);

console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
