var loginform = document.getElementById("loginForm");

loginform.addEventListener("submit",function(e){
    e.preventDefault();
    // var uservalue = document.getElementById("username").value;
    // var uservalue = document.getElementById("username");
    // console.log(uservalue.value);

    var username = loginform.elements['username'].value;
    // if(username.length < 6){
    //     console.log("Length < 6")
    //     return null;
    // }

    var password = loginform.elements['password'].value;

    var loginData = {
        uname : username,
        password : password
    }

    console.log(loginData)
})