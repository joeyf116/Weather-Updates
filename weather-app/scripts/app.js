"use strict";

////////////////////
//// Variables ////
//////////////////

const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";
const locations = document.getElementById('locations');
const temp = document.getElementById('temp');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const weatherIcon = document.getElementById('weatherIcon');
const wind = document.getElementById('wind');



///////////////////
//// API CALL ////
/////////////////

function get(URL) {
    return fetch(URL)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            return data;
        })
        .catch(function(error) {
            return error;
        });
    }
console.log(get(URL))

function getData(URL) {
    get(URL)
    .then((response) => {
        weatherDiv.dataset.locations = response.name
        weatherDiv.dataset.condition = response.weather[0].main
        weatherDiv.dataset.windSpeed = response.wind.speed
        weatherDiv.dataset.sunrise = response.sys.sunrise
        weatherDiv.dataset.sunset = response.sys.sunset
        weatherDiv.dataset.temp = response.main.temp

        updateLocation();
        updateTemp();
        updateWind();
        updateSunrise();
        updateSunset();
    });
    }

/////////////////////////
//// Query Selector ////
///////////////////////

const weatherDiv = document.querySelector('[data-weather]');
console.log(weatherDiv);

/////////////////////////////
//// Appending Functions ///
///////////////////////////

function updateLocation() {
    locations.innerHTML = "Location: " + weatherDiv.dataset.locations;
    console.log("Why")
}

function updateTemp() {
    const conversion = (weatherDiv.dataset.temp * 9/5 - 459.67);
    
    temp.innerHTML = "Temperature: " + conversion.toFixed(0) + '&#7506;';
}

function updateWind() {
    wind.innerHTML = 'Wind Speed: ' + weatherDiv.dataset.windSpeed
}

function updateSunrise() {
    sunrise.innerHTML = 'Sunrise: ' + weatherDiv.dataset.sunrise;
}

function updateSunset() {
    sunset.innerHTML = 'Sunset: ' + weatherDiv.dataset.sunset;
}



/////////////////////////////
//// Function Calls ////////
///////////////////////////
getData(URL);