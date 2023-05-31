import CompanyService from "./service/CompanyService.js";
import ApplicationBar from "./ui_ux/ApplicationBar.js";
import DataGrid from "./ui_ux/DataGrid.js";
import EmployeeForm from "./ui_ux/EmployeeForm.js";
import { getRandomEmployee } from "./utils/random.js";
import statisticsConfig from "./config/statistic-config.json" assert{type: 'json'}
import employeesConfig from "./config/employees-config.json" assert{type: 'json'}
import Spinner from "./ui_ux/Spinner.js";

const N_EMPLOYEES = 2;
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
const companyService = new CompanyService();
const employeeForm = new EmployeeForm("employees-form-place");
const employeeTable = new DataGrid("employees-table-place", employeeColumns);
const ageStatistics = new DataGrid("age-statistics-place", statisticsColumns );
const salaryStatistics = new DataGrid("salary-statistics-place", statisticsColumns );
const spinner = new Spinner("spinner-id");

employeeForm.addHandler(async (data) => {
    const employee = getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments);
    await action(companyService.addEmployee.bind(companyService, employee));
});



//function 
async function menuHandler(index) {

    switch (index) {
        case statisticsButtonIndex: {
            const ageStat = await action(companyService.getStatistics.bind(companyService,age.field, age.interval)); //companyService.getStatistics(age.field, age.interval);
            ageStatistics.fillData(ageStat);
            const salaryStatData = await action(companyService.getStatistics.bind(companyService,salary.field, salary.interval)) //companyService.getStatistics(salary.field, salary.interval);
            salaryStatistics.fillData(salaryStatData);
            break;
        }              
        case emplTableButtonIndex:{
            const allEmploees = await action(companyService.getAllEmployees.bind(companyService));
            employeeTable.fillData(allEmploees);
            break;
        } 
        case emplOperationButtonIndex: {
            // const employee = getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments);
            // await action (companyService.addEmployee.bind(companyService,employee)); 
            break;
        }
   
    }
    //TODO handling Employees table menu hitting
}
async function action(serviceFn){
    spinner.start();
    const res = await serviceFn();
    spinner.stop();
    return res;
}

// to set start count of employees for application 
    for (let index = 0; index < N_EMPLOYEES; index++) {
        const employeeRandom = getRandomEmployee(minSalary, maxSalary, minYear,maxYear, departments);
        await action(companyService.addEmployee.bind(companyService,employeeRandom));
    }

    

