function updatePrice(newNumber) {
    const phoneTotalPrice = newNumber * 1219;
    const totalAmount = document.getElementById('phone-total');
    totalAmount.innerText = phoneTotalPrice;


}
document.getElementById('phone-button-plus').addEventListener('click', function () {
    const newNumber = updateNumber(true, 'phone-number-field');
    updatePrice(newNumber);
    calculation();

})
//minus

document.getElementById('phone-button-minus').addEventListener('click', function () {
    const newNumber = updateNumber(false, 'phone-number-field');
    updatePrice(newNumber);
    calculation();

})