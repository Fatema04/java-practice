//function avarage(intarray) {
//    console.log(intarray);
//    var sum = intarray[0] + intarray[1] + intarray[2];
//    var get_avarage = sum / 3;
//    console.log(get_avarage);
//}
//var intarray = [100, 40, 60];
//avarage(intarray);


/*1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output.*/
//function foo() {
//    console.log("foo");
//    bar();
//}
//
//function bar() {
//    console.log("bar");
//}
//foo();

//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function table(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number, ' X ', i, ' = ', number * i);
    }

}
table(13);
table(7);

/**
 * 5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.
 */

var color = 'red';

if (color === 'red') {
    console.log("Don't cross the road");
}
else if (color === 'yellow') {
    console.log("Please wait for a while");
}
else {
    console.log("Now you can cross the road");
}