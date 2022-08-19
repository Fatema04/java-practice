function sub(elemntId) {
    const presentPriceId = document.getElementById(elemntId);
    const presentPriceString = presentPriceId.innerText;
    const presentPrice = parseInt(presentPriceString);
    return presentPrice;
}

function calculation(elementId) {
    const phoneTotalPrice = sub('phone-total');
    const caseTotalPrice = sub('case-total');
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = subTotalPrice;
    // tax
    const tax = parseFloat((subTotalPrice * 0.1).toFixed(2));
    const taxAmount = document.getElementById('tax-amount');
    taxAmount.innerText = tax;

    //final amount 
    const finalPayment = subTotalPrice + tax;
    const finalAmount = document.getElementById('final-amount');
    finalAmount.innerText = finalPayment;

}








// function setElementById(elementId, value) {
//     const subTotal = document.getElementById(elementId);
//     subTotal.innerText = value;
// }

// function sub(elementId) {


//     const presentPriceId = document.getElementById(elementId);
//     const presentPriceString = presentPriceId.innerText;
//     const presentPrice = parseInt(presentPriceString);
//     return presentPrice;
// }
// function calculation() {
//     const caseTotalPrice = sub('case-total');
//     const phoneTotalPrice = sub('phone-total');


//     const primaryAmount = caseTotalPrice + phoneTotalPrice;

//     setElementById('sub-total', primaryAmount);

//     //tax

//     const taxAmount = parseFloat((primaryAmount * 0.1).toFixed);
//     setElementById('tax-amount', taxAmount);

//     //final payment

//     const finalPayment = primaryAmount + taxAmount;
//     setElementById('final', finalPayment);

// }