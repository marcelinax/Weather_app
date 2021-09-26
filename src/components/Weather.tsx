import React from 'react';
import WeatherTopMenu from "./WeatherTopMenu";

const Weather: React.FC = () => {
    return (
        <div className={'weather'}>
            <WeatherTopMenu/>
        </div>
    );
};

export default Weather;