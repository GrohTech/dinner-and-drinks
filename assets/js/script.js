
// Random cocktail variables
var randomCocktail = document.createElement("h2");
var alcoholic = document.createElement("p");
var drinkCategory = document.createElement ("p");
var cup = document.createElement ("p");
var ingredient1 = document.createElement("p");
var ingredient2 = document.createElement("p");
var ingredient3 = document.createElement("p");
var ingredient4 = document.createElement("p");
var ingredient5 = document.createElement("p");
var ingredient6 = document.createElement("p");
var ingredient7 = document.createElement("p");

// Random meal variables
var randomMeal = document.createElement("h2");
var mealCategory = document.createElement("p");
var mealIngredient1 = document.createElement("p");
var mealIngredient2 = document.createElement("p");
var mealIngredient3 = document.createElement("p");
var mealIngredient4 = document.createElement("p");
var mealIngredient5 = document.createElement("p");
var mealIngredient6 = document.createElement("p");
var mealIngredient7 = document.createElement("p");



// Generate random cocktail
function Cocktail() {
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    
    document.body.append(randomCocktail);
    document.body.append(alcoholic);
    document.body.append(drinkCategory);
    document.body.append(cup);
    document.body.append(ingredient1);
    document.body.append(ingredient2);
    document.body.append(ingredient3);
    document.body.append(ingredient4);
    document.body.append(ingredient5);
    document.body.append(ingredient6);
    document.body.append(ingredient7);


    var randomCocktailValue = data.drinks[0].strDrink;
    var alcoholicValue = data.drinks[0].strAlcoholic;
    var categoryValue = data.drinks[0].strCategory;
    var cupValue = data.drinks[0].strGlass;
    var ingredient1Value = data.drinks[0].strIngredient1;
    var ingredient2Value = data.drinks[0].strIngredient2;
    var ingredient3Value = data.drinks[0].strIngredient3;
    var ingredient4Value = data.drinks[0].strIngredient4;
    var ingredient5Value = data.drinks[0].strIngredient5;
    var ingredient6Value = data.drinks[0].strIngredient6;
    var ingredient7Value = data.drinks[0].strIngredient7;

    randomCocktail.innerHTML = randomCocktailValue;
    alcoholic.innerHTML = alcoholicValue;
    drinkCategory.innerHTML = categoryValue;
    cup.innerHTML = cupValue;
    ingredient1.innerHTML = ingredient1Value;
    ingredient2.innerHTML = ingredient2Value;
    ingredient3.innerHTML = ingredient3Value;
    ingredient4.innerHTML = ingredient4Value;
    ingredient5.innerHTML = ingredient5Value;
    ingredient6.innerHTML = ingredient6Value;
    ingredient7.innerHTML = ingredient7Value;


})
.catch(function (err){
    console.log(err);
})

}
Cocktail();

// Generate random meal
function Meal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
        document.body.append(randomMeal);
        document.body.append(mealCategory);
        document.body.append(mealIngredient1);
        document.body.append(mealIngredient2);
        document.body.append(mealIngredient3);
        document.body.append(mealIngredient4);
        document.body.append(mealIngredient5);
        document.body.append(mealIngredient6);
        document.body.append(mealIngredient7);
    
    
        var randomMealValue = data.meals[0].strMeal;
        var mealCategoryValue = data.meals[0].strCategory;
        var mealIngredient1Value = data.meals[0].strIngredient1;
        var mealIngredient2Value = data.meals[0].strIngredient2;
        var mealIngredient3Value = data.meals[0].strIngredient3;
        var mealIngredient4Value = data.meals[0].strIngredient4;
        var mealIngredient5Value = data.meals[0].strIngredient5;
        var mealIngredient6Value = data.meals[0].strIngredient6;
        var mealIngredient7Value = data.meals[0].strIngredient7;

    
        randomMeal.innerHTML = randomMealValue;
        mealCategory.innerHTML = mealCategoryValue;
        mealIngredient1.innerHTML = mealIngredient1Value;
        mealIngredient2.innerHTML = mealIngredient2Value;
        mealIngredient3.innerHTML = mealIngredient3Value;
        mealIngredient4.innerHTML = mealIngredient4Value;
        mealIngredient5.innerHTML = mealIngredient5Value;
        mealIngredient6.innerHTML = mealIngredient6Value;
        mealIngredient7.innerHTML = mealIngredient7Value;
    
    
    })
    .catch(function (err){
        console.log(err);
    })
    
    }
    Meal();