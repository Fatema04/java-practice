var fruits = ["Apple", "Orange", "Banana"];

// find the index number of Orange

var orangeIndex = fruits.indexOf("Orange");
console.log(orangeIndex);

// replace orange with mango

fruits[1] = "Mango";
console.log(fruits);

// remove banana
fruits.pop();
console.log(fruits);

// add watermelon
fruits.push("Watermelon");
console.log(fruits);