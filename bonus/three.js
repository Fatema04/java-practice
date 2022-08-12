const student = {
    name: 'ayan',
    address: 'dhaka',
    id: 121,
    isSingle: true,
    friend: ['zain', 'farhan', 'mahin'],
    mobile: {
        brand: "mi phone",
        price: 15000,
        color: 'black'
    },
    hobby: function () {
        console.log('i wanna be a web developer');
    }
}
console.log(student.mobile.price);
student.hobby();

//arguments

function add(num1, num2) {
    console.log(num1, num2)
    console.log(arguments);
    console.log(arguments[3]);
}
add(34, 87, 12, 54);