import location from "../assets/location-pin.svg";
import humidityLogo from "../assets/humidity.svg";
import windLogo from "../assets/wind.svg";
import feelLikes from "../assets/cloudicon.png";
import PropTypes from "prop-types";
function WeatherInfoStatus({ weatherData, countryFlag }) {
  return (
    <div
      className="md:grid md:grid-rows-4 md:grid-cols-1 md:items-center md:border-l-[2px] md:border-grey-400 md:pl-4 md:text-2xl md: md:h-[23rem]
                 xxs:text-l xxs:grid xxs:grid-rows-2 xxs:grid-cols-2  xxs:gap-2  xxs:items-center"
    >
      {/* ..........(Location,flag)...........   */}

      <div
        className=" md:flex md:flex-row md:px-24 md:justify-center md:gap-16  md:items-center 
                    xxs:flex xxs:flex-col xxs:gap-2 xxs:items-center xxs:pt-1  "
      >
        {/* flag */}
        <div className=" flag md:w-16 xxs:w-10">
          <img
            src={countryFlag}
            alt={countryFlag.country}
            className=" rounded-xl md:min-w-16"
          />
        </div>
        {/* location */}
        <div className=" flex md:items-center font-semibold xxs:justify-center ">
          <img src={location} alt="LocationPin" className=" md:w-9 xxs:w-5" />
          <p>{weatherData.cityName}</p>
        </div>
      </div>

      {/* ..................... second part  */}
      <div className="feels-like  xxs:flex-col xxs:flex xxs:items-center  md:flex md:items-start  ">
        <div
          className="flex items-center md:gap-8 xxs:gap-2
                         "
        >
          <h2 className="font-semibold ">Feel likes </h2>
          <img src={feelLikes} alt="humidity" className="md:w-16 xxs:w-10" />
        </div>
        <p className="text-xl">{weatherData.feelLikes}° C</p>
      </div>

      {/* ..................... third part  */}
      <div className="humidity xxs:flex-col xxs:flex xxs:items-center md:flex md:items-start ">
        <div className="flex items-center md:gap-7 xxs:gap-1">
          <h2 className="font-semibold ">Humidity </h2>
          <img src={humidityLogo} alt="humidity" className="md:w-20 xxs:w-10" />
        </div>
        <p className="text-xl">{weatherData.humidity} %</p>
      </div>

      {/* ..................... third part  */}
      <div className="windspeed xxs:flex-col xxs:flex xxs:items-center md:flex md:items-start ">
        <div className="flex items-center md:gap-3 xxs:gap-1">
          <h2 className="font-semibold ">Wind Speed </h2>
          <img src={windLogo} alt="humidity" className=" md:w-16 xxs:w-8 " />
        </div>
        <p className="text-xl">{weatherData.windSpeed} Km/h</p>
      </div>
    </div>
  );
}

export default WeatherInfoStatus;
