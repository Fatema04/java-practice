//61) তুমি কি একটা শর্ত পালন করলে একটা কি ছুকরবে । শর্ত পূরণ না করলে অন্য কি ছুএকটাকরবে এমন ক োড লি খতে পারবে । অর্থাৎ তুমি কি if-else এর ক োড লি খতে পারবে । পারলে একটাক োড লি খে ফে ল ো


//62) ত োমাকে যদি বলে একটা while লপু দি য়ে ৭ থে কে ১৯ পর্যন্ত যতগুলা বি জ োড় সংখ্যা আছেসে গুলা দে খাতে । তুমি কি সে টা দে খাতে পারবে ? পারলে সে ই ক োড লি খে ফে ল ো।

let oddNumbers = 7;
while (oddNumbers < 20) {
    console.log(oddNumbers);
    oddNumbers += 2;
}

/**
 * 63) ত োমাকে যদি বলা হয় তুমি একটা array ডি ক্লে য়ার করবে । এবং সে টার মধ্যে কয়টা উপাদান
আছে সে টা বে র করবে হবে । সে ই array এর এর মধ্যে চতুর্থ পজি শন এর উপাদান চে ইঞ্জ করতে
হবে । array এর মধ্যে দইুটা উপাদান য োগ করতে হবে । এবং একটা উপাদান কে বে র করে দি তে
হবে । তুমি কি সে টা করতে পারবে ।
 */

let rollNumber = [20, 34, 45, 24, 31, 24];

console.log(rollNumber.length);


rollNumber[3] = 100;
console.log(rollNumber)


rollNumber.push(50, 60);
console.log(rollNumber)


rollNumber.pop();
console.log(rollNumber);


/**
 * 64) তুমি কি একটা ফর লপু দি য়ে ক োন একটা array এর সবগুলা উপাদানকে দে খাতে পারবে । সে টা
রে গুলার for লপু হ োক বা for of হ োক। হলে সে ই স্টাইলে একটা ক োড লি খে ফে ল ো।
 */
let members = ['ayan', 'jain', 'maya', 'esha'];
for (let i = 0; i < members.length; i++) {
    let index = i;
    let member = members[index];
    console.log(member);
}

/**
 * 65) ত োমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সে গুলাকে
console log করে দে খাতে সে টা কি তুমি পারবে ? তাহলে তুমি সে ই ক োড করে ফে ল ো
 */
const num = [70, 56, 90, 87, 80, 33, 54, 97];

for (let i = 0; i < num.length; i++) {
    let index = i;
    let nums = num[index];
    if (nums >= 80) {
        console.log(nums)
    }
}


/**
 * 66) তি নটা সংখ্যার গুনফল বে র করে ফাইনাল রে জাল্ট আউটপুট হি সে বে রি টার্ন করতে হবে । তুমি
কি সে ই ক োড লি খতে পারবে । যদি পার ো তাহলে সে ই ক োড লি খে ফে ল ো।
 */

let numb1 = 13;
let numb2 = 25;
let numb3 = 10;

let multipal = (numb1 * numb2 * numb3);
console.log(multipal);
/**
 * 67) একটা অবজে ক্ট ডি ক্লে য়ার করবে । সে টাতে তি নটা প্রপার্টি থাকবে । এবং ক োন একটা প্র োপার্টি
এর মান চে ইঞ্জ করবা।
 */

let phone = { brand: 'oppo', color: 'green', price: 25000 }

phone.price = 20000;
console.log(phone);

/**
 * 68) সি ম্পল একটা ফাংশন লি খতে হবে । যে টার নাম হবে feetToInch এবং এই ফাংশন
ইনপুট হি সে বে নি বে feet আর রি টার্ন করবে inch । অর্থাৎ এই ফাংশনকে ক োন
একটা ফি ট বলে দি লে সে রি টার্ন হি সে বে বলে দি বে কত ইঞ্চি হয়।

 */

function feetToInch(number) {
    let getInch = number * 12;
    return getInch;
}
let getInch = feetToInch(6);
console.log(getInch);
/**
 * 69) একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দি য়ে একটা ফাংশন
লি খবে । এই ফাংশনে ইনপুট হি সাবে কে উ সে ন্টি মি টার দি বে আর সে ই সে ন্টি মি টার
কে মি টার এ কনভার্ট করে রে জাল্ট রি টার্ন করবে ।
 */
