const astrology ={
    "apiKey": "3f9b1b89acca43789ad141809230808",
    fetchAstrology: function(city, date){
        fetch("https://api.weatherapi.com/v1/astronomy.json?key=3f9b1b89acca43789ad141809230808&q="
        + city
        + "&dt="
        + date
        + this.apiKey)
        .then((response) => {
            if (response.ok) {
                console.log("response" +response);
              return response.json();
            } else {
              throw new Error("NETWORK RESPONSE ERROR");
            }
          })
          .then((data) => {
            console.log(data);
            this.displayAstrology(data)
          })
          .catch((error) => console.error("FETCH ERROR:", error));
    },
        displayAstrology: function(data){
            //astrology.fetchAstrology();
            console.log(data.location);
            console.log(data.astronomy.astro);

            const {sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination} = data.astronomy.astro;
            console.log(sunrise);
            console.log(sunset);
            console.log(moonrise);
            console.log(moonset);
            console.log(moon_phase);
            console.log(moon_illumination);

    }
}
