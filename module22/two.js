//-----------------------------slice splice-------------------------

//slice

var friends = [23, 76, 24, 12, 41, 23];
var part = friends.slice(3, 5)
console.log(part);         //index num

//splice()

var friend = [23, 76, 24, 12, 41, 23];
const part2 = friend.splice(2, 4, 43, 76, 09);
console.log(part2);
console.log(friend);

// start from index 2,will take 4 element, INSERT 43,76,09