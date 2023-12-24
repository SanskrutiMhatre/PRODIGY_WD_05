function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '4acd6d14e01745e89e5144fd190167fb'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherData = document.getElementById('weatherData');
        weatherData.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Current Condition: ${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
  
        const weatherIcon = document.getElementById('weatherIcon');
        const weatherCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${weatherCode}.png`;
        const iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.alt = 'Weather Icon';
        weatherIcon.innerHTML = ''; // Clear any previous content
        weatherIcon.appendChild(iconImg);
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
        const weatherData = document.getElementById('weatherData');
        weatherData.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
      });
  }
  