import React from 'react';

interface Props {
    temperature: number,
    cityName: string
}

const WeatherMenuCitiesListItem: React.FC<Props> = ({cityName, temperature}) => {
    return (
        <div className={'weather-menu-cities-list-item'}>
            <div className={'weather-menu-cities-list-item-city-info'}>
                <div className={'weather-menu-cities-list-item-city-info-weather'}>
                    <p>{temperature} C</p>
                    <p>12:00</p>
                </div>
                <p>{cityName}</p>
            </div>
            <div className={'weather-menu-cities-list-item-city-buttons'}>
                <button><i className="bx bx-star"/></button>
                <button><i className="bx bx-trash"/></button>
            </div>
        </div>
    );
};

export default WeatherMenuCitiesListItem;