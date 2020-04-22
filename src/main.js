
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import $ from "jquery";
import { Cocktail } from './../src/cocktail.js';

// $(document).ready(function () {
  // $("#rondomCocktail").click(function () {
    
  // });
// });
let cocktail = new Cocktail;
cocktail.randomCocktail();
