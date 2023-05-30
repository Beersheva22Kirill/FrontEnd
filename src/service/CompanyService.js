import { count } from "../utils/number-functions.js";
import { getRandomInt } from "../utils/random.js";

const minId = 100000;
const maxId = 1000000;
//TODO by using setTimeout update the CompanyService code that
//each public method returns Promise that after some timeout moves
//in the resolved state
export default class CompanyService {
    #employees;
   
    constructor() {
        this.#employees = {};
        

    }
    addEmployee(employee) {
        const id = this.#getId();
        this.#employees[id] = {...employee, id};
        return this.#employees[id];

    }
    #getId() {
        let id;
        do {
            id = getRandomInt(minId, maxId);
        }while(this.#employees[id]);
        return id;
    }
    getStatistics(field, interval) {
        let array = Object.values(this.#employees);
        const currentYear = new Date().getFullYear();
        
        if (field == 'birthYear') {
            array = array.map(e => ({'age': currentYear - e.birthYear}));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        return new Promise(resolved => { 
            setTimeout(() => resolved(Object.entries(statisticsObj).map(e => {
                const min = e[0] * interval;
                const max = min + interval - 1;
                return {min, max, count: e[1]};
            })),3000)
        })
        
        
        
    }
    getAllEmployees() {
        return new Promise(resolved => { 
            setTimeout(() => resolved(Object.values(this.#employees)),20000)
        })
    }


}