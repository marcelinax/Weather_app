import axios from "axios";
import React, {useEffect} from 'react';
import ReactInterval from "react-interval";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather";
import WeatherMenu from "./components/WeatherMenu";
import {setCurrentWeather, setHourlyWeather, setWeather} from "./state/weatherSlice";
import {RootState} from "./store";
import CurrentWeather from "./types/CurrentWeather";


function App() {

    const cities = useSelector((state: RootState) => state.weather.cities);
    const favCity = useSelector((state: RootState) => state.weather.favCity);

    const dispatch = useDispatch();

    const getCurrentCityWeather = (): void => {
        if (favCity !== '')
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${favCity}&appid=7d113b0de39ac1c331219e3591ef461d`).then(res => dispatch(setCurrentWeather(res.data)));
        else if (cities.length > 0)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&appid=7d113b0de39ac1c331219e3591ef461d`).then(res => dispatch(setCurrentWeather(res.data)));
    };

    const getHourlyWeatherForCurrentCity = (): void => {
        if (favCity !== '') {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${favCity}&appid=7d113b0de39ac1c331219e3591ef461d`).then(res => dispatch(setHourlyWeather(res.data.list)));
        } else if (cities.length > 0) {
            axios.get(`axios.get(\`https://api.openweathermap.org/data/2.5/forecast?q=${cities[0]}&appid=7d113b0de39ac1c331219e3591ef461d`).then(res => dispatch(setHourlyWeather(res.data.list)));
        }
    };

    const getCityWeather = async (): Promise<void> => {
        const citiesWeather: CurrentWeather[] = [];
        for (let i = 0; i < cities.length; i++) {
            const res = await axios.get(`
            https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7d113b0de39ac1c331219e3591ef461d`);
            citiesWeather.push(res.data);
        }
        dispatch(setWeather(citiesWeather));
    };

    useEffect(() => {
        getCurrentCityWeather();
    }, [cities, favCity]);

    useEffect(() => {
        getCityWeather();
    }, [cities]);

    useEffect(() => {
        getHourlyWeatherForCurrentCity();
    }, [cities, favCity]);


    return (
        <>
            <ReactInterval callback={() => {
                getCurrentCityWeather();
                getCityWeather();
                getHourlyWeatherForCurrentCity();
            }} enabled={true} timeout={1000 * 60 * 60}/>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact>
                        <Weather/>
                    </Route>
                    <Route path={'/menu'}>
                        <WeatherMenu/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
        ;
}

export default App;
