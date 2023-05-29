import openMeteoConfig from './config/service-config.json' assert {type: 'json'};
import OpenMeteoService from './service/OpenMeteoService.js';
import DataGrid from './ui_ux/DataGrid.js';
import MeteoForm from './ui_ux/MeteoForm.js';
import {getEndDateStr} from './utils/date-functions.js';

//constants definitions

const columns = [{field:'date',headerName:'Date'},
{field:'time',headerName:'Time'},
{field:'temperature',headerName:'Temp'},
{field:'apparentTemperature',headerName:'Fealt Temp'}]

//functions

export function setFromFormData(object){
    const fromFormData = object
    const latlong = openMeteoConfig.cities[fromFormData.city];
    const {lat,long} = latlong;
    const{beginDate, days, hourFrom, hourTo} = fromFormData;

    const openMeteoService = new OpenMeteoService(openMeteoConfig.baseUrl);
    const table = new DataGrid("table-place", columns);

    openMeteoService.getTemperatures(lat, long, beginDate,getEndDateStr(beginDate,+days),hourFrom,hourTo)
    .then(data => table.fillData(data));
}


//objects
const meteoForm = new MeteoForm("form-place",Object.keys(openMeteoConfig.cities),openMeteoConfig.maxDays);