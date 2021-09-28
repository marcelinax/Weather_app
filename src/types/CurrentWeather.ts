export default interface CurrentWeather {
    coord: {
        lon: string,
        lat: string
    };
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[];
    base: string;
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    };
    clouds: {
        all: number
    };
    dt: number;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}