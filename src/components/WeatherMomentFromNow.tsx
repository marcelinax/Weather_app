import React, {useState} from 'react';
import ReactInterval from 'react-interval';
import getTimeForCity from "../utils/getTimeForCity";

interface Props {
    date: number;
    timezone: number;
}

const WeatherMomentFromNow: React.FC<Props> = ({date, timezone}) => {

    const [parsedDate, setParsedDate] = useState<string>('');


    return (
        <>
            <ReactInterval timeout={1000} enabled={true}
                           callback={() => setParsedDate(getTimeForCity(date, timezone))}/>
            {parsedDate}</>
    );
};

export default WeatherMomentFromNow;