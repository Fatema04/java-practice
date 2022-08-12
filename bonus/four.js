//for loop                                                     
const arr = [12, 15, 17, 19, 20];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
//new for of  loop
for (const element of arr) {
    console.log(element);
}
//

const reasultSheet = [
    { name: 'Ayesha', presentRoll: 1, previousRoll: 2, totalMark: 982 },
    { name: 'Ayna', presentRoll: 2, previousRoll: 1, totalMark: 980 },
    { name: 'Ayman', presentRoll: 3, previousRoll: 3, totalMark: 972 },
    { name: 'Ayash', presentRoll: 4, previousRoll: 6, totalMark: 950 },
    { name: 'Ayna', presentRoll: 5, previousRoll: 5, totalMark: 922 },
    { name: 'Arshi', dpresentRoll: 6, previousRoll: 4, totalMark: 902 },
]
//for (const result of reasultSheet) {
// console.log(result);
//}

function matchedStudents(reasultSheet, search) {
    let matched = [];
    for (const result of reasultSheet) {
        if (result.name.includes(search)) {
            matched.push(result);
        }
    }
    return matched;
}
let answer = matchedStudents(reasultSheet, 'Ayna');
console.log(answer);
