import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import getTemperatureInCelsius from "../utils/getTemperatureInCelsius";
import WeatherBackground from "./WeatherBackground";
import WeatherCurrentWeather from "./WeatherCurrentWeather";
import WeatherHourlyWeatherList from "./WeatherHourlyWeatherList";
import WeatherTopMenu from "./WeatherTopMenu";

const Weather: React.FC = () => {

    const currentCityWeather = useSelector((state: RootState) => state.weather.currentWeather);

    return (
        <div className={'weather'}>

            <WeatherTopMenu date={currentCityWeather ? currentCityWeather.dt : 'Add city'}
                            timezone={currentCityWeather ? currentCityWeather.timezone : 0}/>
            <WeatherBackground main={currentCityWeather ? currentCityWeather.weather[0].description : ''}
                               temp={currentCityWeather ? getTemperatureInCelsius(currentCityWeather.main.temp) : 0}/>
            <div className={'weather-bottom'}>
                {currentCityWeather ?
                    <WeatherCurrentWeather temperature={getTemperatureInCelsius(currentCityWeather.main.temp)}
                                           maxTemp={getTemperatureInCelsius(currentCityWeather.main.temp_max)}
                                           minTemp={getTemperatureInCelsius(currentCityWeather.main.temp_min)}
                                           description={currentCityWeather.weather[0].description}/> : <></>}
                <WeatherHourlyWeatherList/>
            </div>


        </div>
    );
};

export default Weather;