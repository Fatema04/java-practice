//  আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট  হিসেবে দেখাও। 

var mood = 0;
while (mood <= 39) {
    console.log("Ajke amar mon valo nei");
    mood++;
}

// একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
for (var i = 58; i <= 98; i++) {
    console.log(i);
}

// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
var number = 412;
while (number <= 456) {
    console.log(number);
    number = number + 2;
}

//একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
var number = 581;
while (number <= 623) {
    console.log(number);
    number = number + 2;
}

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var myLeassons = ['html', 'css', 'bootstrap', 'github', 'tailwind', 'netlify'];
for (var i = 0; i < myLeassons.length; i++) {
    var allLesson = myLeassons[i];
    console.log(allLesson);
}



// . তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

var allMobiles = ['samsung', 'mi phone', 'lenovo'];
var i = 0;

while (i < allMobiles.length) {
    var mobile = allMobiles[i];
    console.log(mobile);
    i++;
}

// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

for (var i = 30; i <= 86; i++) {
    console.log(i);
    if (i === 44) {
        break;
    }
}


// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var bookPrice = [145, 345, 72, 456, , 500, 432, 189, 230];
for (var i = 0; i < bookPrice.length; i++) {
    var book = bookPrice[i];
    if (book > 200) {
        console.log(book);
    }
}
// তোমার কাছে:  ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var myBudget = 75000;
var macPrice = 80000;
var gamingLaptopPrice = 60000;
var lenovoComputerPrice = 40000;
var oldLaptopPrice = 20000;

if (myBudget > macPrice) {
    console.log('I will buy mac');
}
else if (myBudget > gamingLaptopPrice) {
    console.log('I will buy a gaming laptop');
}

else if (myBudget > lenovoComputerPrice) {
    console.log('I will buy a lenovo yoga computer');
}
else if (myBudget > oldLaptopPrice) {
    console.log('I will buy a old laptop');
}
else {
    console.log('I will continue with mobile');
}
