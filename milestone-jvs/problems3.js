//31) একটা ফাংশন লি খবা যে টা যে ক োন নামকে uppercase বা রে গুলার কে ইস হি সে বে নি বে আরআউটপুট হি সে বে সে ই নাম lowercase করে রি টার্ন করবে ।

let myName = 'fatema summenur';
console.log(myName.toUpperCase());

/*33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে ।*/

let firstName = 'Hablu';
let lastName = 'Kanto';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

/**
 * 34) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার
square করে সে ই square কে রি টার্ন করবে ।
অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে ।
 */

function squre(numbb) {
    return (numbb * numbb);
}
let result = squre(5);
console.log(result);

//35) Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.
function hourToMin(hour) {
    let getMin = (hour * 60)
    return getMin;
}
let results = hourToMin(5);
console.log(results);

/**
 * 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result.
 */
let leapYear = [];
function findLeapYear(years) {
    for (let i = 0; i < years.length; i++) {
        let year = years[i];
        if (year % 4 == 0) {
            leapYear.push(year)
        }
    }
    return leapYear;


}


let allYear = [2023, 2024, 2025, 2028, 2030];
let years = findLeapYear(allYear);
console.log(years)

/** 
 * 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers.
 */

let allOdd = [];

function findOdd(numberss) {
    for (let i = 0; i < numberss.length; i++) {
        let number = numberss[i];
        if (number % 2 !== 0) {
            allOdd.push(number)
        }
    }
    return allOdd;
}

let sum = 0;
function sumOfOdd() {
    for (let i = 0; i < allOddNum.length; i++) {
        let element = allOddNum[i];
        sum = sum + element;
    }
    return sum;


}

let allNum = [5, 7, 8, 10, 45, 30];
let allOddNum = findOdd(allNum);
console.log(allOddNum);

let totalOfOdd = sumOfOdd(allOddNum);
console.log(totalOfOdd);

//38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টাচে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার্ন করবে ।

function findLeapYear(year) {
    if (year % 4 == 0) {
        console.log('true');
    }
    else { console.log('false'); }
}
findLeapYear(2023);

/**
 * 39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই
ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন
করবে আর Odd হলে false রি টার্ন করবে ।
 */


function findOddEven(myAge) {
    if (myAge % 2 == 0) {
        console.log('true');
    }
    else { console.log('false'); }
}
findOddEven(24);

/**
 * 40) এমন একটা ফ্যাংশনা লি খ ো যে টাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হি সে বে দি বে । আর সে
সে ই ঘন্টাকে মি নি টে কনভার্ট করে মি নি ট রি টার্ন করবে ।
 */