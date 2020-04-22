
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
    $('#cocktailReturn').html("")
    (async () => {
      let cocktail = new Cocktail();
      const response = await cocktail.randomCocktail();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#cocktailName').html(`${response.drinks[0].strDrink}`);
        $('#cocktailReturn').append("<li>" + `${response.drinks[0].strMeasure1}` + " " + `${response.drinks[0].strIngredient1}` + "</li><li>this is another test</li>");
      } else {
        $('#cocktailReturn').text(`There was an error handling your request.`);
      }
    }

  });
});
