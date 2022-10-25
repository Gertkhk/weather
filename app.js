document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch(city) {
    var key = 'b6333456f56829f95df50b7a7cea7f1a';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) // Convert data to json
        .then(function(data) {
        console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}