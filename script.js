const astrology ={
    "apiKey": "3f9b1b89acca43789ad141809230808",
    fetchAstrology: function(city, date){
        fetch("https://api.weatherapi.com/v1/astronomy.json?key=3f9b1b89acca43789ad141809230808&q="
        + city
        + "&dt="
        + date
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayAstrology(data));
  },
        displayAstrology: function(data){
           console.log(data.location);
           console.log(data.astronomy.astro);
           const {name} = data.location;
           const {sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination} = data.astronomy.astro;
           document.querySelector(".city").innerText = "Astrology in " + name;
           document.querySelector(".sunrise").innerText = "Sunrise:" + sunrise;
           document.querySelector(".sunset").innerText = "Sunset:" + sunset;
           document.querySelector(".moonrise").innerText = "Moonrise:" + moonrise;
           document.querySelector(".moonset").innerText = "Moonset:" + moonset;
           document.querySelector(".moon-phase").innerText = "MoonPhase:" + moon_phase;
           document.querySelector(".moon-illumination").innerText = "MoonLight:" + moon_illumination;
           document.querySelector(".astronomy").classList.remove("loading");
       },
 /*This querySelector will get the content of the search bar when you type a city in*/
    search: function(){
      console.log(document.querySelector(".search-bar").value);
      this.fetchAstrology(document.querySelector(".search-bar").value);
   },
};
/*This eventListener will enable you to click the search button and get the content of the searchbar*/
document.querySelector(".search button").addEventListener("click", function(){
astrology.search();
});
/*This eventListener is for the input box when you click enter key*/
document.querySelector(".search-bar") .addEventListener("keyup", function(event){
   if(event.key == "Enter"){
    astrology.search();
   }
})
astrology.fetchAstrology("Denver");