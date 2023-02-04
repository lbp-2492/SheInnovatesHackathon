// Global Variables 
var meals;
window.addEventListener('load', setup); 

function setup() {
    randomMeal = document.getElementById("meal");
    randomMeal.addEventListener("click", displayRandomMealInfo);
    ingMeal = document.getElementById("ingmeal");
    ingMeal.addEventListener("click", getMeal);
}

function displayRandomMealInfo() {
    let url = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(url).then(res => res.json()).then(mealData => {
            data = mealData.meals[0]
            document.getElementById("meal-name").innerHTML = data.strMeal
    })
}

function getMeal() {
    let userInput = document.getElementById('usermealinput').value 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`).then(res => res.json())
    .then(mealData => {
        $(document).ready(function () {
            $('#meals').DataTable({
                data: mealData.meals,
                bDestroy: true, 
                columns: [
                    { data: 'strMeal' }
                ],
            });
        });
        
    })
}
