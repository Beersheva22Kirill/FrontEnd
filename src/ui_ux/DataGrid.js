export default class DataGrid {
    #buttonsDelElement;
    #buttonsUpdElement;
    #tBodyElement
    #parentId;
    #callbackFnDel;
    #callbackFnUpd;
    #keys

    constructor(parentId, columns, callbackFnDel = undefined, callbackFnUpd = undefined) {
        //columns - array of objects {field: <name of key>,
        // headerName: <column name>}
        this.#callbackFnDel = callbackFnDel;
        this.#callbackFnUpd = callbackFnUpd;
        this.#parentId = parentId;
        //this.#buttonsDelElement = [];
        this.#keys = columns.map(c => c.field);
        this.#buildTableHeader(parentId, columns.map(c => c.headerName))
    }

    fillData(rowsData) {
        this.#tBodyElement.innerHTML = rowsData.map((rd,index) => this.#getRow(rd,index)).join('');
        this.#SetButtons();
    }

    #getRow(obj,index) {
        const insertStr = 
        `<tr id = "${this.#parentId}-tr-${index}">
            ${this.#keys.map((key) => `<td>${obj[key]}</td>` ).join('')}
            <td id = "${this.#parentId}-button-td" hidden><button id = "${this.#parentId}-bt-del-${index}" >Del</button>
            <button id = "${this.#parentId}-bt-upd-${index}" >Upd</button></td>
        </tr>`;
        return insertStr
        
    }

    insertRow(obj) {
        this.#tBodyElement.innerHTML += this.#getRow(obj)
    }

    #SetButtons(){
        this.#buttonsDelElement = [];
        this.#buttonsUpdElement = [];
        const tableBody =  Array.from(this.#tBodyElement.children);
        tableBody.forEach((__,index) => {
            this.#buttonsDelElement.push((document.getElementById(`${this.#parentId}-bt-del-${index}`)))
            this.#buttonsUpdElement.push((document.getElementById(`${this.#parentId}-bt-upd-${index}`)))
        })
        
        this.#buttonsDelElement.forEach((button, index) => button.addEventListener('click',
                this.#delHandler.bind(this, index)));
        this.#buttonsUpdElement.forEach((button,index) => button.addEventListener('click',
        this.#updHandler.bind(this, index)));
    }

    openButton(){
        this.#buttonsDelElement.forEach(button => button.parentNode.hidden = false);
    }

    async #delHandler(index){
        const delRow = document.getElementById(`${this.#parentId}-tr-${index}`)
        const child = delRow.children;
        const id = Array.from(child)[0].innerText;
        const parent = delRow.parentNode;

        parent.removeChild(delRow);  
        await this.#callbackFnDel(id);      
    }

    async #updHandler(index){
        const updRow = document.getElementById(`${this.#parentId}-tr-${index}`)
        const child = updRow.children;
        const id = Array.from(child)[0].innerText;
        
        await this.#callbackFnUpd(id);
    }

    #buildTableHeader(parentId, columnNames) {
        const tableSectionElement = document.getElementById(parentId);
        tableSectionElement.innerHTML =
            `<table>
            <thead>
               <tr>
                   ${columnNames.map(headerName => `<th>${headerName}</th>`).join('')}
               </tr>
            </thead>
            <tbody id="${parentId}-table" >
            </tbody>
          </table>`
        this.#tBodyElement = document.getElementById(parentId + "-table")

    }

}