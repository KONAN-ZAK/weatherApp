import sunrise from "../assets/sunrise.svg";
import sunset from "../assets/sunset.svg";
import barometer from "../assets/barometer.svg";
import thermometeColder from "../assets/thermometerColder.svg";
import thermometerWarmer from "../assets/thermometerWarmer.svg";

function WeatherDayStatus({ weatherData }) {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + " : " + minutes.substr(-2);
  };
  return (
    <div className="downBarInfo  grid grid-cols-5 grid-rows-1 text-center md:gap-10 font-semibold md:text-2xl
    xxs:gap-2 xxs:text-lg
    ">
      <div >
        <div>
          <img src={thermometerWarmer} alt="logo" />
        </div>
        <div>{weatherData.maxTemp}° C</div>
      </div>
      <div >
        <div>
          <img src={thermometeColder} alt="logo" />
        </div>
        <div>{weatherData.minTemp}° C</div>
      </div>
      <div className="">
        <div>
          <img src={barometer} alt="logo" />
        </div>
        <div>{weatherData.pressure} Pa</div>
      </div>

      <div>
        <div>
          <img src={sunrise} alt="logo" />
        </div>
        <div>{formatTime(weatherData.sunrise)} AM</div>
      </div>
      <div >
        <div>
          <img src={sunset} alt="logo" />
        </div>
        <div>{formatTime(weatherData.sunset)} PM</div>
      </div>
    </div>
  );
}

export default WeatherDayStatus;
