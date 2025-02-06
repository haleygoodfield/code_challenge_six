// Task 1: Function Declaration 
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit
function calculateProfit(costProfit, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; // Formula
    return `Total Profit: $${profit}`;
}
// Calculating using the given test data:
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"



// Task 2: Function Expression
// Declare a function expression calculateSalesTax(amount, taxRate) that calculates sales tax
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate; // Formula
    return `Sales Tax: $${tax}`;
};

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1)); // // Expected output: "Sales Tax: $50"



// Task 3: Arrow Function 
// Write an arrow function calculateBonus(salary, performanceRating) to determine a bonus
const calculateBonus = (salary, performanceRating) => {
  let bonusPercent = performanceRating === "Excellent" ? 0.2 : // 20% of salary
  performanceRating === "Good" ? 0.1 : // 10% of salary
  performanceRating === "Average" ? 0.05 : 0; // 5% of salary
  let bonus = salary * bonusPercentage;
  return `Bonus: $${bonus}`;
};

console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
console.log(calculateBonus(7000, "Good")); // Expected output: "Bonus: $700"


