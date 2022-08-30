console.log('click');

const loadPhones = async (searchText, phoneLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, phoneLimit);

}
const displayPhones = (phones, phoneLimit) => {
    const mobileContainer = document.getElementById('mobile-container')
    mobileContainer.textContent = '';

    // show 10 phone
    const showAll = document.getElementById('show-all');
    if (phoneLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else { showAll.classList.add('d-none') }


    // no phone found
    const noFound = document.getElementById('no-found-messege');
    if (phones.length === 0) {
        noFound.classList.remove('d-none')
    }
    else { noFound.classList.add('d-none') }


    //all phones

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
    toggleSpiner(false);
}
//search process

const processSearch = (phoneLimit) => {
    toggleSpiner(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    loadPhones(searchText, phoneLimit);

}

//search button
document.getElementById('search').addEventListener('click', function () {
    processSearch(10)

})

//spiner
const toggleSpiner = (isLoding) => {
    const loaderSection = document.getElementById('loader');
    if (isLoding === true) {
        loaderSection.classList.remove('d-none')
    }
    else { loaderSection.classList.add('d-none') }

}

//show all button
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

//loadPhones()