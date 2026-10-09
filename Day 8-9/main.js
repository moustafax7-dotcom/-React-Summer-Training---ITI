// Q1
function largestNumber(nums){
    let largest = nums[0];
    for(let i=0; i<nums.length; i++){
        if(nums[i]>largest){
            largest = nums[i];
        }
    }
    return largest;
}

let size1 = Number(prompt("Enter array size:"));
let nums = [];
for(let i=0; i<size1; i++){
    nums[i]= Number(prompt("Enter element " + (i+1) + ":"));
}

console.log("Array:" , nums);
console.log("Largest Number:" , largestNumber(nums));

// Q2
function SumOfDigits(number){
    number = Math.abs(number);
    let sum = 0;
    while (number != 0) {
        let digit = number % 10;
        sum = sum + digit;
        number = (number - digit) / 10;
    }
    return sum;
}

let number = Number(prompt("Enter a number:"));
console.log("Sum of digits =", SumOfDigits(number));

// Q3
function Average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

let size2 = Number(prompt("Enter array size:"));
let arr = [];
for (let i = 0; i < size2; i++) {
    arr[i] = Number(prompt("Enter element " + (i + 1) + ":"));
}

console.log("Array:", arr);
console.log("Average =", Average(arr));

// Q4
function removeDuplicates(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] == newArr[j]) {
                found = true;
            }
        }

        if (found == false) {
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

let size = Number(prompt("Enter array size:"));
let arr4 = [];

for (let i = 0; i < size; i++) {
    arr4[i] = Number(prompt("Enter element " + (i + 1) + ":"));
}

console.log("Original Array:", arr4);
console.log("Array Without Duplicates:", removeDuplicates(arr4));