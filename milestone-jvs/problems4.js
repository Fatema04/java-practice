//41) একটা লপু লি খতে হবে যে টা ১ থে কে ১০০ পর্যন্ত যত সংখ্যা আছে সে টা দে খাবে

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
//42) ৫০ থে কে ৮০ এর মধ্যে যত ো বি জ োড় সংখ্যা আছে সে গুলাকে দে খাবে ।


for (let i = 50; i <= 80; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//43) তি নটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লি খ ো
function addition(num1, num2, num3) {
    let sum = num1 + num2 + num3
    return sum;
}
let result = addition(5, 7, 9);
console.log(result);

//44) ত োমাকে ফাংশনে র ইনপুট হি সে বে সে লসি য়াস দি বে । তুমি ক্যালকুলে শন করে তাপমাত্রাফারে নহাইট এ কনভার্ট করে সে টার আউটপুট রি টার্ন করবে

function degToFarenhit(numb) {
    let getFarenhit = (numb * 9 / 5) + 32;
    return getFarenhit;
}
let result1 = degToFarenhit(9);
console.log(result1);

/*45) একইভাবে উল্টা হি সাব করবে । যাতে ত োমাকে ফারে নহাইট হি সে বে তাপমাত্রা দি লে সে টাকে
সে লসি য়াস এ কনভার্ট করে আউটপুট দি বে ।*/


function farenhitToDeg(numb) {
    let getDeg = (numb - 32) * 5 / 9;
    return getDeg;
}
let result2 = farenhitToDeg(48.2);
console.log(Math.round(result2));

//48) Suppose, you have an array with 8 elements. Find the smallest element ofthat array .

let arr = [4, 6, 2, 3, 9, 10];

let sorted = arr.sort((x, y) => x - y)
console.log(sorted[0]);

//try to find the second largest element


let sorted1 = arr.sort((x, y) => y - x)
console.log(sorted1[1]);

//50) Write a function which takes the height and width of a rectangle asparameters. Find out the area of that rectangle and print the result.

function areaOfRectangle(height, width) {
    let getArea = height * width
    return getArea;
}
let rectangle = areaOfRectangle(26, 40);
console.log(rectangle);