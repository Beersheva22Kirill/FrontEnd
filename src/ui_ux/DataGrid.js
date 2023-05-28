
export default class DataGrid {
    #tBodyElement;
    #keys;
    constructor(parentId, columns) {
        //columns - array of objects {field: <name of key>, headerName: <column name>}
        this.#keys = columns.map(el => el.field);
        
        this.#buildTable(parentId, columns.map(el => el.headerName))
    }

    fillData(rowData){
       // this.#tBodyElement.innerHTML = rowData.map(element => `<tr>${this.#keys.map((el) => `<td>${element[el]}</td>`).join('')}</tr>`).join('');
        this.#tBodyElement.innerHTML = rowData.map(rd => this.#getRow(rd)).join(''); //yuri solution

    }

    #getRow(obj){
        return `<tr>${this.#keys.map(key => `<td>${obj[key]}</td>`).join('')}</tr>`
    }

    #buildTable(parentId,columnNames){
        const tableSectionElement = document.getElementById(parentId);
        tableSectionElement.innerHTML = 
        `<table>
            <thead>
                <tr>
                    ${columnNames.map(headerName => `<th>${headerName}</th>`).join('')}
                </tr>
            </thead>
            <tbody id = "${parentId}-table">
            </tbody>
        </table>`
        this.#tBodyElement = document.getElementById(parentId + "-table");
    }

}