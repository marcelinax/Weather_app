import moment from "moment";

const getTimeForCity = (a: number): string => {
    const date = new Date(a);

    return moment(date).format("HH mm");
};

export default getTimeForCity;