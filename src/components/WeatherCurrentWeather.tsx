import React from 'react';

interface Props {
    temperature: number;
    maxTemp: number;
    minTemp: number;
    description: string;
}

const WeatherCurrentWeather: React.FC<Props> = ({temperature, maxTemp, minTemp, description}) => {
        return (
            <div className={'weather-current-weather'}>
                <div className={'weather-current-weather-top'}>
                    <div className={'weather-current-weather-top-current-temp'}>
                        <h1>{temperature}</h1>
                        <p>°C</p>
                    </div>

                    <div className={'weather-current-weather-top-temp-box'}>
                        <span>
                            <i className="bx bxs-up-arrow-alt"/>
                            <p>{maxTemp}°C</p>
                        </span>
                        <span>
                            <i className="bx bxs-down-arrow-alt"/>
                              <p>{minTemp}°C</p>
                        </span>
                    </div>
                </div>
                <div className={'weather-current-weather-bottom'}>
                    <p>{description.split('')[0].toUpperCase() + description.substr(1, description.length - 1)}</p>
                </div>
            </div>
        );
    }
;

export default WeatherCurrentWeather;