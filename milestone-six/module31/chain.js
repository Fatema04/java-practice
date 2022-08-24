const user = [
    { id: 1, name: 'mahi', job: 'student' }
]
console.log(user[0].job)

//ex2

const data = {
    member: 50,
    best: [
        { id: 3, name: 'shahin' },
        { id: 32, name: 'zain' }
    ]
}
console.log(data.best[1].name);

//ex3

const client = {
    id: 121,
    name: 'rajib',
    address: {
        village: 'nangalmora',
        thana: 'hathazari',
        district: 'chittagong'
    }

}
console.log(client.address.thana)