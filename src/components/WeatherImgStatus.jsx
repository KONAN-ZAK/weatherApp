import PropTypes from "prop-types";

function WeatherImg({ weatherData }) {
  return (
    <div className="  flex flex-col  items-center justify-center md:h-[20rem] gap-10 xxs:h-[18rem]  ">
      {/* weather icon */}
      <div className="md:h-[70%] w-full xxs:h-[70%]">
        <img
          src={weatherData.icon}
          alt="weather-icon"
          className="weatherIcon h-[100%] w-[100%]"
        />
      </div>
      {/* weather temp and degree */}
      <div className="text-center md:text-3xl h-[20%] xxs:text-2xl xxs:h-[15%] xxs:mb-10">
        <span className="md:text-[6rem] xxs:text-[3rem] ">
          {weatherData.temperature}°C
        </span>
        <p>{weatherData.status}</p>
      </div>
    </div>
  );
}

export default WeatherImg;
