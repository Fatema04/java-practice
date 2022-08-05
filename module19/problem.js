//১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(year) {
    if (year % 4 === 0) {
        console.log(year, 'is leap year : True')
    }
    else {
        console.log(year, 'is leap year : False')
    }
}
leapYear(2023);

//২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function oddEven(age) {
    if (age % 2 === 0) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}
oddEven(22);
oddEven(23);

//৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

function hourToMin(time) {

    let getMin = time * 60
    return getMin;
}
const result = hourToMin(2);
console.log(result);

//৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।

function hourToSecond(time) {

    let getSecond = time * 3600
    return getSecond;
}
const result1 = hourToSecond(4);
console.log(result1);


/*একটি ফাংশন findLeapYear() লিখুন যা অ্যারে নেবে
ইনপুট প্যারামিটার হিসাবে [2023,2024,2025,2028,2030] এবং পরীক্ষা করবে কিনা
প্রতি বছর একটি অধিবর্ষ। যদি একটি বছর একটি লিপ ইয়ার হয় তাহলে সেই বছরটি ক
নতুন অ্যারে, নতুন অ্যারে ফিরিয়ে দিন এবং ফলাফল প্রিন্ট করুন।*/

function findLeapYear(years) {
    const arrayOfLeapYear = [];
    for (var i = 0; i < years.length; i++) {
        const index = i;
        const element = index[i];
        if (element % 4 === 0) {
            arrayOfLeapYear.push(element);
        }
    }
    return arrayOfLeapYear;
}
var allYears = [1952, 2023, 2024, 2025, 2028, 2030];
const arrayOfLeapYear = findLeapYear(allYears);
console.log(arrayOfLeapYear);

/**
 * একটি ফাংশন findOddSum() লিখুন যা অ্যারে [5, 7, 8, 10, 45, 30] নেবে।
ইনপুট প্যারামিটার হিসাবে এবং বিজোড় সংখ্যার যোগফল প্রদান করবে।
 */