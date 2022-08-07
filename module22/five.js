function calculation(breadQuantity, juiceQuantity, biscuitQuantity) {

    var perBread = 15;
    var perJuice = 7;
    var perBiscuit = 23;

    var totalBread = breadQuantity * perBread;
    var totalJuice = juiceQuantity * perJuice;
    var totalBiscuit = biscuitQuantity * perBiscuit;

    var totalAmount = totalBread + totalJuice + totalBiscuit;
    return totalAmount;
}

var totalAmount = calculation(5, 12, 9);
console.log(totalAmount);