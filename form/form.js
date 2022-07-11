let form = document.getElementById("loginform");

// var api_url = 'https://jsonplaceholder.typicode.com/users'
form.addEventListener("submit",async function(e){
    e.preventDefault();

    var id = form.elements["userId"].value;
    var name = form.elements["name"].value;
    var username = form.elements["username"].value;
    var phone = form.elements["phone"].value;
    var website = form.elements["website"].value;

    let formData = {
        id,
        name,
        username,
        phone,
        website
    }

    const response = await fetch(api_url,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application'
        },
        body : JSON.stringify(formData)
    })

    console.log(await response.json())
})