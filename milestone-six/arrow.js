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


//no parameter
const getPie = () => 3.1416;

//1 parameter
const getDouble = (number) => number * 2;

//multi line arraw function
const multi = (x, y, z) => {
    const firstOutput = x + y;
    const secondOutput = y + z;
    const finalOutput = firstOutput + secondOutput / 2;
    return finalOutput;
}
const output = multi(10, 20, 30);
console.log(output);
