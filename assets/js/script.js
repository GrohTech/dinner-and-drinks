
var randomCocktail = document.createElement("div");
var randomCocktail = document.createElement("h2");
var alcoholic = document.createElement("p");
var category = document.createElement ("p");
var cup = document.createElement ("p");
var ingredient1 = document.createElement("p");
var ingredient2 = document.createElement("p");
var ingredient3 = document.createElement("p");
var ingredient4 = document.createElement("p");
var ingredient5 = document.createElement("p");
var ingredient6 = document.createElement("p");
var ingredient7 = document.createElement("p");



function Cocktail() {
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    
    document.body.append(randomCocktail);
    document.body.append(alcoholic);
    document.body.append(category);
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
    category.innerHTML = categoryValue;
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