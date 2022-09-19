fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountris(data))

const displayCountris = (countries) => {

    const countriesHTML = countries.map(country => getCountry(country))
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ')

}

const getCountry = ({ name, flags }) => {
    // const { name, flags } = country;
    return `
        <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        </div>
        `
}