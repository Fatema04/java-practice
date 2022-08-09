/**
 * 11) তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।
 */

let color = 'green';
if (color == 'red') {
    console.log('Do not cross the road');
}
else if (color == 'yellow') {
    console.log('Please wait for a while');
}
else {
    console.log('Now cross the road');
}
/*
12) প্রতি দি ন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডি উল আনলক কর ো
২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।*/

let myDailyTask = ['unlocked module at 8 pm', 'start practicing', 'take notes', 'practice whole module', 'if you got stuck'];

//for (let j = 0; j < 10; j++) {
//
//    for (let i = 0; i < myDailyTask.length; i++) {
//        let dailyTask = myDailyTask[i];
//
//        console.log(dailyTask);
//
//        if (dailyTask === 'if you got stuck') {
//            console.log('go to support session');
//        }
//
//    }
//}

//reverse for loop
//for (let j = 10; j >= 0; j--) {
//    console.log(j);
//    for (let i = 10; i >= myDailyTask.length; i++) {
//        let dailyTask = myDailyTask[i];
//
//        console.log(dailyTask);
//
//        if (dailyTask === 'if you got stuck') {
//            console.log('go to support session');
//        }
//
//    }
//}


//let j = 0;
//while (j < 10) {
//    j++;
//    console.log(j);
//    for (let i = 0; i < myDailyTask.length; i++) {
//        let dailyTask = myDailyTask[i];
//
//        console.log(dailyTask);
//
//        if (dailyTask === 'if you got stuck') {
//            console.log('go to supportsession');
//        }
//    }
//}

/**
 * 16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।
 */

let myBudget = 90000;

const macPrice = 80000;
const gamingLaptopPrice = 60000;
const lenevoComputerPrice = 40000;
const oldLaptopPrice = 20000;

if (myBudget > macPrice) {
    console.log('I will buy mac');
}
else if (myBudget > gamingLaptopPrice) {
    console.log('I will buy gaming laptop');
}
else if (myBudget > lenevoComputerPrice) {
    console.log('I will buy lenovo yoga computer');
}
else if (myBudget > oldLaptopPrice) {
    console.log('I will buy old laptop price');
}
else { console.log('I will continue with my old phone'); }

//17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও।

let texts = 'ajke amar mon valo nei';

for (let i = 0; i < 39; i++) {

    console.log(i, texts);
}

//19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও

for (let i = 58; i <= 98; i++) {

    console.log(i);
}

//20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকেদে খাও
for (let i = 412; i <= 456; i += 2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও
for (let j = 581; j <= 623; j += 2) {
    if (j % 2 !== 0) {
        console.log(j);
    }
}

//22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটাfor লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।

let myLesson = ['html', 'css', 'javascript'];

for (let i = 0; i < myLesson.length; i++) {
    let lessons = myLesson[i];
    console.log(lessons);
}

//23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটাarray বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করেআউটপুট হি সে বে দে খাও

let allMobile = ['samsung', 'oppo', 'mi phone'];

let i = 0;
while (i < allMobile.length) {
    i++;
    let index = i;
    let mobiles = allMobile[index];
    console.log(mobiles);
}
