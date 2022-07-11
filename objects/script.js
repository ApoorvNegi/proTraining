// // var name = "Apoorv";
// // name = ''
// // var email = 'acv@gmail.com';

// // function getName(){
// //     return name;
// // }

// //singleton pattern
// var person = {
//     name : 'Apoorv',
//     email : 'acv@gmail.com',
//     getName : function(){
//         return this.name;
//     },
//     getEmail : function(){
//         return this.email;
//     },
//     setName : function(name){
//         this.name = name;
//     },
//     setEmail : function(email){
//         this.email = email;
//     }
// }

// person.prof = 'Software Developer';
// person.setProf = function(prof){
//     this.prof = prof;
// }

//constructor pattern
function Laptop(brand, ram){
    this.brand = brand;
    this.ram = ram;

    this.getBrand = function(){
        return this.brand;
    }
}

Laptop.prototype.os = 'dos';
let laptop1 = new Laptop('Asus','16GB');
//laptop1.newProp='';
//laptop1.os = 'dos';
let laptop2 = new Laptop('Lenovo','8GB');
//laptop2.os = 'dos';
//var name = new String('Apoorv);
//var arr = new Array();

