import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import WeatherMenuAddCityButton from "./WeatherMenuAddCityButton";
import WeatherMenuCitiesListItem from "./WeatherMenuCitiesListItem";

const WeatherMenuCitiesList: React.FC = () => {

    const cities = useSelector((state: RootState) => state.weather.cities);
    const weather = useSelector((state: RootState) => state.weather.weather);


    const renderCities = (): JSX.Element[] | JSX.Element => {
        if (cities.length === weather.length && cities.length > 0)
            return cities.map((city, index) => (
                <WeatherMenuCitiesListItem temperature={weather[index].main.temp} cityName={weather[index].name}/>
            ));
        return <></>;
    };

    return (
        <div className={'weather-menu-cities-list'}>
            {renderCities()}
            <WeatherMenuAddCityButton/>
        </div>
    );
};

export default WeatherMenuCitiesList;