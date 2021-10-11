
// Random cocktail variables
var randomCocktail = document.querySelector("#random-cocktail");
var cocktailImgContainer = document.querySelector("#cocktailImgContainer");
var cocktailImg = document.querySelector("#cocktail-img");
var drinkCategory = document.querySelector("#drink-category");
var glassType = document.querySelector ("#glass-type");
var drinkInstructions = document.querySelector("#drink-instructions");
// var ingredient1 = document.createElement("p");
// var ingredient2 = document.createElement("p");
// var ingredient3 = document.createElement("p");
// var ingredient4 = document.createElement("p");
// var ingredient5 = document.createElement("p");
// var ingredient6 = document.createElement("p");
// var ingredient7 = document.createElement("p");

// Random meal variables
var randomMeal = document.querySelector("#random-meal");
var mealImgContainer = document.querySelector("#meal-img-container");
var mealImg = document.querySelector("#meal-img");
var mealCategory = document.querySelector("#meal-category");
var cuisine = document.querySelector("#cuisine");
var mealInstructions = document.querySelector("#meal-instructions");
// var mealIngredient1 = document.createElement("p");
// var mealIngredient2 = document.createElement("p");
// var mealIngredient3 = document.createElement("p");
// var mealIngredient4 = document.createElement("p");
// var mealIngredient5 = document.createElement("p");
// var mealIngredient6 = document.createElement("p");
// var mealIngredient7 = document.createElement("p");



// Generate random cocktail
function cocktail() {
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);


    // document.body.append(ingredient1);
    // document.body.append(ingredient2);
    // document.body.append(ingredient3);
    // document.body.append(ingredient4);
    // document.body.append(ingredient5);
    // document.body.append(ingredient6);
    // document.body.append(ingredient7);


    var randomCocktailValue = data.drinks[0].strDrink;
    cocktailImg.setAttribute('src', data.drinks[0].strDrinkThumb);
    var drinkCategoryValue = data.drinks[0].strCategory;
    var glassTypeValue = data.drinks[0].strGlass;
    var drinkInstructionsValue = data.drinks[0].strInstructions;
    // var ingredient1Value = data.drinks[0].strIngredient1;
    // var ingredient2Value = data.drinks[0].strIngredient2;
    // var ingredient3Value = data.drinks[0].strIngredient3;
    // var ingredient4Value = data.drinks[0].strIngredient4;
    // var ingredient5Value = data.drinks[0].strIngredient5;
    // var ingredient6Value = data.drinks[0].strIngredient6;
    // var ingredient7Value = data.drinks[0].strIngredient7;

    randomCocktail.innerHTML = randomCocktailValue;
    drinkCategory.innerHTML = drinkCategoryValue;
    glassType.innerHTML = glassTypeValue;
    drinkInstructions.innerHTML = drinkInstructionsValue;
    cocktailImgContainer.append(cocktailImg);
    // ingredient1.innerHTML = ingredient1Value;
    // ingredient2.innerHTML = ingredient2Value;
    // ingredient3.innerHTML = ingredient3Value;
    // ingredient4.innerHTML = ingredient4Value;
    // ingredient5.innerHTML = ingredient5Value;
    // ingredient6.innerHTML = ingredient6Value;
    // ingredient7.innerHTML = ingredient7Value;


})
.catch(function (err){
    console.log(err);
})

}
cocktail();

// Generate random meal
function meal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        // document.body.append(mealIngredient1);
        // document.body.append(mealIngredient2);
        // document.body.append(mealIngredient3);
        // document.body.append(mealIngredient4);
        // document.body.append(mealIngredient5);
        // document.body.append(mealIngredient6);
        // document.body.append(mealIngredient7);


        var randomMealValue = data.meals[0].strMeal;
        mealImg.setAttribute('src', data.meals[0].strMealThumb);
        var mealCategoryValue = data.meals[0].strCategory;
        var cuisineValue = data.meals[0].strArea;
        var mealInstructionsValue = data.meals[0].strInstructions;
        // var mealIngredient1Value = data.meals[0].strIngredient1;
        // var mealIngredient2Value = data.meals[0].strIngredient2;
        // var mealIngredient3Value = data.meals[0].strIngredient3;
        // var mealIngredient4Value = data.meals[0].strIngredient4;
        // var mealIngredient5Value = data.meals[0].strIngredient5;
        // var mealIngredient6Value = data.meals[0].strIngredient6;
        // var mealIngredient7Value = data.meals[0].strIngredient7;


        randomMeal.innerHTML = randomMealValue;
        mealCategory.innerHTML = mealCategoryValue;
        cuisine.innerHTML = cuisineValue;
        mealInstructions.innerHTML = mealInstructionsValue;
        mealImgContainer.append(mealImg);
        // mealIngredient1.innerHTML = mealIngredient1Value;
        // mealIngredient2.innerHTML = mealIngredient2Value;
        // mealIngredient3.innerHTML = mealIngredient3Value;
        // mealIngredient4.innerHTML = mealIngredient4Value;
        // mealIngredient5.innerHTML = mealIngredient5Value;
        // mealIngredient6.innerHTML = mealIngredient6Value;
        // mealIngredient7.innerHTML = mealIngredient7Value;
    })
    .catch(function (err){
        console.log(err);
    })

    }
    meal();
// //button
// function createButton(){
//     var button = document.createElement("button");
//     element.appendChild(document.createTextNode("Click Me!"));
//     var page = document.getElementById("button");
//     page.appendChild(element);
//     console.log(element);
//
// }
// createButton();
