function inchToFeet(inch) {
    var getFeet = inch / 12;
    return getFeet;
}
var result = inchToFeet(50);
console.log(result);

//miles to kilometer
function mileToKm(miles) {
    var getKm = miles * 1.609;
    return getKm;
}
var result1 = mileToKm(90);
console.log(result1);

//even odd
function evenodd(number) {
    if (number % 2 === 0) {
        console.log("Yes, its true");
    }
    else {
        console.log("No, its false");
    }

}
evenodd(5);

//findyear

function leapYear(number) {
    if (number % 4 === 0) {
        console.log("Yes, its a leap-year");
    }
    else {
        console.log("No, its not a leap-year");
    }

}
leapYear(1952);
leapYear(1997);

//oddsum

function oddSum(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(sum);
    }
    return sum;

}
const myNumbers = [34, 85, 87, 63, 12]
oddSum(myNumbers);