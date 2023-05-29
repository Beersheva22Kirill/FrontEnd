import openMeteoConfig from './config/service-config.json' assert {type: 'json'};
import OpenMeteoService from './service/OpenMeteoService.js';
import DataGrid from './ui_ux/DataGrid.js';
import MeteoForm from './ui_ux/MeteoForm_promise.js';
import {getEndDateStr} from './utils/date-functions.js'
//constants definition
const columns = [
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'temperature', headerName: 'Temperature' },
    { field: 'apparentTemperature', headerName: 'Fealt Temp' }
]
//functions
async function run(){
    while(true){
        const fromFormData = await form.getDateFromForm();
        const { lat, long } = openMeteoConfig.cities[fromFormData.city];
        const { beginDate, days, hourFrom, hourTo } = fromFormData;
        const temperatures = await openMeteoService.getTemperatures(lat, long, beginDate, getEndDateStr(beginDate, days),
        hourFrom, hourTo);
        table.fillData(temperatures);
    }
}

//objects
const form = new MeteoForm("form-place",Object.keys(openMeteoConfig.cities), openMeteoConfig.maxDays);

const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
const table = new DataGrid("table-place", columns)

    
run();