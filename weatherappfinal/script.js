const apiKey = '94bbc18b34f906bac269fa611c53f3aa';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchInput = document.querySelector('.search');
const weatherBox = document.querySelector('.weather-box');
const tempElement = document.querySelector('.temp');
const weatherElement = document.querySelector('.weather');
const locationElement = document.querySelector('.location');
const descriptionElement = document.querySelector('.description');
const detailsElement = document.querySelector('.details');
const windElement = document.querySelector('.detail:first-child');
const humidityElement = document.querySelector('.detail:last-child');

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const city = searchInput.value.trim();
        if (city) {
            getWeatherData(city);
        }
    }
});

function getWeatherData(city) {
    fetch(`${apiUrl}${city}&appid=${apiKey}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('API Response:', data);
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert(`City not found: ${city}`);
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please check your API key or try again later.');
        });
}

function displayWeather(data) {
    const { main, weather, wind, name } = data;

    tempElement.textContent = `${Math.round(main.temp)}°`;
    weatherElement.textContent = weather[0].main;
    locationElement.textContent = name;
    descriptionElement.textContent = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);
    windElement.textContent = `Wind: ${Math.round(wind.speed)} km/h`;
    humidityElement.textContent = `Humidity: ${main.humidity}%`;

    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.querySelector('.weather-icon img').src = iconUrl;

    weatherBox.style.display = 'block';
}

getWeatherData('Chittagong');
