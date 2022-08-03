function add(num1, num2, num3) {
    console.log(num1, num2, num3);
    var sum = (num1 + num2) * num3;
    return sum;

}
var total = add(40, 50, 30);
console.log(total);

//example 2

function bringCocacola(money) {
    var cocacolaPrice = 70;
    var quantity = money / cocacolaPrice;
    return quantity;
}

var myTaka = 210;
var cocacola = bringCocacola(myTaka);
console.log(cocacola);