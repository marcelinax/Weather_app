import React from 'react';

const WeatherMenuCitiesListItem: React.FC = () => {
    return (
        <div className={'weather-menu-cities-list-item'}>
            <div className={'weather-menu-cities-list-item-city-info'}>
                <div className={'weather-menu-cities-list-item-city-info-weather'}>
                    <p>22 C</p>
                    <p>12:00</p>
                </div>
                <p>Sydney</p>
            </div>
            <div className={'weather-menu-cities-list-item-city-buttons'}>
                <button><i className="bx bx-star"/></button>
                <button><i className="bx bx-star"/></button>
            </div>
        </div>
    );
};

export default WeatherMenuCitiesListItem;