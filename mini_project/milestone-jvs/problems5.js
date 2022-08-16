//51) একটা ক োড লি খ ো। যে টা দি য়ে ক োন একটা array এর মধ্যে সবচে য়ে ছ োটসংখ্যা বে র করে দি তে পারবে ।


let array = [5, 7, 3];

let smallest = array[0];
for (let i = 0; i < array.length; i++) {
    let index = i;
    let arr = array[index];

    if (arr < smallest) {
        smallest = arr
        console.log(arr)
    }


}

//52) একটা ক োড লি খ ো যে টা দি য়ে তি নটা সংখ্যার মধ্যে সবচে য়ে ছ োট সংখ্যা বে রকরে দি বে ।

let num1 = 20;
let num2 = 25;
let num3 = 17;

if (num1 < num2 && num1 < num3) {
    console.log(num1, 'is the smallest number');
}
else if (num2 < num1 && num2 < num3) {
    console.log(num2, 'is the smallest number');
}

else { console.log(num3, 'is the smallest number'); }

/**
 * 53) একটা ফাংশন লি খ ো। সে ই ফাংশনে র মধ্যে ইনপুট হি সে বে একটা array নি বে ।
সে ই array এর মধ্যে অনে কগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নে য়া
array এর মধ্যে যতগুলা সংখ্যা আছে । সে ই সংখ্যা গুলার গড় বে র করবে ।
তারপর সে ই গড় ফাংশনে র রি টার্ন হি সে বে দি য়ে দি বে । একটুচি ন্তা কর ো। বঝু ার
চে ষ্টা কর ো। ট্রাই কর ো। দে খ ো পার ো কি না।
 */
function sumOfArray(numbers) {
    let total = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        total = total + element;
        //console.log(total);
    }
    return total / numbers.length;

}

const myNumbers = [34, 85, 87, 63, 12]
var total = sumOfArray(myNumbers);
console.log(total);


//55) (ট্রি কি ) ক োন একটা array এর মধ্যে অনে কগুলা সংখ্যা আছে । সে ই সংখ্যাগুল োথে কে second largest সংখ্যা বে র করার একটা প্র োগ্রাম লি খ ো। দরকার হলেগুগলে সার্চ দাও। তারপর সার্চ রে জাল্ট দে খে বঝেুঝে বঝেুঝে করার চে ষ্টা কর ো।

let arr = [23, 47, 34, 12, 62]
let sorted1 = arr.sort((x, y) => y - x)
console.log(sorted1[1]);

/**
 * 56) একটা ফাংশন লি খ ো। সে টার মধ্যে তি নটা প্যারামি টার নি বে । এই তি নটা
প্যারামি টার হবে ক োন একটা ত্রি ভুজে র তি নটা বাহু এর দৈ র্য্য। এখন ত োমার কাজ
হচ্ছে ফাংশনে র ভি তরে কি ছুহি সাব নি কাশ করে ত্রি ভুজে র area (আয়তন) বে র
করা। ক োন একটা ত্রি ভুজে র তি নটা বাহুর দৈ র্য্য দে য়া থাকলে সে টা থে কে কি ভাবে
আয়তন বে র করতে হয় সে ই ফর্মুলর্মু া গুগল থে কে খুজেঁজে বে র কর ো।
 */

function getArea(firstSide, secoundSide, thirdSide) {

    let semiPerameter = (firstSide + secoundSide + thirdSide) / 2;

    let totalArea = Math.sqrt(semiPerameter * (semiPerameter - firstSide) * (semiPerameter - secoundSide) * (semiPerameter - thirdSide));
    return totalArea;
}
let totalArea = getArea(25, 20, 15);
console.log(totalArea);

//57) ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কি না। সে টা চে ক করার একটাফাংশন লি খ ো।  

let number = 9;
var isPrime = true;

for (let i = 2; i < number; i++) {

    if (number % i == 0) {
        isPrime = false;
    }
}


