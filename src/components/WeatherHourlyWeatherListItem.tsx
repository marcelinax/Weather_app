import moment from "moment";
import React from 'react';
import getTemperatureInCelsius from "../utils/getTemperatureInCelsius";

interface Props {
    temperature: number;
    date: string;
    icon: string;


}

const WeatherHourlyWeatherListItem: React.FC<Props> = ({temperature, date, icon}) => {


    return (
        <div className={'weather-hourly-weather-list-item'}>
            <p>{getTemperatureInCelsius(temperature)}°C</p>
            <div className={'weather-hourly-weather-list-item-icon'}
                 style={{backgroundImage: `url(http://openweathermap.org/img/wn/${icon}@2x.png)`}}/>
            <p>{moment(date.split(' ')[1].split(':')[0], "HH:mm").format("h a")}</p>
        </div>
    );
};

export default WeatherHourlyWeatherListItem;