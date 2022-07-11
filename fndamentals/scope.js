var a=10;//Global Variable

function sumTen(){
    var b=20;//private variabel
    c = 30;//without var keyword it is global
}

sumTen()
console.log(c)