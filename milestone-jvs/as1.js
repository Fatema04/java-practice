
function publicBusFare(people) {

    if (isNaN(people)) {
        return 'Please enter a valid input!';
    }

    let busCapacity = 50;
    let microCapacity = 11;

    if (people < microCapacity) {
        return people * 250;
    }

    else if (people > microCapacity && people < busCapacity) {
        if (people % 11 !== 0) {
            return (people % 11) * 250;
        }
        else { return 0; }
    }


    else if (people % busCapacity === 0) {
        return 0;
    }


    else if (people % busCapacity !== 0) {
        let reminder = people % 50;

        if (reminder % microCapacity !== 0) {
            return (reminder % 11) * 250;
        }
        else { return 0; }
    }
}


let people = publicBusFare(123);
console.log(people);

/*
function isJavaScript(file) {

    const extension = file.split('.').pop();

    if (extension === 'js') {

        return true;
    }

    else { return false; }

}

let ans = isJavaScript('app.png');
console.log(ans);

function oilPrice(amountOfDiesel, amountOfPetrol, amountOfOctane) {

    if (isNaN(amountOfDiesel && amountOfPetrol && amountOfOctane)) {

        return 'Please enter a valid input!';
    }



    let rateOfDiesel = 114;
    let rateOfPetrol = 130;
    let rateOfOctane = 135;

    let totalPriceOfDiesel = amountOfDiesel * rateOfDiesel;
    let totalPriceOfPetrol = amountOfPetrol * rateOfPetrol;
    let totalPriceOfOctane = amountOfOctane * rateOfOctane;

    let totalCost = totalPriceOfDiesel + totalPriceOfPetrol + totalPriceOfOctane;


    return totalCost;
}
let priceOfOil = oilPrice(0, 2, 3);
console.log(priceOfOil);

function isBestFriend(person1, person2) {


    if (person1.name == person2.friend && person2.name == person1.friend) {

        return true;
    }
    else { return false; }
}

let ans1 = isBestFriend(
    (person1 = { name: 2, friend: 'kabul' }),
    (person2 = { name: 'kabul', friend: 'abul' })
);
console.log(ans1);

let answ = isBestFriend(
    (person1 = { name: 'babul', friend: 'kabul' }),
    (person2 = { name: 'kabul', friend: 'babul' })
);
console.log(answ);


function radianToDegree(number) {

    if (isNaN(number)) {
        return 'Please enter a valid input!';
    }


    return parseFloat((number * 180 / Math.PI).toFixed(2));

}


let result = radianToDegree(199);
console.log(result);



*/
