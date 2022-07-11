// class Laptop{
//     constructor(brand, ram){
//         this.brand = brand;
//         this.ram = ram;
//     }

//     get getBrand(){
//         return this.brand
//     }

//     setRam(ram){
//         console.log(this.ram)
//         this.ram = ram;
//     }
//     getRam(){
//         return this.ram;
//     }
// }

// let laptop = new Laptop('Asus','16Gb')
// // console.log(laptop.brand)
// // console.log(laptop.getBrand())
// laptop.setRam(69)
// console.log(laptop.getBrand)
// console.log(laptop.getRam())

class Product{
    constructor(name ,brand){
        this.brand = brand;
        this.name = name;
    }

    getBrand(){
        return this.brand
    }
    getName(){
        return this.name
    }
    getProductDetails(){
        return `The brand is ${this.brand} and name is ${this.name}`
    }
}

class Electronics extends Product{
    constructor(name, brand, ram){
        super(name, brand)
        this.ram = ram
    }
    getProductDetails(){
        // return super.getProductDetails()
        return `The brand is ${this.brand} and name is ${this.name} and ram is ${this.ram}`
    }
}

let el = new Electronics("Laptop", 'Asus', '16Gb')
console.log(el.getProductDetails())