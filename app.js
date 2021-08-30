'use strict';

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  loadingText.style.display = 'block';
  weatherContainer.style.display = 'none';
  
  const cityName = searchCity.value;
  if (cityName.trim().length === 0) return alert('Please enter a city name.');

  const http = new XMLHttpRequest();
  const key = 'api key here';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`;
  const method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      const data = JSON.parse(http.responseText);
      const weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase(),
        data.main.temp
      );
      updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      alert('Something went wrong.');
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  loadingText.style.display = 'none';
  weatherContainer.style.display = 'block';
}
