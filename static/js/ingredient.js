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
        document.getElementById("foodpic").src = data.strMealThumb
        document.getElementById("recipe-name").innerHTML = data.strMeal
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
