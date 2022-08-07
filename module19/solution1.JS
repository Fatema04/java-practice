//১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

function findSmall(numbers) {
    let smallNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < smallNum) {
            smallNum = element
        }
    }
    return smallNum;
}
var serial = [7, 8, 2, 3, 4, 5];
var result = findSmall(serial);
console.log(result);

//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

const age1 = 43;
const age2 = 45;
const age3 = 20;

if (age1 > age2 && age1 > age3) {
    console.log('Large number is :', age1);
}

else if (age2 > age1 && age2 > age3) {
    console.log('Large number is :', age2);
}

else {
    console.log('Large number is :', age3);
}

/**
 * ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

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

//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function areaOfRec(height, width) {

    var areaOfRectangle = height * width
    return areaOfRectangle;
}
var result1 = areaOfRec(23, 42);
console.log(result1);


//৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

let arr = [32, 65, 14, 35, 23, 75]
let arraySorted = arr.sort((a, b) => a - b)
console.log(arraySorted[1]);
