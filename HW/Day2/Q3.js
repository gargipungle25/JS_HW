function placeOrder(inStock) {
    return new Promise((resolve, reject) => {
        if (inStock) {
            resolve("Order placed successfully!");
        } else {
            reject("Sorry, the item is out of stock.");
        }
    });
}

placeOrder(true)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });