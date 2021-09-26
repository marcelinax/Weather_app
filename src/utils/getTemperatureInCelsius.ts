const getTemperatureInCelsius = (temp: number): number => {
    return Math.floor(temp - 273.15);
};

export default getTemperatureInCelsius;