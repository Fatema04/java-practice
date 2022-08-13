//redbutton
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//blue button
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

//purple button

const purpleButton = document.getElementById('purple-button');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//pink button

const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//green button

const greenButton = document.getElementById('green-button');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

//tomato button

document.getElementById('tomato-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})
