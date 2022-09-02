console.log('app.js')

const loadMeals = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

}

// const loadMeals = () => {
//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=s`
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals));

// }
const displayMeals = (meals) => {

  console.log(meals)
  const mealContainer = document.getElementById('meal-container');
  mealContainer.textContent = '';

  for (const meal of meals) {
    console.log(meal);

    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
        <div class="card">

          <img src="${meal.strMealThumb}" class="card-img-top w-50" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">Category : ${meal.strCategory}</p>
         </div>
         </div>
        `;
    mealContainer.appendChild(mealDiv)
  }
}
loadMeals()
