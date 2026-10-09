const menu = [
    {
        category: "Appetizer",
        meal: "Garlic Shrimps",
        price: "8$"
    },
    {
        category: "Pasta",
        meal: "Lobster Linguine Noodles",
        price: "16$"
    },
    {
        category: "Sandwich",
        meal: "Lobster Tail Sandwich",
        price: "11$"
    }
];

const table = document.createElement("table");

table.innerHTML = `
    <caption>New menu</caption>
    <tr>
        <th>Category</th>
        <th>Meal</th>
        <th>Price</th>
    </tr>
`;

let rows = "";

menu.forEach(item => {
    rows += `
        <tr>
            <td>${item.category}</td>
            <td>${item.meal}</td>
            <td>${item.price}</td>
        </tr>
    `;
});

table.innerHTML += rows;

document.getElementById("table-container").appendChild(table);