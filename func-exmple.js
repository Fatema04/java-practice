function getAverage(assignment1, assignment2, assignment3) {

    var total = assignment1 + assignment2 + assignment3;
    var avarage = total / 3;
    return avarage;

}
var assignment1 = 60;
var assignment2 = 56;
var assignment3 = 60;

var myAvarage = getAverage(assignment1, assignment2, assignment3)
console.log(myAvarage);

//example2

function add(age1, age2) {
    var total = age1 + age2;
    return total;
}
var result1 = add(15, 30);
var result2 = add(20, 28);
var result3 = add(result1, result2);
console.log(result3);
