let fact = 1;
for (let i = 5; i >= 1; i--) {
    fact = fact * i;
}
console.log(fact);

function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
let result = factorial(5);
console.log(result);