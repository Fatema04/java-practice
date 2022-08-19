

function setElementById(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function sub(elementId) {


    const presentPriceId = document.getElementById(elementId);
    const presentPriceString = presentPriceId.innerText;
    const presentPrice = parseInt(presentPriceString);
    return presentPrice;
}
function calculation() {
    const caseTotalPrice = sub('case-total');
    const phoneTotalPrice = sub('phone-total');


    const primaryAmount = caseTotalPrice + phoneTotalPrice;

    setElementById('sub-total', primaryAmount);

    //tax

    const taxAmount = parseFloat((primaryAmount * 0.1).toFixed);
    setElementById('tax-amount', taxAmount);

    //final payment

    const finalPayment = primaryAmount + taxAmount;
    setElementById('final', finalPayment);

}