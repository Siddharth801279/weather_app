// Function to fetch weather data for a specific location
function getWeatherData(location) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    // Event listener for when the request is completed
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          // If successful, parse the response and log it to check its structure
          const data = JSON.parse(this.responseText);
          console.log("Full API response:", data); // Log the full data to check the structure
          updateWeatherUI(data);
        } else {
          // If not successful, log the error status and message
          console.error(`Error: ${this.status} - ${this.statusText}`);
        }
      }
    });
  
    // Open the API request (using current.json for current weather data)
    xhr.open('GET', `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`);
  
    // Set the headers, including the API key and host
    xhr.setRequestHeader('x-rapidapi-key', 'ea6a8e6f8cmsh23b33fb9f979b91p1dac59jsnbda3f48cd49e');
    xhr.setRequestHeader('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');
  
    // Send the request
    xhr.send();
  }
  
  // Function to update the weather details on the UI
  function updateWeatherUI(data) {
    // Check if the necessary data is available before updating UI
    if (data && data.current) {
      // Assuming the API returns the weather data like this:
      // data.current.temp_c, data.location.name, data.current.humidity, data.current.wind_kph
      document.querySelector('.temp').textContent = `${data.current.temp_c}°C`;
      document.querySelector('.city').textContent = data.location.name;
      document.querySelector('.humidity').textContent = `${data.current.humidity}%`;
      document.querySelector('.windSpeed').textContent = `${data.current.wind_kph} km/h`;
    } else {
      console.error("Error: API response does not contain the expected data.");
    }
  }
  
  // Event listener for the search button click
  document.querySelector('button').addEventListener('click', function () {
    const location = document.querySelector('input').value.trim();
    if (location) {
      getWeatherData(location);
    } else {
      alert("Please enter a location.");
    }
  });
  
  // Optional: Trigger a default city on page load (e.g., Delhi)
  document.addEventListener('DOMContentLoaded', function () {
    getWeatherData('Delhi');
  });
  