if (isPrime == true) { console.log(number, ': is a prime number'); }

else { console.log(number, ': is not a prime number'); }


//58) দইুটা ভে রি য়ে বল এর মধ্যে য োগ, বি য় োগ, গুণ, ভাগ কি ভাবে করতে হয় সে টা কি জান ো।অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জান ো। তাহলেনাম্বার টাইপে র দইুটা ভে রি য়ে বললি খ ো তারপর তাদে র য োগ করে সে টার মান আরে কটা ভে রি য়ে বল এ রাখ একইভাবে ওই দইুটাভে রি য়ে বল এর মধ্যে বি য় োগ, গুন, ভাগ এবং ভাগশে ষ বে র কর ো।

let numb1 = 16;
let numb2 = 4;

//addition
let add = (numb1 + numb2);
console.log(add);

//subtraction
let sub = (numb1 - numb2);
console.log(sub);

//multiplication
let multiple = (numb1 * numb2);
console.log(multiple);

//division
let divided = (numb1 / numb2);
console.log(divided);

/**
 * 59) তুমি কি দইুটা ভে রি য়ে বল এরমধ্যে তুলনা করতে পার ো। কম্পারি জন করতে পার ো। যে দইুটা
ভে রি য়ে বল এর মধ্যে প্রথমটা সে কে ন্ডটা এর চাইতে ছ োট, বড়, অসমান, সমান , ছ োট বা সমান,বড় বা সমান। এইগুলা চে ক করতে পার ো। অর্থাৎ <, >, ==, !=, <=, >= চি হ্নগুলা ব্যবহার করতে
পার ো। তাহলে দইুটা সংখ্যা টাইপে র ভে রি য়ে বল ডি ক্লে য়ার করে তাদে রকে এই ছয়ভাবে তুলনা করে
ক োড লি খে ফে ল ো।
 */


//using of '< '

let mark1 = 95;
let mark2 = 84;

if (mark1 < mark2) {
    console.log(mark1, 'is smallest than', mark2);
}
else { console.log(mark2, 'is smallest than', mark1); }



//using of '> '

if (mark1 > mark2) {
    console.log(mark1, 'is largest  than', mark2);
}
else { console.log(mark2, 'is largest  than', mark1); }


//using of '== '

if (mark1 == mark2) {
    console.log(mark1, '&', mark2, 'are equal');
}
else { console.log(mark1, '&', mark2, 'arenot equal'); }

//using of '!= '

if (mark1 != mark2) {
    console.log(mark1, '&', mark2, 'are not equal');
}
else { console.log(mark1, '&', mark2, 'are equal'); }

//using of '<= '

if (mark1 <= mark2) {
    console.log(mark1, 'is small but not equal to', mark2);
}
else { console.log(mark1, 'is neither samll & not equal to', mark2); }

//using of '=> '

if (mark1 >= mark2) {
    console.log(mark1, 'is large & not  equal to', mark2);
}
else { console.log(mark1, 'is neither  large &  nor equal to', mark2); }

/*60) ত োমার যদি দইুটা শর্ত পূরণ করতে বলে । এবং দইুটা শর্তে র মধ্যে দইুটাই পূরণ করতে হবে ।
তাহলে তুমি কি সে টা চে ক করতে পারবে ? একইভাবে যদি বলে তুমি দইুটা শর্তে র যে ক োন একটা
পূরণ করতে পারবে । অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পার ো কি না। যদি পার ো তাহলে
নি জে নি জে এই রকমে র ক োড লি খে ফে ল ো।*/

let dressType = 'Salwar-suit';
let dressColor = 'Green';


//&&

if (dressType && dressColor) {
    console.log('I will buy this dress');
}
else { console.log('I will not buy this dress'); }

//||

if (dressType || dressColor) {
    console.log('I will not  buy this dress');
}
else { console.log('I will buy this dress'); }