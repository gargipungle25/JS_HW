function makePayment(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("Payment successful!");
        } else {
            reject("Payment failed.");
        }
    });
}

async function handleCheckout() {
    try {
        let result = await makePayment(true); 
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

handleCheckout();