// Step 1: Check inventory
function checkInventory(product) {
    if (!product.inStock) {
        throw new Error("Product is out of stock!"); 
    }
    return true;
}

// Step 2: Try adding the product to the cart
function addToCart(product) {
    checkInventory(product); // Error not caught here
    console.log(" Product added to cart:", product.name);
}

// Step 3: Handle exception at the top level
try {
    let product = { name: "Smartphone", inStock: false };
    addToCart(product); 
} catch (error) {
    console.log("Could not add to cart:", error.message); 
}