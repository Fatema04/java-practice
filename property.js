var shopping = {
    dress: 4,
    high_hill: 4,
    bag: 1,
    lipstick: 6,
    makeup_box: 2,
    price: 20000
}

//checkout property keys

var properties = Object.keys(shopping);
console.log(properties);


//checkout property values
var propertyValues = Object.values(shopping);
console.log(propertyValues);

//find property value type 1
var myShopping = shopping.price;
console.log(myShopping);

// type 2
var myShopping1 = shopping['price'];
console.log(myShopping);


//type 3

var propertyName = 'lipstick';
var propertyValue = shopping['lipstick'];
console.log(propertyName, propertyValue);


//set property value

shopping.dress = 20;
console.log(shopping);