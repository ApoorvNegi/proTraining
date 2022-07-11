var cart = [
    {
        id : "Product1",
        brand : "Asus",
        price : 36000,
        quantity : 2
    },
    {
        id : "Product2",
        brand : "Apple",
        price : 76000,
        quantity : 1
    },
    {
        id : "Product3",
        brand : "Motorola",
        price : 26000,
        quantity : 3
    }
]

// console.log(cart[0].price)

var total = 0;
for(product in cart){
    // console.log(cart[product].price)
    // console.log(cart[product].quantity)

    if(cart[product].quantity==1){
        total += cart[product].price;
    }
    else{
        total += cart[product].quantity * cart[product].price;
    }
}

console.log(total)