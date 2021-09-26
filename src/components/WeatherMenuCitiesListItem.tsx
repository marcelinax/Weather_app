import React from 'react';
import getTemperatureInCelsius from "../utils/getTemperatureInCelsius";
import getTimeForCity from "../utils/getTimeForCity";

interface Props {
    temperature: number,
    cityName: string,
    dt: number,
    setAsFavCity: () => void
}

const WeatherMenuCitiesListItem: React.FC<Props> = ({cityName, temperature, dt, setAsFavCity}) => {
    return (
        <div className={'weather-menu-cities-list-item'}>
            <div className={'weather-menu-cities-list-item-city-info'}>
                <div className={'weather-menu-cities-list-item-city-info-weather'}>
                    <p>{getTemperatureInCelsius(temperature)} °C</p>
                    <p>{getTimeForCity(dt)}</p>
                </div>
                <p>{cityName}</p>
            </div>
            <div className={'weather-menu-cities-list-item-city-buttons'}>
                <button onClick={setAsFavCity}><i className="bx bx-star"/></button>
                <button><i className="bx bx-trash"/></button>
            </div>
        </div>
    );
};

export default WeatherMenuCitiesListItem;