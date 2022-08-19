//phone case
console.log('hndle');

function updateNumber(isIncrease, id) {
    const NumberField = document.getElementById(id);
    const NumberString = NumberField.value;
    const previousNumber = parseInt(NumberString);

    let newNumber;
    if (isIncrease === true) {
        newNumber = previousNumber + 1;
    }
    else { newNumber = previousNumber - 1; }

    NumberField.value = newNumber;
    return newNumber;
}

function updateCasePrice(newNumber) {
    const caseTotalPrice = newNumber * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseTotalPrice;


}
//plus
document.getElementById('case-button-plus').addEventListener('click', function () {
    const newNumber = updateNumber(true, 'case-number-field');
    updateCasePrice(newNumber);

    calculation();

})
//minus

document.getElementById('case-button-minus').addEventListener('click', function () {
    const newNumber = updateNumber(false, 'case-number-field');
    updateCasePrice(newNumber);

    calculation();

})