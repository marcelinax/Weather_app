import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNewCity} from "../state/weatherSlice";
import {RootState} from "../store";

const WeatherMenuAddCityButton: React.FC = () => {

    const [cityName, setCityName] = useState<string>('');
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
    const cityError = useSelector((state: RootState) => state.weather.cityError);
    const dispatch = useDispatch();


    const handleCityNameInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setCityName(e.target.value);
    };

    const addCity = (): void => {
        if (cityError !== '') {
            alert('This city has already been added');
            return;
        } else {
            dispatch(addNewCity(cityName));
            setIsButtonClicked(false);
            setCityName('');
        }

    };


    return (
        <div className={'weather-menu-add-city-button'}>
            <i className={`bx bx-plus ${isButtonClicked ? 'bx bx-plus-hide' : ''}`}
               onClick={() => setIsButtonClicked(true)}/>
            <div
                className={`weather-menu-add-city-button-form-box ${isButtonClicked ? 'show' : ''}`}>
                <input placeholder={'City name'} value={cityName} onChange={handleCityNameInput}/>
                <button onClick={addCity}>ADD</button>
            </div>

        </div>
    );
};

export default WeatherMenuAddCityButton;