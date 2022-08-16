/*1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges 300 and 1 kg of
apples is tk 400.*/

const moneyGiven = 1000;
const priceOfOranger = 300;
const priceOfApple = 400;

let restMoney = moneyGiven - (priceOfOranger + priceOfApple);
console.log(restMoney);

/**
 * 2) Write a program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.
 */

const markOfMath = 85;
const markOfBiology = 75;
const markOfPhysics = 80;
const markOfChemistry = 87;
const markOfBangla = 82;

let get_avarage = (markOfMath + markOfBiology + markOfPhysics + markOfChemistry + markOfBangla) / 5;

console.log(get_avarage);

/**
 * 3) John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.
 */

const firstPart = ['I am going to be'];
const secondPart = [' an awesome web developer'];

let add = firstPart + secondPart;
console.log(add)

/**
 * 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program.
 */

const number = 119;
let findReminder = (number % 5);
console.log(findReminder);

/**
 * 5) নিচের ভেরিয়েবল ডিক্লেয়ার এক োনটার মধ্যে কি কি সমস্যা আছে । দেখত ো বের করতে পার ো কিনা?
Var price = 33
var name - Shabana
var boxName = ‘Cocola;
var 88_price = 34;
var enum = -1;
var _$box’78 = ‘Monika’;
var home-address = “kochu khet”;
 */

//         Mistakes                        Correct

//1) Var price = 33            -------------  var price = 33 ;
//2)var name - Shabana         -------------  var names = 'Shabana';
//3)var boxName = ‘Cocola;     -------------  var boxName = 'Cocola';
//4)var 88_price = 34;         -------------  var price88 = 34;
//5)
//6)var _$box’78 = ‘Monika’;   -------------- var box78 = ‘Monika’;
//7)var home-address = “kochu khet”; -------- var home_address = “kochu khet”;

/**
 * 6) You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
 */

var fruits = ['Apple', 'Banana', 'Orange'];
let findIndex = fruits.indexOf('Banana');
console.log(findIndex);

fruits[1] = 'Mango'
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon')
console.log(fruits);

/**
 * b) Remove ‘Orange’ and add ‘Watermelon’.

7) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using
if-else.
 */



//MyGrade


const myMark = 85;

if (myMark >= 80) {
    console.log('My Grade is A')
}

else if (myMark >= 60) {
    console.log('My Grade is B')
}
else if (myMark >= 50) {
    console.log('My Grade is C')
}
else if (myMark >= 40) {
    console.log('My Grade is D')
}
else { console.log('My Grade is F') }

//tom's grade


const tomMark = 66;

if (tomMark >= 80) {
    console.log('Tom Grade is A')
}

else if (tomMark >= 60) {
    console.log('Tom Grade is B')
}
else if (tomMark >= 50) {
    console.log('Tom Grade is C')
}
else if (tomMark >= 40) {
    console.log('Tom Grade is D')
}
else { console.log('Tom Grade is F') }

//Jany's grade


const janeMark = 95;

if (janeMark >= 80) {
    console.log('Jane Grade is A')
}

else if (janeMark >= 60) {
    console.log('Jane Grade is B')
}
else if (janeMark >= 50) {
    console.log('Jane Grade is C')
}
else if (janeMark >= 40) {
    console.log('Jane Grade is D')
}
else { console.log('Jane Grade is F') }

//peter's mark


const peterMark = 56;

if (peterMark >= 80) {
    console.log('Peter Grade is A')
}

else if (peterMark >= 60) {
    console.log('Peter Grade is B')
}
else if (peterMark >= 50) {
    console.log('Peter Grade is C')
}
else if (peterMark >= 40) {
    console.log('Peter Grade is D')
}
else { console.log('Peter Grade is F') }

//john's mark


const johnMark = 40;

if (johnMark >= 80) {
    console.log('John Grade is A')
}

else if (johnMark >= 60) {
    console.log('John Grade is B')
}
else if (johnMark >= 50) {
    console.log('John Grade is C')
}
else if (johnMark >= 40) {
    console.log('John Grade is D')
}
else { console.log('Jhon Grade is F') }

/*8) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.*/

const num1 = 13;
const num2 = 79;
const num3 = 45;


