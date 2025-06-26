class Product{
    name
    productId
    price

    constructor (name, productId,price){
        this.name=name;
        this.productId=productId;
        this.price=price;
    }

    displayDetails(){
        console.log("Name: ",this.name);
        console.log("Id of product: ",this.productId);
        console.log("Price: ",this.price);
    }
}

const a= new Product("Lenovo",2,90000)
a.displayDetails()
