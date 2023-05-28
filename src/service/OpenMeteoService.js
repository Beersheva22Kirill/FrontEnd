export default class OpenMeteoService {
    #baseUrl;

    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    async getTemperatures(lat,long,beginDate, endDate, hourFrom, hourTo){

        const url = this.#getUrl(lat,long,beginDate,endDate);
        const response = await fetch(url);
        const data = await response.json();
        const dates = getDataForHourse(data.hourly.time,hourFrom,hourTo);
        const temperatures = getDataForHourse(data.hourly.time,hourFrom,hourTo);
        const apparentTemperatures = getDataForHourse(data.hourly.apparent_temperature,hourFrom,hourTo);

    return dates.map((d,index) => {
        const tokens = d.split("T");
        const date = tokens[0];
        const time = tokens[1];
        return {date,time,temperature : temperatures[index],apparentTemperature : apparentTemperatures[index] }
    });
    }

    #getUrl(lat,long,beginDate,endDate){
        return `${this.#baseUrl}latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&start_date=${beginDate}&end_date=${endDate}`
    }

}

function getDataForHourse(array,hourFrom,hourTo){
    return array.filter((__,index) => {
        const rem = index % 24;
        return rem >= hourFrom && rem <= hourTo
    })
}