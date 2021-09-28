import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import WeatherHourlyWeatherListItem from "./WeatherHourlyWeatherListItem";

const WeatherHourlyWeatherList: React.FC = () => {

    const hourlyWeather = useSelector((state: RootState) => state.weather.hourlyWeather);

    const renderHourlyWeather = (): JSX.Element | JSX.Element[] => {
        if (hourlyWeather.length > 0) {
            const weather: JSX.Element[] = [];
            for (let i = 0; i < 9; i++) {
                weather.push(<WeatherHourlyWeatherListItem temperature={hourlyWeather[i].main.temp}
                                                           date={hourlyWeather[i].dt_txt}
                                                           icon={hourlyWeather[i].weather[0].icon} key={i}/>);
            }
            return weather;

        } else
            return <></>;
    };

    return (
        <div className={'weather-hourly-weather-list'}>
            {renderHourlyWeather()}
        </div>
    );
};

export default WeatherHourlyWeatherList;