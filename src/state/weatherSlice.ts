import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CurrentWeather from "../types/CurrentWeather";

interface WeatherState {
    currentWeather: CurrentWeather | null;
    cities: string[];
    weather: CurrentWeather[];
    favCity: string;
}

const saveCitiesInLocalStorage = (state: string[]): void => {
    localStorage.setItem('cities', JSON.stringify(state));
};

const loadCitiesFromLocalStorage = (): string[] => {
    return JSON.parse(localStorage.getItem('cities') || '[]');
};
const saveFavCityInLocalStorage = (state: string): void => {
    localStorage.setItem('favCity', JSON.stringify(state));
};

const loadFavCityLocalStorage = (): string => {
    return localStorage.getItem('favCity') || '';
};

const initialState: WeatherState =
    {
        currentWeather: null,
        cities: loadCitiesFromLocalStorage(),
        weather: [],
        favCity: loadFavCityLocalStorage()
    };

export const weatherSlice = createSlice({
        name: 'weather',
        initialState: initialState,
        reducers: {
            setCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
                state.currentWeather = action.payload;
            },
            addNewCity: (state, action: PayloadAction<string>) => {
                state.cities = [...state.cities, action.payload];
                saveCitiesInLocalStorage(state.cities);
            },
            setWeather: (state, action: PayloadAction<CurrentWeather[]>) => {
                state.weather = action.payload;

            },
            setFavCity: (state, action: PayloadAction<string>) => {
                state.favCity = action.payload;
                saveFavCityInLocalStorage(state.favCity);
            }
        }
    })
;

export const {setCurrentWeather, addNewCity, setWeather, setFavCity} = weatherSlice.actions;
export default weatherSlice.reducer;