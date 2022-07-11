var navItems = ["home", "about", "service", "faq", "contact"];
// var navItemLength = navItems.length;
var btn = document.getElementById("btn");
function generateMenu(data){
    var navE1 = document.getElementById("menu");
    var output = "<ul>";

    for(navItem of navItems){
        //console.log(navItems)
        output += `<li><a href ="${navItem}.html">${navItem}</a></li>`
    }
    output += "</ul>"

    console.log(output)
    navE1.innerHTML = output;
}

function createMenu(){
    generateMenu(navItems);
}

btn.addEventListener("click",createMenu)