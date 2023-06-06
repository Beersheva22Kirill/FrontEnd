
export default class Poller {
    #time;
    #data;
    #newData;
    #callBackFn;
    #funcUpdate;

    constructor (time,callbackFn,funcUpdate){
        this.#time = time;
        this.#funcUpdate = funcUpdate;
        this.#callBackFn = callbackFn;
        this.#setStartData();
    }

    start(){
        setInterval(async() => {
            this.#newData = await this.#funcUpdate();
            if(JSON.stringify(this.#data) != JSON.stringify(this.#newData)){
                this.#data = this.#newData
                this.#callBackFn(this.#data);
            }
        },this.#time)
    }

    async #setStartData(){
        this.#data = await await this.#funcUpdate();
        
    }

}


