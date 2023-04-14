import moment from "moment";

export const dataTimeFormatada = (data) => {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
}