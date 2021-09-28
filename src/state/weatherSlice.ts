import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CurrentWeather from "../types/CurrentWeather";
import HourlyWeather from "../types/HourlyWeather";

interface WeatherState {
    currentWeather: CurrentWeather | null;
    cities: string[];
    weather: CurrentWeather[];
    favCity: string;
    hourlyWeather: HourlyWeather[];
    cityError: string;
}

const saveCitiesInLocalStorage = (state: string[]): void => {
    localStorage.setItem('cities', JSON.stringify(state));
};

const loadCitiesFromLocalStorage = (): string[] => {
    return JSON.parse(localStorage.getItem('cities') || '[]');
};
const saveFavCityInLocalStorage = (state: string): void => {
    localStorage.setItem('favCity', state);
};

const loadFavCityLocalStorage = (): string => {
    return (localStorage.getItem('favCity') || '');
};

const initialState: WeatherState =
    {
        currentWeather: null,
        cities: loadCitiesFromLocalStorage(),
        weather: [],
        favCity: loadFavCityLocalStorage(),
        hourlyWeather: [],
        cityError: ''
    };

export const weatherSlice = createSlice({
        name: 'weather',
        initialState: initialState,
        reducers: {
            setCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
                state.currentWeather = action.payload;
            },
            addNewCity: (state, action: PayloadAction<string>) => {
                if (state.cities.map(city => city).includes(action.payload)) {
                    state.cityError = 'This city has already been added';
                } else {
                    state.cities = [...state.cities, action.payload];
                    saveCitiesInLocalStorage(state.cities);
                }

            },
            setWeather: (state, action: PayloadAction<CurrentWeather[]>) => {
                state.weather = action.payload;

            },
            setFavCity: (state, action: PayloadAction<string>) => {
                if (state.favCity === action.payload) {
                    state.favCity = '';
                } else {
                    state.favCity = action.payload;
                }

                saveFavCityInLocalStorage(state.favCity);
            },
            setHourlyWeather: (state, action: PayloadAction<HourlyWeather[]>) => {
                state.hourlyWeather = action.payload;
            },
            deleteCity: (state, action: PayloadAction<string>) => {
                const city = action.payload;
                const deleteStartIndex = state.cities.map(city => city).indexOf(city);
                state.cities.splice(deleteStartIndex, 1);
                state.cities = [...state.cities];
                saveCitiesInLocalStorage(state.cities);
            },

        }
    })
;

export const {
    setCurrentWeather,
    addNewCity,
    setWeather,
    setFavCity,
    setHourlyWeather,
    deleteCity
} = weatherSlice.actions;
export default weatherSlice.reducer;