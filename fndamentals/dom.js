// document object
// create div element and store in a variable
var divE1 = document.createElement("div");

// add div to body
document.body.appendChild(divE1);

//create text node
var textE1 =  document.createTextNode("Some Text");

//add text node to div element
divE1.appendChild(textE1);

//add attributes
divE1.setAttribute("id","test");

//read or get element byg id or class
var getById =  document.getElementById("test");
//document.getElementByClassName("test")

//remove elements
//document.getElementById("test").remove();
//getById.remove()

//console.log(getById.innerText)
console.log(getById.innerHTML);

// getById.innerHTML = "new data";

var name = "Apoorv";
getById.innerHTML = "<p>Welcome "+name+" </p>";