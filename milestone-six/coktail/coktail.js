console.log('clicked')
// fetch api
const loadCocktail = async (searchText, limit) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`
        const res = await fetch(url)
        const data = await res.json()
        displayCoktail(data.drinks, limit);
    }
    catch (error) {
        displayCoktail([]);
    }


}


loadCocktail('b')

//load all coktail

const displayCoktail = (cocktails, limit) => {
    const drinkContainer = document.getElementById('drink-container');
    drinkContainer.textContent = '';


    // slice
    const showAll = document.getElementById('show-all');
    if (limit && cocktails.length > 10) {

        cocktails = cocktails.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else { showAll.classList.add('d-none') }

    //no drink found 
    const noFound = document.getElementById('no-drink-found');
    if (cocktails.length === 0) {
        noFound.classList.remove('d-none')
    }
    else { noFound.classList.add('d-none') }

    for (const cocktail of cocktails) {
        console.log(cocktail);


        //create card

        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('col');
        drinkDiv.innerHTML = `
        <div class="card" style="height:800px">

          <img src="${cocktail.strDrinkThumb}" class="card-img-top w-100 h-75" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cocktail.strDrink}</h5>
            <p class="card-text">${cocktail.strInstructions}</p>
            <!-- Button trigger modal -->
<button onclick="openModal(${cocktail.idDrink})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  See more
</button>

          </div>
        </div>
    `;
        drinkContainer.appendChild(drinkDiv)
    }
    toggleSpiner(false)
}

//search proces

const searchProcess = (limit) => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    loadCocktail(searchText, limit);

}

// //search button

document.getElementById('search-btn').addEventListener('click', function () {
    toggleSpiner(true)
    console.log('search button');
    searchProcess(10)
})

//loader

const toggleSpiner = (isloading) => {
    const loader = document.getElementById('loader');

    if (isloading == true) {
        loader.classList.remove('d-none')
    }
    else { loader.classList.add('d-none') }
}
//show all butto
document.getElementById('btn-show-all').addEventListener('click', function () {
    searchProcess()

})

// enter key activation

document.getElementById('input-field').addEventListener('keypress', function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        searchProcess(10)
    }
});

//modal

const openModal = async (strDrink) => {
    console.log(strDrink)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${strDrink}`
    const res = await fetch(url)
    const data = await res.json()

    displayModal(data.drinks);
}


// displayCoktail
const displayModal = cocktail => {
    //console.log(cocktail[0].idDrink)

    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${cocktail[0].strDrink}`;


    const modalbody = document.getElementById('modal-body1');

    modalbody.innerHTML = `
    <img class="w-25"  src="${cocktail[0].strDrinkThumb}"
    <p>${cocktail[0].strDrink}</p>
    <p>${cocktail[0].idDrink}</p>
    `
}

