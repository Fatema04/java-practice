function updateCasePrice(newNumber) {

    const casePrice = newNumber * 59;
    const casePriceField = document.getElementById('case-total');
    casePriceField.innerText = casePrice;

}

document.getElementById('case-button-plus').addEventListener('click', function () {
    const newNumber = updateNumber(true, 'case-number-field');
    updateCasePrice(newNumber);
    calculation('sub-total');

})
//minus

document.getElementById('case-button-minus').addEventListener('click', function () {
    const newNumber = updateNumber(false, 'case-number-field');
    updateCasePrice(newNumber);
    calculation('sub-total');

})








// function updatePrice(newNumber) {
//     const phoneTotalPrice = newNumber * 1219;
//     const totalAmount = document.getElementById('phone-total');
//     totalAmount.innerText = phoneTotalPrice;


// }
// document.getElementById('phone-button-plus').addEventListener('click', function () {
//     const newNumber = updateNumber(true, 'phone-number-field');
//     updatePrice(newNumber);
//     calculation();

// })
// //minus

// document.getElementById('phone-button-minus').addEventListener('click', function () {
//     const newNumber = updateNumber(false, 'phone-number-field');
//     updatePrice(newNumber);
//     calculation();

// })