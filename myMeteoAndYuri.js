
    //Parametrs: lat - latitude, long - longitude, 
    //           dateBegin - ISO format begin date, 
    //           countDays = count of days from begin date
    //           hourFrom = from hours of day
    //           hourFrom = to hours of day
 
    
    //return: array of objects {date: <string containing date YYYY-mm-DD with no time>,
    //                          time: <number of hour from the given range>,
    //                          temperature: <number>, 
    //                          apperantTemperature: <number>}


async function getTemperatures(lat, long, dateBegin, countDays, hourFrom, hourTo){

let beginDate = new Date(dateBegin)    
const endDate = new Date(beginDate.setDate(beginDate.getDate() + countDays));

const response = await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&start_date=${dateBegin}&end_date=${endDate.toISOString().substring(0,10)}`); 

let responseJSON = await response.json();
let res = [];
let day = 0;

for (let index = 0; index < countDays; index++) {
    for (let indexElement = hourFrom; indexElement <= hourTo; indexElement++) {
        res.push(getObject(responseJSON, indexElement, day));
    }
    day += 24;      
}
   return res
}


function getObject(responseJSON, indexElement, day) {
    return {
        date: responseJSON.hourly.time[indexElement + day].slice(0, 10),
        time: responseJSON.hourly.time[indexElement + day].slice(11, 16),
        temperature: responseJSON.hourly.temperature_2m[indexElement + day],
        apperantTemperature: responseJSON.hourly.apparent_temperature[indexElement + day]
    };
}

async function getTemperaturesYuri(lat, long, dateBegin, countDays, hourFrom, hourTo){
    const endDate = getEndDate(dateBegin,countDays);
    const url = getUrl(lat,long,dateBegin,endDate);
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

    function getEndDate(beginDate, countDays){
        const dateBegin = new Date(beginDate);
        let endDate = new Date(dateBegin.setDate(dateBegin.getDate() + countDays));
        return endDate.toISOString().substring(0,10);    
    }

    function getUrl(lat, long, dateBegin,endDate){
        return `https://api.open-meteo.com/v1/gfs?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&start_date=${dateBegin}&end_date=${endDate}`
    }

    function getDataForHourse(array,hourFrom,hourTo){
        return array.filter((__,index) => {
            const rem = index % 24;
            return rem >= hourFrom && rem <= hourTo
        })
    }

getTemperatures(31.25,34.79,'2023-05-23',2,12,14).then(res => console.log(res)).then(() => console.log("=============End my function==========="));

getTemperaturesYuri(31.25,34.79,'2023-05-23',2,12,14).then(res => console.log(res));  
