//key 3b09384c5emshfbc5a9d9bf16abap13fde9jsn16f599ff8464

  async function getPlace(){
      var input = document.getElementById("input");
      await new google.maps.places.Autocomplete(input);
  }

  let form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      let searchkey = document.getElementById("input").value;
     // console.log(searchkey);
      searchWeather(searchkey);
  });

  function searchWeather(searchKey) {
  let weatherApi = `
  http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=17c6d6017649b7e6f3d8ad13ab78defd`;
    window.fetch(weatherApi)
      .then((data) => {
          data.json()
          .then((weather) => {
                console.log(weather);
               let weatherData = weather.weather;
               let main = weather.main;
               output = [];
               for(let x of weatherData) {
                   output += `
                   <div class="col-md-12 mt-4 card">
                       <div class="card-body">
                        <h1>${weather.name}</h1>
                        <div>
                            <p class="icon">
                            <img src="http://openweathermap.org/img/wn/${x.icon}.png" alt="" /></p>
                            <p><span>Temp:</span>
                            <span class="temp">${weather.main.temp-273.15}&deg;c</span></p>

                            <p class="float-left">Humidity: ${weather.main.humidity}&deg;c</p>
                            <p class="des float-left">${x.description}</p>
                            <p class="des float-right">${x.main}</p>
                        </div>
                       </div>
                   </div>
                   `;
                   document.getElementById("weatherTemplate").innerHTML = output;
               }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
}