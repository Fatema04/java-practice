let jim = 84;
let dela = 75;
if (jim > dela) {
    console.log("jim will get cake");
}
else {
    console.log("dela will get cake");
}

//ex 2

let joy = 84;
let den = 75;
let jack = 80;
if (joy > dela && joy > jack) {
    console.log("joy will get cake");
}
else if (den > joy && den > jack) {
    console.log("den will get cake");
}
else {
    console.log("jack will get cake");
}

//ex-3

function findLarge(numbers) {
    let largeNum = [0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largeNum) {
            largeNum = element
        }
    }
    return largeNum;
}
var height = [123, 367, 974, 1623, 586];
var result = findLarge(height);
console.log(result);

//ex-4

function reversedString(str) {
    let reverse = ' ';
    for (let i = str.length - 1; i >= 0; i--) {
        const index = i;
        const element = str[index];
        reverse = reverse + element;
    }
    return reverse;

}
const myString = 'I am a girl'
const reversed = reversedString(myString);
console.log(reversed);

//ex-4

const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);