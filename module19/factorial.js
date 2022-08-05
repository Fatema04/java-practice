function factorial(number) {
    let result = 1;
    for (var i = 1; i <= number; i++) {
        result = result + i;
        console.log(i);
    }
    return result;
}
var fact = factorial(3);
console.log('factorial num of 3 is :', fact);

//// while reverse//

function factorial(number1) {
    let result1 = 1;
    var i = 10;
    while (i >= number1) {
        result1 = result1 + i;
        console.log(i);
        i--;
    }
    return result1;
}
var fact1 = factorial(5);
console.log('factorial num of 5 is :', fact1);
