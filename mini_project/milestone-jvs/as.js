// //Problem 1 ----radianToDegree-----//

// function radianToDegree(number) {

//     if (isNaN(number)) { return 'Please enter a valid input!'; }

//     return parseFloat((number * 180 / Math.PI).toFixed(2));

// }




// //Problem 3--------oilPrice--------//

// function oilPrice(amountOfDiesel, amountOfPetrol, amountOfOctane) {

//     if (isNaN(amountOfDiesel && amountOfPetrol && amountOfOctane)) {

//         return 'Please enter a valid input!';
//     }

//     let rateOfDiesel = 114;
//     let rateOfPetrol = 130;
//     let rateOfOctane = 135;

//     let totalPriceOfDiesel = amountOfDiesel * rateOfDiesel;
//     let totalPriceOfPetrol = amountOfPetrol * rateOfPetrol;
//     let totalPriceOfOctane = amountOfOctane * rateOfOctane;

//     let totalCost = totalPriceOfDiesel + totalPriceOfPetrol + totalPriceOfOctane;

//     return totalCost;
// }

// //Problem 4 --------publicBusFare-------------//

// function publicBusFare(people) {

//     if (isNaN(people)) {
//         return 'Please enter a valid input!';
//     }

//     let busCapacity = 50;
//     let microCapacity = 11;

//     if (people < microCapacity) {
//         return people * 250;
//     }

//     else if (people > microCapacity && people < busCapacity) {
//         if (people % microCapacity !== 0) {
//             return (people % microCapacity) * 250;
//         }
//         else { return 0; }
//     }


//     else if (people % busCapacity === 0) {
//         return 0;
//     }


//     else if (people % busCapacity !== 0) {
//         let reminder = people % busCapacity;

//         if (reminder % microCapacity !== 0) {
//             return (reminder % microCapacity) * 250;
//         }
//         else { return 0; }
//     }
// }


// // //--------------------------------------------//


// //Problem 5 -----------isBestFriend-----------//

// function isBestFriend(object1, object2) {
//     if (Array.isArray(object1) || Array.isArray(object2)) {
//         return 'wrong';
//     }
//     if (typeof object1 !== 'object' || typeof object2 !== 'object') {
//         return 'wrong';
//     }

//     if (object1.name.toLowerCase() == object2.friend.toLowerCase() && object2.name.toLowerCase() == object1.friend.toLowerCase()) {

//         return true;
//     }
//     else { return false; }

// }
// const result = isBestFriend([21, 23],
//     [34, 45]
// )
// console.log(result);

//console.log(typeof [21, 13]);



//Problem 2 -----isJavaScriptFile------//


function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') {
        return 'wrong input';
    }

    if (fileName.endsWith('.js')) {
        return true;
    }

    else { return false; }
}
let res = isJavaScriptFile('.js');
console.log(res)
