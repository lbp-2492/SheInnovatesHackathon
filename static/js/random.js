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
        document.getElementById("foodpic").src = data.strMealThumb
        document.getElementById("meal-name").innerHTML = data.strMeal
        document.getElementById("instructions").innerHTML = data.strInstructions

        let ingList = []
        let i = 1
        while(i < 20){
            let ingredient = `strIngredient${i}`
            ingList.push(data[ingredient])
            i += 1
        }

        let list = document.getElementById("ingredients")

        list.innerHTML = '';

        ingList.forEach((item) => {
            if(!(item === "")){
                let li = document.createElement("li");
                li.innerText = item;
                list.appendChild(li); 
            }
        })
    })
    return false;
}



