import { count } from "../utils/number-functions.js";
import { getRandomInt } from "../utils/random.js";
import Poller from "./PollerJson.js";

const minId = 100000;
const maxId = 1000000;
const TIME_UPDATE = 500;
//TODO by using setTimeout update the CompanyService code that
//each public method returns Promise that after some timeout moves
//in the resolved state
export default class CompanyServiceRest {

    #URL;
    #poller;
    #funcForPoller;
   
    constructor(URL,funcForPoller) {
        this.#funcForPoller = funcForPoller;
        this.#URL = URL;  
        this.#poller = new Poller(TIME_UPDATE,this.#funcForPoller,this.getAllEmployees.bind(this));
        this.#poller.start();
    }

    addEmployee(employee) {

        return new Promise(async resolved => { 
            return resolved(fetch(this.#URL,{
                method: 'POST',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(employee)
            }).then(response => response.json())) 
        })
    }
  
    async getStatistics(field, interval, emploees) {
        emploees = !emploees ? await fetch(this.#URL).then(response => response.json()) : emploees;
       
        const currentYear = new Date().getFullYear();
        
        if (field == 'birthYear') {
            emploees = emploees.map(e => ({'age': currentYear - e.birthYear}));
            field = 'age';
        }
        const statisticsObj = count(emploees, field, interval);
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

        return new Promise(resolved => { 
            const URL = `${this.#URL}/${id}`;
           return resolved(fetch(URL,{
                method: 'DELETE',
                headers: {"Content-Type":"application/json"},    
            }))
        })
        
        
    }

    

   


}