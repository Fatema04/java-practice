console.log('click');

const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data)

}
const displayPhones = (phones) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobileContainer.textContent = ''
    for (const phone of phones) {
        console.log(phone)
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card h-100">
      <img src="${phone.image}" class="card-img-top w-25" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.brand}</h5>
        <p class="card-text">${phone.phone_name}</p>
      </div>
    </div>
        `;
        mobileContainer.appendChild(phoneDiv)
    }
}
document.getElementById('search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadPhones(searchText);
    inputField.value = ''

})
loadPhones()