import axios from "axios";
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather";
import WeatherMenu from "./components/WeatherMenu";
import CurrentWeather from "./types/CurrentWeather";


function App() {

    const [currentCityWeather, setCurrentCityWeather] = useState<CurrentWeather | null>(null);

    const getCurrentCityWeather = (): void => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=7d113b0de39ac1c331219e3591ef461d').then(res => setCurrentCityWeather(res.data.data));
    };

    useEffect(() => {
        getCurrentCityWeather();
    }, [])


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
