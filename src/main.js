import CompanyService from "./service/CompanyService.js";
import CompanyServiceRest from "./service/CompanyServiceRest.js";
import ApplicationBar from "./ui_ux/ApplicationBar.js";
import DataGrid from "./ui_ux/DataGrid.js";
import EmployeeForm from "./ui_ux/employeeForm.js";
import { getRandomEmployee } from "./utils/random.js";
import statisticsConfig from "./config/statistic-config.json" assert{type: 'json'}
import employeesConfig from "./config/employees-config.json" assert{type: 'json'}
import Spinner from "./ui_ux/Spinner.js";
import { range } from "./utils/number-functions.js";

const N_EMPLOYEES = 10;
//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}

const sections = [
    { title: "Employees operations", id: "employees-form-place" },
    { title: "Empolyees table", id: "employees-table-place" },
    { title: "Statistics", id: "statistics-place" }
];

const { minSalary, maxSalary, departments, minYear, maxYear} = employeesConfig;
const {age, salary} = statisticsConfig;

const statisticsButtonIndex = sections.findIndex(s => s.title == "Statistics");
const emplTableButtonIndex = sections.findIndex(s => s.title == "Empolyees table");
const emplOperationButtonIndex = sections.findIndex(s => s.title == "Employees operations");

const employeeColumns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name'},
    {field: 'birthYear', headerName: 'Birth Year'},
    {field: 'gender', headerName: 'Gender'},
    {field: 'salary', headerName: 'Salary (ILS)'},
    {field: 'department', headerName: 'Department'}
    

];
const statisticsColumns = [
    {field: 'min', headerName: "Min value"},
    {field: 'max', headerName: "Max value"},
    {field: 'count', headerName: "Count"}
]

const menu = new ApplicationBar("menu-place", sections, menuHandler );
//const companyService = new CompanyService();
const companyService = new CompanyServiceRest('http://localhost:3500/employees/',callbackPoller);
const employeeForm = new EmployeeForm("employees-form-place",employeesConfig);
const employeeTable = new DataGrid("employees-table-place", employeeColumns, delHandler,updHandler);
const ageStatistics = new DataGrid("age-statistics-place", statisticsColumns );
const salaryStatistics = new DataGrid("salary-statistics-place", statisticsColumns );
const spinner = new Spinner("spinner-id");

employeeForm.addHandler(async (employee) => {
    await action(companyService.addEmployee.bind(companyService, employee));
});

//function 

//to set start count of employees for application 
async function createRandomEmplyees(){
    const promises = range(0,N_EMPLOYEES).map(()=>
    companyService.addEmployee(getRandomEmployee(minSalary, maxSalary, minYear,
        maxYear, departments)));
        spinner.stop();
       return Promise.all(promises);
}



async function delHandler(id){
        await action(companyService.deleteByID.bind(companyService, id));
}

async function updHandler(id){
    const updateForm = new EmployeeForm("employees-table-place-update-form",employeesConfig);
    const empl = await action(companyService.getEmployeeByID.bind(companyService,id));
    updateForm.setModalWindow('modalBackground',empl);

    updateForm.updateHendler(async (employeeUpd) => {
        await action(companyService.updateEmployee.bind(companyService, employeeUpd, id));
        await buildEmployeesTable();
    })
}

async function callbackPoller(emploees){
    switch(menu.getActiveindex()){
        case statisticsButtonIndex: {
            await buildStatistics(emploees);
            break;
        }
        case emplTableButtonIndex:{
            await buildEmployeesTable(emploees);
            break;
        }
    }
}

async function menuHandler(index) {
    switch (index) {
        case statisticsButtonIndex: {
            await buildStatistics();
            break;
        }              
        case emplTableButtonIndex:{
            await buildEmployeesTable();
            break;
        }    
    }
}

async function buildEmployeesTable(emploees) {
    emploees = !emploees ? await action(companyService.getAllEmployees.bind(companyService)) : emploees
    employeeTable.fillData(emploees);
    employeeTable.openButton();
}

async function buildStatistics(emploees) {
    const ageStat = await action(companyService.getStatistics.bind(companyService, age.field, age.interval,emploees)); 
    ageStatistics.fillData(ageStat);
    const salaryStatData = await action(companyService.getStatistics.bind(companyService, salary.field, salary.interval,emploees));
    salaryStatistics.fillData(salaryStatData);
}

async function action(serviceFn){
    spinner.start();

    try {
        const res = await serviceFn();
        return res;
    } catch (error) {
        allert(error)
    } finally{
        spinner.stop();
    }
    
}

//action(createRandomEmplyees.bind(this));

    

    

