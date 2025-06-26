function calculateTotal(discount = 0.1, ...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    // Apply discount
    let discountedTotal = total - (total * discount);

    return discountedTotal;
}

let finalAmount = calculateTotal(0.2, 1000, 500, 200); // 20% discount
console.log("Total cost after discount:", finalAmount);