// //deposit button
// console.log('from bank html')

// document.getElementById('deposit-button').addEventListener('click', function () {


//     const depositField = document.getElementById('deposit-field');
//     const newDepositString = depositField.value;
//     const newDeposit = parseFloat(newDepositString);


//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositString = depositTotal.innerText;
//     const previousDeposit = parseFloat(previousDepositString);



//     ///

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceString = balanceTotal.innerText;
//     const previousBalance = parseFloat(previousBalanceString);


//     if (isNaN(newDeposit) === true || newDeposit === 0) {
//         return alert('Please Insert Valid Input');
//     }

//     const currentDeposit = previousDeposit + newDeposit;
//     depositTotal.innerText = currentDeposit;

//     const newBalance = previousBalance + newDeposit;
//     balanceTotal.innerText = newBalance;


//     depositField.value = '';
// })

//set input field
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}

//set element
function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
}

//function to get innertext

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




document.getElementById('deposit-button').addEventListener('click', function () {


    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal = newDepositAmount + previousDepositTotal;


    setTextElementValueById('deposit-total', newDepositTotal);




    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);


})



