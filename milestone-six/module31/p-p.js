/**
 * 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
 */

const arr = [1, 3, 5, 7, 9];
const even = arr.map(n => n + 1);
console.log(even);

/**
 * 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
 */

const numbers = [33, 59, 79, 78, 90, 101, 30];
const divide = numbers.filter(n => n % 10 === 0)
console.log(divide)



/**
 * 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
 */

const number = [33, 59, 79, 78, 90, 101, 30];
const divide1 = number.find(n => n % 10 === 0)
console.log(divide1)

/**
 * 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
 */

const array = [1, 9, 17, 22];
const sumOfArray = array.reduce((previous, current) => previous + current, 0);
console.log(sumOfArray)




/*let data = {
    location : [
        {
    location : '34.5,37.8',
    longitude: '98.77',
    city: 'hydrabad',
    country : 'india'
        }
    ]

}
console the city*/

let data = {
    location: [
        {


            location: '34.5,37.8',
            longitude: '98.77',
            city: 'hydrabad',
            country: 'india'
        }
    ]


}

console.log(data.location[0].city);
/**
 * console email , address, city , lat , company name
 */

const users = {
    id: 1,
    usersname: "Kritika",
    email: "kritika54@gmail.com",
    address: {
        street: "13b/d ",
        suite: "Apt,556",
        city: "Mumbai",
        zipcode: 1232,
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        }
    },
    phone: 096543887666,
    website: "something.org",
    company: {
        name: "Indian Company",
        bs: "...",
    }
}

console.log(users.email);
console.log(users.address);
console.log(users.phone);
console.log(users.address.city);
console.log(users.address.geo.lat);
console.log(users.company.name);


/**
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.*/
const people = [
    { name: 'mina', age: 20 },
    { name: 'tina', age: 15 },
    { name: 'rina', age: 22 }
]

const total = people.reduce((previous, current) => previous + current.age, 0)
console.log(total)


//const sumOfAge = (people[0].age + people[2].age + people[1].age)
//console.log(sumOfAge)

