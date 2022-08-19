console.log('hired')
//common
function updateNumber(isIncrease, inputFieldId) {
    const numberField = document.getElementById(inputFieldId);
    const numberFieldString = numberField.value;
    const previousNumber = parseInt(numberFieldString);


    let newNumber = 0;
    if (isIncrease === true) {
        newNumber = previousNumber + 1;
    }
    else { newNumber = previousNumber - 1; }
    numberField.value = newNumber;
    return newNumber;

}

function updatePrice(newNumber) {

    const phonePrice = newNumber * 1219;
    const priceField = document.getElementById('phone-total');
    priceField.innerText = phonePrice;




}

//plus button
document.getElementById('phone-button-plus').addEventListener('click', function () {
    const newNumber = updateNumber(true, 'phone-number-field');
    updatePrice(newNumber);



    calculation('sub-total');


})




//minus buton
document.getElementById('phone-button-minus').addEventListener('click', function () {
    const newNumber = updateNumber(false, 'phone-number-field');
    updatePrice(newNumber);
    calculation('sub-total');
})













// function updateNumber(isIncrease, id) {
//     const NumberField = document.getElementById(id);
//     const NumberString = NumberField.value;
//     const previousNumber = parseInt(NumberString);

//     let newNumber;
//     if (isIncrease === true) {
//         newNumber = previousNumber + 1;
//     }
//     else { newNumber = previousNumber - 1; }

//     NumberField.value = newNumber;
//     return newNumber;
// }

// function updateCasePrice(newNumber) {
//     const caseTotalPrice = newNumber * 59;
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseTotalPrice;


// }
// //plus
// document.getElementById('case-button-plus').addEventListener('click', function () {
//     const newNumber = updateNumber(true, 'case-number-field');
//     updateCasePrice(newNumber);

//     calculation();

// })
// //minus

// document.getElementById('case-button-minus').addEventListener('click', function () {
//     const newNumber = updateNumber(false, 'case-number-field');
//     updateCasePrice(newNumber);

//     calculation();

// })