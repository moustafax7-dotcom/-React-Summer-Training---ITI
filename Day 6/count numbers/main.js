let numbers = [];

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Enter number " + i + ":"));
    numbers.push(num);
}

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let num of numbers) {
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

console.log("Numbers:", numbers);
console.log("Positive Count:", positiveCount);
console.log("Negative Count:", negativeCount);
console.log("Zero Count:", zeroCount);