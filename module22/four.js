//

for (var i = 0; i < 25; i++) {

    if (i % 3 === 0) {
        console.log('foo')
    }
    else if (i % 5 === 0) {
        console.log('bar')
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar')
    }
    else {
        console.log(i)
    }
}