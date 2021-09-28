import React from 'react';


import getTemperatureInCelsius from "../utils/getTemperatureInCelsius";
import getTimeForCity from "../utils/getTimeForCity";

interface Props {
    temperature: number,
    cityName: string,
    timezone: number,
    dt: number,
    setAsFavCity: () => void,
    deleteCity: () => void,
    isFav: boolean,

}

const WeatherMenuCitiesListItem: React.FC<Props> = ({
                                                        cityName,
                                                        temperature,
                                                        dt,
                                                        setAsFavCity,
                                                        isFav,
                                                        timezone,
                                                        deleteCity,
                                                    }) => {


    return (
        <div className={'weather-menu-cities-list-item'}>
            <div className={'weather-menu-cities-list-item-city-info'}>
                <p>{getTimeForCity(dt, timezone)}</p>
                <p>{cityName} {getTemperatureInCelsius(temperature)} °C</p>
            </div>
            <div className={'weather-menu-cities-list-item-buttons'}>
                <button onClick={setAsFavCity}><i
                    className={isFav ? 'bx bxs-star' : 'bx bx-star'}/></button>
                <button onClick={deleteCity}><i className="bx bx-trash"/></button>
            </div>
        </div>
    );
};

export default WeatherMenuCitiesListItem;