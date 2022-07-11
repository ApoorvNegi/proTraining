// function welcome(){
//     alert("Alerted")
// }

// var btn = document.getElementById("btn");

// btn.onclick = welcome;

//event delegation
//element.addEventListener(eventName, eventHandler)

// btn.addEventListener("click",welcome);

function taskOne(ev1){
    console.log("Task One");
    ev1.preventDefault();
    // if(false){
    //     ev1.stopImmediatePropagation();
    // }
}

function taskTwo(ev1){
    console.log("Task Two");
}
function parentHandler(ev){
    console.log("This is Parent");
    // console.log(ev.target)
    // console.log(ev.currentTarget)
}

function childHandler(ev){
    console.log("This is Child");
    ev.stopPropagation();
}

var anc= document.getElementById("anc");
var p1 = document.getElementById("Parent");
var p2 = document.getElementById("Parent_1");
var c1 = document.getElementById("Child");
var c2 = document.getElementById("Child_1");

anc.addEventListener("click",taskOne)
p1.addEventListener("click",parentHandler)
c1.addEventListener("click",childHandler)
c1.addEventListener("click",taskOne)
c1.addEventListener("click",taskTwo)

p2.addEventListener("click",parentHandler,true)
c2.addEventListener("click",childHandler,true)