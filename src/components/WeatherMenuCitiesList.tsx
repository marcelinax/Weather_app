import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFavCity} from "../state/weatherSlice";
import {RootState} from "../store";
import WeatherMenuAddCityButton from "./WeatherMenuAddCityButton";
import WeatherMenuCitiesListItem from "./WeatherMenuCitiesListItem";

const WeatherMenuCitiesList: React.FC = () => {

    const cities = useSelector((state: RootState) => state.weather.cities);
    const weather = useSelector((state: RootState) => state.weather.weather);
    const dispatch = useDispatch();


    const renderCities = (): JSX.Element[] | JSX.Element => {
        if (cities.length === weather.length && cities.length > 0)
            return cities.map((city, index) => (
                <WeatherMenuCitiesListItem temperature={weather[index].main.temp} cityName={weather[index].name}
                                           dt={weather[index].dt} setAsFavCity={() => dispatch(setFavCity(city))}/>
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