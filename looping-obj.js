var myDress = {
    type: "shari",
    color: "blue",
    length: "15feet",
    design: "with white stone",
    price: 3000
}




var properties = Object.keys(myDress);
console.log(properties);



var propertyValues = Object.values(myDress);
console.log(propertyValues);

/*var friends = ["type", "color", "length", "design", "price"];
for (var i = 0; i < properties.length; i++) {
    var allProperty = properties[i];
    var allPropertyValues = myDress[allProperty];
    console.log(allProperty, allPropertyValues);

}*/

//fr in loop

for (var properties in myDress) {
    var propertyValues = myDress[properties];
    console.log(properties, propertyValues);
}