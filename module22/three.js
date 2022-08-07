function removeDupli(names) {

    let uniqe = [];
    for (var i = 0; i < names.length; i++) {
        const index = i;
        const element = names[index];
        if (uniqe.includes(element) === false) {
            uniqe.push(element);
        }
    }
    return uniqe;
}
let names = ['joy', 'ema', 'rima', 'joy', 'ema', 'rima'];
const uniqueName = removeDupli(names);
console.log(uniqueName);