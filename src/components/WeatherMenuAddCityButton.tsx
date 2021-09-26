import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {addNewCity} from "../state/weatherSlice";

const WeatherMenuAddCityButton: React.FC = () => {

    const [cityName, setCityName] = useState<string>('');
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
    const dispatch = useDispatch();


    const handleCityNameInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setCityName(e.target.value);
    };


    return (
        <div className={'weather-menu-add-city-button'}>
            <i className="bx bx-plus" onClick={() => setIsButtonClicked(true)}/>
            <div className={`weather-menu-add-city-button-form-box ${isButtonClicked ? 'show' : ''}`}>
                <input placeholder={'City name'} value={cityName} onChange={handleCityNameInput}/>
                <button onClick={() => {
                    dispatch(addNewCity(cityName));
                }}>ADD
                </button>
            </div>
        </div>
    );
};

export default WeatherMenuAddCityButton;