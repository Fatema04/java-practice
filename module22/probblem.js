//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

function feetToInch(number) {
    let getInch = number * 12;
    return getInch;
}
let getInch = feetToInch(6);
console.log(getInch);





//. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(number1) {

    let getMeter = number1 / 100;
    return getMeter;
}
let getMeter = centimeterToMeter(700);
console.log(getMeter)



/*৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

এইবার ভালো করে খেয়াল করো।

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। */

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



//. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

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




//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

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


//----------------বেসিক কনসেপ্ট চেকলিস্ট/সেলফ এসেসমেন্ট: -----------------

//১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? 

let myName = 'Fatema Summenur';
let isHappy = true;

//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে।


//let 
let age = 22;
age = 23;
console.log(age);

//const
//const age1 = 22;
//age1 = 23;
//console.log(age1);//unchangeable

//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

let num1 = 16;
let num2 = 4;

//addition
let add = (num1 + num2);
console.log(add);

//subtraction
let sub = (num1 - num2);
console.log(sub);

//multiplication
let multiple = (num1 * num2);
console.log(multiple);

//division
let divided = (num1 / num2);
console.log(divided);


//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 


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


//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

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

//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

let oddNumbers = 7;
while (oddNumbers < 20) {
    console.log(oddNumbers);
    oddNumbers += 2;
}

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let rollNumber = [20, 34, 45, 24, 31, 24];

console.log(rollNumber.length);


rollNumber[3] = 100;
console.log(rollNumber)


rollNumber.push(50, 60);
console.log(rollNumber)


rollNumber.pop();
console.log(rollNumber)
