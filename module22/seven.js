let shopping = [
    { name: 'ata', price: 5000 },
    { name: 'moyda', price: 3000 },
    { name: 'shuji', price: 3000 }

]

function totalAmount(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        sum = sum + item.price
    }
    return sum;
}

let expense = totalAmount(shopping);
console.log(expense)