console.log('from withdraw bank html')

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const previouseWithdrawString = withdrawField.value;
    const previouseWithdraw = parseFloat(previouseWithdrawString);


    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawString = withdrawTotal.innerText;
    const newWithdraW = parseFloat(newWithdrawString);





    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if (isNaN(previouseWithdraw) === true || previouseWithdraw === 0) {
        return alert('Please Insert Valid Input');
    }

    const currentWithdraw = previouseWithdraw + newWithdraW;
    withdrawTotal.innerText = currentWithdraw;

    const newBalance = previousBalance - currentWithdraw;
    balanceTotal.innerText = newBalance;



    withdrawField.value = '';
})

document.getElementById(inputId).addEventListener('click', function () {
    const inputField = document.getElementById(inputId);
    const outputString = inputField.value;
    const output = parseFloat(outputString);


    const amountField = document.getElementById(amountId);
    const amountString = amountField.innerText;
    const amount = parseFloat(amountString);

    const totalBalance = document.getElementById(balanceId);
    const balanceString = totalBalance.innerText;
    const balance = parseFloat(balanceString);


})

return if ()