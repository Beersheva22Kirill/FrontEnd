
function getBoard(rows, columns){
    
    let res = '';
    for (let index = 0; index < rows; index++) {
        res =  res + `<div class = "row">${getRow(columns,index)}</div>`    
    }
    res = `<div class = 'contaner_board'>${res}</div>`;

    return res;

}

function getRow(columns,indexRow) {
    let line = "";
        for (let index = 0; index < columns; index++) {
            line += getBlocks(indexRow,index);        
        }   
    return line;
}

function getBlocks(indexRow,indexBlock){
        let res = '';
        let cellBlack = `<div class = 'black cell'></div>`
        let cellWhite = `<div class = 'white cell'></div>`
        res = indexRow % 2 == 0 ? indexBlock % 2 == 0 ? cellBlack : cellWhite : indexBlock % 2 == 0 ? cellWhite : cellBlack;
    return res;
}

bodyId.innerHTML = getBoard(8,8);

