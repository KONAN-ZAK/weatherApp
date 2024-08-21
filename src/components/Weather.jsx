// rfce

import WeatherImg from "./WeatherImgStatus";
import WeatherInfoStatus from "./WeatherInfoStatus";
import WeatherDayStatus from "./WeatherDayStatus";

function WeatherDisplay({ weatherData, countryFlag }) {
  return (
    <div
      className="md:grid md:grid-cols-5 md:row-2 
                    xxs:grid xxs:grid-rows-3 xxs:col-1 xxs:gap-6 "
    >
      <div className=" md:col-span-3 xxs:col-span-5">
        {/* weather icon */}
        <WeatherImg weatherData={weatherData}></WeatherImg>
      </div>

      {/* Weather info */}
      <div className="grid  xxs:col-span-5  md:col-span-2">
        <WeatherInfoStatus
          weatherData={weatherData}
          countryFlag={countryFlag}
        ></WeatherInfoStatus>
      </div>
      {/* weather Day Status for whole day */}
      <div
        className="col-span-5  md:content-center">
        <WeatherDayStatus weatherData={weatherData}></WeatherDayStatus>
      </div>
    </div>
  );
}

export default WeatherDisplay;
