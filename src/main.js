import CompanyService from "./service/CompanyService.js";
import ApplicationBar from "./ui_ux/ApplicationBar.js";
import DataGrid from "./ui_ux/DataGrid.js";
import EmployeeForm from "./ui_ux/EmployeeForm.js";
import { getRandomEmployee } from "./utils/random.js";
import statisticsConfig from "./config/statistic-config.json" assert{type: 'json'}
import employeesConfig from "./config/employees-config.json" assert{type: 'json'}
import { range } from "./utils/number-functions.js";
import Spinner from "./ui_ux/Spinner.js";
const N_EMPLOYEES = 100;
//employee model
//{id: number of 9 digits, name: string, birthYear: number,
// gender: female | male, salary: number, department: QA, Development, Audit, Accounting, Management}
const sections = [
    { title: "Employee operation", id: "employees-form-place" },
    { title: "Empolyees table", id: "employees-table-place" },
    { title: "Statistics", id: "statistics-place" }
];
const { minSalary, maxSalary, departments, minYear, maxYear} = employeesConfig;
const {age, salary} = statisticsConfig;
const statisticsIndex = sections.findIndex(s => s.title == "Statistics");
const emplTableIndex = sections.findIndex(s => s.title == "Empolyees table");
const emplOperationIndex = sections.findIndex(s => s.title == "Employee operation");

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

//function 
async function menuHandler(index) {
    if(index == statisticsIndex) {
        spinner.start();
        ageStatistics.clearTable();
        salaryStatistics.clearTable();     
        let ageStat = await companyService.getStatistics(age.field, age.interval);
        let salaryStat = await companyService.getStatistics(salary.field, salary.interval);
        ageStatistics.fillData(ageStat);
        salaryStatistics.fillData(salaryStat);
        spinner.stop();
    }

    if(index == emplTableIndex){
        spinner.start();
        employeeTable.clearTable();
        let allEmploees = await companyService.getAllEmployees();
        employeeTable.fillData(allEmploees);
        spinner.stop();
    }
    //TODO handling Employees table menu hitting
}
async function run() {
    while (true) {
        await employeeForm.buttonHasPressed();
        const employee = getRandomEmployee(minSalary, maxSalary, minYear, maxYear, departments);
        const employeeAdded = companyService.addEmployee(employee);
        employeeTable.insertRow(employeeAdded);
    }

}
range(0, N_EMPLOYEES).forEach(() => {
    const employeeRandom = getRandomEmployee(minSalary, maxSalary, minYear,maxYear, departments);
    companyService.addEmployee(employeeRandom);
}
 );


run();

