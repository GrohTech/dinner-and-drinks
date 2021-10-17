//button
//onclick does no appy to multiple style but can not be used in all browsers
// document.querySelector("#dinner-drinks").addEventListener("click", function (){
//     console.log("Does something");
// })
//document.querySelector("#dinner-drinks").addEventListener("click", function (){
  //  document.querySelector("#splashy").textContent="Does something";
//})

// Hide cocktail-meal-container until button click
var cocktailMealContainer = document.querySelector(".cocktail-meal-container")
cocktailMealContainer.style.display = "none";
//newly added ingredient list
//global variables
    
     //newly added Drink ingredient list
     //global variables
    
    //  function removeNode(){
    //     const myDiv = document.getElementById("#ingred-Dlist")
    //     const parent = myDiv.parentNode;
    //     parent.removeChild(myDiv);
    //     console.log("ingredients removed successfully")
    // }

// Random cocktail variables
function dinnerDrinks(){
    //display cocktail-meal-container after button click
    cocktailMealContainer.style.display = "flex";
    var randomCocktail = document.querySelector("#random-cocktail");
    var cocktailImgContainer = document.querySelector("#cocktailImgContainer");
    var cocktailImg = document.querySelector("#cocktail-img");
    var drinkCategory = document.querySelector("#drink-category");
    var glassType = document.querySelector ("#glass-type");
    //newly added ingredient list
    var ingredDlist = document.querySelector("#ingred-Dlist");
    var measureDlist = document.querySelector("#measure-Dlist");
    var drinkInstructions = document.querySelector("#drink-instructions");
    // Get recent cocktail container value from localStorage
    // var recentCocktail = JSON.parse(window.localStorage.getItem("cocktail") || []);

     
    // Random meal variables
    var randomMeal = document.querySelector("#random-meal");
    var mealImgContainer = document.querySelector("#meal-img-container");
    var mealImg = document.querySelector("#meal-img");
    var mealCategory = document.querySelector("#meal-category");
    var cuisine = document.querySelector("#cuisine");
    //newly added Drink ingredient list
    var measureMlist = document.querySelector("#measure-Mlist");
    var ingredMlist = document.querySelector("#ingred-Mlist");
    var mealInstructions = document.querySelector("#meal-instructions");


// Generate random cocktail
function cocktail() {
    // Set recent cocktail container value to localStorage
    // var wholeCocktail = document.querySelector(".cocktail").value;
    // localStorage.setItem("cocktail", JSON.stringify(wholeCocktail));

 fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

.then(function(response) {
    return response.json();
 })
 .then(function(data) {
     console.log(data);
        //for loop for cocktails
          for(var i = 1; i <= 20; i++){
            var drinkIngredient = data.drinks[0]['strIngredient' + i ];
            var drinkMeasurement = data.drinks[0]['strMeasure' + i ];
            if(!drinkMeasurement){
                drinkMeasurement ="";
            }
            if(!drinkIngredient)
            {
                break;
            }
            //risk if empty or only 2 ingredientss
            var tempPtag = document.createElement("p");
            ingredDlist.append(tempPtag);
            measureDlist.append(tempPtag);
            // measureDlist.append(tempPtag2);
            // var tempIngredient = data.meals[0].strIngredient1; //142 old way

            tempPtag.innerHTML = drinkMeasurement + " " + drinkIngredient;
            // document.getElementById("ingred-Dlist").innerHTML = drinklIngredientList;
             
        }
        

    var randomCocktailValue = data.drinks[0].strDrink;
    cocktailImg.setAttribute('src', data.drinks[0].strDrinkThumb);
    var drinkCategoryValue = data.drinks[0].strCategory;
    var glassTypeValue = data.drinks[0].strGlass;
    var drinkInstructionsValue = data.drinks[0].strInstructions;


    randomCocktail.innerHTML = randomCocktailValue;
    drinkCategory.innerHTML = drinkCategoryValue;
    glassType.innerHTML = glassTypeValue;
    drinkInstructions.innerHTML = drinkInstructionsValue;
    cocktailImgContainer.append(cocktailImg);
    ingredDlist = document.getElementById("#ingred-Dlist").innerHTML ="";
    measureDlist = document.getElementById("#measure-Dlist").innerHTML ="";   
})
.catch(function (err){
    console.log(err);
})
}
// }
cocktail();
// document.querySelector("#dinner-drinks").addEventListener("click", function (){
//      document.querySelector("#random-cocktail").textContent=cocktail;
//   })
// ingredDlist ="";
// measureDlist="";
    

// Generate random meal
function meal() {
   fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    .then(function(response) {
         return response.json();
     })
    .then(function(data) {
        console.log(data);
        //append to body
        //append to div
       //  var ingredientArray = [mealIngredient2,mealIngredient2,mealIngredient3,mealIngredient4,mealIngredient5,mealIngredient6,mealIngredient7];
        //loop through 20 times?
        //Tim walk through for loop
        for(var i = 1; i <= 20; i++){
            var mealIngredient = data.meals[0]['strIngredient' + i ];
            var mealMeasurement = data.meals[0]['strMeasure' + i ];
            if(!mealMeasurement)
            {
                mealMeasurement = "";
            }
            if(!mealIngredient)
            {
                break;
            }
            //risk if empty or only 2 ingredientss
            var tempPtag = document.createElement("p");
            ingredMlist.append(tempPtag);
            measureMlist.append(tempPtag);
            // var tempIngredient = data.meals[0].strIngredient1; //142 old way

            tempPtag.innerHTML = mealMeasurement + " " + mealIngredient;
            // document.getElementById("ingred-Mlist").innerHTML = mealIngredientList;
        }


        var randomMealValue = data.meals[0].strMeal;
        mealImg.setAttribute('src', data.meals[0].strMealThumb);
        var mealCategoryValue = data.meals[0].strCategory;
        var cuisineValue = data.meals[0].strArea;
        var mealInstructionsValue = data.meals[0].strInstructions;


        randomMeal.innerHTML = randomMealValue;
        mealCategory.innerHTML = mealCategoryValue;
        cuisine.innerHTML = cuisineValue;
        mealInstructions.innerHTML = mealInstructionsValue;
        mealImgContainer.append(mealImg);


    })
    .catch(function (err){
        console.log(err);
    })
}
meal();


    }
   