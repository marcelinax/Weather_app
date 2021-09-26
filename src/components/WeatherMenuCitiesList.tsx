import React from 'react';
import WeatherMenuCitiesListItem from "./WeatherMenuCitiesListItem";

const WeatherMenuCitiesList: React.FC = () => {
    return (
        <div className={'weather-menu-cities-list'}>
            <WeatherMenuCitiesListItem/>
            <WeatherMenuCitiesListItem/>
        </div>
    );
};

export default WeatherMenuCitiesList;