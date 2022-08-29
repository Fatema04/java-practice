console.log('food')

const loadMeals = search => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));

}


const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = ` 
        
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p>${meal.strCategory}</p>
        </div>
    </div>

        `;
        mealContainer.appendChild(mealDiv);


    });
}
function searchFood() {
    const searchFood = document.getElementById('search-field');
    const searchText = searchFood.value;
    loadMeals(searchText);
    searchFood.value = '';
}
