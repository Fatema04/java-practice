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

//sum of array

function sumOfArray(numbers) {
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
sumOfArray(myNumbers);

//sum of odd

function getOdd(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumber.push(element);
        }
    }
    return oddNumber
}

function sumOfArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;

    }
    return sum;

}


const myNumbers1 = [44, 75, 57, 63, 18]

const oddNumber = getOdd(myNumbers1);
console.log(oddNumber);

const sumOfOdd = sumOfArray(oddNumber);
console.log(sumOfOdd);


//add number(1+2+3+4+5)
function addition(numberr) {
    let summ = 0;
    for (var i = 1; i <= numberr; i++) {

        summ = summ + i;
        console.log(i, summ);
    }
    return summ;
}
addition(7);


//multiplication 

function multiplication(numberr) {
    let multiple = 1;
    for (var i = 1; i <= numberr; i++) {

        multiple = multiple * i;
        console.log(i, multiple);
    }
    return multiple;
}
multiplication(3);


