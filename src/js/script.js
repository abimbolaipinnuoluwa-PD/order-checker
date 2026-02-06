const prompt = require("prompt-sync")();

// The Cafe Order Checker
const menu = [
    { itemName: "Bread", price: 2500 },
    { itemName: "Sardines", price: 2200 },
    { itemName: "Coke", price: 800 }
];

for (let i = 0; i < menu.length; i++) {
    let quantity = parseInt(prompt(`How many ${menu[i].itemName} do you want? `));
    // console.log(quantity); 
     
        // if (quantity !== null && quantity !== "" && quantity >= 0) {
        if (!isNaN(quantity)) {
        let itemTotal = quantity * menu[i].price;
        console.log(`The total cost for ${menu[i].itemName} is ₦${itemTotal}`);
        
    } else {
        console.log("Invalid quantity entered.");
        alert(menu[4]);
        alert("Please enter a valid number.");
    }
}