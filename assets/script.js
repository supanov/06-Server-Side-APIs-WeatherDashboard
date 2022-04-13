var searchFormEl = document.querySelector("#search-form")
var searchFormCityInputEl = document.querySelector("#search-form-city-input")
var cityName = document.querySelector("#cityName")
var temp = document.querySelector(".temp")
var humidity = document.querySelector(".humidity")
var windSpeed = document.querySelector(".windSpeed")
var uvIndex = document.querySelector(".uvIndex")
var searchBtn = document.querySelector(".searchBtn")
var forecast = document.querySelector(".forecast")
var fiveDay =document.querySelector("#fiveDay")
// API from OpenWeather Current

var apiKey = "2efce3ce09958447b3b9675cca9a3f7f"

searchFormEl.addEventListener("submit", function (event) {
    event.preventDefault()
    getCityDayWeather(searchFormCityInputEl.value)
})

// backkicks `` make dynamic template literals

function getCityDayWeather(city) {
    var baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`
            fetch(oneCallUrl)
                .then(response => response.json())
                .then(fiveDayForecast => {
                    console.log(fiveDayForecast)
                    forecast.innerHTML = `<div class="row">
                    <h2 id="cityName" class="cityName">${data.name}</h2>
                    </div>
                    <div class="row">
                    <p class="temp">Temperature:${data.main.temp}</p>
                    </div>
                    <div class="row">
                    <p class="humidity">Humidity:${data.main.humidity}</p>
                    </div>
                    <div class="row">
                    <p class="windSpeed">Wind Speed:${data.wind.speed}</p>
                    </div>
                    <div class="row">
                    <p class="uvIndex">UV Index${fiveDayForecast.current.uvi}</p>
                    </div>`


                    fiveDay.innerHTML =` <div class="col-sm-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Date</h5>
                        <p class="card-text">Weather Icon:
                            <br>
                            Temp:${data.main.temp}
                            <br>
                            Wind:${data.wind.speed}
                            <br>
                            Humidity:${data.main.humidity}
                        </p>
                       
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Date</h5>
                        <p class="card-text"> Weather Icon:
                            <br>
                            Temp:${data.main.temp}
                            <br>
                            Wind:${data.wind.speed}
                            <br>
                            Humidity:${data.main.humidity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-2">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Date</h5>
                          <p class="card-text">
                              Weather Icon:
                              <br>
                              Temp:${data.main.temp}
                              <br>
                              Wind:${data.wind.speed}
                              <br>
                              Humidity:${data.main.humidity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Date</h5>
                          <p class="card-text">
                              Weather Icon:
                              <br>
                              Temp:${data.main.temp}
                              <br>
                              Wind:${data.wind.speed}
                              <br>
                              Humidity:${data.main.humidity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-2">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Date</h5>
                          <p class="card-text">
                              Weather Icon:
                              <br>
                              Temp:${data.main.temp}
                              <br>
                              Wind:${data.wind.speed}
                              <br>
                              Humidity:${data.main.humidity}
                          </p>
                        </div>
                      </div>
                    </div>`
                })

        })


}



function handleFormSubmit(evt) {
    evt.preventDefault();
    var city = searchFormCityInputEl.value;
    getCityDayWeather(city)
}

function addEventListeners() {
    searchFormEl.addEventListener("submit", handleFormSubmit);

}

function init() {
    addEventListeners();
}