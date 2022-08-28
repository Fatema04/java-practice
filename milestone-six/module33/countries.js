function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountry(data))
}


const displaycountry = country => {
    const countryContainer = document.getElementById('country-container');
    for (const countryData of country) {
        console.log(countryData)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${countryData.name.common}</h3>
        <h3>${countryData.continents}</h3>
        <h3>${countryData.latlng}</h3>

        `;
        countryContainer.appendChild(div)
    }
}
loadCountry()