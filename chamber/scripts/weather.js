const MY_API_KEY = '49a8afa9acc71e8f47ce23eeed198b3b'; // Replace with your OpenWeatherMap API key
const LATITUDE = '10.369679631483846';
const LONGITUDE = '123.9164270266778';
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${MY_API_KEY}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${MY_API_KEY}&units=metric`;

async function getWeather() {
    try {
        // Fetch current weather
        const currentResponse = await fetch(currentWeatherUrl);
        const currentData = await currentResponse.json();

        // Fetch 3-day forecast
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function capitalizeWords(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function displayCurrentWeather(data) {
    const weatherDesc = document.getElementById('weather-desc');
    const currentTemp = document.getElementById('current-temp');
    const humidity = document.getElementById('humidity');
    const weatherIcon = document.getElementById('weather-icon');
    const high = document.getElementById('high');
    const low = document.getElementById('low');
    const rise = document.getElementById('rise');
    const set = document.getElementById('set');

    // Display all weather events
    const descriptions = data.weather.map(event =>
        capitalizeWords(event.description)
    ).join(', ');

    currentTemp.textContent = Math.round(data.main.temp);
    weatherDesc.textContent = descriptions;
    humidity.textContent = data.main.humidity;
    high.textContent = Math.round(data.main.temp_max);
    low.textContent = Math.round(data.main.temp_min);

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    rise.textContent = sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    set.textContent = sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = descriptions;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('.forecast-container');
    forecastContainer.innerHTML = '';

    // Get one forecast per day (excluding today)
    const dailyForecasts = data.list.filter(forecast =>
        forecast.dt_txt.includes('12:00:00')
    ).slice(0, 3);

    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

        const forecastDay = document.createElement('div');
        forecastDay.className = 'forecast-day';
        forecastDay.innerHTML = `
            <h4 tabindex="0">${dayName}</h4>
            <p tabindex="0">${Math.round(forecast.main.temp)}°C</p>
        `;
        forecastContainer.appendChild(forecastDay);
    });
}

// Call getWeather when the page loads
document.addEventListener('DOMContentLoaded', getWeather);