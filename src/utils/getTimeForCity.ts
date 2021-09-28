import moment from "moment";

const getTimeForCity = (dt: number, timezone: number): string => {
    const date = new Date(+dt * 1000 + timezone * 1000);
    if (moment(date).isDST()) {
        return moment(new Date(+dt * 1000 + timezone * 1000 - 3600 * 1000 - 3600 * 1000)).format("h a");
    } else {
        return moment(date).format("h a");
    }

};

export default getTimeForCity;