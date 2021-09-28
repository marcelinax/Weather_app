import React from 'react';
import {BackgroundColor} from "../enums/BackgroundColor";

interface Props {
    main: string;
    temp: number;
}

const WeatherBackground: React.FC<Props> = ({main, temp}) => {

    const getColor = (): string => {
        let color = '';
        Object.keys(BackgroundColor).map((key, index) => {
            if (main.toLowerCase().includes(key)) color = Object.values(BackgroundColor)[index];
        });
        return color;
    };

    const getOpacity = (): number => {
        let opacity = 0;
        if (temp < -20) opacity = 0.3;
        else if (temp < -15) opacity = 0.4;
        else if (temp < -10) opacity = 0.5;
        else if (temp < 0) opacity = 0.6;
        else if (temp < 10) opacity = 0.7;
        else if (temp < 15) opacity = 0.8;
        else if (temp < 25) opacity = 0.9;
        else opacity = 1;
        return opacity;
    };


    return (
        <div className={'weather-background'}>
            <div className={'weather-background-img'} style={{backgroundColor: getColor(), opacity: getOpacity()}}/>
        </div>
    );
};

export default WeatherBackground;