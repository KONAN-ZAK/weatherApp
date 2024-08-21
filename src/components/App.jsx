// importing the libraies of nthe react
import { useEffect, useRef, useState } from "react";
// importing the components
import NavBar from "./NavBar";
import WeatherDisplay from "./Weather";
// importing the SVG
import clear from "../assets/clear.svg";
import cloudy from "../assets/cloudy.svg";
import mist from "../assets/mist.svg";
import rain from "../assets/rain.svg";
import snow from "../assets/snow.svg";
import thunder from "../assets/thunder.svg";

function App() {
  // referancing the input element without rendering again the component on each change
  const inputRef = useRef();
  // states for the init value and functions for updating
  const [weatherData, setWeatherData] = useState();
  const [countryFlag, setCountryFlag] = useState();
  //for error handling
  const [error, setError] = useState(null);

  // search function sends request to the OpenWeather API to fetch weather data for the city.
  useEffect(() => {
    search("london");
  }, []);
  //object that maps weather condition codes to their corresponding svg imports.
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "50d": mist,
    "50n": mist,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
    "11d": thunder,
    "11n": thunder,
  };

  const search = async (city) => {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_KEY
      }`;
      //requesting to weatherUrl and wait for the response to be sent back
      const response = await fetch(weatherUrl);

      if (!response.ok) {
        throw new Error("City not found");
      }

      // parses the jason to a JavaScript object after we get the response .
      const data = await response.json();

      console.log(data);
      // data -> weather -> icon -> access the first object in the array
      const icon = allIcons[data.weather[0].icon] || cloud;

      const countryResponse = await fetch(
        `https://restcountries.com/v3.1/alpha/${data.sys.country}`
      );
      const countryData = await countryResponse.json();
      console.log(countryData);
      const flagUrl = countryData[0].flags.svg;

      //importing the info from the API object
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        status: data.weather[0].description,
        cityName: data.name,
        feelLikes: Math.floor(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: icon,
        country: data.sys.country,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      });
      setCountryFlag(flagUrl);
    } catch (error) {
      console.error("Error while fetching data:", error);
      setWeatherData(null); // Clear previous weather data
      setError("No Data Found"); // Set error message
    }
  };

  if (!weatherData) {
    return (
      <div className="text-9xl h-[100vh] text-center content-center">
        <p>No Data</p>
      </div>
    );
  } else
    return (
      <div className="flex flex-col h-[100vh] w-[100vw]  flex-1 ">
        <NavBar search={search} inputRef={inputRef}></NavBar>
        <div>
          <WeatherDisplay
            // Passes the weatherData and the countryFlag state as a prop
            weatherData={weatherData}
            countryFlag={countryFlag}
          ></WeatherDisplay>
        </div>
      </div>
    );
}

export default App;
