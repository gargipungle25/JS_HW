function checkCart(hasItems) {
    return new Promise((resolve, reject) => {
        if (hasItems) {
            resolve("Cart is ready for checkout!");
        } else {
            reject("Your cart is empty.");
        }
    });
}

async function proceedToCheckout() {
    try {
        const message = await checkCart(true);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

proceedToCheckout();