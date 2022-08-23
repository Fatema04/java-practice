//function  declearation

function add1(num1, num2) {
    const total = num1 + num2;
    return total;

}
const result1 = add1(12, 23);
console.log(result1);

//function expression 


const additon = function add3(num3, num4) {
    const total = num3 + num4;
    return total;

}
//const result2 = add3(12, 23);
//console.log(additon, result2);

//arrow function

const sum = (first, last) => first + last;
const summ = sum(10, 20);
console.log(summ);
