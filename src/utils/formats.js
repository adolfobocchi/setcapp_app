import moment from "moment";

export const dataTimeFormatada = (data) => {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
}

export const whatsAppFormat = (str) => {
    if (typeof str === 'string')
        return str.split(' ').join('').split('(').join('').split(')').join('').split('-').join('')
    else
        return null

}