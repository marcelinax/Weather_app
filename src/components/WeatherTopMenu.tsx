import React from 'react';

const WeatherTopMenu: React.FC = () => {
    return (
        <div className={'weather-top-menu'}>
            <div className={'weather-top-menu-city-info'}>
                <p>11:30 am, Fri Jan 18</p>
                <h5>Sydney, NSW</h5>
            </div>
            <button><i className="bx bx-menu"/></button>
        </div>
    );
};

export default WeatherTopMenu;
