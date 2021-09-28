import moment from "moment";
import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {RootState} from "../store";
import WeatherMomentFromNow from "./WeatherMomentFromNow";

interface Props {
    date: number | string;
    timezone: number;
}

const WeatherTopMenu: React.FC<Props> = ({date, timezone}) => {

    const history = useHistory();
    const currentWeatherCity = useSelector((state: RootState) => state.weather.currentWeather);


    return (

        <div className={'weather-top-menu'}>
            <div className={'weather-top-menu-city-info'}>
                <p><WeatherMomentFromNow date={+date}
                                         timezone={timezone}/>, {moment(new Date(+date * 1000 + timezone * 1000)).format("ddd MMM D")}
                </p>

                < h5>{currentWeatherCity ? currentWeatherCity.name : 'Add city'}</h5>
            </div>
            <button onClick={() => history.push('/menu')}><i className="bx bx-menu"/></button>
        </div>
    );
};

export default WeatherTopMenu;
