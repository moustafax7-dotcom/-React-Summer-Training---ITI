let cart = [];
let choice = 0;

while (choice != 5) {
    choice = Number(prompt(
        "1- Add Product\n" +
        "2- Delete Product\n" +
        "3- Count Products\n" +
        "4- Search Product\n" +
        "5- Exit"
    ));

    if (choice == 1) {
        let product = prompt("Enter product name:");
        cart.push(product);
        alert("Product Added");
    }

    else if (choice == 2) {
        let product = prompt("Enter product name:");
        let index = cart.indexOf(product);
        if (index != -1) {
            cart.splice(index, 1);
            alert("Product Deleted");
        } else {
            alert("Product Not Found");
        }
    }

    else if (choice == 3) {
        alert("Number of Products = " + cart.length);
    }

    else if (choice == 4) {
        let product = prompt("Enter product name:");

        if (cart.includes(product)) {
            alert("Product Found");
        } else {
            alert("Product Not Found");
        }
    }
}

alert("Good Bye!");