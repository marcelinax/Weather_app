import React from 'react';
import {useHistory} from "react-router-dom";


const WeatherTopMenu: React.FC = () => {

    const history = useHistory();

    return (
        <div className={'weather-top-menu'}>
            <div className={'weather-top-menu-city-info'}>
                <p>11:30 am, Fri Jan 18</p>
                <h5>Sydney, NSW</h5>
            </div>
            <button onClick={() => history.push('/menu')}><i className="bx bx-menu"/></button>
        </div>
    );
};

export default WeatherTopMenu;
