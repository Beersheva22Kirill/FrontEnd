import { count } from "../utils/number-functions.js";
import { getRandomInt } from "../utils/random.js";

const minId = 100000;
const maxId = 1000000;
//TODO by using setTimeout update the CompanyService code that
//each public method returns Promise that after some timeout moves
//in the resolved state
export default class CompanyServiceRest {
    #employees;
    #URL;
   
    constructor(URL) {
        this.#URL = URL;
        this.#employees = {};
        

    }
    addEmployee(employee) {

        return new Promise(resolved => { 
            fetch(this.#URL,{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(employee)
            }).then(response => response.json())  
        })
        
        

    }
  
    async getStatistics(field, interval) {
        let array = await fetch(this.#URL).then(response => response.json());
        const currentYear = new Date().getFullYear();
        
        if (field == 'birthYear') {
            array = array.map(e => ({'age': currentYear - e.birthYear}));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        return new Promise(resolved => { 
            return resolved(Object.entries(statisticsObj).map(e => {
                const min = e[0] * interval;
                const max = min + interval - 1;
                return {min, max, count: e[1]};
            }))
        })
         
    }
    getAllEmployees () {
        return new Promise(async resolved => { 
            const allEmployees = await fetch(this.#URL).then(response => response.json());
            return resolved(allEmployees)
        })
    }

    getEmployeeByID(id){
        return new Promise(async resolved => {
            const url_id = this.#URL + id;
            return resolved(await fetch(url_id).then(response => response.json()))
        })
    }

    updateEmployee(employee,id){
        return new Promise(resolved => { 
                const URL = `${this.#URL}/${id}`;
                return resolved(fetch(URL,{
                    method: 'PUT',
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(employee)
                }))
            })
    }

    deleteByID(id){
        const delEmpl = this.#employees[id];

        return new Promise(resolved => { 
            const URL = `${this.#URL}/${id}`;
           return resolved(fetch(URL,{
                method: 'DELETE',
                headers: {"Content-Type":"application/json"},
                
            }))
        })
        
        
    }


}