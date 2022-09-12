console.log('c')

function inputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}


const addProduct = () => {

    const productName = inputValue('product-name')
    const productQuantity = inputValue('product-quantity')
    console.log(productName)

    const productContainer = document.getElementById('all-products');
    if (isNaN(productQuantity) || !isNaN(productName)) {
        alert('wrong input')
        return;
    }

    stl(productName, productQuantity)

    const li = document.createElement('li');

    li.innerHTML = ` 
    Product Name : ${productName} Quantity : ${productQuantity}
    `;

    productContainer.appendChild(li)




}
const stl = (productName, productQuantity) => {

    const obj = {
        // 'product Name': productName,
        // 'product Quantity': productQuantity
        [productName]: productQuantity
    }

    localStorage.setItem('all-product', JSON.stringify(obj))
    console.log(JSON.stringify(obj))

}