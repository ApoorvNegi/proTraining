// var users = [
//     {
//         name : 'Apoorv',
//         email : 'acv@gmail.com'
//     },
//     {
//         name : 'Negi',
//         email : 'ndv@gmail.com'
//     }]
// var promise = new Promise(function(resolve,reject){
//     try{
//         resolve(users)
//     } catch(error){
//         reject(error)
//     }
// });

var api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
    .then(res => res.json())
    .then((data) => {
        diplayUsersGrid(data)
    })
    .catch((err) => console.log(err))

// promise
//     .then((res) => {
//         diplayUsersGrid(res)
//     })
//     .catch((err) => console.log(err))

function diplayUsersGrid(users){
    //dom operations
    let usersE1 = document.getElementById('users');
    let output = '';
    for(user of users){
        if(user.completed){        
            
            output += `<div>
        <div><a href = "${user.completed}">${user.completed}</a></div>
        </div>`}

        else{
         
            output += `<div>
        <div><a class = "false" href = "fal">${user.completed}</a></div>
        </div>`}
    }

    usersE1.innerHTML = output;
}