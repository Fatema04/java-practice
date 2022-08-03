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
var dressPrice = myDress.price;
var dressPrice1 = myDress['price'];

console.log(dressPrice);
console.log(dressPrice1);
