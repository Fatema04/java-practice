var ages = [23, 45, 86, 03, 27, 57, 38, 98];
for (var i = 0; i < ages.length; i++) {
    var age = ages[i];
    if (age > 50) {
        continue;
    }

    console.log(age)
}