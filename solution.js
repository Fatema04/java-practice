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
