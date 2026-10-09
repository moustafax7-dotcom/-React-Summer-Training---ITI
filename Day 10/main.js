// Task 3
let count = 0;

function increment() {
    count++;
    document.getElementById("counter").innerText = count;
}


// Task 2
function showCount() {
    let text = document.getElementById("textInput").value;
    document.getElementById("charCount").innerText = text.length;
}


// Task 3
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}