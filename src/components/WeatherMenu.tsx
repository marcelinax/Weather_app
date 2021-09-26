import React from 'react';
import WeatherMenuCitiesList from "./WeatherMenuCitiesList";

const WeatherMenu: React.FC = () => {
    return (
        <div className={'weather-menu'}>
            <WeatherMenuCitiesList/>
        </div>
    );
};

export default WeatherMenu;