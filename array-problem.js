//প্রাকটিস চ্যালেঞ্জ-১

//প্রতিদিন তোমার কাজ কি?

//১) রাত ৮ টা বাজে মডিউল আনলক করো

//২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

//৩) ভিডিও দেখতে দেখতে নোটস নাও
//
//৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো

//৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো

//এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।

// var dailyTask = ['unlock the module', 'watch video', 'take notes', 'practice after watching video', 'if i got stuck']

// for (var j = 0; j < 10; j++) {
//     console.log(j);
//     for (var i = 0; i < dailyTask.length; i++) {
//         var myTask = dailyTask[i];
//         console.log(myTask);
//         if (myTask === 'if i got stuck') {
//             console.log('Goto support session');
//         }

//     }

// }





//problem2
/*your total score is 85,tom's score is 66,Jame's score is 95, peter's score is 56 & Jhon's score is 40.The grading chart is
80 or above A Grade
60 or above B Grade
50 or above C Grade
40 or above DGrade  
39 or less=>F Grade */

var myMark = 85;

if (myMark > 80) {
    console.log(' I have got A grade');
}
else if (myMark > 60) {
    console.log(' I have got B  grade');
}

else if (myMark > 50) {
    console.log(' I have got C  grade');
}
else if (myMark > 40) {
    console.log(' I have got D grade');
}
else {
    console.log('I failed in the exam');
}






// array
var examresults = ['I got A grade', 'Tom got B grade', 'Jame got A grade', 'Peter got C grade', 'Jhon got D grade'];
for (var i = 0; i < examresults.length; i++) {
    var everyoneScore = examresults[i];
    console.log(everyoneScore);
}

