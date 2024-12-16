
async function getWeather() {
    const city = document.getElementById('city').value.trim(); 
    if (!city) {
      alert('Please enter a city!');
      return;
    }
  
    const url = `http://api.weatherapi.com/v1/current.json?key=2859efb519e84bba8f473653241612&q=${city}&aqi=no`; 
    const options = {
      method: 'GET',
    };
  
    try {
      const response = await fetch(url, options); 
      const data = await response.json(); 
  
      if (data && data.current) {
        console.log(data); 
        displayWeather(data); 
      } else {
        console.log('No weather data available.');
        alert('No weather data found for this city.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error); 
    }
  }
  
  
  function displayWeather(data) {
    const cityName = data.location.name;
    const temperature = data.current.temp_c; 
    const condition = data.current.condition.text; 
    const icon = data.current.condition.icon; 
  
    document.getElementById('city-name').textContent = `Weather in ${cityName}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Condition: ${condition}`;
  
   
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `http:${icon}`; 
    weatherIcon.alt = condition; 
  }
  
  
  