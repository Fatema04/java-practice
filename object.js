var myDress = {
    type: "shari",
    color: "blue",
    length: "15feet",
    design: "with white stone",
    price: 3000
}
console.log(myDress);
console.log(myDress.design);

// if want to change value
/*myDress.color = 'green';
 */

//find object value type 1
var dressPrice = myDress.price;
console.log(dressPrice);

//find object value type 2
var dressPrice1 = myDress['price'];
console.log(dressPrice1);


//find object value type 3

var propertyName = 'type';
var propertyValue = myDress['type'];
console.log(propertyName, propertyValue);