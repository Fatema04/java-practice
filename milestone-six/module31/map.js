const numbers = [22, 14, 42, 26];
const half = numbers.map(n => n / 2);
console.log(half)

//ex2

const friends = ['fahim', 'ayan', 'rafi', 'amin', 'zashim'];
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)

const nameLength = friends.map(friend => friend.length);
console.log(nameLength)

//ex3

const dresses = [
    { name: 'saree', color: 'red', price: 25000 },
    { name: 'kamiz', color: 'green', price: 5000 },
    { name: 'borkha', color: 'grey', price: 15000 },
]

const getName = dresses.map(p => p.name);
console.log(getName)