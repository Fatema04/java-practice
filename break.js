// break for (for loop)
for (var i = 0; i <= 20; i++) {
    if (i > 15) {
        break;
    }
    console.log(i);

}

//break for  while loop
var items = 0;
while (items < 15) {
    console.log("delever it");
    items++;
    if (items > 5) {
        break;
    }
}

// break for string
var friends = ["oishi", "maya", "jaynab", "naima", "nikhil", "champa"];
for (var i = 0; i < friends.length; i++) {
    var friend = friends[i];
    if (friend == "naima") {
        break;
    }
    console.log(friend);
}
// break for int

var numbers = [22, 34, 97, 65, 12, 09, 56];
for (var i = 0; i < 7; i++) {
    var number = numbers[i]
    if (number == 09) {
        break;
    }
    console.log(number);

}