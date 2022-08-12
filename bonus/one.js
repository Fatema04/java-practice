let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;

}
console.log(sum);


let sum1 = 0;
for (let i = 5; i >= 1; i--) {
    sum1 = sum1 + i;

}
console.log(sum1);

//recursion means a function that call itself in its function area

function sums(num) {
    if (num == 1) {
        return 1;
    }
    return num + sums(num - 1);

}
let result = sums(5);
console.log(result);


