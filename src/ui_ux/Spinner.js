export default class Spinner {

    #innerElement;
    //TODO
    constructor (parentID){
        this.#innerElement = document.getElementById(parentID);
    }

    start(){
        this.#innerElement.hidden = false;
        this.#innerElement.innerHTML = `<div class = "spinner"></div>`;
        
        
    }

    stop(){
        this.#innerElement.hidden = true;
        this.#innerElement.innerHTML = ``
    }
}