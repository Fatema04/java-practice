//deposit button
console.log('from bank html')

document.getElementById('deposit-button').addEventListener('click', function () {


    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositString = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositString);



    ///

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);


    if (isNaN(newDeposit) === true || newDeposit === 0) {
        return alert('Please Insert Valid Input');
    }

    const currentDeposit = previousDeposit + newDeposit;
    depositTotal.innerText = currentDeposit;

    const newBalance = previousBalance + newDeposit;
    balanceTotal.innerText = newBalance;


    depositField.value = '';
})