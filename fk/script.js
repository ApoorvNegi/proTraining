// let products;
// fetch('data.json').then(response => {products = response.json()})

// console.log(products)

// function forEach(data){
//     for(let i=0; i<data.length; i++){
//         console.log(data[i])
//     }
// }
// products.forEach(products => console.log(product))


const projects = [
    {
        "name": "towel",
        "brand": "zara",
        "price": 1000,
        "ratings": '3',
        "category": "clothing"
    },
    {
        "name": "cricket bat",
        "brand": "reebok",
        "price": 10000,
        "ratings": '5',
        "category": "clothing"
    },
    {
        "name": "super",
        "brand": "denver",
        "price": 5000,
        "ratings": '3.5',
        "category": "clothing"
    },
    {
        "name": "jeans",
        "brand": "zara",
        "price": 2000,
        "ratings": '4',
        "category": "clothing"
    },
    {
        "name": "shirt",
        "brand": "zara",
        "price": 20000,
        "ratings": '2.5',
        "category": "clothing"
    },
    {
        "name": "diaper",
        "brand": "huggies",
        "price": 100,
        "ratings": '2',
        "category": "hygiene"
    },
    {
        "name": "Gold chain",
        "brand": "tanishq",
        "price": 700000,
        "ratings": '4.7',
        "category": "laptop"
    },
    {
        "name": "Y15",
        "brand": "oppo",
        "price": 35000,
        "ratings": '4.1',
        "category": "laptop"
    },
    {
        "name": "legion",
        "brand": "lenovo",
        "price": 10000,
        "ratings": '4.9',
        "category": "laptop"
    },
    {
        "name": "beanie",
        "brand": "dope",
        "price": 500,
        "ratings": '1',
        "category": "caps"
    }
]


// function forEach(data){
//     for(let i=0; i<data.length; i++){
//         console.log(data[i])
//     }
// }
// // projects.forEach(project => console.log(project))

// const brands = projects.filter(project => (project.category === 'clothing' || project.category === 'laptop'));
// console.log(brands)

// const brands = projects.filter(project => ((project.price >= 500 && project.price <= 5000)&&(project.brand === 'zara')&&(project.ratings > 3)));
// console.log(brands)

// let projectName = projects.map(project => project.name)
// let projectDesc = projects.map(project => `${project.name} ${project.category} ${project.brand} ${project.price}`)
// console.log(projectName)
// console.log(projectDesc)

// let projectName = projects.map(project => project.ratings + 1)
// console.log(projectName)

// const sortedProjects = projects.sort((p1,p2) => (parseInt(p1.ratings) > parseInt(p2.ratings) ? 1:-1))
// console.log(sortedProjects)

// const totalSpent = projects.reduce((total , project) => total + (project.price),0)
// console.log(totalSpent)

const mergeFunc = projects
                .map(project => project.price * 0.1)
                .filter(project => (project.price >500 && project.price <5000))
                .sort((a,b) => ((a.price > b.price) ? 1 : -1) )
                .reduce((total, project) => total + project.price,0)

console.log(mergeFunc)