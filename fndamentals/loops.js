//var i=0;

//while looop
// while(i<10){
//     console.log('i value is : '+i)
//     i++;
// }

//do while loop
// do{
//      console.log('i value is : '+i)
//      i++;
// }while(i<10)

// //for loop
// for(var i=0; i<10; i++){
//     console.log('i value is : '+i)
// // }
// var brands = ['asus','lenovo','poco','motorola','samsung','apple'];
// for(var i=0; i<brands.length; i++){
//     console.log('Brand name is : '+brands[i])
// // }
// var students = {
//     name : [
//         'Apoorv',
//         'Aman',
//         'Vaibhav'
//     ],
//     age : [
//         23,
//         22,
//         23
//     ],
//     email : [
//         'abc@gmail.com',
//         'xyc@gmail.com',
//         'tyc@gmail.com',
//     ]
// }
// function st(name,age,email){
//     console.log("Name = "+name+" Age = "+age+" Email = "+email)
// }
// for(var i=0; i<students.name.length; i++)
// {
//     console.log(students.name[i])
//     console.log(students.age[i])
//     console.log(students.email[i])
//     st(students.name[i],students.age[i],students.email[i])
// }
// //for of loop
// for(sti of students.name)
// {
//     console.log(sti)
// }
// //for in loop
// for(sti in students.name)
// {
//     st(students.name[sti],students.age[sti],students.email[sti])
// }
// var person = {
//     name : "Apoorv",
//     age : 23,
//     email : "xyz@gmail.com"
// }
// for(prop in person){
//     console.log(prop,person[prop])
// }

var students = [
    {
        name : "Apoorv",
        age : 23,
        email : "xyz@gmail.com"
    },
    {
        name : "Aman",
        age : 23,
        email : "xyz@gmail.com"
    },
    {
        name : "Vaibhav",
        age : 23,
        email : "xyz@gmail.com"
    }
]
// for(student in students){
//     console.log(student,students[student].name)
//     console.log(student,students[student].age)
//     console.log(student,students[student].email)
// }
for(stu of students)
{
    for(key in stu)
    {
        console.log(key,stu[key])
    }
}