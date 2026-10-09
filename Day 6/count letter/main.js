let word = prompt("Enter a word:");
let count = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] == "a" || word[i] == "A") {
        count++;
    }
}

console.log("Word:", word);
console.log("Number of 'a' letters:", count);