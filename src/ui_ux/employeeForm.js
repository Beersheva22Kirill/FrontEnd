const NAME_ID = 'name-id';
const YEAR_ID = 'year-id';
const SEX_ID = 'sex-id';
const DEPARTMENT_ID = 'days-id';
const SALARY_ID = 'salary-id';
const FORM_ID = 'form-id';
const MALE = 'male';
const FEMALE = 'female'

export default class EmployeeForm {

    #depSelectElement;
    #parentElement;
    #formElement;
    #dataObject;
    #modalWindow;
    #parentID;

    constructor(parentId,config){
        
        this.#dataObject = {};
        this.#parentID = parentId;
        this.#parentElement = document.getElementById(parentId);
        this.#buildForm(config);
        this.#setElements();
        setOptionItems(this.#depSelectElement,config.departments,'Select department')  
    }

    addHandler(submitFn){
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            this.#dataFromForm();
            await submitFn(this.#dataObject); 
            this.#formElement.reset();                   
        }
        
    }

    setModalWindow(parent_id,object){
        this.#modalWindow = document.getElementById(parent_id);
        this.#modalWindow.hidden = false;
        const closeButton = document.getElementById(`${this.#parentID}-close-button`);
        closeButton.hidden = false;
        document.getElementById(`${this.#parentID}-${NAME_ID}`).value = object.name;
        document.getElementById(`${this.#parentID}-${YEAR_ID}`).value = object.birthYear;
        document.getElementById(`${this.#parentID}-${YEAR_ID}`).readOnly = true;
        if(object.gender == MALE){
            document.getElementById(`${this.#parentID}-${SEX_ID}-male`).checked = true;
        } else {
            document.getElementById(`${this.#parentID}-${SEX_ID}-female`).checked = true;
        }
        document.getElementById(`${this.#parentID}-${SALARY_ID}`).value = object.salary;
        document.getElementById(`${this.#parentID}-${DEPARTMENT_ID}`).value = object.department;
        
        closeButton.addEventListener('click',() => {
            this.#modalWindow.hidden = true;
        })
        
    }

    updateHendler(updateFn){
        this.#formElement.onsubmit = async (event) => {
            event.preventDefault();
            this.#dataFromForm();
            await updateFn(this.#dataObject); 
            this.#modalWindow.hidden = true;                
        }
    }

    #dataFromForm() {
        const formData = new FormData(this.#formElement);
        this.#dataObject.name = formData.get('nameEmpl');
        this.#dataObject.birthYear = formData.get('year');
        this.#dataObject.gender = formData.get('gender');
        this.#dataObject.department = formData.get('department');
        this.#dataObject.salary = formData.get('salary');
    }

    #setElements(){
        this.#formElement = document.getElementById(`${this.#parentID}-${FORM_ID}`)
        this.#depSelectElement = document.getElementById(`${this.#parentID}-${DEPARTMENT_ID}`);
    }

    #buildForm(config){
        const parentElement = document.getElementById(this.#parentID);
        this.#parentElement.innerHTML = 
        `<form id = "${this.#parentID}-${FORM_ID}" class = "form-controller">
            <div class = "input-block">
                <div>
                    <input name = "nameEmpl" id = "${this.#parentID}-${NAME_ID}" class = "input-element" required></select>
                    <label for="${this.#parentID}-${NAME_ID}">Name</label>
                </div>
                <div>
                    <input type = "number" min = "${config.minYear}" max = "${config.maxYear}" name = "year" id = "${this.#parentID}-${YEAR_ID}" class = "input-element" required></select>
                    <label for="${this.#parentID}-${YEAR_ID}">Birth year</label>
                </div>
                <div class = "radio-group">
                    <input type = "radio" id = "${this.#parentID}-${SEX_ID}-male" name = "gender" value = "${MALE}" required></select>
                    <label for="${this.#parentID}-${SEX_ID}-male">Male</label>
                    <input type = "radio" id = "${this.#parentID}-${SEX_ID}-female" name = "gender" value = "${FEMALE}" required></select>
                    <label for="${this.#parentID}-${SEX_ID}-female">Female</label>
                </div>
                <div>
                    <select name = "department" id = "${this.#parentID}-${DEPARTMENT_ID}" class = "input-element" required></select>
                    <label for="${this.#parentID}-${DEPARTMENT_ID}">Department</label>
                </div>
                <div>
                    <input type = "number" name = "salary" min = "${(config.minSalary *1000)}" max = "${(config.maxSalary * 1000)}" id = "${this.#parentID}-${SALARY_ID}" class = "input-element" required></select>
                    <label for="${this.#parentID}-${SALARY_ID}">Salary</label>
                </div>
            </div>
            <div class = "button-group">
                <button type = "submit" class = "submit-button" >Submit</button>
                
            </div>
            <div>
                <button id = "${this.#parentID}-close-button" class = "close-button" hidden>Close</button>
            </div>
            
        </form>`
    }

}

function setOptionItems(element, options, placeHolder){
    element.innerHTML = `<option value hidden selected>--${placeHolder}--</option>`;
    element.innerHTML += options.map(option => `<option value = "${option}">${option}</option>`).join(''); 
}