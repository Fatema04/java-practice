//২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

let number = 9;
var isPrime = true;

for (let i = 2; i < number; i++) {

    if (number % i == 0) {
        isPrime = false;
    }
}

if (isPrime == true) { console.log(number, ': is a prime number'); }

else { console.log(number, ': is not a prime number'); }




//১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। 

//sqrt s(s-a)(s-b)(s-c)



function getArea(firstSide, secoundSide, thirdSide) {

    let semiPerameter = (firstSide + secoundSide + thirdSide) / 2;

    let totalArea = Math.sqrt(semiPerameter * (semiPerameter - firstSide) * (semiPerameter - secoundSide) * (semiPerameter - thirdSide));
    return totalArea;
}
let totalArea = getArea(25, 20, 15);
console.log(totalArea);