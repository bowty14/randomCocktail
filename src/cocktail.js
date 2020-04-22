export class Cocktail {
  
  async randomCocktail() {
    try{
      let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/random.php`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      
      }else{
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    }catch(error){
      return false;
    }
  }
}
//let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);