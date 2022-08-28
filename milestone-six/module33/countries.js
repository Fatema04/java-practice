function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountry(data))
}


const displaycountry = country => {
    const countryContainer = document.getElementById('country-container');
    for (const countryData of country) {
        // console.log(countryData)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${countryData.name.common}</h3>
        <h3>${countryData.continents}</h3>
        <h3>${countryData.latlng}</h3>
        <button onclick="detailsButton('${countryData.cca2}')">Details</button>

        `;
        countryContainer.appendChild(div)
    }

}
const detailsButton = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    //console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetail(data[0]))
}

const countryDetail = countryData => {

    const detailContainer = document.getElementById('details-container');
    //for (const countryDataData of countryData) {
    console.log(countryData)
    detailContainer.innerHTML = `
    <h3>${countryData.name.common}</h3>
        <img src= "${countryData.flags.png}">
    
        `;

    // }
}

loadCountry()