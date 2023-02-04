// Global Variables 
var meals;
var t;
var recipename; 

window.addEventListener('load', setup); 

function setup() {
    randomMeal = document.getElementById("meal");
    randomMeal.addEventListener("click", displayRandomMealInfo);
    ingMeal = document.getElementById("ingmeal");
    ingMeal.addEventListener("click", getMeals);
}

function displayRandomMealInfo() {
    let url = "https://www.themealdb.com/api/json/v1/1/random.php"
    fetch(url).then(res => res.json()).then(mealData => {
            data = mealData.meals[0]
            document.getElementById("meal-name").innerHTML = data.strMeal
    })
}

function getMeals() {
    let userInput = document.getElementById('usermealinput').value 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`).then(res => res.json())
    .then(mealData => {
        $(document).ready(function () {
            $('#meals').DataTable({
                data: mealData.meals,
                bDestroy: true, 
                columns: [
                    { 
                      data: 'strMeal',
                      render: function(data, type){
                        if(type === 'display'){
                            data = '<a onclick="clickfunc(this)" href="/yuh/">' + data + '</a>'; 
                        }
                        return data;
                      }
                    }
                ],
            });
        });   
    })
}

function clickfunc(obj) {
    t = $(obj).text();
    alert(t);
}




