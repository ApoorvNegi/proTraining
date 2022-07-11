//alert("Welcome to JavaScript");

/*
Primitive DataTypes:
    String "Java Script"
    Number  12000.98/40
    boolean true/false
*/
undefined
null

// name -> identifier(all variable names)
// var is keyword to declare any variable

//var name = "Java Script";
//var price = 90;

// variable naming convention
// var 9name='';//not correct
// var _name='';
// var name9='';
// var firstName="";
// var $name='';
// var @name='';//not correct

// alert(name);
// console.log(name);

// declare multiple variables
// var brand, price, category;

/* ran in console
brand
undefined
WebTransportBidirectionalStream
ƒ WebTransportBidirectionalStream() { [native code] }
brands
VM127:1 Uncaught ReferenceError: brands is not defined
    at <anonymous>:1:1 */

//var mobileName='POCO F4 5G', ram=6, cameraLens1=64, cameraLens2=8, cameraLens3=2, screenSize=16.94, displayType='Full HD', battery=4500,
//    processor="Qualcomm Snapdragon 870", warranty="2 years", mobilePrice=27999.01;

// 
var firstName='Apoorv',lastName='Negi';
// var fullName= firstName+' '+lastName;

// template literals(updated) using backticks
var fullName= `Welcome ${firstName} ${lastName}`;

// complex data types
// arrays
// var student = ["Shady", 69, null, fullName];
var student = ["Shady", 69, null, fullName, {name1 : "Shadyyyyyyy"}, [1, 2, 3, [33,66]]];
// console.log(student[4].name1);

// object
var dog = {
    color : "Golden" ,
    height : "2feet" ,
    price : 20000,
    activities : ["play","barks","eats"],
    address : {
        city : "Bengaluru",
        meet : function(){}
    },
    breed : "Golden Retreiver",
    runs : function(){
        console.log("Dog Runs")
    },
    eats : function(){
        console.log("Dog Eats")
    }
}

// console.log(dog.address.city)
// console.log(dog.activities[1])
// console.log(dog.breed)
// console.log(dog.height)
// console.log(dog.color)
// console.log(dog.eats)

// // functions
// function functionName(){
//     var lang = 'English';
//     console.log(lang);
// }
// functionName()

function cook(param1,param2,param3){
    var result = `By using ${param1}, ${param2} and ${param3}, I made recipe`
    return result;
}

function sum(a,b){
    return a+b;
}
sum(33,34)
console.log(sum(35,34))