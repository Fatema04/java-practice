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