const apiKey = "2f762edeb265a5b52673b283978c1297";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {

        var data = await response.json();
        const weatherIcon = document.querySelector(".weather-icon");

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
        document.querySelector(".pressure").innerText = data.main.pressure + "hPa";
        document.querySelector(".feels").innerText = data.main.feels_like + "°C";
        document.querySelector(".sunrise").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.querySelector(".sunset").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";

        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";

        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


// When search is clicked
document.querySelector(".search button").addEventListener("click", () => {
    const city = document.getElementById("search").value;
    if (city) {
        checkWeather(city);
    }
});
