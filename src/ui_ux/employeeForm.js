const NAME_ID = 'name-id';
const YEAR_ID = 'year-id';
const DAYS_ID = 'days-id';
const HOUR_FROM_ID = 'hour-from-id';
const HOUR_TO_ID = 'hour-to-id';
const FORM_ID = 'form-id';

export default class EmployeeForm {

    #buttonElement;
    #parentElement;
    #parentID;

    constructor(parentId){
        this.#parentID = parentId;
        this.#parentElement = document.getElementById(parentId);
        this.#fillSection();
        this.#buttonElement = document.getElementById('button-id');
    }

    #fillSection(){
        this.#parentElement.innerHTML = `<button id = "button-id">Add random employee data</button>`
    }

    addHandler(submitFn){
        this.#buttonElement.onclick = submitFn;
    }

    #buildForm(){
        const parentElement = document.getElementById(this.#parentID);
        this.#parentElement.innerHTML = 
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