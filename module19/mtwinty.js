//upper & lower case

//const userName = 'ayesha';
//console.log(userName.toUpperCase());
//
//const myName = 'SUPTHI';
//console.log(myName.toLowerCase()); 

//useof includes type1

//const antheme = "Amar shonar bangla, ami tumay valobashi";
//const doesExist = antheme.includes("ami");
//console.log(doesExist);


//useof includes type2

//var a = "bangla";
//var b = antheme.toLowerCase();
//var c = a.toLowerCase();
//var doesExist = a.includes(c);
//console.log(doesExist);

//-----------------------------------------------------------
//indexof

const antheme = "Amar shonar bangla, ami tumay valobashi";
console.log(antheme.indexOf("ami"));
console.log(antheme.length);


//-----------------------------------------------------------


//startswitch
console.log(antheme.startsWith("Amar"));

//-------------------------------------------------------------

//endsWith

var fileName = 'bd.png';
var otherFile = 'bird.jpg';
console.log(fileName.endsWith(".png"));

//---------------------------------------------------------------

//split


var poem = "Am pata jura jura. marbo chabuk chorbo ghora";
//var part = poem.split(' ');
//var part = poem.split('.');
//var part = poem.split('');
//console.log(part);

//-------slice & substring-----------

//var poem = "Am pata jura jura. marbo chabuk chorbo ghora";
//var partial = poem.slice(3, 8);
//var partial = poem.substring(8, 13);
//console.log(partial);


//---------join-----------------------

//var poem = ["Am pata jura jura", "marbo chabuk chorbo ghora"];
//var edit = poem.join(" - ");
//console.log(edit);

//----------math-----------


var num1 = 25;
var num2 = 35;
var gap = Math.abs(num1 - num2);
if (gap < 15) {
    console.log('you can be friend');
}
else {
    console.log('you can not be friend');
}

//math 2

var number = 3.0987;
var fullNumber = Math.round(number);
console.log(fullNumber);

//------random-------------

//const random = Math.random() * 100;
//const random = Math.round(Math.random() * 100);
//console.log(random);

//random in for-loop

//for (let i = 0; i < 20; i++) {
//    const random = Math.round(Math.random() * 5);
//    console.log(random);
//}

//swap type 1

//let one = 10;
//let two = 5;
//let temp = one;
//one = two;
//two = temp;
//console.log(one, two);
//
////swap/destructuring
let one = 'ayesha';
let two = 'shima';
let three = 'fahmida';
[one, two, three] = [three, one, two]
console.log(one, two, three);





