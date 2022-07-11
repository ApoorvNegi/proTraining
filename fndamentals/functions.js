// function fn(){
//     return "This is function"
// }

// console.log(fn())

//passing parameters into function
function sum(a,b){
    var total= a+b;
    return total;
}
//sum(33,10,22)//passing additional arguments will be ignored
//sum(33)//returns NaN//(33+undefined)

//calling function without paranthesis
// sum()
// sum
// ƒ sum(a,b){
//     var total= a+b;
//     return total;
// }
// var x=sum;
// undefined
// x(10,20)
// 30

//passing n numbers of arguments using-
//builtin "arguments" array inside the function
function getCartTotal(){
    // console.log(arguments)

    var total = 0;
    for(price of arguments){
        total += price;
    }
    return total;
}

//hoisting
// welcome();
// function welcome(){
//     console.log("Welcome fn")
// }
// //declare function in literal way
// // greet()// gives error
// var greet= function(){
//     console.log("Greet fn")
// }
// greet()

//self invoking funtion
(function(name){
    console.log(name,"Self Invoked")
})("Shady")