// Task 1: Function Declaration 
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit
function calculateProfit(costProfit, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; // Formula
    return `Total Profit: $${profit}`;
}
// Calculating using the given test data:
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"





