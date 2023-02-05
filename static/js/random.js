// Global Variables 
var meals;
var t;
var recipename; 

window.addEventListener('load', setup); 

function setup() {
    randomMeal = document.getElementById("randomMeal");
    randomMeal.addEventListener("click", displayRandomMealInfo);
}

function displayRandomMealInfo() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(mealData => {
        data = mealData.meals[0]
        document.getElementById("meal-name").innerHTML = data.strMeal
    })
}



