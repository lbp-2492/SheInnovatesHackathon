window.addEventListener('load', setup); 

function setup() {
    ingredientMeal = document.getElementById("searchmeal");
    ingredientMeal.addEventListener("click", getMeals);
}

function getMeals() {
    let userInput = document.getElementById('userinput').value 
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`)
    .then(res => res.json())
    .then(mealData => {
        //Datatables
        $(document).ready(function () {
            $('#meals').DataTable({
                data: mealData.meals,
                bDestroy: true, 
                columns: [
                    { 
                      data: 'strMeal',
                      render: function(data, type, row){
                        if(type === 'display'){
                            data = '<a href="" onClick="return displayRecipe(' + row.idMeal + ')">' + data + '</a>'; 
                        }
                        return data;
                      }
                    }
                ],
            });
        });   
    })
}

function displayRecipe(idMeal){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then(mealData => {
        data = mealData.meals[0]
        document.getElementById("recipe-name").innerHTML = data.strMeal
    })
    return false;
}
