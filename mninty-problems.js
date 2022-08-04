//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function table(number, multiple) {
    var multiplication = number * multiple;
    return multiplication;
}


var number = 13;


var result1 = table(number, 1);
console.log(number, ' X ', 1, '=', result1);

var result2 = table(number, 2);
console.log(number, ' X ', 2, '=', result2);

var result3 = table(number, 3);
console.log(number, ' X ', 3, '=', result3);

var result4 = table(number, 4);
console.log(number, ' X ', 4, '=', result4);

var result5 = table(number, 5);
console.log(number, ' X ', 5, '=', result5);

var result6 = table(number, 6);
console.log(number, ' X ', 6, '=', result6);

var result7 = table(number, 7);
console.log(number, ' X ', 7, '=', result7);

var result8 = table(number, 8);
console.log(number, ' X ', 8, '=', result8);

var result9 = table(number, 9);
console.log(number, ' X ', 9, '=', result9);

var result10 = table(number, 10);
console.log(number, ' X ', 10, '=', result10);



//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

let text = "assalamu-alaikum !";
let result = text.toUpperCase();
console.log(result);

//৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 


function fullName(firstName, lastName) {
    const myName = firstName + " " + lastName;
    return myName;


}

var nameOfMine = fullName('Fatema', 'Summenur');
console.log(nameOfMine);


//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
//অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

function squre(number) {
    var multiple = number * number;
    return multiple;
}
var number = 5;
var results = squre(number, number);
console.log(results);


const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}

var myPizza = pizza.toppings;
//type 1
console.log(Object.values(myPizza).pop());


//type 2
var lastItem = myPizza[myPizza.length - 1];
console.log(lastItem);

//type 3[easy way]

var last = myPizza[2];
console.log(last);

/*1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output.*/

/*2) Write a function called make_avg() which will take an three integers and return the
average of those values.*/

/**3)Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. */

/**
 * Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
 */