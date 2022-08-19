console.log('from pin.js');
console.log('from pin.js');
function generatePin() {
    const random = Math.round(Math.random() * 100000);
    return random;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else { return getPin(); }
}
//

document.getElementById('generate-pin').addEventListener('click', function () {

    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    console.log(number);
    const calcField = document.getElementById('calc-field');
    if (isNaN(number)) {

        calcField.value = '';



    }
    else {
        const previousNumber = calcField.value;
        const newNumber = previousNumber + number;
        calcField.value = newNumber;
    }
})