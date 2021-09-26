import axios from "axios";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather";
import WeatherMenu from "./components/WeatherMenu";
import {setCurrentWeather, setWeather} from "./state/weatherSlice";
import {RootState} from "./store";
import CurrentWeather from "./types/CurrentWeather";


function App() {

    const cities = useSelector((state: RootState) => state.weather.cities);

    const dispatch = useDispatch();

    const getCurrentCityWeather = (): void => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=7d113b0de39ac1c331219e3591ef461d').then(res => dispatch(setCurrentWeather(res.data.data)));
    };

    const getCityWeather = async (): Promise<void> => {
        const citiesWeather: CurrentWeather[] = [];
        for (let i = 0; i < cities.length; i++) {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7d113b0de39ac1c331219e3591ef461d`);
            citiesWeather.push(res.data);
        }
        dispatch(setWeather(citiesWeather));
    };

    useEffect(() => {
        getCurrentCityWeather();
    }, []);

    useEffect(() => {
        getCityWeather();
    }, [cities]);


    return (
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
    );
}

export default App;
