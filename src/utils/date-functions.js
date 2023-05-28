

export function  getISODateStr(date){
    return date.toISOString().substring(0,10);
}

export function getEndDateStr(beginDate, days){
    const dateb = new Date(beginDate);
    const endDate = new Date(dateb.setDate(dateb.getDate() + days))
    return getISODateStr(endDate);
}

export function getDaysBetweenDate(date_1, date_2){
    const day = 1000 * 60 * 60 * 24;
    const diff = date_1.getTime() - date_2.getTime();
    return Math.round(diff/day)
}