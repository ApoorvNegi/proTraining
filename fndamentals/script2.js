var product = {
    productImage : "1.jpg",
    productName : "POCO 1",
    productRam : ["6GB","8GB","12GB"],
    productPrice : 29999,
    productRom : ['128GB','256GB'],
    cameraLens : {
        primary : "54MP",
        secondary : "8MP",
        wideAngleLens : "2MP",
        frontLens : "12MP"
    },
    discount : "5%",
    originalPrice : 33000,
    availability : "Yes",
    frontScreen : "AMOLED",
    backPanel : "Glass",
    chargingType : "Fast Charging",
    chargingTime : "2 hrs",
    battery : "6000 mah",
    features : [
        "Compass", "Proximity Sensor"
    ]
}

var products = [
    {
        productImage : "1.jpg",
        productName : "POCO 1",
        productRam : ["6GB","8GB","12GB"],
        productPrice : 29999,
        productRom : ['128GB','256GB'],
        cameraLens : {
            primary : "54MP",
            secondary : "8MP",
            wideAngleLens : "2MP",
            frontLens : "12MP"
        },
        discount : "5%",
        originalPrice : 33000,
        availability : "Yes"
    },
    {
        productImage : "1.jpg",
        productName : "POCO 1",
        productRam : ["6GB","8GB","12GB"],
        productPrice : 29999,
        productRom : ['128GB','256GB'],
        cameraLens : {
            primary : "54MP",
            secondary : "8MP",
            wideAngleLens : "2MP",
            frontLens : "12MP"
        },
        discount : "5%",
        originalPrice : 33000,
        availability : "Yes"
    }
]

console.log(products[0].cameraLens.frontLens)