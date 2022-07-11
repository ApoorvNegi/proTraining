// var name = "Apoorv";
// var name = "Shady";

// let lang = "JavaScript";
// const data = "English";

// const menu = ['Home','About']

// menu.push('Services')

// function welcome(){
//     console.log("Welcome to Arrow fn")
// }
// let welcome = ()=>{
//     console.log("Welcome to arrow fn")
// }
// let welcome = ()=> "Welcome to arrow fn"
// let sum = (a,b) => a+b;
//let greet = name => `Welcome ${name}`;
// welcome();

//rest and spread operator

// var nums = [33,3,3,3,3,33,33];

//Rest operator
function sum(...data){
    var total = 0;
    for(price of data){
        total += price;
    }
    return total;
}

//Spread Operator
//Math.max(...nums)

//template literals

//Destructuring

var nums = [33,3,3,3,3,33,33];

//let [a,b] = nums;

let [a , ...b] = nums;

var person = {
    name : "Apoorv",
    email : "abc@gmail.com"
}

var {name : ffname, email} = person;

console.log(ffname);
console.log(email);