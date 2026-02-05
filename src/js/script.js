const prompt = require("prompt-sync")();

// The Cafe Order Checker
const menu = [
    { itemName: "Bread", price: 2500 },
    { itemName: "Sardines", price: 2200 },
    { itemName: "Coke", price: 800 }
];

for (let i = 0; i < menu.length; i++) {
    let quantity = parseInt(prompt(`How many ${menu[i].itemName} do you want? `));
    
    if (!isNaN(quantity)) {
        let itemTotal = quantity * menu[i].price;
        console.log(`The total cost for ${menu[i].itemName} is ₦${itemTotal}`);
        // alert(`The total cost for ${menu[i].itemName} is ₦${itemTotal}`);
        // alert(`The total cost for ${quantity} ${menu[i].name}(s) is ₦${itemTotal}`);
    } else {
        console.log("Invalid quantity entered.");
        // or
        alert(menu[4]);
        alert("Please enter a valid number.");
    }
}

//or if I use alert with index.html - I didn't get it to work correctly
// let text = document.querySelector("#order")
// text.innerHTML = "Hello, User";
// console.log(text.innerHTML);

// let nextParagraph = document.createElement("order")
// nextParagraph.innerHTML = "Hello, Universe";
// text.appendChild(nextParagraph);
// console.log(nextParagraph);