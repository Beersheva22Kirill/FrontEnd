import { setFromFormData } from "../main.js";
import { getEndDateStr, getISODateStr, getDaysBetweenDate} from "../utils/date-functions.js";
import { range } from "../utils/number-functions.js";


//constants

const CITY_ID = 'city-id';
const DATE_ID = 'date-id';
const DAYS_ID = 'days-id';
const HOUR_FROM_ID = 'hour-from-id';
const HOUR_TO_ID = 'hour-to-id';
const FORM_ID = 'form-id';
const TITLE_SERVICE = 'title-service';

export default class MeteoForm {
    #titleElement;
    #formElement;
    #cityElement;
    #dateElement;
    #daysElement;
    #hourFromElement;
    #hourToElement;
    #formData;
    #maxDays;
    #cities;
    #parentID;

    constructor(parentId, cities, maxDays){
        this.#parentID = parentId;
        this.#maxDays = maxDays;
        this.#cities = cities;
        this.#formData = {};
        this.#buildForm();
        this.#setElements();
        this.#setHandlers();
        this.#setSelectOptions();
    }

    #cityHandler() {
        this.#formData.city = this.#cityElement.value;
    }

    #daysHandler() {
        const days = this.#daysElement.value;
        this.#formData.days = days;
        const min_date = getISODateStr(new Date())
        this.#dateElement.max = getEndDateStr(min_date, this.#maxDays - days);      
    }

    #dateHandler() {
        const date = new Date(this.#dateElement.value);
        const beginDate = new Date();
        this.#formData.beginDate = getISODateStr(date);
        const newMaxDays = getDaysBetweenDate(date,beginDate);
        if(this.#daysElement.value > this.#maxDays - newMaxDays){
            setOptionItems(this.#daysElement, range(1,this.#maxDays - newMaxDays),'forecast days');
        }
        
    }

    #hourFromHandler() {
        const hourFrom = this.#hourFromElement.value;
        this.#formData.hourFrom = hourFrom;
        setOptionItems(this.#hourToElement, range(+hourFrom + 1,24), 'Hour to');
        
    }

    #hourToHandler() {
        const hourTo= this.#hourToElement.value;
        this.#formData.hourTo = hourTo;
        if(+this.#hourToElement.value < +this.#hourFromElement.value){
            setOptionItems(this.#hourFromElement, range(0,+hourTo), 'Hour from');
        }   
    }


    #setHandlers(){
        this.#cityElement.onchange = this.#cityHandler.bind(this);
        this.#daysElement.onchange = this.#daysHandler.bind(this);
        this.#dateElement.onchange = this.#dateHandler.bind(this);
        this.#hourFromElement.onchange = this.#hourFromHandler.bind(this);
        this.#hourToElement.onchange = this.#hourToHandler.bind(this);
        
        this.#formElement.onsubmit = (event) => {
            event.preventDefault();
            setFromFormData(this.#formData); 
            this.#setSelectOptions() 
            this.#titleElement.innerHTML = `Meteo forcast "${this.#formData.city}"`

        }

    } 

    #setElements(){
        this.#titleElement = document.getElementById(`${TITLE_SERVICE}`)
        this.#formElement = document.getElementById(`${this.#parentID}-${FORM_ID}`);
        this.#cityElement = document.getElementById(`${this.#parentID}-${CITY_ID}`);
        this.#dateElement = document.getElementById(`${this.#parentID}-${DATE_ID}`);
        this.#daysElement = document.getElementById(`${this.#parentID}-${DAYS_ID}`);
        this.#hourFromElement = document.getElementById(`${this.#parentID}-${HOUR_FROM_ID}`);
        this.#hourToElement = document.getElementById(`${this.#parentID}-${HOUR_TO_ID}`);
    }

    #setSelectOptions(){
        const min_date = getISODateStr(new Date())
        this.#dateElement.min = min_date;
        this.#dateElement.max = getEndDateStr(min_date, this.#maxDays);
        setOptionItems(this.#cityElement,this.#cities,'select city');
        setOptionItems(this.#daysElement, range(1,this.#maxDays + 1),'forecast days');
        setOptionItems(this.#hourFromElement, range(0,24),'Hour from');
        setOptionItems(this.#hourToElement, range(0,24),'Hour to');
    }

    #buildForm(){
        const parentElement = document.getElementById(this.#parentID);
        parentElement.innerHTML = 
        `<form id = "${this.#parentID}-${FORM_ID}" class = "form-controller">
            <div class = "row-input">
                <select id = "${this.#parentID}-${CITY_ID}" class = "select-control" required></select>
                <select id = "${this.#parentID}-${DAYS_ID}" class = "select-control" required></select>
            </div>
            <div class = "row-input">
                <select id = "${this.#parentID}-${HOUR_FROM_ID}" class = "select-control" required></select>
                <select id = "${this.#parentID}-${HOUR_TO_ID}" class = "select-control" required></select>
            </div>
            <div class = "date-group-control">
                <label>Select date from</label>
                <input type = "date" id = "${this.#parentID}-${DATE_ID}" class = "date-input" required>
            </div>
            <div class = "button-group">
                <button type = "submit">Submit</button>
            </div>
        </form>`
    }

}

function setOptionItems(element, options, placeHolder){
    element.innerHTML = `<option value hidden selected>--${placeHolder}--</option>`;
    element.innerHTML += options.map(option => `<option value = "${option}">${option}</option>`).join(''); 
}

