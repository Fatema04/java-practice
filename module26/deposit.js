//deposit button
console.log('from bank html')

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositString = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositString);


    const currentDeposit = previousDeposit + newDeposit;
    depositTotal.innerText = currentDeposit;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newBalance = previousBalance + currentDeposit;
    balanceTotal.innerText = newBalance;

    depositField.value = '';
})