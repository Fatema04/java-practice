//redbutton
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//blue button
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
    blueButton.style.margin = '10px';
}

//purple button

const purpleButton = document.getElementById('purple-button');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}



