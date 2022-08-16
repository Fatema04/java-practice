console.log('from withdraw bank html')

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const previouseWithdrawString = withdrawField.value;
    const previouseWithdraw = parseFloat(previouseWithdrawString);


    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawString = withdrawTotal.innerText;
    const newWithdraW = parseFloat(newWithdrawString);

    const currentWithdraw = previouseWithdraw + newWithdraW;
    withdrawTotal.innerText = currentWithdraw;




    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newBalance = previousBalance - currentWithdraw;
    balanceTotal.innerText = newBalance;

    withdrawField.value = '';
})