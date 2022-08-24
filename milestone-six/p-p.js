//write an arrow func will take 3 parameter ,will multiply three pp and return the result

const multiple = (a, b, c) => {
    const res1 = a * b;
    return rest2 = res1 * c
}
const num = multiple(2, 3, 4);
console.log(rest2);

//type2

const multi = (e, f, g) => { return e * f * g; }
const age = multi(10, 20, 30);
console.log(age);

//write a following sentense in 3 line and print the result
//I am a web developer.I love to code.I love to eat biriyani

const first = "I am a web developer.";
const middle = "I love to code.";
const last = "I love to eat biriyani";
console.log(`${first} ${middle} ${last}`);

//type2

const aboutMe = `
I am a web developer.I love to code.I love to eat biriyani
`
console.log(aboutMe);

//write an arrow func that will take 3 parameter .one pp wil come from you and another one will be default . addthese two and print the result.


const sum = (numb1, numb2 = 20, numb3 = 20) => {
    return numb1 + numb2 + numb3;

}
const output = sum(12);
console.log(output);

//2

const friend = ['SHAKIB', 'MUSHFIQ', 'MINA'];
const myFriend = (friend) => {
    const evenLenthFriend = [];
    for (let i = 0; i < friend.length; i++) {
        if (friend[i].length % 2 === 0) {
            evenLenthFriend.push(friend[i]);
        }
    }
    return evenLenthFriend;
}

console.log(myFriend(friend));

//get squre
let roll = [5, 8, 9];

const squre = roll.map(function (element) {
    return element * 2;
})
console.log(squre);

function findSum(squre) {
    let sum = 0;
    for (let i = 0; i < squre.length; i++) {
        sum = sum + squre[i];
    }
    return sum;
}
const getSqure = findSum(squre);
console.log(getSqure);

console.log(Math.sqrt(getSqure));
console.log(Math.sqrt(44));

//4



const twoArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
}
const arrays = twoArr(arr1 = [1, 2, 3, 4], arr2 = [5, 6, 7, 8, 9])
console.log(arrays)
console.log(Math.max(...arrays))