if (num1 > num2 && num1 > num3) {
    console.log('Largest number is', num1)
}

else if (num2 > num1 && num2 > num3) {
    console.log('Largest number is', num2)
}
else { console.log('Largest number is', num3) }


/**
 * 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
 */

const side1 = 9;
const side2 = 3;
const side3 = 9;


if (side1 == side2 || side1 == side3
) {
    console.log('This tringle  is Isosceles')
}

else if (side2 == side1 || side2 == side3
) {
    console.log('This tringle  is Isosceles')
}
else { console.log('This tringle  is not Isosceles') }


/**
 * 10) ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধু আলিয়া, ডালিয়া,সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জান োনা। তবে তাদের নম্বর জান ো.
 * 
 *  আলিয়া 95 পেয়েছে , ডালিয়া 66 পেয়েছে , সালিয়া 80 পেয়েছে , মালিয়া পেয়েছে 59,লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দি য়ে তাদে র grade বের করে দিতে পারবে ?
 * 
 * 
১) যারা ৫০ এর নিচে পেয়েছে , তাদের grade F.
২) যারা ৫০ বা তার উপরে পেয়েছে , অথবা ৬০ এর নিচে পেয়েছে , তাদের grade D.
৩) যারা ৬০ বা তার উপরে পেয়েছে , অথবা ৭০ এর নিচে পেয়েছে , তাদের grade C.
 */


//dalias grade

const daliaMark = 66;

if (daliaMark < 50) {
    console.log('dalia grade is F')
}

else if (daliaMark >= 50 && daliaMark < 60) {
    console.log('daliaGrade is D')
}
else if (daliaMark >= 60 && daliaMark < 70) {
    console.log('daliaGrade is C')
}
else {
    console.log('call him/her')
}

//alias grade

const aliaMark = 95;

if (aliaMark < 50) {
    console.log('alia grade is F')
}

else if (aliaMark >= 50 && aliaMark < 60) {
    console.log('alia Grade is D')
}
else if (aliaMark >= 60 && aliaMark < 70) {
    console.log('alia Grade is C')
}
else if (aliaMark >= 70 && aliaMark < 100) {
    console.log('alia Grade is a topper')
}
else {
    console.log('call him/her')
}

//SALEHA grade

const salehaMark = 40;

if (salehaMark < 50) {
    console.log('saleha grade is F')
}

else if (salehaMark >= 50 && salehaMark < 60) {
    console.log('saleha Grade is D')
}
else if (salehaMark >= 60 && salehaMark < 70) {
    console.log('saleha Grade is C')
}
else if (salehaMark >= 70 && salehaMark < 100) {
    console.log('saleha Grade is a topper')
}
else {
    console.log('call him/her')
}
//malias grade

const maliaMark = 59;

if (maliaMark < 50) {
    console.log('malia grade is F')
}

else if (maliaMark >= 50 && maliaMark < 60) {
    console.log('malia Grade is D')
}
else if (maliaMark >= 60 && maliaMark < 70) {
    console.log('malia Grade is C')
}
else if (maliaMark >= 70 && maliaMark < 100) {
    console.log('malia Grade is a topper')
}
else {
    console.log('call him/her')
}

//lilias grade

const liliaMark = 47;

if (liliaMark < 50) {
    console.log('lilia grade is F')
}

else if (liliaMark >= 50 && liliaMark < 60) {
    console.log('lilia Grade is D')
}
else if (liliaMark >= 60 && liliaMark < 70) {
    console.log('lilia Grade is C')
}
else if (liliaMark >= 70 && liliaMark < 100) {
    console.log('lilia Grade is a topper')
}
else {
    console.log('call him/her')
}

//jalaias grade

const jaliaMark = 77;

if (jaliaMark < 50) {
    console.log('jalia grade is F')
}

else if (jaliaMark >= 50 && jaliaMark < 60) {
    console.log('jalia Grade is D')
}
else if (jaliaMark >= 60 && jaliaMark < 70) {
    console.log('jalia Grade is C')
}
else if (jaliaMark >= 70 && jaliaMark < 100) {
    console.log('jalia Grade is a topper')
}
else {
    console.log('call him/her')
}