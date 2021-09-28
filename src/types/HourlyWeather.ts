export default interface HourlyWeather {
    dt: string;
    main: {
        temp: number;
    };
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[];
    clouds: {
        all: number;
    };
    dt_txt: string;
}