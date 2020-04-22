
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Cocktail } from './../src/cocktail.js';

// $(document).ready(function () {
// $("#rondomCocktail").click(function () {
//   let cocktail = new Cocktail;
//   cocktail.randomCocktail();
//   // });
//   let getElements = function (jsonifiedResponse) {
//     $('#cocktailReturn').html(`${jsonifiedResponse.drinks[0].strDrink}`);
//   getElements();
//   };
// });

$(document).ready(function() {

  $('#randomCocktail').click(function() {
      
    (async () => {
      let cocktail = new Cocktail();
      const response = await cocktail.randomCocktail();
      getElements(response);
    })();

    function getElements(response) {
      $('#cocktailReturn').html("");
      


      if (response) {
        $('#cocktailName').html(`${response.drinks[0].strDrink}`);
        if(`${response.drinks[0].strIngredient1}` && `${response.drinks[0].strMeasure1}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure1}` + " " + `${response.drinks[0].strIngredient1}`);
        }
        if(`${response.drinks[0].strIngredient2}` && `${response.drinks[0].strMeasure2}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure2}` + " " + `${response.drinks[0].strIngredient2}`);
        }
        if(`${response.drinks[0].strIngredient3}` && `${response.drinks[0].strMeasure3}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure3}` + " " + `${response.drinks[0].strIngredient3}`);
        }
        if(`${response.drinks[0].strIngredient4}` && `${response.drinks[0].strMeasure4}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure4}` + " " + `${response.drinks[0].strIngredient4}`);
        }
        if(`${response.drinks[0].strIngredient5}` && `${response.drinks[0].strMeasure5}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure5}` + " " + `${response.drinks[0].strIngredient5}`);
        }
        if(`${response.drinks[0].strIngredient7}` && `${response.drinks[0].strMeasure7}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure7}` + " " + `${response.drinks[0].strIngredient7}`);
        }
        if(`${response.drinks[0].strIngredient8}` && `${response.drinks[0].strMeasure8}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure8}` + " " + `${response.drinks[0].strIngredient8}`);
        }
        if(`${response.drinks[0].strIngredient9}` && `${response.drinks[0].strMeasure9}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure6}` + " " + `${response.drinks[0].strIngredient9}`);
        }
        if(`${response.drinks[0].strIngredient10}` && `${response.drinks[0].strMeasure10}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure10}` + " " + `${response.drinks[0].strIngredient10}`);
        }
        if(`${response.drinks[0].strIngredient11}` && `${response.drinks[0].strMeasure11}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure6}` + " " + `${response.drinks[0].strIngredient11}`);
        }
        if(`${response.drinks[0].strIngredient12}` && `${response.drinks[0].strMeasure12}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure12}` + " " + `${response.drinks[0].strIngredient12}`);
        }
        if(`${response.drinks[0].strIngredient13}` && `${response.drinks[0].strMeasure13}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure6}` + " " + `${response.drinks[0].strIngredient13}`);
        }
        if(`${response.drinks[0].strIngredient14}` && `${response.drinks[0].strMeasure14}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure14}` + " " + `${response.drinks[0].strIngredient14}`);
        }
        if(`${response.drinks[0].strIngredient15}` && `${response.drinks[0].strMeasure15}` !== "null"){
          $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure15}` + " " + `${response.drinks[0].strIngredient15}`);
        }
        if(`${response.drinks[0].strInstructions}` !== "null"){
          $('#cocktailReturn').append(`${response.drinks[0].strInstructions}`);
        }
      } else {
        $('#cocktailReturn').text(`There was an error handling your request.`);
      }
    }

  });
});