function centimeterToMeter(number1) {

    let getMeter = number1 / 100;
    return getMeter;
}
let getMeter = centimeterToMeter(700);
console.log(getMeter);
/**
 * 
 * 
 * 70) আরে কটা ফাংশন লি খবে যে টার নাম লি খবে । যে ই ফাংশনে র নাম হবে paperRequirements
এই ফাংশনে র প্যারামি টার হি সে বে তি নটা প্যারামি টার হবে । প্রথম প্যারামি টার হবে তুমি প্রথম বই
কত কপি ছাপাতে চাও। সে কে ন্ড প্যারামি টার হবে তুমি সে কে ন্ড বই কত কপি ছাপাতে চাও। আর
থার্ড প্যারামি টার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ ক োন বই এর কত কপি ছাপান ো
হবে সে টাই প্যারামি টার হি সে বে নি বে ।
এইবার ভাল ো করে খে য়াল কর ো।
প্রথম বই ছাপান োর জন্য পৃষ্ঠা লাগবে ১০০ টা
সে কে ন্ড বই ছাপান োর জন্য পৃষ্ঠা লাগবে ২০০ টা
তৃতীয় বই ছাপান োর জন্য পৃষ্ঠা লাগবে ৩০০ টা
এখন ত োমার কাজ হচ্ছে paperRequirements নামক ফাংশন লি খে ফে লা যাতে । সে ই ফাংশনকে
কল করে ক োন বই এর কত কপি লাগবে বলে দি বে প্যারামি টার হি সে বে । আর ফাংশন হি সাব করে
বলে দি বে ত োমার সর্বম োট কতপৃষ্ঠা কাগজ
 */

function paperRequirements(copyOf1stBook, copyOf2ndBook, copyOf3rdBook) {


    let pageOf1stBook = 100;
    let pageOf2ndBook = 200;
    let pageOf3rdBook = 300;

    let totalPageOf1stBook = copyOf1stBook * pageOf1stBook;
    let totalPageOf2ndBook = copyOf2ndBook * pageOf2ndBook;
    let totalPageOf3rdBook = copyOf3rdBook * pageOf3rdBook;

    let totalPaperRequirment = totalPageOf1stBook + totalPageOf2ndBook + totalPageOf3rdBook;

    return totalPaperRequirment;

}

const totalPaperRequirment = paperRequirements(4, 5, 3);
console.log(totalPaperRequirment);

/**
 * 71) একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম (স্ট্রি ং) রি টার্ন করতে হবে ।
 */


function bestFriend(names) {
    let myBestFriend = names[0];
    for (let i = 0; i < friends.length; i++) {
        const index = i;
        const element = names[index];
        if (element.length > myBestFriend.length) {
            myBestFriend = element
        }
    }
    return myBestFriend;
}

const friends = ['joy', 'maya', 'jaynab', 'chaityrani']
let myBestFriend = bestFriend(friends);
console.log(myBestFriend);

/**
 * 72) এইটা একটুট্রি কি হতে পারে । একটা array এর মধ্যে অনে কগুলা সংখ্যা থাকবে ।
ত োমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চে ক করা। এবং সংখ্যা
গুলা যদি পজি টিভ সংখ্যা হয়। অর্থাৎ শনূ্য বা শন্যেূন্যে র চাইতে বড় হয় তাহলে
সে গুলাকে ক োন একটা array এর মধ্যে রাখবে । আর যদি নে গে টিভ সংখ্যা হয়।
তাহলে লপুটা স্টপ করে দি বে । এবং লপু বন্ধ করার আগ পর্যন্ত যতগুলা পজি টিভ
সংখ্যা পাওয়া গে ছে । সে গুলা রি টার্ন করে দি বে ।
 */

function findPositive(numbers) {
    let allPositive = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element >= 0) {
            allPositive.push(element);
        }

    }
    return allPositive;
}
const allNumbers = [0, 1, -5, -3, 5, 7, 2, -9, -12, 12];
let allPositive = findPositive(allNumbers);
console.log(allPositive);


//--------------------------THE END-------------------------------------
function publicBusFare(people) {

    let bus = 50;
    let micro = 11;

    if (people < micro) {
        console.log(people * 250);
    }

    else if (people > micro && people < bus) {
        if (people % 11 !== 0) {
            let reminder = people % 11;
            console.log(reminder * 250)

        }
    }


    else if (people % bus !== 0) {
        let reminder = people % 50;
        console.log(reminder);
        // if (reminder < micro) {
        //     let reminder2 = reminder % micro;
        //     console.log(reminder2 * 250)

        if (reminder % micro !== 0) {
            // let reminder1 = people % 50;
            let reminder1 = reminder % 11;
            console.log(reminder1 * 250)

        }
    }

}

publicBusFare(100);
