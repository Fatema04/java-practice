const loadQuatoe = () => {
    console.log('quatoe')
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => update(data))
}
const update = quote => {

    const h1 = document.getElementById('quote');
    h1.innerText = quote.quote

}