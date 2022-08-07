let dresses = [
    { name: 'saree', color: 'red', price: 5000, rateing: 4.3 },
    { name: 'three-pc', color: 'green', price: 3000, rateing: 3.9 },
    { name: 'four-pc', color: 'blue', price: 4000, rateing: 2.3 },
    { name: 'lehenga', color: 'white', price: 15000, rateing: 4.9 }

]
function bestDress(outfit) {
    let bestChoice = dresses[0];
    for (let i = 0; i < dresses.length; i++) {
        const dress = dresses[i];
        if (dress.price > bestChoice.price) {
            bestChoice = dress
        }
    }
    return bestChoice;
}
let bestChoice = bestDress(dresses);
console.log(bestChoice);
