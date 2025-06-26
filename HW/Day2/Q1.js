let product=["laptop", "smartphone", "tv","headphones"]


//array destructuring
let [a1,a2,a3,a4]=product;

console.log(a1);
console.log(a3);

//object destructuring

const productDetails={
    id:1,
    brand: "Lenovo", 
    price: 70000
}
const {id, brand, price}=productDetails;

console.log(brand);
console.log(id);

